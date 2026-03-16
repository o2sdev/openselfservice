import { Models as ApiModels } from '@o2s/utils.api-harmonization';
import { Utils } from '@o2s/utils.frontend';

import { Sdk, createBlockMethod } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/user-account.client';
import { URL } from '../api-harmonization/user-account.url';

const API_URL = URL;

export const userAccount = (sdk: Sdk) => ({
    blocks: {
        getUserAccount: (
            query: Request.GetUserAccountBlockQuery,
            headers: ApiModels.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.UserAccountBlock> =>
            createBlockMethod<Model.UserAccountBlock>({
                sdk,
                request: {
                    method: 'get',
                    url: `${API_URL}`,
                    headers,
                    authorization,
                    params: query,
                },
                getDefaultHeaders: Utils.Headers.getApiHeaders,
            }),
    },
});
