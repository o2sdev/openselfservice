import { Models } from '@o2s/framework/modules';

import { Media } from '@/utils/models';

export class CreateNewPasswordPage {
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    title!: string;
    subtitle?: string;
    setNewPassword!: string;
    password!: Models.FormField.FormField;
    confirmPassword!: Models.FormField.FormField;
    labels!: {
        show: string;
        hide: string;
    };
    image?: Media.Media;
    seo!: Models.SEO.Page;
    creatingPasswordError!: string;
    regexValidations?: Models.FormField.RegexValidation[];
}
