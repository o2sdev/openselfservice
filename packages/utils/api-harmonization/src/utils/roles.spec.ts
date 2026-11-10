import { describe, expect, it } from 'vitest';

import { resolvePriorityRole } from './roles';

type Role = 'admin' | 'user' | 'prospect';

const PRIORITY: Role[] = ['admin', 'user'];

describe('resolvePriorityRole', () => {
    it('returns the highest-priority role the user actually holds', () => {
        expect(resolvePriorityRole<Role>(['user', 'admin'], PRIORITY, 'prospect')).toBe('admin');
        expect(resolvePriorityRole<Role>(['admin'], PRIORITY, 'prospect')).toBe('admin');
    });

    it('does not depend on the order the roles arrive in', () => {
        expect(resolvePriorityRole<Role>(['admin', 'user'], PRIORITY, 'prospect')).toBe('admin');
        expect(resolvePriorityRole<Role>(['user', 'admin'], PRIORITY, 'prospect')).toBe('admin');
    });

    it('falls back to the lower-priority role when the higher one is absent', () => {
        expect(resolvePriorityRole<Role>(['user'], PRIORITY, 'prospect')).toBe('user');
    });

    it('falls back to the given default when none of the priority roles match', () => {
        expect(resolvePriorityRole<Role>(['some_other_role' as Role], PRIORITY, 'prospect')).toBe('prospect');
        expect(resolvePriorityRole<Role>([], PRIORITY, 'prospect')).toBe('prospect');
    });

    it('treats a missing roles list the same as an empty one', () => {
        expect(resolvePriorityRole<Role>(undefined, PRIORITY, 'prospect')).toBe('prospect');
    });
});
