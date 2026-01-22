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
    // Static mapping of Survey.js field names to Zendesk custom field IDs from environment variables
    private static readonly fieldMap: Record<string, number | undefined> = {
        topic: process.env.ZENDESK_TOPIC_FIELD_ID ? Number(process.env.ZENDESK_TOPIC_FIELD_ID) : undefined,
        // Add more field mappings here as needed
        // example: priority: process.env.ZENDESK_PRIORITY_FIELD_ID ? Number(process.env.ZENDESK_PRIORITY_FIELD_ID) : undefined,
    };

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
     *
     * @param value - The value to validate and convert
     * @returns Validated value or null if invalid
     */
    private static validateAndConvertValue(value: unknown): string | number | boolean | null {
        // Handle primitives directly
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
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
