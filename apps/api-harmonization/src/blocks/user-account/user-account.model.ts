import { Models } from '@o2s/framework/modules';

import { Users } from '../../models';
import { Component } from '../../utils';

export class UserAccountComponent extends Component.Component {
    __typename!: 'UserAccountComponent';
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
