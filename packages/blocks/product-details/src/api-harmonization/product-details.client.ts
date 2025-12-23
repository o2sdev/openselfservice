import type { Model } from './product-details.model';

export namespace Request {
    export type GetProductDetailsBlockParams = {
        id: string;
    };

    export type GetProductDetailsBlockQuery = {
        locale?: string;
        includePopularOffers?: boolean;
    };
}

export namespace Response {
    export type GetProductDetailsBlockResponse = Model.ProductDetailsBlock;
}

export type { Model };
