import { setRequestLocale } from 'next-intl/server';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import React from 'react';

import { CMS } from '@o2s/framework/modules';

import { GlobalProvider } from '@o2s/ui/providers/GlobalProvider';

import { AppSpinner } from '@o2s/ui/components/Feedback/AppSpinner';

import { Toaster } from '@o2s/ui/elements/toaster';

import { sdk } from '@/api/sdk';

import { auth } from '@/auth';

import { renderBlocks } from '@/blocks/renderBlocks';

interface Props {
    params: Promise<{
        locale: string;
        documentId: string;
    }>;
    searchParams: Promise<{
        type?: string;
    }>;
}

/**
 * Live Preview route for a single CMS block (component).
 *
 * Strapi inline edit-in-place only works when the previewed document owns the field. O2S pages
 * reference blocks via relations, so previewing a page can't inline-edit block fields. This
 * route renders one block by its `component` documentId — the Strapi preview handler targets it
 * for `api::component.component` entries and passes the block `?type=` derived from the
 * dynamiczone. Reached in draft mode (via /api/enable-draft), so the block fetches encoded draft
 * content and click-to-edit maps back to the very document open in the side editor.
 */
export default async function ComponentPreviewPage({ params, searchParams }: Props) {
    const { locale, documentId } = await params;
    const { type } = await searchParams;

    if (!type) {
        notFound();
    }

    setRequestLocale(locale);

    const headersList = await headers();
    const session = await auth();

    const init = await sdk.modules.getInit(
        {
            referrer: headersList.get('referrer') || (process.env.BASE_URL as string),
        },
        { 'x-locale': locale },
        session?.accessToken,
    );

    const blocks = await renderBlocks(
        [{ id: documentId, __typename: type, layout: undefined } as unknown as CMS.Model.Page.SlotBlock],
        [],
    );

    return (
        <body>
            <GlobalProvider
                config={init}
                labels={init.labels}
                locale={locale}
                themes={init.themes}
                user={{ orgId: session?.user?.customer?.id }}
                cartStorageKey={process.env.CART_ID_LOCAL_STORAGE_KEY}
            >
                <main className="py-6 px-4 md:px-6 ml-auto mr-auto w-full md:max-w-7xl flex flex-col gap-6">
                    {blocks}
                </main>
                <Toaster />
                <AppSpinner />
            </GlobalProvider>
        </body>
    );
}
