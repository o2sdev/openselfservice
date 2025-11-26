import { Utils } from '@o2s/utils.frontend';
import { URL } from '../api-harmonization/ticket-summary.client';
const API_URL = URL;
export const ticketSummary = (sdk) => ({
    blocks: {
        getTicketSummary: (query, headers, authorization) => sdk.makeRequest({
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
