"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketSummaryBlock = exports.TicketSummaryInfoCard = void 0;
const utils_api_harmonization_1 = require("@o2s/utils.api-harmonization");
class TicketSummaryInfoCard {
    title;
    icon;
    value;
    description;
    variant;
}
exports.TicketSummaryInfoCard = TicketSummaryInfoCard;
class TicketSummaryBlock extends utils_api_harmonization_1.Models.Block.Block {
    __typename;
    layout;
    infoCards;
}
exports.TicketSummaryBlock = TicketSummaryBlock;
//# sourceMappingURL=ticket-summary.model.js.map