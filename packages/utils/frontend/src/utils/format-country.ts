/**
 * Converts a country code (e.g. PL, DE, GB) to a localized display name.
 * Uses Intl.DisplayNames - same approach as AddressFields for consistency.
 * If the code is not a valid ISO 3166-1 region code, returns the original value.
 */
export function formatCountryCode(code: string, locale: string): string {
    if (!code) return code;
    try {
        const countryNames = new Intl.DisplayNames([locale], { type: 'region' });
        const displayName = countryNames.of(code.toUpperCase());
        return displayName ?? code;
    } catch {
        return code;
    }
}
