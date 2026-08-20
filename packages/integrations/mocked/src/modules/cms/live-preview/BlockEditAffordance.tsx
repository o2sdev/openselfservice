'use client';

interface BlockEditAffordanceProps {
    documentId?: string;
    locale?: string;
}

/** No-op: the mocked integration has no live-preview editing affordance. */
export function BlockEditAffordance(_props: BlockEditAffordanceProps) {
    return null;
}
