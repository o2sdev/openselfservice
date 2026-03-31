import { Injectable } from '@nestjs/common';
// import { CMS } from '@o2s/framework/modules';

import { CMS } from '@o2s/integrations.mocked/modules';
import { Observable, of } from 'rxjs';

import { mapArticleListBlock } from './mappers/blocks/cms.article-list.mapper';
import { mapArticleSearchBlock } from './mappers/blocks/cms.article-search.mapper';
import { mapBentoGridBlock } from './mappers/blocks/cms.bento-grid.mapper';
import { mapCtaSectionBlock } from './mappers/blocks/cms.cta-section.mapper';
import { mapDocumentListBlock } from './mappers/blocks/cms.document-list.mapper';
import { mapFaqBlock } from './mappers/blocks/cms.faq.mapper';
import { mapFeatureSectionGridBlock } from './mappers/blocks/cms.feature-section-grid.mapper';
import { mapFeatureSectionBlock } from './mappers/blocks/cms.feature-section.mapper';
import { mapHeroSectionBlock } from './mappers/blocks/cms.hero-section.mapper';
import { mapMediaSectionBlock } from './mappers/blocks/cms.media-section.mapper';
import { mapPricingSectionBlock } from './mappers/blocks/cms.pricing-section.mapper';
import { mapQuickLinksBlock } from './mappers/blocks/cms.quick-links.mapper';
import { mapAppConfig } from './mappers/cms.app-config.mapper';
import { mapCategoryListBlock } from './mappers/cms.category-list.mapper';
import { mapCategoryBlock } from './mappers/cms.category.mapper';
import { mapFooter } from './mappers/cms.footer.mapper';
import { mapHeader } from './mappers/cms.header.mapper';
import { mapLoginPage } from './mappers/cms.login-page.mapper';
import { mapNotFoundPage } from './mappers/cms.not-found-page.mapper';
import { getAllPages, getAlternativePages, mapPage } from './mappers/cms.page.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class CmsService extends CMS.Service {
    override getEntry<T>(_options: CMS.Request.GetCmsEntryParams): Observable<T> {
        return of<T>({} as T);
    }

    override getEntries<T>(_options: CMS.Request.GetCmsEntriesParams): Observable<T> {
        return of<T>({} as T);
    }

    override getAppConfig(options: CMS.Request.GetCmsAppConfigParams): Observable<CMS.Model.AppConfig.AppConfig> {
        return of(mapAppConfig(options.locale, options.referrer));
    }

    override getPage(options: CMS.Request.GetCmsPageParams): Observable<CMS.Model.Page.Page | undefined> {
        return of(mapPage(options.slug, options.locale));
    }

    override getPages(options: CMS.Request.GetCmsPagesParams): Observable<CMS.Model.Page.Page[]> {
        return of(getAllPages(options.locale));
    }

    override getAlternativePages(options: CMS.Request.GetCmsAlternativePagesParams): Observable<CMS.Model.Page.Page[]> {
        return of(getAlternativePages(options.id, options.slug, options.locale));
    }

    override getLoginPage(options: CMS.Request.GetCmsLoginPageParams): Observable<CMS.Model.LoginPage.LoginPage> {
        return of(mapLoginPage(options.locale));
    }

    override getNotFoundPage(
        options: CMS.Request.GetCmsNotFoundPageParams,
    ): Observable<CMS.Model.NotFoundPage.NotFoundPage> {
        return of(mapNotFoundPage(options.locale));
    }

    override getHeader(options: CMS.Request.GetCmsHeaderParams): Observable<CMS.Model.Header.Header> {
        return of(mapHeader(options.id, options.locale));
    }

    override getFooter(options: CMS.Request.GetCmsFooterParams): Observable<CMS.Model.Footer.Footer> {
        return of(mapFooter(options.locale));
    }

    override getBlockConfig<T>(options: CMS.Request.GetCmsBlockConfigParams): Observable<T> {
        switch (options.blockType) {
            case 'FaqBlock':
                return of(mapFaqBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'HeroSectionBlock':
                return of(mapHeroSectionBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'FeatureSectionBlock':
                return of(mapFeatureSectionBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'CtaSectionBlock':
                return of(mapCtaSectionBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'BentoGridBlock':
                return of(mapBentoGridBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'MediaSectionBlock':
                return of(mapMediaSectionBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'QuickLinksBlock':
                return of(mapQuickLinksBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'FeatureSectionGridBlock':
                return of(mapFeatureSectionGridBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'PricingSectionBlock':
                return of(mapPricingSectionBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'DocumentListBlock':
                return of(mapDocumentListBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'ArticleListBlock':
                return of(mapArticleListBlock(options.id, options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'CategoryBlock':
                return of(mapCategoryBlock(options.id, options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'CategoryListBlock':
                return of(mapCategoryListBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'ArticleSearchBlock':
                return of(mapArticleSearchBlock(options.id, options.locale)).pipe(responseDelay()) as Observable<T>;
            default:
                return super.getBlockConfig<T>(options);
        }
    }
}
