/**
 * Formats a street address from its component parts.
 * Combines street name, optional street number, and optional apartment into a single string.
 */
export function formatStreetAddress(addr: { streetName: string; streetNumber?: string; apartment?: string }): string {
    let street = addr.streetName;
    if (addr.streetNumber) street += ` ${addr.streetNumber}`;
    if (addr.apartment) street += `, ${addr.apartment}`;
    return street;
}
