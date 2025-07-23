import { Model, Request, URL } from "../api-harmonization/ticket-recent.client";

import { Sdk } from "@o2s/framework/sdk";
import { Utils } from "@o2s/utils.frontend";
import { Models } from "@o2s/utils.api-harmonization";

const API_URL = URL;

export const ticketRecent = (sdk: Sdk) => ({
    blocks: {
        getTicketRecent: (
            query: Request.GetTicketRecentBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.TicketRecentBlock> =>
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
