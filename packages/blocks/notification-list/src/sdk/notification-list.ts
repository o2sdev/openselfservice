import {
    Model,
    Request,
    URL,
} from "../api-harmonization/notification-list.client";

import { Sdk } from "@o2s/framework/sdk";
import { Utils } from "@o2s/utils.frontend";
import { Models as ApiModels } from "@o2s/utils.api-harmonization";

const API_URL = URL;

export const notificationList = (sdk: Sdk) => ({
    blocks: {
        getNotificationList: (
            query: Request.GetNotificationListBlockQuery,
            headers: ApiModels.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.NotificationListBlock> =>
            sdk.makeRequest({
                method: "get",
                url: `${API_URL}`,
                headers: {
                    ...Utils.Headers.getApiHeaders(),
                    ...headers,
                    ...(authorization
                        ? {
                              Authorization: `Bearer ${authorization}`,
                          }
                        : {}),
                },
                params: query,
            }),
    },
});
