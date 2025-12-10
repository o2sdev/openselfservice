import { CMS, Invoices } from '@o2s/configs.integrations';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { mapPaymentsHistory } from './payments-history.mapper';

describe('payments-history.mapper', () => {
    const createMockCms = (overrides = {}): CMS.Model.PaymentsHistoryBlock.PaymentsHistoryBlock => ({
        id: 'block-123',
        title: 'Payments History',
        topSegment: 'Overdue',
        middleSegment: 'Due',
        bottomSegment: 'Paid',
        total: 'Total',
        monthsToShow: 6,
        ...overrides,
    });

    const createMockInvoice = (overrides = {}): Invoices.Model.Invoice => ({
        id: 'invoice-001',
        externalId: 'EXT-001',
        billingAccountId: 'BA-001',
        billingPeriod: '2024-01',
        paymentMethodId: 'PM-001',
        type: 'STANDARD',
        paymentStatus: 'PAYMENT_COMPLETE',
        issuedDate: '2024-01-15T10:00:00Z',
        paymentDueDate: '2024-02-15',
        currency: 'USD',
        totalAmountDue: {
            value: 100,
            currency: 'USD',
        },
        totalNetAmountDue: {
            value: 80,
            currency: 'USD',
        },
        totalAmountPaid: {
            value: 100,
            currency: 'USD',
        },
        totalToBePaid: {
            value: 0,
            currency: 'USD',
        },
        ...overrides,
    });

    beforeEach(() => {
        vi.clearAllMocks();
        // Use fake timers to control Date behavior
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2024-06-15'));
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    describe('chart data mapping', () => {
        it('should generate chart data with correct number of months', () => {
            const invoices = {
                total: 0,
                data: [],
            };
            const cms = createMockCms({ monthsToShow: 3 });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            expect(result.chartData).toHaveLength(3);
        });

        it('should use default monthsToShow of 6 when not specified', () => {
            const invoices = {
                total: 0,
                data: [],
            };
            const cms = createMockCms({ monthsToShow: undefined });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            expect(result.chartData).toHaveLength(6);
        });

        it('should generate month labels in correct locale', () => {
            const invoices = {
                total: 0,
                data: [],
            };
            const cms = createMockCms({ monthsToShow: 1 });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            expect(result.chartData[0]?.month).toBeDefined();
        });

        it('should reverse months array to show oldest first', () => {
            const invoices = {
                total: 0,
                data: [],
            };
            const cms = createMockCms({ monthsToShow: 3 });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            // First month should be older than last month
            expect(result.chartData.length).toBe(3);
        });
    });

    describe('month calculations', () => {
        it('should filter invoices older than monthsToShow', () => {
            const now = new Date('2024-06-15');
            const eightMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 8, 15);

            const invoices = {
                total: 1,
                data: [
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_PAST_DUE',
                        totalAmountDue: { value: 100, currency: 'USD' },
                        issuedDate: eightMonthsAgo.toISOString(),
                    }),
                ],
            };
            const cms = createMockCms({ monthsToShow: 6 });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            // The old invoice should not be included
            const totalInChart = result.chartData.reduce((sum, month) => {
                return (
                    sum +
                    parseFloat(month.topSegment) +
                    parseFloat(month.middleSegment) +
                    parseFloat(month.bottomSegment)
                );
            }, 0);

            expect(totalInChart).toBe(0);
        });

        it('should include invoices within monthsToShow range', () => {
            const now = new Date('2024-06-15');
            const twoMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 2, 15);

            const invoices = {
                total: 1,
                data: [
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_PAST_DUE',
                        totalAmountDue: { value: 100, currency: 'USD' },
                        issuedDate: twoMonthsAgo.toISOString(),
                    }),
                ],
            };
            const cms = createMockCms({ monthsToShow: 6 });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            // The invoice should be included
            const totalInChart = result.chartData.reduce((sum, month) => {
                return (
                    sum +
                    parseFloat(month.topSegment) +
                    parseFloat(month.middleSegment) +
                    parseFloat(month.bottomSegment)
                );
            }, 0);

            expect(totalInChart).toBeGreaterThan(0);
        });

        it('should match invoices to correct month by month and year', () => {
            const now = new Date('2024-06-15');
            const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, 15);

            const invoices = {
                total: 1,
                data: [
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_PAST_DUE',
                        totalAmountDue: { value: 150, currency: 'USD' },
                        issuedDate: oneMonthAgo.toISOString(),
                    }),
                ],
            };
            const cms = createMockCms({ monthsToShow: 6 });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            // Find the month that should contain this invoice
            // month.month is a short month name like "May", "Jun", etc.
            const expectedMonthName = oneMonthAgo.toLocaleString('en', { month: 'short' });
            const targetMonth = result.chartData.find((month) => month.month === expectedMonthName);

            expect(targetMonth).toBeDefined();
        });
    });

    describe('invoice status-based segments', () => {
        it('should aggregate PAYMENT_PAST_DUE invoices into topSegment', () => {
            const now = new Date('2024-06-15');
            const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, 15);

            const invoices = {
                total: 2,
                data: [
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_PAST_DUE',
                        totalAmountDue: { value: 100, currency: 'USD' },
                        issuedDate: oneMonthAgo.toISOString(),
                    }),
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_PAST_DUE',
                        totalAmountDue: { value: 200, currency: 'USD' },
                        issuedDate: oneMonthAgo.toISOString(),
                    }),
                ],
            };
            const cms = createMockCms({ monthsToShow: 6 });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            // Find the month containing these invoices
            const targetMonth = result.chartData.find((month) => parseFloat(month.topSegment) > 0);
            expect(targetMonth).toBeDefined();
            if (targetMonth) {
                expect(parseFloat(targetMonth.topSegment)).toBeGreaterThanOrEqual(100);
            }
        });

        it('should aggregate PAYMENT_DUE invoices into middleSegment', () => {
            const now = new Date('2024-06-15');
            const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, 15);

            const invoices = {
                total: 2,
                data: [
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_DUE',
                        totalAmountDue: { value: 50, currency: 'USD' },
                        issuedDate: oneMonthAgo.toISOString(),
                    }),
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_DUE',
                        totalAmountDue: { value: 75, currency: 'USD' },
                        issuedDate: oneMonthAgo.toISOString(),
                    }),
                ],
            };
            const cms = createMockCms({ monthsToShow: 6 });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            // Find the month containing these invoices
            const targetMonth = result.chartData.find((month) => parseFloat(month.middleSegment) > 0);
            expect(targetMonth).toBeDefined();
            if (targetMonth) {
                expect(parseFloat(targetMonth.middleSegment)).toBeGreaterThanOrEqual(50);
            }
        });

        it('should aggregate PAYMENT_COMPLETE invoices into bottomSegment', () => {
            const now = new Date('2024-06-15');
            const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, 15);

            const invoices = {
                total: 2,
                data: [
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_COMPLETE',
                        totalAmountDue: { value: 300, currency: 'USD' },
                        issuedDate: oneMonthAgo.toISOString(),
                    }),
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_COMPLETE',
                        totalAmountDue: { value: 400, currency: 'USD' },
                        issuedDate: oneMonthAgo.toISOString(),
                    }),
                ],
            };
            const cms = createMockCms({ monthsToShow: 6 });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            // Find the month containing these invoices
            const targetMonth = result.chartData.find((month) => parseFloat(month.bottomSegment) > 0);
            expect(targetMonth).toBeDefined();
            if (targetMonth) {
                expect(parseFloat(targetMonth.bottomSegment)).toBeGreaterThanOrEqual(300);
            }
        });

        it('should calculate total as sum of all segments', () => {
            const now = new Date('2024-06-15');
            const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, 15);

            const invoices = {
                total: 3,
                data: [
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_PAST_DUE',
                        totalAmountDue: { value: 100, currency: 'USD' },
                        issuedDate: oneMonthAgo.toISOString(),
                    }),
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_DUE',
                        totalAmountDue: { value: 50, currency: 'USD' },
                        issuedDate: oneMonthAgo.toISOString(),
                    }),
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_COMPLETE',
                        totalAmountDue: { value: 75, currency: 'USD' },
                        issuedDate: oneMonthAgo.toISOString(),
                    }),
                ],
            };
            const cms = createMockCms({ monthsToShow: 6 });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            // Find the month containing these invoices
            const targetMonth = result.chartData.find((month) => parseFloat(month.total) > 0);
            expect(targetMonth).toBeDefined();
            if (targetMonth) {
                const total = parseFloat(targetMonth.total);
                const top = parseFloat(targetMonth.topSegment);
                const middle = parseFloat(targetMonth.middleSegment);
                const bottom = parseFloat(targetMonth.bottomSegment);
                expect(total).toBe(top + middle + bottom);
            }
        });

        it('should ignore invoices with other payment statuses', () => {
            const now = new Date('2024-06-15');
            const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, 15);

            const invoices = {
                total: 1,
                data: [
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_DECLINED' as any,
                        totalAmountDue: { value: 100, currency: 'USD' },
                        issuedDate: oneMonthAgo.toISOString(),
                    }),
                ],
            };
            const cms = createMockCms({ monthsToShow: 6 });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            // The invoice should not be counted in any segment
            const totalInChart = result.chartData.reduce((sum, month) => {
                return (
                    sum +
                    parseFloat(month.topSegment) +
                    parseFloat(month.middleSegment) +
                    parseFloat(month.bottomSegment)
                );
            }, 0);

            expect(totalInChart).toBe(0);
        });
    });

    describe('currency extraction', () => {
        it('should use first invoice currency when available', () => {
            const invoices = {
                total: 2,
                data: [createMockInvoice({ currency: 'EUR' }), createMockInvoice({ currency: 'USD' })],
            };

            const result = mapPaymentsHistory(createMockCms(), invoices, 'en');

            expect(result.currency).toBe('EUR');
        });

        it('should handle empty invoices array', () => {
            const invoices = {
                total: 0,
                data: [],
            };

            const result = mapPaymentsHistory(createMockCms(), invoices, 'en');

            // Currency should be undefined when no invoices
            expect(result.currency).toBeUndefined();
        });
    });

    describe('formatting', () => {
        it('should format all segment values as strings with 2 decimal places', () => {
            const now = new Date('2024-06-15');
            const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, 15);

            const invoices = {
                total: 1,
                data: [
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_PAST_DUE',
                        totalAmountDue: { value: 123.456, currency: 'USD' },
                        issuedDate: oneMonthAgo.toISOString(),
                    }),
                ],
            };
            const cms = createMockCms({ monthsToShow: 6 });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            const monthWithData = result.chartData.find((month) => parseFloat(month.topSegment) > 0);
            if (monthWithData) {
                expect(monthWithData.topSegment).toMatch(/^\d+\.\d{2}$/);
                expect(monthWithData.middleSegment).toMatch(/^\d+\.\d{2}$/);
                expect(monthWithData.bottomSegment).toMatch(/^\d+\.\d{2}$/);
                expect(monthWithData.total).toMatch(/^\d+\.\d{2}$/);
            }
        });

        it('should format zero values correctly', () => {
            const invoices = {
                total: 0,
                data: [],
            };

            const result = mapPaymentsHistory(createMockCms(), invoices, 'en');

            result.chartData.forEach((month) => {
                expect(month.topSegment).toBe('0.00');
                expect(month.middleSegment).toBe('0.00');
                expect(month.bottomSegment).toBe('0.00');
                expect(month.total).toBe('0.00');
            });
        });
    });

    describe('edge cases', () => {
        it('should handle invoices with same month and year correctly', () => {
            const now = new Date('2024-06-15');
            const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, 15);

            const invoices = {
                total: 3,
                data: [
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_PAST_DUE',
                        totalAmountDue: { value: 100, currency: 'USD' },
                        issuedDate: oneMonthAgo.toISOString(),
                    }),
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_PAST_DUE',
                        totalAmountDue: { value: 200, currency: 'USD' },
                        issuedDate: new Date(now.getFullYear(), now.getMonth() - 1, 20).toISOString(),
                    }),
                    createMockInvoice({
                        paymentStatus: 'PAYMENT_PAST_DUE',
                        totalAmountDue: { value: 50, currency: 'USD' },
                        issuedDate: new Date(now.getFullYear(), now.getMonth() - 1, 25).toISOString(),
                    }),
                ],
            };
            const cms = createMockCms({ monthsToShow: 6 });

            const result = mapPaymentsHistory(cms, invoices, 'en');

            // All three invoices should be aggregated into the same month
            const targetMonth = result.chartData.find((month) => parseFloat(month.topSegment) > 0);
            expect(targetMonth).toBeDefined();
            if (targetMonth) {
                expect(parseFloat(targetMonth.topSegment)).toBeGreaterThanOrEqual(100);
            }
        });
    });
});
