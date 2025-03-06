import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { LoggerConfig, LoggerService } from './utils/logger';

const parseBody = (response: AxiosResponse) => Promise.resolve(response.data);
const parseError = (error: Error | AxiosError) => {
    if (axios.isAxiosError(error)) {
        return Promise.reject({
            status: error.response?.status || error.status,
            message: error.message,
            data: error.response?.data,
        });
    }
    return Promise.reject(error);
};

export interface InterceptorsConfig {
    logger?: LoggerConfig;
}

export const createInterceptors = ({ logger }: InterceptorsConfig) => {
    const loggerService = new LoggerService(logger || {});

    const requestInterceptor = (request: InternalAxiosRequestConfig) => {
        loggerService.apiRequest(request);
        return request;
    };

    const responseSuccessInterceptor = (response: AxiosResponse) => {
        loggerService.apiResponse(response);

        return parseBody(response);
    };

    const requestErrorInterceptor = (error: AxiosError) => {
        loggerService.apiRequestError(error);
        return parseError(error);
    };

    const responseErrorInterceptor = (error: AxiosError) => {
        loggerService.apiResponseError(error);
        return parseError(error);
    };

    return {
        requestInterceptor,
        responseSuccessInterceptor,
        requestErrorInterceptor,
        responseErrorInterceptor,
    };
};
