import { AppHeaders } from '@o2s/framework/headers';
import { Sdk, createBlockRequest } from '@o2s/framework/sdk';

import { Model, Request } from '../api-harmonization/user-account.client';
import { URL } from '../api-harmonization/user-account.url';

const API_URL = URL;

export const userAccount = (sdk: Sdk) => {
    const request = createBlockRequest(sdk);

    return {
        blocks: {
            getUserAccount: (
                query: Request.GetUserAccountBlockQuery,
                headers: AppHeaders,
                authorization?: string,
            ): Promise<Model.UserAccountBlock> =>
                request({
                    url: API_URL,
                    params: query,
                    headers,
                    authorization,
                }),
        },
    };
};
