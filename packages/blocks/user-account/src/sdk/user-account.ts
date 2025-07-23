import { Model, Request, URL } from "../api-harmonization/user-account.client";

import { Sdk } from "@o2s/framework/sdk";
import { Utils } from "@o2s/utils.frontend";
import { Models as ApiModels } from "@o2s/utils.api-harmonization";

const API_URL = URL;

export const userAccount = (sdk: Sdk) => ({
    blocks: {
        getUserAccount: (
            query: Request.GetUserAccountBlockQuery,
            headers: ApiModels.Headers.AppHeaders,
            authorization?: string,
        ): Promise<Model.UserAccountBlock> =>
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
