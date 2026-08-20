import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { SourceMapContext, createFieldEncoder } from '../../live-preview/encode-source-map';

export const mapArticleListBlock = (
    data: GetComponentQuery,
    _baseUrl: string,
): CMS.Model.ArticleListBlock.ArticleListBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsArticleList':
            return {
                id: component.id,
                title: component.title,
                description: component.description,
                categoryId: component.category?.slug,
                articleIds: component.pages.map((page) => page.slug),
                articlesToShow: component.articles_to_show,
                parent: component.parent,
                labels: {
                    today: configurableTexts.dates.today,
                    yesterday: configurableTexts.dates.yesterday,
                    seeAllArticles: configurableTexts.actions.showAllArticles,
                },
            };
    }

    throw new NotFoundException();
};

/**
 * Live Preview: encode Content Source Maps into the normalized ArticleList block.
 * Only the block's own same-document text (`title`, `description`). The `category`/`pages`/
 * `parent` relations and the resolved article list are cross-document, so not encoded here.
 */
export const encodeArticleListBlock = (
    block: CMS.Model.ArticleListBlock.ArticleListBlock,
    ctx: SourceMapContext,
): CMS.Model.ArticleListBlock.ArticleListBlock => {
    const enc = createFieldEncoder(ctx);

    return {
        ...block,
        title: enc(block.title, 'title'),
        description: enc(block.description, 'description', 'richtext'),
    };
};
