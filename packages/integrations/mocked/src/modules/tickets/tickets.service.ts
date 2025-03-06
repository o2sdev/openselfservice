import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';

import { Tickets } from '@o2s/framework/modules';

import { mapTicket, mapTickets } from './tickets.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class TicketService implements Tickets.Service {
    getTicket(options: Tickets.Request.GetTicketParams) {
        return of(mapTicket(options.id)).pipe(responseDelay());
    }

    getTicketList(options: Tickets.Request.GetTicketListQuery) {
        return of(mapTickets(options)).pipe(responseDelay());
    }

    createTicket(_data: Tickets.Request.PostTicketBody) {
        return of(mapTicket('1234567890') as Tickets.Model.Ticket).pipe(responseDelay());
    }
}
