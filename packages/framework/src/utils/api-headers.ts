import { HeaderName } from './models/headers';

/**
 * Resolving the time zone constructs an `Intl.DateTimeFormat`, which costs orders of magnitude more than
 * everything else the request setup does, and neither a process nor a browser tab changes its time zone.
 * This is the IANA name (`Europe/Warsaw`), so it does not follow DST either.
 */
let clientTimezone: string | undefined;

/**
 * Default headers sent with every request made to the API Harmonization Server.
 */
export const getApiHeaders = (): Record<string, string> => {
    clientTimezone ??= Intl.DateTimeFormat().resolvedOptions().timeZone;

    return {
        [HeaderName.ClientTimezone]: clientTimezone,
    };
};
