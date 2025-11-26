"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdk = void 0;
const sdk_1 = require("@o2s/framework/sdk");
const ticket_summary_1 = require("./ticket-summary");
const API_URL = (typeof window === 'undefined' ? process.env.NEXT_PUBLIC_API_URL_INTERNAL : process.env.NEXT_PUBLIC_API_URL) ||
    process.env.NEXT_PUBLIC_API_URL;
const internalSdk = (0, sdk_1.getSdk)({
    apiUrl: API_URL,
    logger: {
        level: process.env.NEXT_PUBLIC_LOG_LEVEL,
        format: process.env.NEXT_PUBLIC_LOG_FORMAT,
        colorsEnabled: process.env.NEXT_PUBLIC_LOG_COLORS_ENABLED === 'true',
    },
});
exports.sdk = (0, sdk_1.extendSdk)(internalSdk, {
    blocks: {
        getTicketSummary: (0, ticket_summary_1.ticketSummary)(internalSdk).blocks.getTicketSummary,
    },
});
//# sourceMappingURL=index.js.map