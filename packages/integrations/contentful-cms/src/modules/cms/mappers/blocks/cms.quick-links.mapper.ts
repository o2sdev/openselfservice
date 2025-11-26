import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { QuickLinksComponentFragment } from '@/generated/contentful';

import { mapLink } from '../cms.link.mapper';

export const mapQuickLinksBlock = ({
    isPreview,
    ...data
}: QuickLinksComponentFragment & { isPreview?: boolean }): CMS.Model.QuickLinksBlock.QuickLinksBlock => {
    if (!data) {
        throw new NotFoundException();
    }

    switch (data.__typename) {
        case 'BlockQuickLinks':
            return {
                id: data.sys.id,
                title: data.title,
                description: data.description,
                items:
                    data.itemsCollection?.items.map((item) => ({
                        ...mapLink(item)!,
                    })) || [],
                meta: isPreview
                    ? {
                          __id: data.sys.id,
                          title: 'title',
                          description: 'description',
                          items:
                              data.itemsCollection?.items.map((item) => ({
                                  __id: item.sys.id,
                                  label: 'label',
                                  url: 'url',
                                  icon: 'icon',
                              })) || [],
                      }
                    : undefined,
            };
    }
};
