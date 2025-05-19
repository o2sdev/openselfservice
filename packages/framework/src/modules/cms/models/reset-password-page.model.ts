import { Models } from '@o2s/framework/modules';

import { Media } from '@/utils/models';

export class ResetPasswordPage {
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    title!: string;
    subtitle?: string;
    resetPassword!: string;
    username!: Models.FormField.FormField;
    labels!: {
        show: string;
        hide: string;
    };
    image?: Media.Media;
    seo!: Models.SEO.Page;
    invalidCredentials!: string;
}
