import { Components, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

const API_URL = Components.Faq.URL;

export const faq = (sdk: Sdk) => ({
    components: {
        getFaq: (
            query: Components.Faq.Request.GetFaqComponentQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Components.Faq.Model.FaqComponent> =>
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
