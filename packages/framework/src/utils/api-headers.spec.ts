import { describe, expect, it } from 'vitest';

import { getApiHeaders } from './api-headers';
import { HeaderName } from './models/headers';

describe('getApiHeaders', () => {
    it('should send the time zone of the client', () => {
        expect(getApiHeaders()).toEqual({
            [HeaderName.ClientTimezone]: Intl.DateTimeFormat().resolvedOptions().timeZone,
        });
    });

    it('should return a new object every time, as callers add their own headers to it', () => {
        const headers = getApiHeaders();
        headers[HeaderName.Locale] = 'en';

        expect(getApiHeaders()).not.toHaveProperty(HeaderName.Locale);
    });
});
