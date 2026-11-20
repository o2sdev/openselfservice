import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { mapLink } from '@/modules/cms/mappers/cms.link.mapper';

import { SourceMapContext, createFieldEncoder } from '../../live-preview/encode-source-map';

export const mapQuickLinksBlock = (data: GetComponentQuery): CMS.Model.QuickLinksBlock.QuickLinksBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsQuickLinks':
            return {
                id: component.id,
                title: component.title,
                description: component.description,
                items: component.quickLinks.map((item) => ({
                    ...mapLink(item)!,
                })),
            };
    }

    throw new NotFoundException();
};

/**
 * Live Preview: encode Content Source Maps into the normalized QuickLinks block.
 * Same-document text only: the block `title`/`description` and each item `label`
 * (Strapi `content.0.quickLinks.{i}.label`). Item `url`/`icon` are not encoded (a URL/enum
 * would break if stega chars were embedded).
 */
export const encodeQuickLinksBlock = (
    block: CMS.Model.QuickLinksBlock.QuickLinksBlock,
    ctx: SourceMapContext,
): CMS.Model.QuickLinksBlock.QuickLinksBlock => {
    const enc = createFieldEncoder(ctx);

    return {
        ...block,
        title: enc(block.title, 'title'),
        description: enc(block.description, 'description', 'richtext'),
        items: block.items.map((item, i) => ({
            ...item,
            label: enc(item.label, `quickLinks.${i}.label`),
        })),
    };
};
