import { Utils } from '@o2s/utils.frontend';

import { AppHeaders } from '@o2s/framework/headers';
import { Sdk } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/document-list.client';
import { URL } from '../api-harmonization/document-list.url';

const API_URL = URL;

export const documentList = (sdk: Sdk) => ({
    blocks: {
        getDocumentList: (
            query: Request.GetDocumentListBlockQuery,
            headers: AppHeaders,
            authorization?: string,
        ): Promise<Model.DocumentListBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params: query,
            }),
    },
});
