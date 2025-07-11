import {
    Model,
    Request,
    URL,
} from "../api-harmonization/ticket-details.client";

import { Sdk } from "@o2s/framework/sdk";
import { Utils } from "@o2s/utils.frontend";
import { Models } from "@o2s/utils.api-harmonization";

const API_URL = URL;

export const ticketDetails = (sdk: Sdk) => ({
    blocks: {
        getTicketDetails: (
            params: Request.GetTicketDetailsBlockParams,
            query: Request.GetTicketDetailsBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.TicketDetailsBlock> =>
            sdk.makeRequest({
                method: "get",
                url: `${API_URL}/${params.id}`,
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
