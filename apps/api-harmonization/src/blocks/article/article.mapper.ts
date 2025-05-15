import { CMS } from '@o2s/framework/modules';

import { formatDateRelative } from '@o2s/api-harmonization/utils/date';

import { Articles } from '../../models';

import { ArticleBlock } from './article.model';

export const mapArticle = (
    cms: CMS.Model.AppConfig.AppConfig,
    article: Articles.Model.Article,
    locale: string,
    timezone: string,
): ArticleBlock => {
    return {
        __typename: 'ArticleBlock',
        id: article.id,
        data: {
            ...article,
            createdAt: formatDateRelative(
                article.createdAt,
                locale,
                cms.labels.dates.today,
                cms.labels.dates.yesterday,
                timezone,
            ),
            updatedAt: formatDateRelative(
                article.updatedAt,
                locale,
                cms.labels.dates.today,
                cms.labels.dates.yesterday,
                timezone,
            ),
        },
    };
};
