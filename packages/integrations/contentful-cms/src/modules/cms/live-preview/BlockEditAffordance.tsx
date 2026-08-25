'use client';

interface BlockEditAffordanceProps {
    documentId?: string;
    locale?: string;
}

/**
 * No-op for Contentful: its live preview edits inline via inspector-mode data attributes,
 * so no per-block "open document" affordance is needed.
 */
export function BlockEditAffordance(_props: BlockEditAffordanceProps) {
    return null;
}
