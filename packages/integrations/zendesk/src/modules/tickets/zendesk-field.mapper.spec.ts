import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { getFieldKeyById, toCustomFields } from './zendesk-field.mapper';

describe('zendesk-field.mapper', () => {
    const TOPIC_FIELD_ID = 999;
    const PREFERRED_DATE_FIELD_ID = 777;
    const TERMS_ACCEPTANCE_FIELD_ID = 888;

    beforeEach(() => {
        process.env.ZENDESK_TOPIC_FIELD_ID = String(TOPIC_FIELD_ID);
        process.env.ZENDESK_MAINTENANCE_PREFERRED_DATE_FIELD_ID = String(PREFERRED_DATE_FIELD_ID);
        process.env.ZENDESK_TERMS_ACCEPTANCE_FIELD_ID = String(TERMS_ACCEPTANCE_FIELD_ID);
    });

    afterEach(() => {
        delete process.env.ZENDESK_TOPIC_FIELD_ID;
        delete process.env.ZENDESK_MAINTENANCE_PREFERRED_DATE_FIELD_ID;
        delete process.env.ZENDESK_TERMS_ACCEPTANCE_FIELD_ID;
        delete process.env.ZENDESK_EMAIL_FIELD_ID;
        delete process.env.ZENDESK_INVOICE_NUMBER_FIELD_ID;
        delete process.env.ZENDESK_DEVICE_NAME_FIELD_ID;
        delete process.env.ZENDESK_ADDITIONAL_NOTES_FIELD_ID;
        delete process.env.ZENDESK_FIRST_NAME_FIELD_ID;
    });

    describe('getFieldKeyById', () => {
        it('should return field key for known topic field ID', () => {
            const result = getFieldKeyById(TOPIC_FIELD_ID);
            expect(result).toBe('topic');
        });

        it('should return undefined for unknown field ID', () => {
            const result = getFieldKeyById(12345678);
            expect(result).toBeUndefined();
        });

        it('should return undefined when no env mapping exists for given ID', () => {
            delete process.env.ZENDESK_TOPIC_FIELD_ID;
            const result = getFieldKeyById(TOPIC_FIELD_ID);
            expect(result).toBeUndefined();
        });
    });

    describe('toCustomFields', () => {
        it('should keep string, number, and boolean values unchanged', () => {
            process.env.ZENDESK_EMAIL_FIELD_ID = '100';
            process.env.ZENDESK_INVOICE_NUMBER_FIELD_ID = '104';
            const data = {
                topic: 'CONTACT_US',
                email: 'user@example.com',
                invoiceNumber: 42,
                termsAcceptance: true,
            };
            const result = toCustomFields(data);
            expect(result).toContainEqual({ id: TOPIC_FIELD_ID, value: 'CONTACT_US' });
            expect(result).toContainEqual({ id: 100, value: 'user@example.com' });
            expect(result).toContainEqual({ id: 104, value: 42 });
            expect(result).toContainEqual({ id: TERMS_ACCEPTANCE_FIELD_ID, value: true });
        });

        it('should convert ISO date string to YYYY-MM-DD format', () => {
            const data = {
                preferredDate: '2024-03-15T12:00:00.000Z',
            };
            const result = toCustomFields(data);
            expect(result).toContainEqual({ id: PREFERRED_DATE_FIELD_ID, value: '2024-03-15' });
        });

        it('should convert consent field non-empty array to true', () => {
            const data = {
                termsAcceptance: ['accepted'],
            };
            const result = toCustomFields(data);
            expect(result).toContainEqual({ id: TERMS_ACCEPTANCE_FIELD_ID, value: true });
        });

        it('should convert consent field empty array to false', () => {
            const data = {
                termsAcceptance: [],
            };
            const result = toCustomFields(data);
            expect(result).toContainEqual({ id: TERMS_ACCEPTANCE_FIELD_ID, value: false });
        });

        it('should convert non-consent array to JSON string', () => {
            process.env.ZENDESK_DEVICE_NAME_FIELD_ID = '101';
            const data = {
                machineName: ['item1', 'item2'],
            };
            const result = toCustomFields(data);
            expect(result).toContainEqual({ id: 101, value: '["item1","item2"]' });
        });

        it('should convert object to JSON string', () => {
            process.env.ZENDESK_ADDITIONAL_NOTES_FIELD_ID = '102';
            const data = {
                additionalNotes: { key: 'value' },
            };
            const result = toCustomFields(data);
            expect(result).toContainEqual({ id: 102, value: '{"key":"value"}' });
        });

        it('should skip fields with null or undefined values', () => {
            process.env.ZENDESK_EMAIL_FIELD_ID = '100';
            process.env.ZENDESK_FIRST_NAME_FIELD_ID = '103';
            const data = {
                topic: 'CONTACT_US',
                email: null,
                firstName: undefined,
            };
            const result = toCustomFields(data);
            expect(result).toHaveLength(1);
            expect(result[0]).toEqual({ id: TOPIC_FIELD_ID, value: 'CONTACT_US' });
        });

        it('should skip keys without env mapping', () => {
            const data = {
                topic: 'CONTACT_US',
                unknownField: 'value',
            };
            const result = toCustomFields(data);
            expect(result).toHaveLength(1);
            expect(result[0]!.id).toBe(TOPIC_FIELD_ID);
        });

        it('should return empty array for empty data object', () => {
            const result = toCustomFields({});
            expect(result).toEqual([]);
        });
    });
});
