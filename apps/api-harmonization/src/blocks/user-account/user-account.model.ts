import { Models } from '@o2s/framework/modules';

import { Users } from '../../models';
import { Block } from '../../utils';

export class UserAccountBlock extends Block.Block {
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
}
