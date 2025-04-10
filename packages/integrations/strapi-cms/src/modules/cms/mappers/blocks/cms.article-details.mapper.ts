const MOCK_ARTICLE_DETAILS_COMPONENT = {
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

export const mapArticleDetailsBlock = () => {
    return {
        ...MOCK_ARTICLE_DETAILS_COMPONENT,
    };
};
