import { Blocks } from '@o2s/api-harmonization';

export interface ArticleProps {
    slug: string;
    accessToken: string;
    locale: string;
}

export type ArticlePureProps = ArticleProps & Blocks.Article.Model.ArticleBlock;
