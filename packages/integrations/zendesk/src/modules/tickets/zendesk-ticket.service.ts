import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { Observable, catchError, from, map, of, switchMap, throwError } from 'rxjs';

import { Tickets, Users } from '@o2s/framework/modules';

import {
    type SearchResponse,
    type SearchResultObject,
    type TicketObject,
    type UserObject,
    client,
    listSearchResults,
    listTicketComments,
    showTicket,
    showUser,
} from '../../types';

type ZendeskTicket = TicketObject;
type ZendeskUser = UserObject;

interface ZendeskComment {
    id?: number;
    author_id?: number;
    body?: string;
    created_at?: string;
    public?: boolean;
}

@Injectable()
export class ZendeskTicketService extends Tickets.Service {
    constructor(private readonly usersService: Users.Service) {
        super();

        const baseUrl = process.env.ZENDESK_API_URL;
        const token = process.env.ZENDESK_API_TOKEN;

        if (!baseUrl || !token) {
            throw new Error('Missing required environment variables: ZENDESK_API_URL and ZENDESK_API_TOKEN');
        }

        client.setConfig({
            baseUrl,
            auth: async () => {
                return token;
            },
        });
    }

    getTicket(
        options: Tickets.Request.GetTicketParams,
        authorization?: string,
    ): Observable<Tickets.Model.Ticket | undefined> {
        return this.usersService.getCurrentUser(authorization).pipe(
            switchMap((user) => {
                if (!user?.email) {
                    return throwError(() => new NotFoundException('User email not found'));
                }

                return this.fetchTicket(options.id).pipe(
                    switchMap((ticket) => {
                        return this.fetchUser(ticket.requester_id!).pipe(
                            switchMap((requester) => {
                                if (requester.email !== user.email) {
                                    return of(undefined);
                                }

                                return this.fetchTicketComments(options.id).pipe(
                                    map((comments) => this.mapTicketToModel(ticket, comments)),
                                );
                            }),
                        );
                    }),
                    catchError((error) => {
                        if (error?.status === 404 || error?.message?.includes('404')) {
                            return of(undefined);
                        }
                        return throwError(() => error);
                    }),
                );
            }),
        );
    }

    getTicketList(
        options: Tickets.Request.GetTicketListQuery,
        authorization?: string,
    ): Observable<Tickets.Model.Tickets> {
        return this.usersService.getCurrentUser(authorization).pipe(
            switchMap((user) => {
                if (!user?.email) {
                    return throwError(() => new NotFoundException('User email not found'));
                }

                let searchQuery = `type:ticket requester:${user.email}`;

                if (options.status) {
                    searchQuery += ` status:${options.status.toLowerCase()}`;
                }

                if (options.type) {
                    searchQuery += ` priority:${options.type.toLowerCase()}`;
                }

                if (options.topic) {
                    searchQuery += ` tag:${options.topic.toLowerCase()}`;
                }

                if (options.dateFrom) {
                    searchQuery += ` created>=${new Date(options.dateFrom).toISOString()}`;
                }

                if (options.dateTo) {
                    searchQuery += ` created<=${new Date(options.dateTo).toISOString()}`;
                }

                // Note: Zendesk search api only supports query, sort_by, and sort_order parameters
                // no page/per_page pagination available - using client-side pagination instead
                // Limitation: Only works for datasets with ≤100 results (API's max response size)
                return this.searchTickets(searchQuery).pipe(
                    map((response) => {
                        const allTickets = (response.results || []).map((result: SearchResultObject) => {
                            // Search results contain the ticket object
                            const ticket = result as unknown as ZendeskTicket;
                            return this.mapTicketToModel(ticket);
                        });

                        // Client-side pagination (API doesn't support server-side pagination)
                        const startIndex = options.offset || 0;
                        const endIndex = startIndex + (options.limit || 10);
                        const tickets = allTickets.slice(startIndex, endIndex);

                        return {
                            total: response.count || 0,
                            data: tickets,
                        };
                    }),
                    catchError((error) => {
                        return throwError(() => new Error(`Failed to fetch tickets: ${error.message || error}`));
                    }),
                );
            }),
        );
    }

    createTicket(_data: Tickets.Request.PostTicketBody, _authorization?: string): Observable<Tickets.Model.Ticket> {
        return throwError(() => new NotImplementedException('Creating tickets in Zendesk is not implemented'));
    }

    private fetchTicket(id: string): Observable<ZendeskTicket> {
        return from(
            showTicket({
                path: {
                    ticket_id: Number(id),
                },
            }),
        ).pipe(
            map((response) => {
                if (!response.data?.ticket) {
                    throw new Error('Ticket not found in response');
                }
                return response.data.ticket;
            }),
            catchError((error) => {
                return throwError(() => new Error(`Failed to fetch ticket: ${error.message || error}`));
            }),
        );
    }

    private searchTickets(query: string): Observable<SearchResponse> {
        return from(
            listSearchResults({
                query: {
                    query,
                },
            }),
        ).pipe(
            map((response) => response.data!),
            catchError((error) => {
                return throwError(() => new Error(`Failed to search tickets: ${error.message || error}`));
            }),
        );
    }

    private fetchTicketComments(ticketId: string): Observable<ZendeskComment[]> {
        return from(
            listTicketComments({
                path: {
                    ticket_id: Number(ticketId),
                },
            }),
        ).pipe(
            map((response) => response.data?.comments || []),
            catchError((error) => {
                return throwError(() => new Error(`Failed to fetch ticket comments: ${error.message || error}`));
            }),
        );
    }

    private fetchUser(userId: number): Observable<ZendeskUser> {
        return from(
            showUser({
                path: {
                    user_id: userId,
                },
            }),
        ).pipe(
            map((response) => {
                if (!response.data?.user) {
                    throw new Error('User not found in response');
                }
                return response.data.user;
            }),
            catchError((error) => {
                return throwError(() => new Error(`Failed to fetch user: ${error.message || error}`));
            }),
        );
    }

    private mapTicketToModel(ticket: ZendeskTicket, comments: ZendeskComment[] = []): Tickets.Model.Ticket {
        let status: Tickets.Model.TicketStatus = 'OPEN';
        if (ticket.status === 'closed' || ticket.status === 'solved') {
            status = 'CLOSED';
        } else if (ticket.status === 'pending' || ticket.status === 'hold') {
            status = 'IN_PROGRESS';
        }

        const properties: Tickets.Model.TicketProperty[] = [
            { id: 'subject', value: ticket.subject || '' },
            { id: 'description', value: ticket.description || '' },
        ];

        if (ticket.custom_fields) {
            ticket.custom_fields.forEach((field) => {
                if (field.value !== null && field.value !== undefined) {
                    properties.push({
                        id: `custom_field_${field.id}`,
                        value: String(field.value),
                    });
                }
            });
        }

        const mappedComments = comments.map((comment) => ({
            author: {
                name: `User ${comment.author_id}`,
                email: '',
            },
            date: comment.created_at || '',
            content: comment.body || '',
        }));

        return {
            id: ticket.id?.toString() || '',
            createdAt: ticket.created_at || '',
            updatedAt: ticket.updated_at || '',
            topic: ticket.tags?.[0] || 'general',
            type: ticket.priority || 'normal',
            status,
            properties,
            comments: mappedComments.length > 0 ? mappedComments : undefined,
        };
    }
}
