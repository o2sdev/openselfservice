import { HttpService } from '@nestjs/axios';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs';
import { catchError, concatMap, switchMap } from 'rxjs/operators';
import { SurveyModel } from 'survey-core';

import { Utils } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth, CMS, Tickets } from '@o2s/framework/modules';

import { mapSurveyJS, mapSurveyJsRequest, mapSurveyToTicket } from './surveyjs.mapper';
import { SurveyJSLibraryJsonSchema, SurveyJs, SurveyResult } from './surveyjs.model';
import { SurveyJsQuery, SurveyJsSubmitPayload } from './surveyjs.request';

@Injectable()
export class SurveyjsService {
    private surveyjsHost: string;

    public constructor(
        protected httpClient: HttpService,
        private readonly config: ConfigService,
        private readonly cmsService: CMS.Service,
        private readonly ticketsService: Tickets.Service,
        @Inject(LoggerService) protected readonly logger: LoggerService,
    ) {
        this.surveyjsHost = this.config.get('API_SURVEYJS_BASE_URL') || '';
    }

    public getSurvey(surveyJsQuery: SurveyJsQuery): Observable<SurveyJs> {
        const { code } = surveyJsQuery;
        if (!code) {
            throw new BadRequestException('Survey code is required');
        }

        return this.cmsService.getSurvey({ code }).pipe(
            switchMap((survey) => {
                if (!survey.surveyId) {
                    throw new BadRequestException('Survey has no surveyId');
                }
                const URL = `${this.surveyjsHost}/Survey/getSurvey?surveyId=${survey.surveyId}`;
                return this.httpClient.get<SurveyJSLibraryJsonSchema>(URL).pipe(
                    map(({ data }) => {
                        return mapSurveyJS(data);
                    }),
                );
            }),
            catchError((error) => {
                this.logger.error(`Failed to get survey with code '${code}': ${error.message}`, 'SURVEYJS');
                throw new BadRequestException(`Failed to get survey with code '${code}'`);
            }),
        );
    }

    public validateSurvey(code: string, surveyPayload: SurveyResult): Observable<boolean> {
        return this.getSurvey({ code }).pipe(
            concatMap((survey) => {
                const userSurvey = new SurveyModel(survey.schema);
                userSurvey.data = surveyPayload;
                return of(userSurvey.validate());
            }),
        );
    }

    public submitSurvey(payload: SurveyJsSubmitPayload, authorization?: string): Observable<void> {
        const { code, surveyPayload } = payload;

        return this.cmsService.getSurvey({ code }).pipe(
            switchMap((survey) => {
                const decodedToken = authorization ? Utils.Auth.decodeToken(authorization) : undefined;
                if (!this.hasAccess(survey.requiredRoles, decodedToken)) {
                    this.logger.info('User does not have access to survey');
                    throw new UnauthorizedException('User does not have access to survey');
                }

                return this.validateSurvey(code, surveyPayload).pipe(
                    concatMap((validationResult) => {
                        if (!validationResult) {
                            this.logger.error('Survey payload is not valid.');
                            throw new BadRequestException('Survey payload is not valid');
                        }
                        const userEmail = decodedToken?.email ?? 'anonymous';
                        const submissions: Observable<void>[] = [];

                        for (const destination of survey.submitDestination) {
                            switch (destination) {
                                case 'surveyjs':
                                    submissions.push(this.submitToSurveyJs(surveyPayload, survey.postId, userEmail));
                                    break;
                                case 'tickets':
                                    submissions.push(this.submitToTickets(surveyPayload, authorization));
                                    break;
                            }
                        }

                        if (!submissions.length) {
                            this.logger.info(`No submit destinations specified for survey with code ${code}`);
                            return of(undefined);
                        }

                        return forkJoin(submissions).pipe(
                            switchMap(() => {
                                return of(undefined);
                            }),
                        );
                    }),
                );
            }),
        );
    }

    private submitToSurveyJs(surveyPayload: SurveyResult, postId: string, clientId?: string): Observable<void> {
        if (!surveyPayload || !postId) {
            this.logger.error(
                'Error occurred while submitting survey: SurveyPayload and postId should be specified',
                'SURVEYJS',
            );
            throw new BadRequestException();
        }
        const URL = `${this.surveyjsHost}/Survey/post`;
        const body = mapSurveyJsRequest(surveyPayload, postId, false, clientId);
        return this.httpClient.post<void>(URL, body).pipe(
            concatMap(() => {
                return of(undefined);
            }),
            catchError((error) => {
                this.logger.error(`Error occurred while submitting survey: ${error.message}`);
                throw new BadRequestException('Error occurred while submitting survey.');
            }),
        );
    }

    private submitToTickets(surveyPayload: SurveyResult, authorization?: string): Observable<void> {
        try {
            // Validate required fields before mapping
            if (!surveyPayload.description || !surveyPayload.ticketFormId) {
                this.logger.error('Missing required fields for ticket creation: description and type are required');
                throw new BadRequestException('Description and type are required to create a ticket');
            }

            const ticketData = mapSurveyToTicket(surveyPayload);

            return this.ticketsService.createTicket(ticketData, authorization).pipe(
                map(() => {
                    this.logger.info('Ticket created successfully from survey', 'SURVEYJS');
                    return undefined;
                }),
                catchError((error) => {
                    this.logger.error(`Error occurred while creating ticket from survey: ${error.message}`, 'SURVEYJS');
                    throw new BadRequestException('Error occurred while creating ticket from survey.');
                }),
            );
        } catch (error) {
            this.logger.error(`Error mapping survey to ticket: ${(error as Error).message}`, 'SURVEYJS');
            throw new BadRequestException('Invalid survey data for ticket creation.');
        }
    }

    private hasAccess(requiredRoles: string[], decodedToken?: Auth.Model.Jwt | undefined): boolean {
        const userRoles: string[] = [];
        if (decodedToken) {
            userRoles.push(...Utils.Auth.extractUserRolesFromJwt(decodedToken));
        }
        return !requiredRoles || requiredRoles.every((role) => userRoles.includes(role));
    }
}
