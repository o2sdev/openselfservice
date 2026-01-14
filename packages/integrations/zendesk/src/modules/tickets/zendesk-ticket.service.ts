import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, catchError, firstValueFrom, from, map, of, switchMap, throwError } from 'rxjs';

import { Tickets, Users } from '@o2s/framework/modules';

import {
    type SearchResponse,
    type SearchResultObject,
    type TicketCommentObject,
    type TicketObject,
    type UserObject,
    createTicket,
    listSearchResults,
    listTicketComments,
    searchUsers,
    showTicket,
    showUser,
} from '@/generated/zendesk';
import { client } from '@/generated/zendesk/client.gen';

import { mapTicketToModel } from './zendesk-ticket.mapper';

type ZendeskTicket = TicketObject;
type ZendeskUser = UserObject;

interface ZendeskSearchQuery {
    query: string;
    sort_by?: string;
    sort_order?: string;
    page?: number;
    per_page?: number;
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
            headers: { Authorization: `Basic ${token}` },
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
                        if (!ticket.requester_id) {
                            return of(undefined);
                        }

                        return this.fetchUser(ticket.requester_id!).pipe(
                            switchMap((requester) => {
                                if (requester.email !== user.email) {
                                    return of(undefined);
                                }

                                return this.fetchTicketComments(options.id).pipe(
                                    switchMap((comments) => {
                                        const authorIds = [
                                            ...new Set(comments.map((c) => c.author_id).filter(Boolean)),
                                        ] as number[];
                                        if (authorIds.length === 0) {
                                            return of(mapTicketToModel(ticket, comments));
                                        }
                                        return from(
                                            Promise.all(authorIds.map((id) => firstValueFrom(this.fetchUser(id)))),
                                        ).pipe(
                                            map((authors) => {
                                                const authorMap = new Map(
                                                    authors.filter((a) => a !== undefined).map((a) => [a!.id!, a!]),
                                                );
                                                return mapTicketToModel(ticket, comments, authorMap);
                                            }),
                                        );
                                    }),
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

                const page = options.offset ? Math.floor(options.offset / (options.limit || 10)) + 1 : 1;
                const perPage = options.limit || 10;

                return this.searchTickets(searchQuery, page, perPage).pipe(
                    map((response) => {
                        const tickets = (response.results || []).map((result: SearchResultObject) => {
                            // Search results contain the ticket object
                            const ticket = result as unknown as ZendeskTicket;
                            return mapTicketToModel(ticket);
                        });

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

    createTicket(data: Tickets.Request.PostTicketBody, authorization?: string): Observable<Tickets.Model.Ticket> {
        // Validate input data
        if (!data.title || !data.description || !data.topic) {
            return throwError(() => new Error('Title, description and topic are required'));
        }

        return this.usersService.getCurrentUser(authorization).pipe(
            switchMap((user) => {
                if (!user?.email) {
                    return throwError(() => new NotFoundException('User email not found'));
                }

                // Find corresponding Zendesk user by email so that requester/submitter match the logged-in portal user
                return this.findZendeskUserByEmail(user.email).pipe(
                    switchMap((zendeskUser) => {
                        const topicFieldId = Number(process.env.ZENDESK_TOPIC_FIELD_ID || 0);
                        const customFields: Array<{ id: number; value: string }> = [];

                        // Add topic as custom field if provided and ZENDESK_TOPIC_FIELD_ID is configured
                        if (data.topic && topicFieldId) {
                            customFields.push({
                                id: topicFieldId,
                                value: data.topic,
                            });
                        }

                        return from(
                            createTicket({
                                body: {
                                    ticket: {
                                        subject: data.title,
                                        comment: {
                                            body: data.description,
                                        },
                                        ...(zendeskUser?.id && {
                                            requester_id: zendeskUser.id,
                                            submitter_id: zendeskUser.id,
                                        }),
                                        // Add custom fields if any (e.g., topic)
                                        // Note: Zendesk API accepts {id, value} structure for custom_fields
                                        // TypeScript types require full CustomFieldObject, but API accepts simpler structure
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        ...(customFields.length > 0 && { custom_fields: customFields as any }),
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    } as any,
                                },
                            }),
                        ).pipe(
                            switchMap((response) => {
                                if (!response.data?.ticket) {
                                    return throwError(() => new Error('Failed to create ticket in Zendesk'));
                                }

                                const createdTicket = response.data.ticket;

                                // Fetch ticket comments to ensure complete data
                                return this.fetchTicketComments(createdTicket.id!.toString()).pipe(
                                    switchMap((comments) => {
                                        // Get unique author IDs from comments
                                        const authorIds = [
                                            ...new Set(comments.map((c) => c.author_id).filter(Boolean)),
                                        ] as number[];

                                        if (authorIds.length === 0) {
                                            return of(mapTicketToModel(createdTicket, comments));
                                        }

                                        // Fetch all comment authors
                                        return from(
                                            Promise.all(authorIds.map((id) => firstValueFrom(this.fetchUser(id)))),
                                        ).pipe(
                                            map((authors) => {
                                                const authorMap = new Map(
                                                    authors.filter((a) => a !== undefined).map((a) => [a!.id!, a!]),
                                                );
                                                return mapTicketToModel(createdTicket, comments, authorMap);
                                            }),
                                        );
                                    }),
                                );
                            }),
                            catchError((error) => {
                                return throwError(
                                    () => new Error(`Failed to create ticket: ${error.message || error}`),
                                );
                            }),
                        );
                    }),
                );
            }),
        );
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

    private searchTickets(query: string, page: number, perPage: number): Observable<SearchResponse> {
        return from(
            listSearchResults({
                query: {
                    query,
                    page,
                    per_page: perPage,
                } as ZendeskSearchQuery,
            }),
        ).pipe(
            map((response) => {
                if (!response.data) {
                    throw new Error('Search response contains no data');
                }
                return response.data;
            }),
            catchError((error) => {
                return throwError(() => new Error(`Failed to search tickets: ${error.message || error}`));
            }),
        );
    }

    private fetchTicketComments(ticketId: string): Observable<TicketCommentObject[]> {
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

    private findZendeskUserByEmail(email: string): Observable<ZendeskUser | undefined> {
        return from(
            searchUsers({
                query: {
                    query: email,
                },
            }),
        ).pipe(
            map((response) => {
                // Search for exact email match
                const users = response.data?.users || [];
                const matchedUser = users.find((u) => u.email === email);
                return matchedUser;
            }),
            catchError(() => {
                // If search fails, return undefined (ticket will be created without requester/submitter ids)
                return of(undefined);
            }),
        );
    }
}
