import { Articles } from '../../models';

import { ArticleBlock } from './article.model';

export const mapArticle = (article: Articles.Model.Article, _locale: string): ArticleBlock => {
    return {
        __typename: 'ArticleBlock',
        id: article.id,
        data: article,
    };
};
