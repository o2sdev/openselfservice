import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetAppConfigQuery } from '@/generated/strapi';

export const mapAppConfig = (data: GetAppConfigQuery): CMS.Model.AppConfig.AppConfig => {
    const component = data.appConfig!;

    if (!component) {
        throw new NotFoundException();
    }

    return {
        signedOut: {
            header: component.signedOutHeader?.documentId,
            footer: component.signedOutFooter?.documentId,
        },
        signedIn: {
            header: component.signedInHeader?.documentId,
            footer: component.signedInFooter?.documentId,
        },
    };
};
