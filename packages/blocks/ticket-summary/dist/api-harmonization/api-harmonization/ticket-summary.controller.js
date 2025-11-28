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
exports.TicketSummaryController = void 0;
const common_1 = require("@nestjs/common");
const utils_api_harmonization_1 = require("@o2s/utils.api-harmonization");
const utils_logger_1 = require("@o2s/utils.logger");
const modules_1 = require("@o2s/framework/modules");
const _1 = require("./");
const ticket_summary_request_1 = require("./ticket-summary.request");
const ticket_summary_service_1 = require("./ticket-summary.service");
let TicketSummaryController = class TicketSummaryController {
    service;
    constructor(service) {
        this.service = service;
    }
    getTicketSummaryBlock(headers, query) {
        return this.service.getTicketSummaryBlock(query, headers);
    }
};
exports.TicketSummaryController = TicketSummaryController;
__decorate([
    (0, common_1.Get)(),
    modules_1.Auth.Decorators.Roles({ roles: [] }),
    __param(0, (0, common_1.Headers)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [utils_api_harmonization_1.Models.Headers.AppHeaders, ticket_summary_request_1.GetTicketSummaryBlockQuery]),
    __metadata("design:returntype", void 0)
], TicketSummaryController.prototype, "getTicketSummaryBlock", null);
exports.TicketSummaryController = TicketSummaryController = __decorate([
    (0, common_1.Controller)(_1.URL),
    (0, common_1.UseInterceptors)(utils_logger_1.LoggerService),
    __metadata("design:paramtypes", [ticket_summary_service_1.TicketSummaryService])
], TicketSummaryController);
//# sourceMappingURL=ticket-summary.controller.js.map