import { HeaderName } from './models/headers';

/**
 * Default headers sent with every request made to the API Harmonization Server.
 */
export const getApiHeaders = (): Record<string, string> => {
    return {
        [HeaderName.ClientTimezone]: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
};
