import { Models } from '@o2s/framework/modules';

import { Block, RichText } from '@/utils/models';

/** CMS block configuration for user account page section. */
export class UserAccountBlock extends Block.Block {
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
