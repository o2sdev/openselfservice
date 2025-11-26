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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSummaryService = void 0;
const common_1 = require("@nestjs/common");
const configs_integrations_1 = require("@o2s/configs.integrations");
const rxjs_1 = require("rxjs");
const notification_summary_mapper_1 = require("./notification-summary.mapper");
let NotificationSummaryService = class NotificationSummaryService {
    cmsService;
    notificationService;
    constructor(cmsService, notificationService) {
        this.cmsService = cmsService;
        this.notificationService = notificationService;
    }
    getNotificationSummaryBlock(query, headers) {
        const cms = this.cmsService.getNotificationSummaryBlock({ ...query, locale: headers['x-locale'] });
        const notifications = this.notificationService.getNotificationList({
            limit: 1000,
            offset: 0,
            locale: headers['x-locale'],
        });
        return (0, rxjs_1.forkJoin)([notifications, cms]).pipe((0, rxjs_1.map)(([notifications, cms]) => (0, notification_summary_mapper_1.mapNotificationSummary)(cms, notifications, headers['x-locale'])));
    }
};
exports.NotificationSummaryService = NotificationSummaryService;
exports.NotificationSummaryService = NotificationSummaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configs_integrations_1.CMS.Service, configs_integrations_1.Notifications.Service])
], NotificationSummaryService);
//# sourceMappingURL=notification-summary.service.js.map