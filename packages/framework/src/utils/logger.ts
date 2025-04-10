import { TransformableInfo, format as logform } from 'logform';
import { Logger } from 'winston';

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

export type LogLevel = 'info' | 'error' | 'debug' | 'verbose';
export type LogFormat = 'text' | 'json';

export interface LoggerConfig {
    level?: LogLevel;
    format?: LogFormat;
    colorsEnabled?: boolean;
}

export interface RequestConfig {
    url?: string;
    baseURL?: string;
    method?: string;
    headers?: Record<string, string>;
    params?: Record<string, unknown>;
    data?: unknown;
    [key: string]: unknown;
}

export interface ResponseType {
    status: number;
    statusText?: string;
    headers?: Record<string, string>;
    data?: unknown;
    config: RequestConfig;
}

export interface ErrorType extends Error {
    response?: ResponseType;
    config?: RequestConfig;
    status?: number;
    statusCode?: number;
}

export class LoggerService {
    logger?: Logger;
    logLevel: LogLevel;
    logFormat: LogFormat;

    constructor({ level = 'info', format = 'text', colorsEnabled = true }: LoggerConfig) {
        this.logLevel = level;
        this.logFormat = format;

        if (typeof window === 'undefined') {
            const getLoggingFormat = (colorsEnabled = true) => {
                const colors = colorsEnabled ? COLOR : COLOR_DISABLED;

                return logform.printf(({ level, message, timestamp, topic = '', data }) => {
                    return `[${timestamp}] [${colors.FgGreen}${level}${colors.Reset}] [${colors.FgMagenta}${topic}${colors.Reset}] [${colors.FgCyan}${data}${colors.Reset}] [${message}]`;
                });
            };

            const MESSAGE = Symbol.for('message');

            const log =
                this.logFormat === 'json'
                    ? logform.combine(logform.timestamp({ format: 'YYYY-MM-DD HH:mm:ss,SS' }), logform.json())
                    : logform.combine(
                          logform.timestamp({ format: 'YYYY-MM-DD HH:mm:ss,SS' }),
                          getLoggingFormat(colorsEnabled),
                      );

            this.logger = {
                // @ts-expect-error placeholder for winston method
                log: (data, meta) => {
                    console.log(
                        (
                            log.transform({
                                level: 'log',
                                topic: meta.topic,
                                data: meta.data,
                                message: data,
                            }) as TransformableInfo
                        )[MESSAGE],
                    );
                },
                // @ts-expect-error placeholder for winston method
                error: (data, meta) => {
                    console.log(
                        (
                            log.transform({
                                level: 'error',
                                topic: meta.topic,
                                data: meta.data,
                                message: data,
                            }) as TransformableInfo
                        )[MESSAGE],
                    );
                },
                // @ts-expect-error placeholder for winston method
                info: (data, meta) => {
                    console.log(
                        (
                            log.transform({
                                level: 'info',
                                topic: meta.topic,
                                data: meta.data,
                                message: data,
                            }) as TransformableInfo
                        )[MESSAGE],
                    );
                },
                // @ts-expect-error placeholder for winston method
                verbose: (data, meta) => {
                    console.log(
                        (
                            log.transform({
                                level: 'verbose',
                                topic: meta.topic,
                                data: meta.data,
                                message: data,
                            }) as TransformableInfo
                        )[MESSAGE],
                    );
                },
                // @ts-expect-error placeholder for winston method
                debug: (data, meta) => {
                    console.log(
                        (
                            log.transform({
                                level: 'debug',
                                topic: meta.topic,
                                data: meta.data,
                                message: data,
                            }) as TransformableInfo
                        )[MESSAGE],
                    );
                },
            };

            // dynamic import to prevent bundling winston into the main app bundle
            // TODO: figure ut how to use winston - after publishing this package and using it, it throws client-side errors despite dynamic import
            // TODO: as a workaround, logform is used directly above without winston at all
            // import('winston').then(({ createLogger, format, transports }) => {
            //     const getLoggingFormat = (colorsEnabled = true) => {
            //         const colors = colorsEnabled ? COLOR : COLOR_DISABLED;
            //
            //         return format.printf(({ level, message, timestamp, topic = '', data }) => {
            //             return `[${timestamp}] [${level}] [${colors.FgMagenta}${topic}${colors.Reset}] [${colors.FgCyan}${data}${colors.Reset}] [${message}]`;
            //         });
            //     };
            //
            //     this.logger = createLogger({
            //         level: this.logLevel,
            //         transports: [
            //             new transports.Console({
            //                 format:
            //                     this.logFormat === 'json'
            //                         ? format.combine(
            //                               format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss,SS' }),
            //                               format.json(),
            //                           )
            //                         : format.combine(
            //                               format.colorize(),
            //                               format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss,SS' }),
            //                               getLoggingFormat(colorsEnabled),
            //                           ),
            //             }),
            //         ],
            //     });
            // });
        }
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

        const title = `[${meta.topic}] [${meta.method || meta.status} ${meta.name || ''} ${
            parsedUrl || meta.url || ''
        }]`;

        return [title, { ...data, ...meta }];
    }

    public log(data: { name: string; data: string }, level: 'info' | 'error' | 'debug'): void {
        this.logger?.[level](
            ...this.serializeMessage(
                {
                    data: data.data,
                },
                {
                    topic: `FE LOG`,
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
            this.logger?.verbose(
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
            this.logger?.debug(
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
            this.logger?.info(
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
    }): void {
        if (this.logLevel === 'verbose') {
            this.logger?.verbose(
                ...this.serializeMessage(
                    {
                        user: response.user,
                        data: response.data,
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
            this.logger?.debug(
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
            this.logger?.info(
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

    public cmsRequest(request: RequestConfig): void {
        if (this.logLevel === 'verbose') {
            this.logger?.verbose(
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
            this.logger?.debug(
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
            this.logger?.info(
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

    public cmsResponse(request: ResponseType): void {
        this.logger?.info(
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

    public apiRequest(request: RequestConfig): void {
        if (this.logLevel === 'verbose') {
            this.logger?.verbose(
                ...this.serializeMessage(
                    {
                        params: request.params,
                        data: request.data,
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
            this.logger?.debug(
                ...this.serializeMessage(
                    {
                        params: request.params,
                        data: request.data,
                        headers: request.headers,
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
            this.logger?.info(
                ...this.serializeMessage(
                    {},
                    {
                        topic: `API call`,
                        method: request.method?.toUpperCase(),
                        url: request.url,
                    },
                ),
            );
        }
    }

    public apiRequestError(error: ErrorType): void {
        this.logger?.error(
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

    public apiResponse(response: ResponseType): void {
        if (this.logLevel === 'verbose') {
            this.logger?.verbose(
                ...this.serializeMessage(
                    {
                        // data: response.data,
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
            this.logger?.debug(
                ...this.serializeMessage(
                    {
                        data: response.data,
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
            this.logger?.info(
                ...this.serializeMessage(
                    {},
                    {
                        topic: `API response`,
                        status: String(response.status),
                        url: response.config.url,
                    },
                ),
            );
        }
    }

    public apiResponseError(error: ErrorType): void {
        this.logger?.error(
            ...this.serializeMessage(
                {
                    message: error.message,
                    data: error.response?.data,
                },
                {
                    topic: `API response`,
                    status: error.response ? `${error.response.status} ` : '',
                    url: error.config?.url,
                },
            ),
        );
    }
}
