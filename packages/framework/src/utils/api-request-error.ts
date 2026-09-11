export interface ApiRequestErrorResponse {
    status?: number;
    data?: unknown;
    [key: string]: unknown;
}

export interface ApiRequestErrorOptions {
    method: string;
    url: string;
    status?: number;
    data?: unknown;
    response?: ApiRequestErrorResponse;
    cause?: unknown;
}

const toStatus = (value: unknown): number | undefined => {
    return typeof value === 'number' ? value : undefined;
};

/**
 * Error thrown by every SDK request. It normalizes transport, HTTP and response parsing failures while
 * keeping the original error available as `cause`.
 */
export class ApiRequestError extends Error {
    /** HTTP method of the failed request. */
    readonly method: string;
    /** URL of the failed request. */
    readonly url: string;
    /** HTTP status code, when the request reached the server. */
    readonly status?: number;
    /** Response payload returned by the server. */
    readonly data?: unknown;
    /** Raw response details, as returned by the underlying fetch client. */
    readonly response?: ApiRequestErrorResponse;

    constructor(message: string, options: ApiRequestErrorOptions) {
        super(message, { cause: options.cause });

        this.name = 'ApiRequestError';
        this.method = options.method;
        this.url = options.url;
        this.status = options.status;
        this.data = options.data;
        this.response = options.response;
    }
}

interface ApiRequestErrorSource {
    message?: unknown;
    status?: unknown;
    statusCode?: unknown;
    data?: unknown;
    response?: ApiRequestErrorResponse;
}

/**
 * Converts an arbitrary request failure into the framework error contract. Existing framework errors are
 * returned unchanged so wrappers such as `createBlockRequest` do not replace the original instance.
 */
export const toApiRequestError = (error: unknown, method: string, url: string): ApiRequestError => {
    if (error instanceof ApiRequestError) {
        return error;
    }

    const source = (typeof error === 'object' && error !== null ? error : {}) as ApiRequestErrorSource;
    const normalizedMethod = method.toLowerCase();
    const status = toStatus(source.status) ?? toStatus(source.statusCode) ?? toStatus(source.response?.status);
    const message = typeof source.message === 'string' && source.message ? source.message : 'Request failed';

    return new ApiRequestError(
        `[${normalizedMethod.toUpperCase()} ${url}]${status !== undefined ? ` ${status}` : ''} ${message}`,
        {
            method: normalizedMethod,
            url,
            status,
            data: source.data ?? source.response?.data ?? source.response?._data,
            response: source.response,
            cause: error,
        },
    );
};
