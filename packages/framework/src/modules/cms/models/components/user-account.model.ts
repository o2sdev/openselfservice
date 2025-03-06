import { Models } from '@o2s/framework/modules';

import { Component, RichText } from '@/utils/models';

export class UserAccountComponent extends Component.Component {
    title?: string;
    basicInformationTitle!: string;
    basicInformationDescription!: RichText.RichText;
    fields!: Models.FormField.FormField[];
    labels!: {
        edit: string;
        save: string;
        cancel: string;
        delete: string;
        logOut: string;
    };
}
