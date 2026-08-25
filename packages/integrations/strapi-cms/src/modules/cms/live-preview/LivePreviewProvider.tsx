'use client';

import { env } from 'next-runtime-env';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

/**
 * Public postMessage protocol exposed by Strapi's Live Preview (documented, stable).
 * @see https://docs.strapi.io/cms/features/preview
 */
const PUBLIC_EVENTS = {
    PREVIEW_READY: 'previewReady',
    STRAPI_UPDATE: 'strapiUpdate',
    STRAPI_SCRIPT: 'strapiScript',
} as const;

interface LivePreviewProviderProps {
    children: ReactNode;
    /** Kept for cross-integration prop parity (Contentful uses these); unused for Strapi. */
    locale?: string;
    enableInspectorMode?: boolean;
    /** True in draft mode — enables the Strapi preview handshake. */
    enableLiveUpdates?: boolean;
}

/**
 * Strapi Live Preview bridge.
 *
 * When rendered inside the Strapi admin preview iframe (draft mode), it:
 *  1. posts `previewReady` so Strapi sends its preview script,
 *  2. injects that `strapiScript` into <head> — the script decodes our Content Source Maps
 *     and powers highlight + click-to-edit,
 *  3. calls `router.refresh()` on `strapiUpdate` so saves re-render with fresh draft data.
 *
 * Field-level identity travels in-band via stega (encoded on the API Harmonization server), so
 * there is no inspector/data-attribute wiring here — see `useInspector` (a no-op for Strapi).
 */
export function LivePreviewProvider({ children, enableLiveUpdates }: LivePreviewProviderProps) {
    const router = useRouter();

    useEffect(() => {
        // Only wire up in preview/draft mode.
        if (!enableLiveUpdates) {
            return;
        }

        // `strapiScript` is evaluated in this page, so we must know exactly which origin to
        // trust. Fail closed: without a configured CMS origin we never wire up the handshake,
        // so a message from an untrusted embedder can never inject a script.
        const cmsUrl = env('NEXT_PUBLIC_CMS_URL');
        let parentOrigin: string;
        try {
            parentOrigin = new URL(cmsUrl!).origin;
        } catch {
            return;
        }

        // Strapi may re-send its script on re-handshakes; inject it only once.
        let scriptInjected = false;

        const handleMessage = (event: MessageEvent) => {
            // Only trust the Strapi admin: message must come from our parent frame and its origin.
            if (event.source !== window.parent || event.origin !== parentOrigin) {
                return;
            }

            const data = event.data;
            if (!data || typeof data !== 'object') {
                return;
            }

            if (data.type === PUBLIC_EVENTS.STRAPI_UPDATE) {
                router.refresh();
            } else if (data.type === PUBLIC_EVENTS.STRAPI_SCRIPT && typeof data.payload?.script === 'string') {
                if (scriptInjected) {
                    return;
                }
                scriptInjected = true;
                const script = document.createElement('script');
                script.textContent = data.payload.script;
                document.head.appendChild(script);
            }
        };

        window.addEventListener('message', handleMessage);
        // Let Strapi know the frontend is ready to receive the preview script; target the
        // trusted admin origin rather than a wildcard.
        window.parent?.postMessage({ type: PUBLIC_EVENTS.PREVIEW_READY }, parentOrigin);

        return () => window.removeEventListener('message', handleMessage);
    }, [router, enableLiveUpdates]);

    // Return children directly (no JSX) — matches the integration-package convention.
    return children;
}
