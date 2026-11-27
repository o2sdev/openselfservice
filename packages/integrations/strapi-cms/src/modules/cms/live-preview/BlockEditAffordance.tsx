'use client';

import { env } from 'next-runtime-env';
import React, { useEffect, useRef, useState } from 'react';

import { getComponentPreviewUrl } from './constants';

interface BlockEditAffordanceProps {
    /** The block's Strapi `component` documentId (rendered blocks carry this as their id). */
    documentId?: string;
    /** Current locale, forwarded to the component preview so it opens in the same language. */
    locale?: string;
}

/**
 * Page-level Live Preview helper (workaround B1).
 *
 * O2S pages reference blocks via relations, so Strapi can't inline-edit block fields from a
 * *page* preview ("This field comes from a different document"). On hover this frames the block
 * with an outline and shows an "Edit block ↗" button that opens that block's own `component`
 * preview — where inline editing works — in a new tab. The outline makes it obvious which block
 * the button refers to.
 *
 * Hover is tracked by cursor GEOMETRY (pointer within the block's rect), not CSS `:hover`.
 * Strapi injects a fixed, viewport-level highlight overlay (`z-index: 9999`,
 * `pointer-events: auto`) for its own inline-edit highlights; while the cursor is over one of
 * those, our block wrapper never receives `:hover`, so a CSS-driven affordance would flicker off
 * exactly over editable text. Geometry is immune to what's stacked on top.
 *
 * Only shown when actually embedded in the Strapi admin preview iframe (top !== self); the
 * caller additionally gates it on draft mode.
 */
export function BlockEditAffordance({ documentId, locale }: BlockEditAffordanceProps) {
    const [isEmbedded, setIsEmbedded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    // Keyboard users reach the button via Tab; focus reveals it just like hover.
    const [isFocused, setIsFocused] = useState(false);
    // documentId of the entry currently open in the side editor (from the component preview URL).
    const [activeDocumentId, setActiveDocumentId] = useState<string | null>(null);
    // Attached to the outline div; its parent is the block wrapper we measure.
    const anchorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        try {
            setIsEmbedded(window.top !== window.self);
        } catch {
            // Cross-origin access throws → we are inside a foreign frame (the admin).
            setIsEmbedded(true);
        }
        // On a component preview (`/…/preview/component/{documentId}`) the side editor already
        // owns that document, so its own block is inline-editable — no affordance needed. Keyed
        // on documentId (not the route) so blocks/relations pointing to a DIFFERENT document
        // still get their affordance and stay reachable for editing (e.g. nested relations).
        const match = window.location.pathname.match(/\/preview\/component\/([^/?#]+)/);
        setActiveDocumentId(match && match[1] ? decodeURIComponent(match[1]) : null);
    }, []);

    useEffect(() => {
        if (!isEmbedded) {
            return;
        }
        const block = anchorRef.current?.parentElement;
        if (!block) {
            return;
        }

        const onPointerMove = (event: PointerEvent) => {
            const rect = block.getBoundingClientRect();
            setIsHovered(
                event.clientX >= rect.left &&
                    event.clientX <= rect.right &&
                    event.clientY >= rect.top &&
                    event.clientY <= rect.bottom,
            );
        };
        const onPointerLeave = () => setIsHovered(false);

        window.addEventListener('pointermove', onPointerMove, { passive: true });
        document.addEventListener('pointerleave', onPointerLeave);

        return () => {
            window.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerleave', onPointerLeave);
        };
    }, [isEmbedded]);

    const cmsUrl = env('NEXT_PUBLIC_CMS_URL');

    // Suppress only when THIS block is the document already open in the side editor.
    if (!isEmbedded || !documentId || !cmsUrl || documentId === activeDocumentId) {
        return null;
    }

    const href = getComponentPreviewUrl(cmsUrl, documentId, locale);
    // Revealed on hover or keyboard focus, so it's reachable without a pointer.
    const visible = isHovered || isFocused;
    const visibility = visible ? 'opacity-100' : 'opacity-0';

    // Uses React.createElement (not JSX) to match the integration-package convention
    // (see contentful-cms LivePreviewProvider) and avoid the packages' prettier JSX parser.
    // Fragment = hover outline (frames the whole block) + the edit button.
    return React.createElement(
        React.Fragment,
        null,
        // Block outline: non-interactive, drawn inside the block bounds so it never clips.
        React.createElement('div', {
            key: 'outline',
            ref: anchorRef,
            'aria-hidden': true,
            className: `pointer-events-none absolute inset-0 z-40 rounded-md ring-2 ring-inset ring-[#4945ff]/70 transition-opacity duration-150 ${visibility}`,
        }),
        // Edit button: always in the tab order (so keyboard users can reach it), revealed on
        // hover or focus. `pointer-events-none` while hidden keeps it from blocking clicks.
        React.createElement(
            'button',
            {
                key: 'button',
                type: 'button',
                onClick: () => window.open(href, '_blank', 'noopener,noreferrer'),
                onFocus: () => setIsFocused(true),
                onBlur: () => setIsFocused(false),
                className: `absolute top-2 right-2 z-50 rounded-md bg-[#4945ff] px-2 py-1 text-xs font-medium text-white shadow-md ring-1 ring-white/20 transition-opacity duration-150 hover:bg-[#3732cc] ${visibility} ${
                    visible ? 'pointer-events-auto' : 'pointer-events-none'
                }`,
                'aria-label': 'Edit this block in Strapi',
            },
            'Edit block ↗',
        ),
    );
}
