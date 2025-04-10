import { Models } from '@o2s/framework/modules';

import { Media } from '@/utils/models';

export class LoginPage {
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    title!: string;
    subtitle?: string;
    signIn!: string;
    providers?: {
        title: string;
        label: string;
    };
    password!: Models.FormField.FormField;
    username!: Models.FormField.FormField;
    labels!: {
        show: string;
        hide: string;
    };
    image?: Media.Media;
    seo!: Models.SEO.Page;
    invalidCredentials!: string;
}
