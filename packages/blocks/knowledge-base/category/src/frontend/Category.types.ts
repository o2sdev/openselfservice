import { defineRouting } from 'next-intl/routing';
import React from 'react';

import type { Models } from '@o2s/framework/modules';
import { CMS } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/category.client';

export interface CategoryProps extends Models.BlockProps.BlockWithSlugProps<ReturnType<typeof defineRouting>> {
    renderBlocks: (blocks: CMS.Model.Page.SlotBlock[], slug: string[]) => React.ReactNode;
}

export type CategoryPureProps = CategoryProps &
    Model.CategoryBlock & {
        blocks: React.ReactNode;
    };

export type CategoryRendererProps = Omit<CategoryProps, ''>;

export interface CategoryBlocksProps {
    components?: CMS.Model.CategoryBlock.CategoryBlock['components'];
    slug: string[];
    renderBlocks: (blocks: CMS.Model.Page.SlotBlock[], slug: string[]) => React.ReactNode;
}
