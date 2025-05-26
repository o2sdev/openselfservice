import { Headers, Modules } from '@o2s/api-harmonization';

import { Sdk } from '@o2s/framework/sdk';

import { getApiHeaders } from '../../utils/api';

const API_URL = Modules.Users.URL;

export const users = (sdk: Sdk) => ({
    modules: {
        registerUser: (
            body: Modules.Users.Request.RegisterUserBody,
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<Modules.Users.Model.RegisterUser> =>
            sdk.makeRequest({
                method: 'post',
                url: `${API_URL}${Modules.Users.REGISTER_USER_URL}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                data: body,
            }),
        resetPassword: (
            body: Modules.Users.Request.ResetPasswordBody,
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<Modules.Users.Model.ResetPassword> =>
            sdk.makeRequest({
                method: 'post',
                url: `${API_URL}${Modules.Users.RESET_PASSOWRD_URL}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                data: body,
            }),
        setNewPassword: (
            body: Modules.Users.Request.SetNewPasswordBody,
            headers: Headers.AppHeaders,
            authorization?: string,
        ): Promise<Modules.Users.Model.SetPassword> =>
            sdk.makeRequest({
                method: 'post',
                url: `${API_URL}${Modules.Users.SET_NEW_PASSWORD_URL}`,
                headers: {
                    ...getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                data: body,
            }),
    },
});
