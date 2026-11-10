/**
 * Resolves the single role a UI should treat a user as having, from a token or profile that can carry
 * several roles at once.
 *
 * Many CMS-driven UIs need exactly one role per user to pick a label or a form option, but Keycloak (and
 * most identity providers) hand back every role a token carries, with no ordering guarantee between them.
 * `priority` is the caller's own precedence list — most-privileged first is the common case (an admin
 * role should win over a plain member role held at the same time) — and this returns the first entry of
 * `priority` that the user actually holds, falling back when none match.
 *
 * The role vocabulary itself is deliberately not this function's concern: a project names its own roles
 * (via its auth integration) and its own fallback, and passes both in. This only implements the ordering.
 */
export const resolvePriorityRole = <T extends string>(
    roles: T[] | undefined,
    priority: readonly T[],
    fallback: T,
): T => {
    const userRoles = roles ?? [];

    return priority.find((role) => userRoles.includes(role)) ?? fallback;
};
