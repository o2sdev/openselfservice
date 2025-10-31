import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import axios from 'axios';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';

import { Tickets, Users } from '@o2s/framework/modules';

interface ZendeskTicket {
    id: number;
    created_at: string;
    updated_at: string;
    subject: string;
    description: string;
    status: string;
    priority: string;
    requester_id: number;
    submitter_id: number;
    assignee_id: number;
    tags: string[];
    custom_fields: Array<{ id: number; value: string }>;
    via: { channel: string };
    type: string;
}

interface ZendeskSearchResponse {
    count: number;
    next_page?: string;
    previous_page?: string;
    results: ZendeskTicket[];
}

interface ZendeskTicketResponse {
    ticket: ZendeskTicket;
}

interface ZendeskComment {
    id: number;
    author_id: number;
    body: string;
    created_at: string;
    public: boolean;
}

interface ZendeskCommentsResponse {
    comments: ZendeskComment[];
}

interface ZendeskUser {
    id: number;
    name: string;
    email: string;
    photo?: { content_url: string };
}

@Injectable()
export class ZendeskTicketService extends Tickets.Service {
    private readonly apiUrl: string;
    private readonly apiToken: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly usersService: Users.Service,
    ) {
        super();
        this.apiUrl = process.env.ZENDESK_API_URL || '';
        this.apiToken = process.env.ZENDESK_API_TOKEN || '';
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
                        return this.fetchUser(ticket.requester_id).pipe(
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
                        if (axios.isAxiosError(error) && error.response?.status === 404) {
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

                const page = options.offset ? Math.floor(options.offset / (options.limit || 10)) + 1 : 1;
                const perPage = options.limit || 10;

                return this.searchTickets(searchQuery, page, perPage).pipe(
                    map((response) => {
                        const tickets = response.results.map((ticket) => this.mapTicketToModel(ticket));

                        return {
                            total: response.count,
                            data: tickets,
                        };
                    }),
                    catchError((error) => {
                        if (axios.isAxiosError(error)) {
                            return throwError(() => new Error(`Failed to fetch ticket: ${error.message}`));
                        }
                        return throwError(() => error);
                    }),
                );
            }),
        );
    }

    createTicket(_data: Tickets.Request.PostTicketBody, _authorization?: string): Observable<Tickets.Model.Ticket> {
        return throwError(() => new NotImplementedException('Creating tickets in Zendesk is not implemented'));
    }

    private fetchTicket(id: string): Observable<ZendeskTicket> {
        return this.httpService
            .get<ZendeskTicketResponse>(`${this.apiUrl}/api/v2/tickets/${id}`, {
                headers: {
                    Authorization: `Basic ${this.apiToken}`,
                    'Content-Type': 'application/json',
                },
            })
            .pipe(
                map((response) => response.data.ticket),
                catchError((error) => {
                    if (axios.isAxiosError(error)) {
                        return throwError(() => new Error(`Failed to fetch ticket: ${error.message}`));
                    }
                    return throwError(() => error);
                }),
            );
    }

    private searchTickets(query: string, page: number, perPage: number): Observable<ZendeskSearchResponse> {
        return this.httpService
            .get<ZendeskSearchResponse>(`${this.apiUrl}/api/v2/search.json`, {
                headers: {
                    Authorization: `Basic ${this.apiToken}`,
                    'Content-Type': 'application/json',
                },
                params: {
                    query,
                    page,
                    per_page: perPage,
                },
            })
            .pipe(
                map((response) => response.data),
                catchError((error) => {
                    if (axios.isAxiosError(error)) {
                        return throwError(() => new Error(`Failed to search tickets: ${error.message}`));
                    }
                    return throwError(() => error);
                }),
            );
    }

    private fetchTicketComments(ticketId: string): Observable<ZendeskComment[]> {
        return this.httpService
            .get<ZendeskCommentsResponse>(`${this.apiUrl}/api/v2/tickets/${ticketId}/comments`, {
                headers: {
                    Authorization: `Basic ${this.apiToken}`,
                    'Content-Type': 'application/json',
                },
            })
            .pipe(
                map((response) => response.data.comments),
                catchError((error) => {
                    if (axios.isAxiosError(error)) {
                        return throwError(() => new Error(`Failed to fetch ticket comments: ${error.message}`));
                    }
                    return throwError(() => error);
                }),
            );
    }

    private fetchUser(userId: number): Observable<ZendeskUser> {
        return this.httpService
            .get<{ user: ZendeskUser }>(`${this.apiUrl}/api/v2/users/${userId}`, {
                headers: {
                    Authorization: `Basic ${this.apiToken}`,
                    'Content-Type': 'application/json',
                },
            })
            .pipe(
                map((response) => response.data.user),
                catchError((error) => {
                    if (axios.isAxiosError(error)) {
                        return throwError(() => new Error(`Failed to fetch user: ${error.message}`));
                    }
                    return throwError(() => error);
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
            { id: 'subject', value: ticket.subject },
            { id: 'description', value: ticket.description || '' },
        ];

        if (ticket.custom_fields) {
            ticket.custom_fields.forEach((field) => {
                if (field.value) {
                    properties.push({
                        id: `custom_field_${field.id}`,
                        value: field.value,
                    });
                }
            });
        }

        const mappedComments = comments.map((comment) => ({
            author: {
                name: `User ${comment.author_id}`,
                email: '',
            },
            date: comment.created_at,
            content: comment.body,
        }));

        return {
            id: ticket.id.toString(),
            createdAt: ticket.created_at,
            updatedAt: ticket.updated_at,
            topic: ticket.tags[0] || 'general',
            type: ticket.priority || 'normal',
            status,
            properties,
            comments: mappedComments.length > 0 ? mappedComments : undefined,
        };
    }
}
