const DEFAULT_KEY = '__default__';

let _storageKey = 'cartId';
let _currentOrgId: string | undefined;

interface CartStorageConfig {
    storageKey?: string;
    orgId?: string;
}

interface CartStorageMap {
    [orgId: string]: string;
}

/**
 * Configure the cart storage utility. Call once at app initialization.
 *
 * @param config.storageKey - localStorage key name (defaults to 'cartId')
 * @param config.orgId - current organization ID (uses '__default__' when omitted)
 */
export function configureCartStorage(config: CartStorageConfig): void {
    if (config.storageKey) {
        _storageKey = config.storageKey;
    }
    _currentOrgId = config.orgId;
}

/**
 * Get the cart ID for the current (or specified) organization.
 */
export function getCartId(orgId?: string): string | null {
    const raw = localStorage.getItem(_storageKey);
    if (!raw) return null;

    try {
        const map: CartStorageMap = JSON.parse(raw);
        const key = orgId ?? _currentOrgId ?? DEFAULT_KEY;
        return map[key] ?? null;
    } catch {
        return null;
    }
}

/**
 * Set the cart ID for the current (or specified) organization.
 */
export function setCartId(cartId: string, orgId?: string): void {
    const key = orgId ?? _currentOrgId ?? DEFAULT_KEY;
    const map = readMap();
    map[key] = cartId;
    localStorage.setItem(_storageKey, JSON.stringify(map));
}

/**
 * Remove the cart ID for the current (or specified) organization.
 */
export function removeCartId(orgId?: string): void {
    const key = orgId ?? _currentOrgId ?? DEFAULT_KEY;
    const map = readMap();
    delete map[key];

    if (Object.keys(map).length === 0) {
        localStorage.removeItem(_storageKey);
    } else {
        localStorage.setItem(_storageKey, JSON.stringify(map));
    }
}

/**
 * Remove all cart IDs (all organizations). Use on logout.
 */
export function removeAllCartIds(): void {
    localStorage.removeItem(_storageKey);
}

function readMap(): CartStorageMap {
    const raw = localStorage.getItem(_storageKey);
    if (!raw) return {};

    try {
        return JSON.parse(raw);
    } catch {
        return {};
    }
}
