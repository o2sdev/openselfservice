import { CMS } from '@o2s/configs.integrations';

import * as Model from './recommended-products.model';

export const mapRecommendedProducts = (
    cms: CMS.Model.RecommendedProductsBlock.RecommendedProductsBlock,
    products: Model.ProductSummary[],
    _locale: string,
): Model.RecommendedProductsBlock => {
    const labels: Model.Labels = {
        title: cms.labels?.title,
        detailsLabel: cms.labels?.detailsLabel,
    };

    return {
        __typename: 'RecommendedProductsBlock',
        id: cms.id,
        products,
        labels,
    };
};
