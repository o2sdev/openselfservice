#!/usr/bin/env node
/**
 * Restore cross-platform native binaries in package-lock.json.
 *
 * WHY THIS EXISTS
 * ---------------
 * Several dependencies ship their compiled native code as a set of
 * platform-specific packages (one per OS/CPU) declared as `optionalDependencies`
 * of a small JS wrapper — e.g. `@tailwindcss/oxide` pulls in
 * `@tailwindcss/oxide-linux-x64-gnu`, `@tailwindcss/oxide-win32-x64-msvc`, ...
 *
 * npm has a long-standing bug (https://github.com/npm/cli/issues/4828): running
 * `npm install` records in the lockfile ONLY the platform binaries for the OS it
 * ran on, and prunes the rest. So a lockfile written on Windows loses the Linux
 * binaries, and `npm ci` on the Linux CI runner then fails to load the native
 * module. `npm ci` never rewrites the lockfile, so this only ever happens when
 * someone changes a dependency (`npm install`) and commits the result.
 *
 * This script re-derives the full set: for every native family present in the
 * tree (a package that declares platform binaries as exact-version optional
 * deps), it makes sure every one of those binaries has a lockfile entry, filling
 * any that npm pruned with real metadata from the registry.
 *
 * USAGE
 * -----
 *   node scripts/fix-lockfile-platforms.mjs           # fix in place
 *   node scripts/fix-lockfile-platforms.mjs --check    # report only, exit 1 if incomplete
 *
 * The `--check` mode is registry-free (pure lockfile analysis) and is what CI
 * runs to block an incomplete lockfile from being merged.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const LOCKFILE = join(dirname(fileURLToPath(import.meta.url)), '..', 'package-lock.json');
const CHECK_ONLY = process.argv.includes('--check');
// Public registry — matches the `resolved` host already used by every entry in
// the lockfile. These native binary families are all published here.
const REGISTRY = 'https://registry.npmjs.org';

// A dependency name that looks like a prebuilt platform binary.
const PLATFORM_RE = /-(linux|darwin|win32|android|freebsd|openharmony|sunos|netbsd|wasm32|wasi)(-|$)|^@esbuild\//;
// An exact semver (no range operators). Platform binary families pin their
// optional deps to an exact version; defensive optional deps use ranges and are
// intentionally skipped (they are genuinely optional and absent on all platforms).
const EXACT_RE = /^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?(\+[0-9A-Za-z.-]+)?$/;

/** Strip the platform suffix to get the family's base package name. */
const baseOf = (name) => {
    if (name.startsWith('@esbuild/')) return '@esbuild';
    const m = PLATFORM_RE.exec(name);
    return m ? name.slice(0, m.index) : name;
};

/**
 * Collect every platform-binary family in the tree, keyed by base package name.
 * For each family: the full set of declared binary names (name -> exact version)
 * and whether it is a dev-only dependency (copied from an installed sibling).
 */
function collectFamilies(lock) {
    const pkgs = lock.packages;
    const present = new Set(Object.keys(pkgs));
    const families = new Map(); // base -> { versions: Map<name,version> }

    for (const meta of Object.values(pkgs)) {
        const optional = meta.optionalDependencies;
        if (!optional) continue;
        for (const [dep, range] of Object.entries(optional)) {
            if (!PLATFORM_RE.test(dep) || !EXACT_RE.test(range)) continue;
            const base = baseOf(dep);
            if (!families.has(base)) families.set(base, { versions: new Map() });
            families.get(base).versions.set(dep, range);
        }
    }

    // Drop families that have no installed member at all — nothing in the tree
    // actually resolves them, so npm is right to omit every platform.
    for (const [base, fam] of families) {
        const anyPresent = [...fam.versions.keys()].some((name) => present.has(`node_modules/${name}`));
        if (!anyPresent) families.delete(base);
    }
    return { families, present };
}

/** The missing binaries across all families: [{ name, version, base }]. */
function findMissing(lock) {
    const { families, present } = collectFamilies(lock);
    const missing = [];
    for (const [base, fam] of families) {
        for (const [name, version] of fam.versions) {
            if (!present.has(`node_modules/${name}`)) missing.push({ name, version, base });
        }
    }
    return missing;
}

/** Fetch a registry manifest and shape it into a lockfile entry (npm key order). */
async function buildEntry(name, version, dev) {
    const res = await fetch(`${REGISTRY}/${name}/${version}`);
    if (!res.ok) throw new Error(`registry ${res.status} for ${name}@${version}`);
    const m = await res.json();
    const entry = { version, resolved: m.dist.tarball, integrity: m.dist.integrity };
    if (m.cpu) entry.cpu = m.cpu;
    if (m.libc) entry.libc = m.libc;
    if (dev) entry.dev = true;
    if (m.license) entry.license = m.license;
    entry.optional = true;
    if (m.os) entry.os = m.os;
    if (m.engines) entry.engines = m.engines;
    if (m.funding) entry.funding = m.funding;
    return entry;
}

/**
 * Insert the new entries into `packages`, each at its `localeCompare` position
 * among the existing keys — the same collation npm uses to order the lockfile.
 * Existing keys keep their order, so the diff is purely the added lines and each
 * new binary lands next to its siblings.
 */
function insertEntries(lock, newEntries) {
    const merged = { ...lock.packages };
    for (const { name, entry } of newEntries) merged[`node_modules/${name}`] = entry;

    const keys = Object.keys(lock.packages);
    const newKeys = newEntries.map((e) => `node_modules/${e.name}`).sort((a, b) => a.localeCompare(b, 'en'));
    for (const nk of newKeys) {
        let idx = keys.findIndex((k) => k.localeCompare(nk, 'en') > 0);
        if (idx < 0) idx = keys.length;
        keys.splice(idx, 0, nk);
    }

    const rebuilt = {};
    for (const k of keys) rebuilt[k] = merged[k];
    lock.packages = rebuilt;
}

async function main() {
    const raw = readFileSync(LOCKFILE, 'utf8');
    const lock = JSON.parse(raw);

    const missing = findMissing(lock);

    if (missing.length === 0) {
        console.log('✓ package-lock.json is platform-complete.');
        return;
    }

    const byFamily = missing.reduce((acc, m) => {
        acc[m.base] = (acc[m.base] || 0) + 1;
        return acc;
    }, {});
    const summary = Object.entries(byFamily)
        .map(([b, n]) => `${b} (${n})`)
        .join(', ');

    if (CHECK_ONLY) {
        console.error(`✗ package-lock.json is missing ${missing.length} platform binaries: ${summary}`);
        console.error('  Run `npm run lockfile:fix` and commit the result.');
        console.error('  Cause: npm/cli#4828 — a lockfile written on one OS drops other platforms.');
        process.exit(1);
    }

    console.log(`Restoring ${missing.length} platform binaries: ${summary}`);

    // dev flag per family, copied from an installed sibling of the same family.
    const present = new Set(Object.keys(lock.packages));
    const devByBase = new Map();
    for (const { base } of missing) {
        if (devByBase.has(base)) continue;
        const sibling = [...present].find((k) => k.startsWith(`node_modules/${base}-`));
        devByBase.set(base, sibling ? Boolean(lock.packages[sibling].dev) : false);
    }

    const newEntries = await Promise.all(
        missing.map(async ({ name, version, base }) => ({
            name,
            base,
            entry: await buildEntry(name, version, devByBase.get(base)),
        })),
    );

    insertEntries(lock, newEntries);
    writeFileSync(LOCKFILE, `${JSON.stringify(lock, null, 4)}\n`);
    console.log(`✓ Added ${newEntries.length} entries to package-lock.json.`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
