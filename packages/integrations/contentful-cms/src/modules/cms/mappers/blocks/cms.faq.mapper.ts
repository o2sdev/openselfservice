import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { FaqComponentFragment } from '@/generated/contentful';

export const mapFaqBlock = ({
    isPreview,
    ...data
}: FaqComponentFragment & { isPreview?: boolean }): CMS.Model.FaqBlock.FaqBlock => {
    if (!data) {
        throw new NotFoundException();
    }

    switch (data.__typename) {
        case 'BlockFaq':
            return {
                id: data.sys.id,
                title: data.title,
                subtitle: data.subtitle,
                items: data.itemsCollection?.items.map(
                    (item): CMS.Model.FaqBlock.FaqItem => ({
                        title: item.title!,
                        content: item.content!,
                    }),
                ),
                banner: {
                    title: data.banner?.title,
                    description: data.banner?.description,
                    button: data.banner?.link,
                } as CMS.Model.FaqBlock.FaqBoxWithButton,
                meta: isPreview
                    ? {
                          __id: data.sys.id,
                          title: 'title',
                          subtitle: 'subtitle',
                          items: data.itemsCollection?.items.map((item) => ({
                              __id: item.sys.id,
                              title: 'title',
                              content: 'content',
                          })),
                          banner: data.banner
                              ? {
                                    __id: data.banner.sys.id,
                                    title: 'title',
                                    description: 'description',
                                    button: 'link',
                                }
                              : undefined,
                      }
                    : undefined,
            };
    }

    throw new NotFoundException();
};
