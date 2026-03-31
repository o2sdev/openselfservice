import { CMS, Invoices } from '@o2s/configs.integrations';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Utils } from '@o2s/utils.api-harmonization';

import { mapInvoice, mapInvoiceList } from './invoice-list.mapper';

vi.mock('@o2s/utils.api-harmonization', () => ({
    Utils: {
        Date: {
            formatDateRelative: vi.fn(),
        },
        Price: {
            checkNegativeValue: vi.fn(),
        },
    },
}));

describe('invoice-list.mapper', () => {
    const createMockCms = (overrides = {}): CMS.Model.InvoiceListBlock.InvoiceListBlock => ({
        id: 'block-123',
        title: 'Invoices',
        pagination: undefined,
        filters: undefined,
        noResults: {
            title: 'No results',
        },
        tableTitle: 'Invoice Table',
        table: {
            columns: [],
        },
        downloadFileName: 'invoices.csv',
        downloadButtonAriaDescription: 'Download invoices',
        initialFilters: undefined,
        fieldMapping: {
            type: { STANDARD: 'Invoice', CREDIT_NOTE: 'Credit Note' },
            paymentStatus: { PAYMENT_DUE: 'Due', PAYMENT_COMPLETE: 'Paid' },
        },
        labels: {
            today: 'Today',
            yesterday: 'Yesterday',
            clickToSelect: 'Click to select',
        },
        ...overrides,
    });

    const createMockInvoice = (overrides = {}): Invoices.Model.Invoice => ({
        id: 'invoice-001',
        externalId: 'EXT-001',
        billingAccountId: 'BA-001',
        billingPeriod: '2024-01',
        paymentMethodId: 'PM-001',
        type: 'STANDARD',
        paymentStatus: 'PAYMENT_DUE',
        issuedDate: '2024-01-15T10:00:00Z',
        paymentDueDate: '2024-01-20T14:30:00Z',
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
            value: 0,
            currency: 'USD',
        },
        totalToBePaid: {
            value: 100,
            currency: 'USD',
        },
        ...overrides,
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(Utils.Date.formatDateRelative).mockReturnValue('formatted-date');
        vi.mocked(Utils.Price.checkNegativeValue).mockImplementation((price) => price);
    });

    describe('field mapping with fallbacks', () => {
        it('should use CMS mapping when available for type and paymentStatus', () => {
            const invoice = createMockInvoice({ type: 'INVOICE', paymentStatus: 'PAYMENT_DUE' });
            const cms = createMockCms({
                fieldMapping: {
                    type: { INVOICE: 'Invoice Document' },
                    paymentStatus: { PAYMENT_DUE: 'Payment Due' },
                },
            });

            const result = mapInvoice(invoice, cms, 'en', 'UTC');

            expect(result.type.displayValue).toBe('Invoice Document');
            expect(result.type.value).toBe('INVOICE');
            expect(result.paymentStatus.displayValue).toBe('Payment Due');
            expect(result.paymentStatus.value).toBe('PAYMENT_DUE');
        });

        it('should fallback to raw value when no mapping exists', () => {
            const invoice = createMockInvoice({ type: 'UNKNOWN_TYPE', paymentStatus: 'UNKNOWN_STATUS' });
            const cms = createMockCms({
                fieldMapping: {
                    type: {},
                    paymentStatus: {},
                },
            });

            const result = mapInvoice(invoice, cms, 'en', 'UTC');

            expect(result.type.displayValue).toBe('UNKNOWN_TYPE');
            expect(result.paymentStatus.displayValue).toBe('UNKNOWN_STATUS');
        });
    });

    describe('date formatting', () => {
        it('should format paymentDueDate using formatDateRelative', () => {
            const invoice = createMockInvoice({ paymentDueDate: '2024-01-20T14:30:00Z' });
            vi.mocked(Utils.Date.formatDateRelative).mockReturnValue('Jan 20, 2024');

            const result = mapInvoice(invoice, createMockCms(), 'en', 'UTC');

            expect(Utils.Date.formatDateRelative).toHaveBeenCalledWith(
                '2024-01-20T14:30:00Z',
                'en',
                'Today',
                'Yesterday',
                'UTC',
            );
            expect(result.paymentDueDate.displayValue).toBe('Jan 20, 2024');
            expect(result.paymentDueDate.value).toBe('2024-01-20T14:30:00Z');
        });

        it('should pass correct arguments to formatDateRelative', () => {
            const invoice = createMockInvoice();
            const cms = createMockCms({
                labels: {
                    today: 'Dzisiaj',
                    yesterday: 'Wczoraj',
                },
            });

            mapInvoice(invoice, cms, 'pl', 'Europe/Warsaw');

            expect(Utils.Date.formatDateRelative).toHaveBeenCalledWith(
                expect.any(String),
                'pl',
                'Dzisiaj',
                'Wczoraj',
                'Europe/Warsaw',
            );
        });
    });

    describe('price utility usage', () => {
        it('should use checkNegativeValue for totalAmountDue and totalNetAmountDue', () => {
            const invoice = createMockInvoice({
                totalAmountDue: { value: 150, currency: 'USD' },
                totalNetAmountDue: { value: 120, currency: 'USD' },
            });
            vi.mocked(Utils.Price.checkNegativeValue)
                .mockReturnValueOnce({ value: 150, currency: 'USD' })
                .mockReturnValueOnce({ value: 120, currency: 'USD' });

            const result = mapInvoice(invoice, createMockCms(), 'en', 'UTC');

            expect(Utils.Price.checkNegativeValue).toHaveBeenCalledWith({ value: 150, currency: 'USD' });
            expect(Utils.Price.checkNegativeValue).toHaveBeenCalledWith({ value: 120, currency: 'USD' });
            expect(result.totalAmountDue.value).toBe(150);
            expect(result.totalNetAmountDue.value).toBe(120);
        });
    });

    describe('mapInvoiceList', () => {
        it('should map all invoices in the list', () => {
            const invoices = {
                total: 2,
                data: [createMockInvoice({ id: 'invoice-1' }), createMockInvoice({ id: 'invoice-2' })],
            };

            const result = mapInvoiceList(invoices, createMockCms(), 'en', 'UTC');

            expect(result.invoices.data).toHaveLength(2);
            expect(result.invoices.total).toBe(2);
        });

        it('should preserve CMS configuration', () => {
            const invoices = {
                total: 0,
                data: [],
            };
            const cms = createMockCms({
                title: 'My Invoices',
                tableTitle: 'My Invoice Table',
            });

            const result = mapInvoiceList(invoices, cms, 'en', 'UTC');

            expect(result.title).toBe('My Invoices');
            expect(result.table.title).toBe('My Invoice Table');
            expect(result.__typename).toBe('InvoiceListBlock');
            expect(result.id).toBe('block-123');
        });
    });
});
