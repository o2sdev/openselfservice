"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticketSummary = void 0;
const utils_frontend_1 = require("@o2s/utils.frontend");
const ticket_summary_client_1 = require("../api-harmonization/ticket-summary.client");
const API_URL = ticket_summary_client_1.URL;
const ticketSummary = (sdk) => ({
    blocks: {
        getTicketSummary: (query, headers, authorization) => sdk.makeRequest({
            method: 'get',
            url: `${API_URL}`,
            headers: {
                ...utils_frontend_1.Utils.Headers.getApiHeaders(),
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
exports.ticketSummary = ticketSummary;
//# sourceMappingURL=ticket-summary.js.map