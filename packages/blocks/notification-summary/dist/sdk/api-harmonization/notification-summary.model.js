"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSummaryBlock = exports.NotificationSummaryInfoCard = void 0;
const utils_api_harmonization_1 = require("@o2s/utils.api-harmonization");
class NotificationSummaryInfoCard {
    title;
    icon;
    value;
    description;
    variant;
}
exports.NotificationSummaryInfoCard = NotificationSummaryInfoCard;
class NotificationSummaryBlock extends utils_api_harmonization_1.Models.Block.Block {
    __typename;
    layout;
    infoCards;
}
exports.NotificationSummaryBlock = NotificationSummaryBlock;
//# sourceMappingURL=notification-summary.model.js.map