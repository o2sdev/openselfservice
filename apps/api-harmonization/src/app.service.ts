import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import * as telemetry from '@o2s/telemetry';

import { LoggerService } from '@o2s/utils.logger';

@Injectable()
export class AppService {
    public constructor(
        protected httpClient: HttpService,
        @Inject(LoggerService) private readonly logger: LoggerService,
    ) {}

    onModuleInit() {
        this.httpClient.axiosRef.interceptors.request.use(
            (request) => {
                this.logger.apiRequest(request);
                return request;
            },
            (error) => {
                this.logger.apiRequestError(error);
                throw error;
            },
        );
        this.httpClient.axiosRef.interceptors.response.use(
            (response) => {
                this.logger.apiResponse(response);
                return response;
            },
            (error) => {
                this.logger.apiResponseError(error);
                throw error;
            },
        );
    }

    async onApplicationShutdown() {
        await telemetry.flushEvents();
    }
}
