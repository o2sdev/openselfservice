import { Model, Request } from '@/modules/notifications';

import { RequestMethod } from '../sdk';

const API_URL = '/notifications';

export const getNotification =
    (makeRequest: RequestMethod) =>
    (params: Request.GetNotificationParams, authorization: string): Promise<Model.Notification> =>
        makeRequest({
            method: 'get',
            url: `${API_URL}/${params.id}`,
            headers: {
                Authorization: `Bearer ${authorization}`,
            },
        });

export const getNotifications =
    (makeRequest: RequestMethod) =>
    (query: Request.GetNotificationListQuery, authorization: string): Promise<Model.Notifications> =>
        makeRequest({
            method: 'get',
            url: API_URL,
            headers: {
                Authorization: `Bearer ${authorization}`,
            },
            params: query,
        });

export const markAs =
    (makeRequest: RequestMethod) =>
    (request: Request.MarkNotificationAsRequest, authorization: string): Promise<Model.Notification> =>
        makeRequest({
            method: 'post',
            url: API_URL,
            headers: {
                Authorization: `Bearer ${authorization}`,
            },
            data: request,
        });
