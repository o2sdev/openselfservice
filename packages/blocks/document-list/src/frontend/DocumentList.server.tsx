import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/document-list.client';
import { sdk } from '../sdk';

import { DocumentListProps } from './DocumentList.types';

export const DocumentListDynamic = dynamic(() =>
    import('./DocumentList.client').then((module) => module.DocumentListPure),
);

export const DocumentList: React.FC<DocumentListProps> = async ({ id, accessToken, locale, routing, hasPriority }) => {
    let data: Model.DocumentListBlock;
    try {
        data = await sdk.blocks.getDocumentList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching DocumentList block', error);
        return null;
    }

    return (
        <DocumentListDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
