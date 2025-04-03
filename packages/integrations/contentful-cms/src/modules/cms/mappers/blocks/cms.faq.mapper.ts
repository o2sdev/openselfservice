import { NotFoundException } from '@nestjs/common';
import { Entry } from 'contentful';

import { CMS } from '@o2s/framework/modules';

import { IBlockFaqFields } from '@/generated/contentful';

export const mapFaqBlock = (data: Entry<IBlockFaqFields>): CMS.Model.FaqBlock.FaqBlock => {
    if (!data) {
        throw new NotFoundException();
    }

    switch (data.sys.contentType.sys.id) {
        case 'blockFaq':
            return {
                id: data.sys.id,
                title: data.fields.title,
                subtitle: data.fields.subtitle,
                items: data.fields.items?.map(
                    (item): CMS.Model.FaqBlock.FaqItem => ({
                        title: item.fields.title,
                        content: item.fields.content,
                    }),
                ),
                banner: {
                    title: data.fields.banner?.fields.title,
                    description: data.fields.banner?.fields.description,
                    button: data.fields.banner?.fields.link?.fields,
                } as CMS.Model.FaqBlock.FaqBoxWithButton,
            };
    }
    // return MOCK_FAQ_LIST_BLOCK_EN;

    throw new NotFoundException();
};
