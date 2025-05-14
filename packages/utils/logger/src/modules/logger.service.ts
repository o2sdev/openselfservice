import { CallHandler, ConsoleLogger, ExecutionContext, Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Response } from 'express';
import { jwtDecode } from 'jwt-decode';
import { Observable, tap } from 'rxjs';
import { Logger, createLogger, format, transports } from 'winston';

const COLOR = {
    Reset: '\x1b[0m',
    FgBlack: '\x1b[30m',
    FgRed: '\x1b[31m',
    FgGreen: '\x1b[32m',
    FgYellow: '\x1b[33m',
    FgBlue: '\x1b[34m',
    FgMagenta: '\x1b[35m',
    FgCyan: '\x1b[36m',
    FgWhite: '\x1b[37m',
    BgBlack: '\x1b[40m',
    BgRed: '\x1b[41m',
    BgGreen: '\x1b[42m',
    BgYellow: '\x1b[43m',
    BgBlue: '\x1b[44m',
    BgMagenta: '\x1b[45m',
    BgCyan: '\x1b[46m',
    BgWhite: '\x1b[47m',
};
const COLOR_DISABLED = {
    Reset: '',
    FgBlack: '',
    FgRed: '',
    FgGreen: '',
    FgYellow: '',
    FgBlue: '',
    FgMagenta: '',
    FgCyan: '',
    FgWhite: '',
    BgBlack: '',
    BgRed: '',
    BgGreen: '',
    BgYellow: '',
    BgBlue: '',
    BgMagenta: '',
    BgCyan: '',
    BgWhite: '',
};

export const getLoggingFormat = (colorsEnabled = true) => {
    const colors = colorsEnabled ? COLOR : COLOR_DISABLED;

    return format.printf(({ level, message, timestamp, topic = '', data }) => {
        return `[${timestamp}] [${level}] [${colors.FgMagenta}${topic}${colors.Reset}] [${colors.FgCyan}${data}${colors.Reset}] [${message}]`;
    });
};

export type LogLevel = 'info' | 'error' | 'debug' | 'verbose';
export type LogFormat = 'text' | 'json';

@Global()
@Injectable()
export class LoggerService extends ConsoleLogger {
    logger: Logger;
    logLevel: LogLevel;
    logFormat: LogFormat;

    constructor(private readonly config: ConfigService) {
        super();

        this.logLevel = config.get('LOG_LEVEL') as LogLevel;
        this.logFormat = config.get('LOG_FORMAT') as LogFormat;

        this.logger = createLogger({
            level: this.logLevel,
            transports: [
                new transports.Console({
                    format:
                        this.logFormat === 'json'
                            ? format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss,SS' }), format.json())
                            : format.combine(
                                  format.colorize(),
                                  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss,SS' }),
                                  getLoggingFormat(config.get('LOG_COLORS_ENABLED')),
                              ),
                }),
            ],
        });
    }

    private serializeMessage(
        data: { [key: string]: unknown },
        meta: { topic: string; method?: string; status?: string; name?: string; url?: string },
        message?: string,
        parsedUrl?: string,
    ): [string, unknown] {
        if (this.logFormat === 'text') {
            const result = Object.entries(data)
                .map(([key, value]) => {
                    return `${key}: ${typeof value === 'string' ? value : JSON.stringify(value)}`;
                })
                .join('; ');
            return [
                result,
                {
                    topic: meta.topic,
                    data:
                        message ||
                        `${meta.method ? `${meta.method} ` : ''}${meta.status ? `${meta.status} ` : ''}${
                            meta.name ? `${meta.name} ` : ''
                        }${meta.url ? `${meta.url} ` : ''}`,
                },
            ];
        }

        const title = message
            ? `[${message}]`
            : `[${meta.topic}] [${meta.method || meta.status || ''} ${meta.name || ''} ${parsedUrl || meta.url || ''}]`;

        return [title, { ...data, ...meta }];
    }

    info(message: unknown, context?: string) {
        this.logger.info(
            ...this.serializeMessage(
                {
                    data: message,
                },
                {
                    topic: `BFF LOG`,
                },
                context,
            ),
        );
    }

    verbose(message: unknown, context?: string) {
        this.logger.verbose(
            ...this.serializeMessage(
                {
                    data: message,
                },
                {
                    topic: `BFF LOG`,
                },
                context,
            ),
        );
    }

