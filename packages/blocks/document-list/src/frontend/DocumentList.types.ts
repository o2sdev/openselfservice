import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/document-list.client';

export interface DocumentListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
}

export type DocumentListPureProps = DocumentListProps & Model.DocumentListBlock;

export type DocumentListRendererProps = Omit<DocumentListProps, ''> & {
    slug: string[];
};
