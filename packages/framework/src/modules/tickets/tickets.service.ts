import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as Tickets from './';

@Injectable()
export abstract class TicketService {
    protected constructor(..._services: unknown[]) {}

    abstract getTicket(options: Tickets.Request.GetTicketParams): Observable<Tickets.Model.Ticket | undefined>;
    abstract getTicketList(options: Tickets.Request.GetTicketListQuery): Observable<Tickets.Model.Tickets>;
    abstract createTicket(data: Tickets.Request.PostTicketBody): Observable<Tickets.Model.Ticket>;
}
