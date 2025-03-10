import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetAppConfigQuery } from '@/generated/strapi';

export const mapAppConfig = (data: GetAppConfigQuery): CMS.Model.AppConfig.AppConfig => {
    const component = data.appConfig!;

    if (!component) {
        throw new NotFoundException();
    }

    return {
        // TODO: fetch locales
        locales: [
            {
                value: 'en',
                label: 'EN',
            },
            {
                value: 'de',
                label: 'DE',
            },
            {
                value: 'pl',
                label: 'PL',
            },
        ],
        header: component.header?.documentId,
        footer: component.header?.documentId,
    };
};
