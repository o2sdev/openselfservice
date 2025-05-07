import { HttpService } from '@nestjs/axios';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '@o2s/utils.logger';
import { Observable, forkJoin, of } from 'rxjs';
import { map } from 'rxjs';
import { catchError, concatMap, switchMap } from 'rxjs/operators';
import { SurveyModel } from 'survey-core';

import { Auth, CMS } from '@o2s/framework/modules';

import { decodeAuthorizationToken, extractUserRolesFromJwt } from '@o2s/api-harmonization/utils/auth';

import { mapSurveyJS, mapSurveyJsRequest } from './surveyjs.mapper';
import { SurveyJSLibraryJsonSchema, SurveyJs, SurveyResult } from './surveyjs.model';
import { SurveyJsQuery, SurveyJsSubmitPayload } from './surveyjs.request';

@Injectable()
export class SurveyjsService {
    private surveyjsHost: string;

    public constructor(
        protected httpClient: HttpService,
        private readonly config: ConfigService,
        private readonly cmsService: CMS.Service,
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

    public submitSurvey(payload: SurveyJsSubmitPayload, authorization: string | undefined): Observable<void> {
        return this.cmsService.getSurvey({ code: payload.code }).pipe(
            switchMap((survey) => {
                const decodedToken = authorization ? decodeAuthorizationToken(authorization) : undefined;
                if (!this.hasAccess(survey.requiredRoles, decodedToken)) {
                    this.logger.info('User does not have access to survey');
                    throw new UnauthorizedException('User does not have access to survey');
                }
                return this.validateSurvey(survey.code, payload.surveyPayload).pipe(
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
                                    submissions.push(
                                        this.submitToSurveyJs(payload.surveyPayload, survey.postId, userEmail),
                                    );
                                    break;
                            }
                        }

                        if (!submissions.length) {
                            this.logger.info(`No submit destinations specified for survey with code ${payload.code}`);
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

    private hasAccess(requiredRoles: string[], decodedToken?: Auth.Models.Jwt | undefined): boolean {
        const userRoles: string[] = [];
        if (decodedToken) {
            userRoles.push(...extractUserRolesFromJwt(decodedToken));
        }
        return !requiredRoles || requiredRoles.every((role) => userRoles.includes(role));
    }
}
