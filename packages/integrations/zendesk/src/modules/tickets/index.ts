import { Tickets } from '@o2s/framework/modules';

export * from './zendesk-ticket.service';
export { ZendeskTicketService as Service } from './zendesk-ticket.service';
export { ZendeskTicketModule as Module } from './zendesk-ticket.module';

export import Request = Tickets.Request;
export import Model = Tickets.Model;
