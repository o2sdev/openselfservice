import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Observable, catchError, firstValueFrom, forkJoin, from, map, of, switchMap, throwError } from 'rxjs';

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

import { toCustomFields } from './zendesk-field.mapper';
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
    private readonly baseUrl: string;
    private readonly authToken: string;

    constructor(
        private readonly usersService: Users.Service,
        private readonly httpClient: HttpService,
    ) {
        super();

        this.baseUrl = process.env.ZENDESK_API_URL!;
        this.authToken = process.env.ZENDESK_API_TOKEN!;

        if (!this.baseUrl || !this.authToken) {
            throw new Error('Missing required environment variables: ZENDESK_API_URL and ZENDESK_API_TOKEN');
        }

        client.setConfig({
            baseUrl: this.baseUrl,
            headers: { Authorization: `Basic ${this.authToken}` },
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

                if (options.topic) {
                    searchQuery += ` tags:${options.topic.toLowerCase()}`;
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
        // Note: subject (title) is optional in Zendesk API, but description (as first comment body) and type (ticket form ID) are required
        if (!data.description || !data.type) {
            return throwError(() => new BadRequestException('Description and type are required'));
        }

        return this.usersService.getCurrentUser(authorization).pipe(
            switchMap((user) => {
                if (!user?.email) {
                    return throwError(() => new NotFoundException('User email not found'));
                }

                // Upload attachments first if they exist
                const uploadTokens =
                    data.attachments && data.attachments.length > 0
                        ? forkJoin(
                              data.attachments.map((attachment) =>
                                  this.uploadAttachment(
                                      attachment.filename,
                                      attachment.content,
                                      attachment.contentType,
                                  ),
                              ),
                          )
                        : of([]);

                // Find corresponding Zendesk user by email so that requester/submitter match the logged-in portal user
                return uploadTokens.pipe(
                    switchMap((uploadTokens) =>
                        this.findZendeskUserByEmail(user.email!).pipe(
                            switchMap((zendeskUser) => {
                                // Map type (ticket form ID) to topic value
                                let topicValue: string;
                                const contactFormId = process.env.ZENDESK_CONTACT_FORM_ID
                                    ? Number(process.env.ZENDESK_CONTACT_FORM_ID)
                                    : undefined;
                                const complaintFormId = process.env.ZENDESK_COMPLAINT_FORM_ID
                                    ? Number(process.env.ZENDESK_COMPLAINT_FORM_ID)
                                    : undefined;
                                const deviceMaintenanceFormId = process.env.ZENDESK_REQUEST_DEVICE_MAINTENANCE_FORM_ID
                                    ? Number(process.env.ZENDESK_REQUEST_DEVICE_MAINTENANCE_FORM_ID)
                                    : undefined;

                                if (data.type === contactFormId) {
                                    topicValue = 'CONTACT_US';
                                } else if (data.type === complaintFormId) {
                                    topicValue = 'COMPLAINT';
                                } else if (data.type === deviceMaintenanceFormId) {
                                    topicValue = 'REQUEST_DEVICE_MAINTENANCE';
                                } else {
                                    return throwError(
                                        () =>
                                            new BadRequestException(
                                                `Invalid type: ${data.type}. Must match one of the configured form IDs.`,
                                            ),
                                    );
                                }

                                // Add topic to fields before mapping
                                const fieldsWithTopic = {
                                    ...(data.fields || {}),
                                    topic: topicValue,
                                };

                                // Map fields to Zendesk custom fields format using field mapper
                                const customFields = toCustomFields(fieldsWithTopic);

                                // Validate that topic custom field was successfully mapped
                                // This ensures ZENDESK_TOPIC_FIELD_ID is configured and prevents creating tickets
                                // that cannot be read back (mapTicketToModel requires topic field)
                                const topicFieldId = process.env.ZENDESK_TOPIC_FIELD_ID
                                    ? Number(process.env.ZENDESK_TOPIC_FIELD_ID)
                                    : undefined;
                                if (!topicFieldId || !customFields.some((f) => f.id === topicFieldId)) {
                                    return throwError(
                                        () =>
                                            new InternalServerErrorException(
                                                'ZENDESK_TOPIC_FIELD_ID is required to map topic.',
                                            ),
                                    );
                                }

                                return from(
                                    createTicket({
                                        body: {
                                            ticket: {
                                                // Subject is optional in Zendesk API
                                                ...(data.title && { subject: data.title }),
                                                comment: {
                                                    body: data.description,
                                                    ...(uploadTokens.length > 0 && { uploads: uploadTokens }),
                                                },
                                                ticket_form_id: data.type,
                                                ...(zendeskUser?.id && {
                                                    requester_id: zendeskUser.id,
                                                    submitter_id: zendeskUser.id,
                                                }),
                                                // Add custom fields if any
                                                // Note: Zendesk API accepts {id, value} structure for custom_fields
                                                // TypeScript types require full CustomFieldObject, but API accepts simpler structure
                                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                                ...(customFields.length > 0 && { custom_fields: customFields as any }),
                                            },
                                        },
                                    }),
                                ).pipe(
                                    switchMap((response) => {
                                        if (!response.data?.ticket) {
                                            return throwError(
                                                () =>
                                                    new InternalServerErrorException(
                                                        'Failed to create ticket in Zendesk',
                                                    ),
                                            );
                                        }

                                        const createdTicket = response.data.ticket;

                                        return of(mapTicketToModel(createdTicket));
                                    }),
                                    catchError((error) => {
                                        return throwError(
                                            () =>
                                                new InternalServerErrorException(
                                                    `Failed to create ticket: ${error.message || error}`,
                                                ),
                                        );
                                    }),
                                );
                            }),
                        ),
                    ),
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
                // Search for exact email match (case-insensitive)
                const users = response.data?.users || [];
                const normalizedEmail = email.toLowerCase();
                const matchedUser = users.find((u) => u.email?.toLowerCase() === normalizedEmail);
                return matchedUser;
            }),
            catchError((error) => {
                // Treat 404 as "user not found" (return undefined so ticket is created without requester/submitter ids)
                if (error?.status === 404 || error?.message?.includes('404')) {
                    return of(undefined);
                }
                // Propagate other errors (network, auth, rate-limit, etc.)
                return throwError(() => new Error(`Failed to search users: ${error.message || error}`));
            }),
        );
    }

    /**
     * Uploads an attachment to Zendesk using direct HTTP request.
     * The generated SDK doesn't handle binary uploads properly, so we use HttpService directly.
     *
     * @param filename - Name of the file to upload
     * @param content - Binary content of the file as Buffer
     * @param contentType - MIME type of the file (e.g., 'application/pdf')
     * @returns Observable with the upload token from Zendesk API
     */
    private uploadAttachment(filename: string, content: Buffer, contentType: string): Observable<string> {
        const uploadUrl = `${this.baseUrl}/api/v2/uploads?filename=${encodeURIComponent(filename)}`;

        return this.httpClient
            .post(uploadUrl, content, {
                headers: {
                    Authorization: `Basic ${this.authToken}`,
                    'Content-Type': contentType,
                },
            })
            .pipe(
                map((response) => {
                    if (!response.data?.upload?.token) {
                        throw new Error('Upload token not received from Zendesk API');
                    }
                    return response.data.upload.token;
                }),
                catchError((error) => {
                    const errorMessage =
                        error.response?.data?.error?.description ||
                        error.response?.data?.description ||
                        error.message ||
                        'Unknown error during file upload';
                    return throwError(() => new Error(`Failed to upload attachment: ${errorMessage}`));
                }),
            );
    }
}
