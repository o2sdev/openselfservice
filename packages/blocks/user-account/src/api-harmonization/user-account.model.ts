import { Users } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class UserAccountBlock extends ApiModels.Block.Block {
    __typename!: 'UserAccountBlock';
    title?: string;
    basicInformationTitle!: string;
    basicInformationDescription!: string;
    fields!: Models.FormField.FormField[];
    user?: Users.Model.User;
    labels!: {
        edit: string;
        save: string;
        cancel: string;
        delete: string;
        logOut: string;
    };
    permissions?: {
        view: boolean;
        edit: boolean;
    };
}
