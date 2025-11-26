import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { ArticleListComponentFragment, ConfigurableTexts } from '@/generated/contentful';

export const mapArticleListBlock = ({
    isPreview,
    ...data
}: ArticleListComponentFragment & {
    isPreview?: boolean;
    configurableTexts: ConfigurableTexts;
}): CMS.Model.ArticleListBlock.ArticleListBlock => {
    if (!data) {
        throw new NotFoundException();
    }

    switch (data.__typename) {
        case 'BlockArticleList':
            return {
                id: data.sys.id,
                title: data.title,
                description: data.description,
                categoryId: data.category?.slug,
                articleIds:
                    data.articlesCollection?.items.map((article: { slug?: string | null }) => article.slug || '') || [],
                articlesToShow: data.articlesToShow,
                parent: data.parent
                    ? {
                          slug: data.parent.slug || '',
                      }
                    : undefined,
                labels: {
                    today: data.configurableTexts.dates?.today || 'Today',
                    yesterday: data.configurableTexts.dates?.yesterday || 'Yesterday',
                    seeAllArticles: data.configurableTexts.actions?.showAllArticles || 'See all articles',
                },
                meta: isPreview
                    ? {
                          __id: data.sys.id,
                          title: 'title',
                          description: 'description',
                          articles: 'articles',
                      }
                    : undefined,
            };
    }
};
