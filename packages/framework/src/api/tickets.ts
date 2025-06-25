import { Model, Request } from '@/modules/tickets';

import { RequestMethod } from '../sdk';

const API_URL = '/tickets';

export const getTicket =
    (makeRequest: RequestMethod) =>
    (params: Request.GetTicketParams, authorization: string): Promise<Model.Ticket> =>
        makeRequest({
            method: 'get',
            url: `${API_URL}/${params.id}`,
            headers: {
                Authorization: `Bearer ${authorization}`,
            },
        });

export const getTickets =
    (makeRequest: RequestMethod) =>
    (query: Request.GetTicketParams, authorization: string): Promise<Model.Tickets> =>
        makeRequest({
            method: 'get',
            url: API_URL,
            headers: {
                Authorization: `Bearer ${authorization}`,
            },
            params: query,
        });

export const createTicket =
    (makeRequest: RequestMethod) =>
    (body: Request.PostTicketBody, authorization: string): Promise<Model.Ticket> =>
        makeRequest({
            method: 'post',
            url: API_URL,
            headers: {
                Authorization: `Bearer ${authorization}`,
            },
            data: body,
        });
