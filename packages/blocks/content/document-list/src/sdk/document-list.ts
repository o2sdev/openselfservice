import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/document-list.client';
import { URL } from '../api-harmonization/document-list.url';

const API_URL = URL;

export const documentList = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getDocumentList: (
                query: Request.GetDocumentListBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.DocumentListBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
