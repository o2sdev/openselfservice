import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { DocumentListProps } from './DocumentList.types';

export const DocumentListDynamic = dynamic(() =>
    import('./DocumentList.client').then((module) => module.DocumentListPure),
);

export const DocumentList: React.FC<DocumentListProps> = async ({ id, accessToken, locale, routing, hasPriority }) => {
    try {
        const data = await sdk.blocks.getDocumentList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

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
    } catch (error) {
        console.error('Error fetching DocumentList block', error);
        return null;
    }
};
