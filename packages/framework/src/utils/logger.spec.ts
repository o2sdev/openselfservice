import { describe, expect, it } from 'vitest';

import { toLoggerConfig } from './logger';

describe('toLoggerConfig', () => {
    it('should pass through a level and a format the logger knows', () => {
        expect(toLoggerConfig({ level: 'debug', format: 'json' })).toEqual({
            level: 'debug',
            format: 'json',
            colorsEnabled: false,
        });
    });

    it('should leave out a level or a format it does not know', () => {
        // the logger falls back to its own defaults for whatever is left out, so a typo in the
        // environment does not reach winston
        expect(toLoggerConfig({ level: 'DEBUG', format: 'yaml' })).toEqual({
            level: undefined,
            format: undefined,
            colorsEnabled: false,
        });
    });

    it('should leave out values that are missing or empty', () => {
        expect(toLoggerConfig({})).toEqual({ level: undefined, format: undefined, colorsEnabled: false });
        expect(toLoggerConfig({ level: '', format: '' })).toEqual({
            level: undefined,
            format: undefined,
            colorsEnabled: false,
        });
    });

    it('should turn colors on only when they are asked for', () => {
        expect(toLoggerConfig({ colorsEnabled: 'true' }).colorsEnabled).toBe(true);
        expect(toLoggerConfig({ colorsEnabled: 'false' }).colorsEnabled).toBe(false);
        expect(toLoggerConfig({ colorsEnabled: '1' }).colorsEnabled).toBe(false);
    });
});
