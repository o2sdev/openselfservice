import { Blocks } from '@o2s/api-harmonization';

export interface ArticleSearchProps {
    id: string;
    locale: string;
    accessToken?: string;
}

export type ArticleSearchPureProps = ArticleSearchProps & Blocks.ArticleSearch.Model.ArticleSearchBlock;
