import { Model, Request, URL } from "../api-harmonization/ticket-list.client";

import { Sdk } from "@o2s/framework/sdk";
import { Utils } from "@o2s/utils.frontend";
import { Models } from "@o2s/utils.api-harmonization";

const API_URL = URL;

export const ticketList = (sdk: Sdk) => ({
    blocks: {
        getTicketList: (
            query: Request.GetTicketListBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.TicketListBlock> =>
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
