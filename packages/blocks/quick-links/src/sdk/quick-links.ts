import { Model, Request, URL } from "../api-harmonization/quick-links.client";

import { Sdk } from "@o2s/framework/sdk";
import { Utils } from "@o2s/utils.frontend";
import { Models } from "@o2s/utils.api-harmonization";

const API_URL = URL;

export const quickLinks = (sdk: Sdk) => ({
    blocks: {
        getQuickLinks: (
            query: Request.GetQuickLinksBlockQuery,
            headers: Models.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.QuickLinksBlock> =>
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
