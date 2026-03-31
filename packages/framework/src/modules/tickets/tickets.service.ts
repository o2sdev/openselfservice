import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as Tickets from './';

/**
 * Abstract ticket service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
@Injectable()
export abstract class TicketService {
    protected constructor(..._services: unknown[]) {}

    /** Returns a single ticket by id. */
    abstract getTicket(
        options: Tickets.Request.GetTicketParams,
        authorization?: string,
    ): Observable<Tickets.Model.Ticket | undefined>;
    /** Ticket list with pagination and filters (topic, type, status, dates, search, priority). */
    abstract getTicketList(
        options: Tickets.Request.GetTicketListQuery,
        authorization?: string,
    ): Observable<Tickets.Model.Tickets>;
    /** Creates a new ticket. */
    abstract createTicket(
        data: Tickets.Request.PostTicketBody,
        authorization?: string,
    ): Observable<Tickets.Model.Ticket>;
}
