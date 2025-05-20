import { Articles } from '@o2s/framework/modules';

import { MOCK_ARTICLE1_DE, MOCK_ARTICLE1_EN, MOCK_ARTICLE1_PL } from './article1.content.mocks';
import { MOCK_ARTICLE2_DE, MOCK_ARTICLE2_EN, MOCK_ARTICLE2_PL } from './article2.content.mocks';
import { MOCK_ARTICLE3_DE, MOCK_ARTICLE3_EN, MOCK_ARTICLE3_PL } from './article3.content.mocks';
import { MOCK_ARTICLE4_DE, MOCK_ARTICLE4_EN, MOCK_ARTICLE4_PL } from './article4.content.mocks';

export const MOCK_ARTICLES_EN: Articles.Model.Article[] = [
    ...MOCK_ARTICLE1_EN,
    ...MOCK_ARTICLE2_EN,
    ...MOCK_ARTICLE3_EN,
    ...MOCK_ARTICLE4_EN,
];

export const MOCK_ARTICLES_DE: Articles.Model.Article[] = [
    ...MOCK_ARTICLE1_DE,
    ...MOCK_ARTICLE2_DE,
    ...MOCK_ARTICLE3_DE,
    ...MOCK_ARTICLE4_DE,
];

export const MOCK_ARTICLES_PL: Articles.Model.Article[] = [
    ...MOCK_ARTICLE1_PL,
    ...MOCK_ARTICLE2_PL,
    ...MOCK_ARTICLE3_PL,
    ...MOCK_ARTICLE4_PL,
];
