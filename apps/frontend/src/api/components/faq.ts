import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Blocks.Faq.URL;

export const faq = (sdk: Sdk) => ({
    blocks: {
        getFaq: (
            query: Blocks.Faq.Request.GetFaqComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.Faq.Model.FaqComponent> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});
