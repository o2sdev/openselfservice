import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/document-list.client';

export type DocumentListProps = Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>>;

export type DocumentListPureProps = DocumentListProps & Model.DocumentListBlock;

export type DocumentListRendererProps = Omit<DocumentListProps, ''> & {
    slug: string[];
};
