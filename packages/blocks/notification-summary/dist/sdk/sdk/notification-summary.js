"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationSummary = void 0;
const utils_frontend_1 = require("@o2s/utils.frontend");
const notification_summary_client_1 = require("../api-harmonization/notification-summary.client");
const API_URL = notification_summary_client_1.URL;
const notificationSummary = (sdk) => ({
    blocks: {
        getNotificationSummary: (query, headers, authorization) => sdk.makeRequest({
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
exports.notificationSummary = notificationSummary;
//# sourceMappingURL=notification-summary.js.map