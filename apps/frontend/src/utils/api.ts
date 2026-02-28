import { Models } from '@o2s/utils.api-harmonization';

export const getApiHeaders = () => {
    return {
        [Models.Headers.HeaderName.ClientTimezone]: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
};
