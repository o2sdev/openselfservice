import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { SourceMapContext, createFieldEncoder } from '../../live-preview/encode-source-map';

export const mapFaqBlock = (data: GetComponentQuery): CMS.Model.FaqBlock.FaqBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsFaq':
            return {
                id: component.id,
                title: component.title,
                subtitle: component.subtitle,
                items: component.items?.map(
                    (item): CMS.Model.FaqBlock.FaqItem => ({
                        title: item.title,
                        content: item.description,
                    }),
                ),
                banner: {
                    title: component.banner?.title,
                    description: component.banner?.description,
                    button: component.banner?.button,
                } as CMS.Model.FaqBlock.FaqBoxWithButton,
            };
    }

    throw new NotFoundException();
};

/**
 * Live Preview: encode Content Source Maps into the normalized FAQ block.
 *
 * Runs only in preview mode, AFTER `mapFaqBlock`, so markers can't be stripped by mapping.
 * Paths use the Strapi field names (note: model `content` → Strapi `description`); the
 * `banner.button` link is intentionally not encoded (it is an object, not a rendered leaf).
 */
export const encodeFaqBlock = (
    block: CMS.Model.FaqBlock.FaqBlock,
    ctx: SourceMapContext,
): CMS.Model.FaqBlock.FaqBlock => {
    const enc = createFieldEncoder(ctx);

    return {
        ...block,
        title: enc(block.title, 'title'),
        subtitle: enc(block.subtitle, 'subtitle'),
        items: block.items?.map((item, i) => ({
            ...item,
            title: enc(item.title, `items.${i}.title`),
            content: enc(item.content, `items.${i}.description`, 'richtext'),
        })),
        banner: block.banner
            ? {
                  ...block.banner,
                  title: enc(block.banner.title, 'banner.title'),
                  description: enc(block.banner.description, 'banner.description', 'richtext'),
              }
            : block.banner,
    };
};
