import { Blocks, Headers } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Blocks.Surveyjs.URL;

export const surveyJSBlock = (sdk: Sdk) => ({
    blocks: {
        getSurveyjsBlock: (
            query: Blocks.Surveyjs.Request.GetSurveyjsBlockQuery,
            headers: Headers.AppHeaders,
            authorization: string,
        ): Promise<Blocks.Surveyjs.Model.SurveyjsBlock> =>
            sdk.makeRequest({
                method: 'get',
                url: `${API_URL}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    Authorization: `Bearer ${authorization}`,
                },
                params: query,
            }),
    },
});
