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

    override getFaqBlock(options: CMS.Request.GetCmsEntryParams): Observable<CMS.Model.FaqBlock.FaqBlock> {
        return of(mapFaqBlock(options.locale)).pipe(responseDelay());
    }

    override getHeroSectionBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.HeroSectionBlock.HeroSectionBlock> {
        return of(mapHeroSectionBlock(options)).pipe(responseDelay());
    }

    override getFeatureSectionBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.FeatureSectionBlock.FeatureSectionBlock> {
        return of(mapFeatureSectionBlock(options)).pipe(responseDelay());
    }

    override getCtaSectionBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.CtaSectionBlock.CtaSectionBlock> {
        return of(mapCtaSectionBlock(options)).pipe(responseDelay());
    }

    override getBentoGridBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.BentoGridBlock.BentoGridBlock> {
        return of(mapBentoGridBlock(options)).pipe(responseDelay());
    }

    override getMediaSectionBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.MediaSectionBlock.MediaSectionBlock> {
        return of(mapMediaSectionBlock(options)).pipe(responseDelay());
    }

    override getQuickLinksBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.QuickLinksBlock.QuickLinksBlock> {
        return of(mapQuickLinksBlock(options)).pipe(responseDelay());
    }

    override getFeatureSectionGridBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock> {
        return of(mapFeatureSectionGridBlock(options)).pipe(responseDelay());
    }

    override getPricingSectionBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.PricingSectionBlock.PricingSectionBlock> {
        return of(mapPricingSectionBlock(options)).pipe(responseDelay());
    }

    override getDocumentListBlock(
        _options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.DocumentListBlock.DocumentListBlock> {
        return of(mapDocumentListBlock(_options.locale)).pipe(responseDelay());
    }

    override getArticleListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ArticleListBlock.ArticleListBlock> {
        return of(mapArticleListBlock(options.id, options.locale)).pipe(responseDelay());
    }

    override getCategoryBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.CategoryBlock.CategoryBlock> {
        return of(mapCategoryBlock(options.id, options.locale)).pipe(responseDelay());
    }

    override getCategoryListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.CategoryListBlock.CategoryListBlock> {
        return of(mapCategoryListBlock(options.locale)).pipe(responseDelay());
    }

    override getArticleSearchBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ArticleSearchBlock.ArticleSearchBlock> {
        return of(mapArticleSearchBlock(options.id, options.locale)).pipe(responseDelay());
    }
}
