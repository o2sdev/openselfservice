import { Blocks } from '@o2s/api-harmonization';
import React from 'react';

export interface CategoryProps {
    id: string;
    slug: string[];
    accessToken?: string;
    locale: string;
}

export type CategoryPureProps = CategoryProps &
    Blocks.Category.Model.CategoryBlock & {
        blocks: React.ReactNode;
    };
