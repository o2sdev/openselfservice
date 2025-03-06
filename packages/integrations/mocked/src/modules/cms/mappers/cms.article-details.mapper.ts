import { CMS } from '@o2s/framework/modules';

const MOCK_ARTICLE_DETAILS_COMPONENT: CMS.Model.ArticleDetailsComponent.ArticleDetailsComponent = {
    id: 'article-details-1',
    properties: {
        id: 'ID',
        title: 'Title',
        lead: 'Lead',
        createdAt: 'Created At',
        updatedAt: 'Updated At',
        image: 'Image',
        thumbnail: 'Thumbnail',
        sections: 'Sections',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
};

export const mapArticleDetailsComponent = (): CMS.Model.ArticleDetailsComponent.ArticleDetailsComponent => {
    return {
        ...MOCK_ARTICLE_DETAILS_COMPONENT,
    };
};
