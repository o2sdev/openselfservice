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
exports.TicketSummaryService = void 0;
const common_1 = require("@nestjs/common");
const configs_integrations_1 = require("@o2s/configs.integrations");
const rxjs_1 = require("rxjs");
const ticket_summary_mapper_1 = require("./ticket-summary.mapper");
let TicketSummaryService = class TicketSummaryService {
    cmsService;
    ticketService;
    constructor(cmsService, ticketService) {
        this.cmsService = cmsService;
        this.ticketService = ticketService;
    }
    getTicketSummaryBlock(query, headers) {
        const cms = this.cmsService.getTicketSummaryBlock({ ...query, locale: headers['x-locale'] });
        const tickets = this.ticketService.getTicketList({
            limit: 1000,
            offset: 0,
            locale: headers['x-locale'],
        });
        return (0, rxjs_1.forkJoin)([tickets, cms]).pipe((0, rxjs_1.map)(([tickets, cms]) => (0, ticket_summary_mapper_1.mapTicketSummary)(cms, tickets, headers['x-locale'])));
    }
};
exports.TicketSummaryService = TicketSummaryService;
exports.TicketSummaryService = TicketSummaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configs_integrations_1.CMS.Service, configs_integrations_1.Tickets.Service])
], TicketSummaryService);
//# sourceMappingURL=ticket-summary.service.js.map