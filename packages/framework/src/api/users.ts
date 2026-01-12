import { Models, Users } from '@o2s/framework/modules';

import { RequestMethod } from '../sdk';

const API_URL = '/users';

export const getUser =
    (makeRequest: RequestMethod) =>
    (params: Users.Request.GetUserParams, authorization?: string): Promise<Users.Model.User> =>
        makeRequest({
            method: 'get',
            url: `${API_URL}/${params.id}`,
            headers: {
                Authorization: `Bearer ${authorization}`,
            },
        });

export const getCustomerForCurrentUserById =
    (makeRequest: RequestMethod) =>
    (params: Users.Request.GetCustomerParams, authorization?: string): Promise<Models.Customer.Customer> =>
        makeRequest({
            method: 'get',
            url: `${API_URL}/me/customers/${params.id}`,
            headers: {
                Authorization: `Bearer ${authorization}`,
            },
        });

export const getDefaultCustomerForCurrentUser =
    (makeRequest: RequestMethod) =>
    (authorization?: string): Promise<Models.Customer.Customer> =>
        makeRequest({
            method: 'get',
            url: `${API_URL}/me/customers/default`,
            headers: {
                Authorization: `Bearer ${authorization}`,
            },
        });
