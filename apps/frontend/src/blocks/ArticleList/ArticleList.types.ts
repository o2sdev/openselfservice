import { Blocks } from '@o2s/api-harmonization';

export interface ArticleListProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type ArticleListPureProps = ArticleListProps & Blocks.ArticleList.Model.ArticleListBlock;
