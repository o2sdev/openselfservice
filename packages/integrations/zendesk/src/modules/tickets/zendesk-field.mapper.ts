/**
 * Zendesk Custom Field Mapper
 * Maps Survey.js form fields to Zendesk custom fields using environment variables
 */

export interface ZendeskCustomField {
    id: number;
    value: string | number | boolean;
}

/**
 * Mapper for converting Survey.js fields to Zendesk custom fields.
 * Field IDs are configured via environment variables (ZENDESK_*_FIELD_ID).
 *
 * To add new custom field mapping:
 * 1. Add environment variable (e.g., ZENDESK_NEW_FIELD_ID=123456)
 * 2. Add mapping to fieldMap: newField: Number(process.env.ZENDESK_NEW_FIELD_ID) || undefined
 * 3. Include the field in Survey.js form with matching name
 */
export class ZendeskFieldMapper {
    /**
     * Gets the field map dynamically from environment variables.
     * Using a getter ensures environment variables are read at runtime, not during module initialization.
     */
    private static get fieldMap(): Record<string, number | undefined> {
        return {
            machineName: process.env.ZENDESK_DEVICE_NAME_FIELD_ID
                ? Number(process.env.ZENDESK_DEVICE_NAME_FIELD_ID)
                : undefined,
            serialNumber: process.env.ZENDESK_SERIAL_NUMBER_FIELD_ID
                ? Number(process.env.ZENDESK_SERIAL_NUMBER_FIELD_ID)
                : undefined,
            maintenanceType: process.env.ZENDESK_MAINTENANCE_TYPE_FIELD_ID
                ? Number(process.env.ZENDESK_MAINTENANCE_TYPE_FIELD_ID)
                : undefined,
            preferredDate: process.env.ZENDESK_MAINTENANCE_PREFERRED_DATE_FIELD_ID
                ? Number(process.env.ZENDESK_MAINTENANCE_PREFERRED_DATE_FIELD_ID)
                : undefined,
            additionalNotes: process.env.ZENDESK_ADDITIONAL_NOTES_FIELD_ID
                ? Number(process.env.ZENDESK_ADDITIONAL_NOTES_FIELD_ID)
                : undefined,
            contactInformation: process.env.ZENDESK_CONTACT_FIELD_ID
                ? Number(process.env.ZENDESK_CONTACT_FIELD_ID)
                : undefined,

            issueDate: process.env.ZENDESK_ISSUE_DATE_FIELD_ID
                ? Number(process.env.ZENDESK_ISSUE_DATE_FIELD_ID)
                : undefined,
            organizationName: process.env.ZENDESK_COMPANY_NAME_FIELD_ID
                ? Number(process.env.ZENDESK_COMPANY_NAME_FIELD_ID)
                : undefined,
            firstName: process.env.ZENDESK_FIRST_NAME_FIELD_ID
                ? Number(process.env.ZENDESK_FIRST_NAME_FIELD_ID)
                : undefined,
            lastName: process.env.ZENDESK_LAST_NAME_FIELD_ID
                ? Number(process.env.ZENDESK_LAST_NAME_FIELD_ID)
                : undefined,
            email: process.env.ZENDESK_EMAIL_FIELD_ID ? Number(process.env.ZENDESK_EMAIL_FIELD_ID) : undefined,
            phone: process.env.ZENDESK_PHONE_FIELD_ID ? Number(process.env.ZENDESK_PHONE_FIELD_ID) : undefined,
            invoiceNumber: process.env.ZENDESK_INVOICE_NUMBER_FIELD_ID
                ? Number(process.env.ZENDESK_INVOICE_NUMBER_FIELD_ID)
                : undefined,

            address: process.env.ZENDESK_ADDRESS_FIELD_ID ? Number(process.env.ZENDESK_ADDRESS_FIELD_ID) : undefined,
            topic: process.env.ZENDESK_TOPIC_FIELD_ID ? Number(process.env.ZENDESK_TOPIC_FIELD_ID) : undefined,
            inquiryType: process.env.ZENDESK_INQUIRY_TYPE_FIELD_ID
                ? Number(process.env.ZENDESK_INQUIRY_TYPE_FIELD_ID)
                : undefined,
            productCategory: process.env.ZENDESK_PRODUCT_CATEGORY_FIELD_ID
                ? Number(process.env.ZENDESK_PRODUCT_CATEGORY_FIELD_ID)
                : undefined,
            preferredContactMethod: process.env.ZENDESK_PREFERRED_CONTACT_METHOD_FIELD_ID
                ? Number(process.env.ZENDESK_PREFERRED_CONTACT_METHOD_FIELD_ID)
                : undefined,
            // Add more field mappings here as needed
            // example: priority: process.env.ZENDESK_PRIORITY_FIELD_ID ? Number(process.env.ZENDESK_PRIORITY_FIELD_ID) : undefined,
        };
    }

    /**
     * Converts a record of field values to Zendesk custom fields format.
     * Only includes fields that:
     * - Have a mapping in fieldMap
     * - Have a valid environment variable configured
     * - Have non-null/undefined values
     *
     * @param data - Object with field names as keys and their values
     * @returns Array of Zendesk custom field objects with id and value
     */
    static toCustomFields(data: Record<string, unknown>): ZendeskCustomField[] {
        const customFields: ZendeskCustomField[] = [];

        for (const [fieldName, fieldValue] of Object.entries(data)) {
            // Skip if value is null or undefined
            if (fieldValue === null || fieldValue === undefined) {
                continue;
            }

            // Get field ID from mapping
            const fieldId = this.fieldMap[fieldName];

            // Skip if field is not mapped or environment variable is not configured
            if (!fieldId || isNaN(fieldId)) {
                continue;
            }

            // Validate and convert value to supported types
            const validatedValue = this.validateAndConvertValue(fieldValue);

            if (validatedValue !== null) {
                customFields.push({
                    id: fieldId,
                    value: validatedValue,
                });
            }
        }

        return customFields;
    }

    /**
     * Validates and converts field value to Zendesk-supported types.
     * Zendesk API accepts: string, number, boolean
     * Date fields must be in YYYY-MM-DD format
     *
     * @param value - The value to validate and convert
     * @returns Validated value or null if invalid
     */
    private static validateAndConvertValue(value: unknown): string | number | boolean | null {
        // Handle primitives
        if (typeof value === 'number' || typeof value === 'boolean') {
            return value;
        }

        if (typeof value === 'string') {
            // Convert date strings to YYYY-MM-DD format for date fields
            if (/\d{4}-\d{2}-\d{2}/.test(value)) {
                const date = new Date(value);
                return isNaN(date.getTime()) ? value : (date.toISOString().split('T')[0] ?? value);
            }
            return value;
        }

        // Convert arrays and objects to JSON strings
        if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
            try {
                return JSON.stringify(value);
            } catch {
                return null;
            }
        }

        // Invalid type
        return null;
    }
}