    debug(message: unknown, context?: string) {
        this.logger.debug(
            ...this.serializeMessage(
                {
                    data: message,
                },
                {
                    topic: `BFF LOG`,
                },
                context,
            ),
        );
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<string> {
        const args = context.getArgByIndex(0);

        if (this.logLevel === 'debug' || this.logLevel === 'verbose') {
            this.bffRequest({
                method: args.method,
                url: args.url,
                parsedUrl: args._parsedUrl.pathname,
                name: context.getClass().name,
                params: args.query || args.params,
                data: args.body,
                user: args.user?.sub || 'anonymous',
                headers: args.headers,
            });
        }
        if (this.logLevel === 'info') {
            this.bffRequest({
                method: args.method,
                url: args.url,
                parsedUrl: args._parsedUrl.pathname,
                name: context.getClass().name,
                params: undefined,
                data: undefined,
                user: args.user?.sub || 'anonymous',
                headers: args.headers,
            });
        }

        return next.handle().pipe(
            tap((next) => {
                const response = context.getArgByIndex(1);
                if (this.logLevel === 'debug' || this.logLevel === 'verbose') {
                    this.bffResponse({
                        status: response.statusCode,
                        url: response.req.originalUrl,
                        parsedUrl: args._parsedUrl.pathname,
                        name: context.getClass().name,
                        data: next,
                        user: args.user?.sub || 'anonymous',
                        headers: (response as Response).getHeaders() as { [key: string]: string },
                        requestHeaders: args.headers,
                    });
                }
                if (this.logLevel === 'info') {
                    this.bffResponse({
                        status: response.statusCode,
                        url: response.req.originalUrl,
                        parsedUrl: args._parsedUrl.pathname,
                        name: context.getClass().name,
                        data: undefined,
                        user: args.user?.sub || 'anonymous',
                        headers: (response as Response).getHeaders() as { [key: string]: string },
                        requestHeaders: args.headers,
                    });
                }
            }),
        );
    }

    public genericLog(data: { name: string; data: string }, level: 'info' | 'error' | 'debug' | 'verbose'): void {
        this.logger[level](
            ...this.serializeMessage(
                {
                    data: data.data,
                },
                {
                    topic: `BFF LOG`,
                    name: data.name,
                },
                data.data,
            ),
        );
    }

    public bffRequest(request: {
        name: string;
        method: string;
        url: string;
        parsedUrl?: string;
        params?: string;
        data?: string;
        user: string;
        headers: { [key: string]: string };
    }): void {
        if (this.logLevel === 'verbose') {
            this.logger.verbose(
                ...this.serializeMessage(
                    {
                        user: request.user,
                        params: request.params,
                        data: request.data,
                    },
                    {
                        topic: `BFF call`,
                        method: request.method,
                        name: request.name,
                        url: request.url,
                    },
                    undefined,
                    request.parsedUrl,
                ),
            );
        }
        if (this.logLevel === 'debug') {
            this.logger.debug(
                ...this.serializeMessage(
                    {
                        user: request.user,
                        params: request.params,
                        data: request.data,
                        headers: request.headers,
                    },
                    {
                        topic: `BFF call`,
                        method: request.method,
                        name: request.name,
                        url: request.url,
                    },
                    undefined,
                    request.parsedUrl,
                ),
            );
        }
        if (this.logLevel === 'info') {
            this.logger.info(
                ...this.serializeMessage(
                    {
                        user: request.user,
                    },
                    {
                        topic: `BFF call`,
                        method: request.method,
                        name: request.name,
                        url: request.url,
                    },
                    undefined,
                    request.parsedUrl,
                ),
            );
        }
    }

    public bffResponse(response: {
        name: string;
        status: string;
        url: string;
        parsedUrl?: string;
        params?: string;
        data?: string;
        user: string;
        headers: { [key: string]: string };
        requestHeaders: { [key: string]: string };
    }): void {
        if (this.logLevel === 'verbose') {
            this.logger.verbose(
                ...this.serializeMessage(
                    {
                        user: response.user,
                    },
                    {
                        topic: `BFF response`,
                        status: response.status,
                        name: response.name,
                        url: response.url,
                    },
                    undefined,
                    response.parsedUrl,
                ),
            );
        }
        if (this.logLevel === 'debug') {
            this.logger.debug(
                ...this.serializeMessage(
                    {
                        user: response.user,
                        data: response.data,
                        headers: response.headers,
                    },
                    {
                        topic: `BFF response`,
                        status: response.status,
                        name: response.name,
                        url: response.url,
                    },
                    undefined,
                    response.parsedUrl,
                ),
            );
        }
        if (this.logLevel === 'info') {
            this.logger.info(
                ...this.serializeMessage(
                    {
                        user: response.user,
                    },
                    {
                        topic: `BFF response`,
                        status: response.status,
                        name: response.name,
                        url: response.url,
                    },
                    undefined,
                    response.parsedUrl,
                ),
            );
        }
    }

    public cmsRequest(request: AxiosRequestConfig): void {
        if (this.logLevel === 'verbose') {
            this.logger.verbose(
                ...this.serializeMessage(
                    {
                        params: request.params,
                    },
                    {
                        topic: `CMS call`,
                        method: request.method?.toUpperCase(),
                        url: request.baseURL,
                    },
                ),
            );
        }
        if (this.logLevel === 'debug') {
            this.logger.debug(
                ...this.serializeMessage(
                    {
                        params: request.params,
                    },
                    {
                        topic: `CMS call`,
                        method: request.method?.toUpperCase(),
                        url: request.baseURL,
                    },
                ),
            );
        }
        if (this.logLevel === 'info') {
            this.logger.info(
                ...this.serializeMessage(
                    {},
                    {
                        topic: `CMS call`,
                        method: request.method?.toUpperCase(),
                        url: request.baseURL,
                    },
                ),
            );
        }
    }

    public cmsResponse(request: AxiosResponse): void {
        this.logger.info(
            ...this.serializeMessage(
                {},
                {
                    topic: `CMS response`,
                    status: String(request.status),
                    url: request.config.baseURL,
                },
            ),
        );
    }

    public apiRequest(request: AxiosRequestConfig): void {
        const user =
            request?.headers?.Authorization && !request.headers.Authorization.startsWith('Basic')
                ? (jwtDecode(request.headers.Authorization.replace('Bearer ', '')) as { sub: string })
                : undefined;

        if (this.logLevel === 'verbose') {
            this.logger.verbose(
                ...this.serializeMessage(
                    {
                        params: request.params,
                        data: request.data,
                        user: user?.sub,
                    },
                    {
                        topic: `API call`,
                        method: request.method?.toUpperCase(),
                        url: request.url,
                    },
                ),
            );
        }
        if (this.logLevel === 'debug') {
            this.logger.debug(
                ...this.serializeMessage(
                    {
                        params: request.params,
                        data: request.data,
                        headers: request.headers,
                        user: user?.sub,
                    },
                    {
                        topic: `API call`,
                        method: request.method?.toUpperCase(),
                        url: request.url,
                    },
                ),
            );
        }
        if (this.logLevel === 'info') {
            this.logger.info(
                ...this.serializeMessage(
                    {
                        user: user?.sub,
                    },
                    {
                        topic: `API call`,
                        method: request.method?.toUpperCase(),
                        url: request.url,
                    },
                ),
            );
        }
    }

    public apiRequestError(error: AxiosError): void {
        this.logger.error(
            ...this.serializeMessage(
                {
                    message: error.message,
                },
                {
                    topic: `API response`,
                    status: error.response ? `${error.response.status} ` : '',
                    url: error.config?.url,
                },
            ),
        );
    }

    public apiResponse(response: AxiosResponse): void {
        const user =
            response?.config?.headers?.Authorization &&
            !(response.config.headers.Authorization as string).startsWith('Basic')
                ? (jwtDecode((response.config.headers.Authorization as string)?.replace('Bearer ', '')) as {
                      sub: string;
                  })
                : undefined;

        if (this.logLevel === 'verbose') {
            this.logger.verbose(
                ...this.serializeMessage(
                    {
                        data: response.data,
                        user: user?.sub,
                    },
                    {
                        topic: `API response`,
                        status: String(response.status),
                        url: response.config.url,
                    },
                ),
            );
        }
        if (this.logLevel === 'debug') {
            this.logger.debug(
                ...this.serializeMessage(
                    {
                        data: response.data,
                        user: user?.sub,
                    },
                    {
                        topic: `API response`,
                        status: String(response.status),
                        url: response.config.url,
                    },
                ),
            );
        }
        if (this.logLevel === 'info') {
            this.logger.info(
                ...this.serializeMessage(
                    {
                        user: user?.sub,
                    },
                    {
                        topic: `API response`,
                        status: String(response.status),
                        url: response.config.url,
                    },
                ),
            );
        }
    }

    public apiResponseError(error: AxiosError): void {
        this.logger.error(
            ...this.serializeMessage(
                {
                    message: error.message,
                    data: error.response?.data,
                },
                {
                    topic: `API response`,
                    status: error.response ? `${error.response.status}` : '',
                    url: error.config?.url,
                },
            ),
        );
    }
}
