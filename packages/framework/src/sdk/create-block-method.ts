export interface CreateBlockMethodRequestConfig {
    method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    url: string;
    headers?: unknown;
    authorization?: string;
    params?: unknown;
    data?: unknown;
}

export interface CreateBlockMethodSdk {
    makeRequest: <TResponse>(config: {
        method?: string;
        url?: string;
        headers?: Record<string, string>;
        params?: unknown;
        data?: unknown;
        [key: string]: unknown;
    }) => Promise<TResponse>;
}

export type ResolveDefaultHeaders = () => Record<string, string>;

export interface CreateBlockMethodOptions {
    sdk: CreateBlockMethodSdk;
    request: CreateBlockMethodRequestConfig;
    getDefaultHeaders?: ResolveDefaultHeaders;
}

export const createBlockMethod = async <TResponse>({
    sdk,
    request,
    getDefaultHeaders,
}: CreateBlockMethodOptions): Promise<TResponse> => {
    const defaultHeaders = getDefaultHeaders?.();
    const requestHeaders = (request.headers ?? undefined) as Record<string, string> | undefined;
    const mergedHeaders: Record<string, string> = {};

    if (defaultHeaders) {
        Object.assign(mergedHeaders, defaultHeaders);
    }
    if (requestHeaders) {
        Object.assign(mergedHeaders, requestHeaders);
    }
    if (request.authorization) {
        mergedHeaders.Authorization = `Bearer ${request.authorization}`;
    }

    return sdk.makeRequest<TResponse>({
        method: request.method,
        url: request.url,
        headers: mergedHeaders,
        params: request.params,
        data: request.data,
    });
};
