import { Sdk } from '@o2s/framework/sdk';

const API_URL = '/notifications';

export const extend = (sdk: Sdk) => ({
    someNewEndpoint: (authorization: string): Promise<string> =>
        sdk.makeRequest({
            method: 'patch',
            url: `${API_URL}`,
            headers: {
                Authorization: `Bearer ${authorization}`,
            },
        }),
});
