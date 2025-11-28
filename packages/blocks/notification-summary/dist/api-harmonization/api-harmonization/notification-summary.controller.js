"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSummaryController = void 0;
const common_1 = require("@nestjs/common");
const utils_api_harmonization_1 = require("@o2s/utils.api-harmonization");
const utils_logger_1 = require("@o2s/utils.logger");
const modules_1 = require("@o2s/framework/modules");
const _1 = require("./");
const notification_summary_request_1 = require("./notification-summary.request");
const notification_summary_service_1 = require("./notification-summary.service");
let NotificationSummaryController = class NotificationSummaryController {
    service;
    constructor(service) {
        this.service = service;
    }
    getNotificationSummaryBlock(headers, query) {
        return this.service.getNotificationSummaryBlock(query, headers);
    }
};
exports.NotificationSummaryController = NotificationSummaryController;
__decorate([
    (0, common_1.Get)(),
    modules_1.Auth.Decorators.Roles({ roles: [] }),
    __param(0, (0, common_1.Headers)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [utils_api_harmonization_1.Models.Headers.AppHeaders, notification_summary_request_1.GetNotificationSummaryBlockQuery]),
    __metadata("design:returntype", void 0)
], NotificationSummaryController.prototype, "getNotificationSummaryBlock", null);
exports.NotificationSummaryController = NotificationSummaryController = __decorate([
    (0, common_1.Controller)(_1.URL),
    (0, common_1.UseInterceptors)(utils_logger_1.LoggerService),
    __metadata("design:paramtypes", [notification_summary_service_1.NotificationSummaryService])
], NotificationSummaryController);
//# sourceMappingURL=notification-summary.controller.js.map