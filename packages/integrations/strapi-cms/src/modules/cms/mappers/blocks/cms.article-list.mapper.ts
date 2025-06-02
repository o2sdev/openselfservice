import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

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
                categorySlug: component.category?.slug,
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
