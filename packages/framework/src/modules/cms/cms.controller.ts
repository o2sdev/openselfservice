import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { CmsService } from './cms.service';

/**
 * HTTP controller for CMS content. Base path: `/cms`. Endpoints: get-entry, get-entries, page, pages,
 * login-page, not-found-page, header, footer, app-config, and block endpoints (e.g. /blocks/faq, /blocks/article-list).
 * All methods delegate to {@link CmsService}.
 */
@Controller('/cms')
@UseInterceptors(LoggerService)
export class CmsController {
    constructor(protected readonly cms: CmsService) {}

    @Get('/get-entry')
    getEntry(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getEntry']> {
        return this.cms.getEntry(params);
    }

    @Get('/get-entries')
    getEntries(@Query() params: Request.GetCmsEntriesParams): ReturnType<CmsService['getEntries']> {
        return this.cms.getEntries(params);
    }

    @Get('/page')
    getPage(@Query() params: Request.GetCmsPageParams): ReturnType<CmsService['getPage']> {
        return this.cms.getPage(params);
    }

    @Get('/pages')
    getPages(@Query() params: Request.GetCmsPagesParams): ReturnType<CmsService['getPages']> {
        return this.cms.getPages(params);
    }

    @Get('/login-page')
    getLoginPage(@Query() params: Request.GetCmsPageParams): ReturnType<CmsService['getLoginPage']> {
        return this.cms.getLoginPage(params);
    }

    @Get('/not-found-page')
    getNotFoundPage(@Query() params: Request.GetCmsNotFoundPageParams): ReturnType<CmsService['getNotFoundPage']> {
        return this.cms.getNotFoundPage(params);
    }

    @Get('/header')
    getHeader(@Query() params: Request.GetCmsHeaderParams): ReturnType<CmsService['getHeader']> {
        return this.cms.getHeader(params);
    }

    @Get('/footer')
    getFooter(@Query() params: Request.GetCmsFooterParams): ReturnType<CmsService['getFooter']> {
        return this.cms.getFooter(params);
    }

    @Get('/app-config')
    getAppConfig(@Query() params: Request.GetCmsAppConfigParams): ReturnType<CmsService['getAppConfig']> {
        return this.cms.getAppConfig(params);
    }

    @Get('/blocks/faq')
    getFaqBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getFaqBlock']> {
        return this.cms.getFaqBlock(params);
    }

    @Get('/blocks/ticket-list')
    getTicketListBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getTicketListBlock']> {
        return this.cms.getTicketListBlock(params);
    }

    @Get('/blocks/ticket-details')
    getTicketDetailsBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getTicketDetailsBlock']> {
        return this.cms.getTicketDetailsBlock(params);
    }

    @Get('/blocks/notification-list')
    getNotificationListBlock(
        @Query() params: Request.GetCmsEntryParams,
    ): ReturnType<CmsService['getNotificationListBlock']> {
        return this.cms.getNotificationListBlock(params);
    }

    @Get('/blocks/notification-details')
    getNotificationDetailsBlock(
        @Query() params: Request.GetCmsEntryParams,
    ): ReturnType<CmsService['getNotificationDetailsBlock']> {
        return this.cms.getNotificationDetailsBlock(params);
    }

    @Get('/blocks/article-list')
    getArticleListBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getArticleListBlock']> {
        return this.cms.getArticleListBlock(params);
    }

    @Get('/blocks/article-details')
    getArticleDetailsBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getEntry']> {
        return this.cms.getEntry(params);
    }

    @Get('/blocks/invoice-list')
    getInvoiceListBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getInvoiceListBlock']> {
        return this.cms.getInvoiceListBlock(params);
    }

    @Get('/blocks/invoice-details')
    getInvoiceDetailsBlock(
        @Query() params: Request.GetCmsEntryParams,
    ): ReturnType<CmsService['getInvoiceDetailsBlock']> {
        return this.cms.getInvoiceDetailsBlock(params);
    }

    @Get('/blocks/resource-list')
    getResourceListBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getResourceListBlock']> {
        return this.cms.getResourceListBlock(params);
    }

    @Get('/blocks/resource-details')
    getResourceDetailsBlock(
        @Query() params: Request.GetCmsEntryParams,
    ): ReturnType<CmsService['getResourceDetailsBlock']> {
        return this.cms.getResourceDetailsBlock(params);
    }

    @Get('/blocks/user-account')
    getUserAccountBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getUserAccountBlock']> {
        return this.cms.getUserAccountBlock(params);
    }

    @Get('/blocks/service-list')
    getServiceListBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getServiceListBlock']> {
        return this.cms.getServiceListBlock(params);
    }

    @Get('/blocks/service-details')
    getServiceDetailsBlock(
        @Query() params: Request.GetCmsEntryParams,
    ): ReturnType<CmsService['getServiceDetailsBlock']> {
        return this.cms.getServiceDetailsBlock(params);
    }

    @Get('/blocks/featured-service-list')
    getFeaturedServiceListBlock(
        @Query() params: Request.GetCmsEntryParams,
    ): ReturnType<CmsService['getFeaturedServiceListBlock']> {
        return this.cms.getFeaturedServiceListBlock(params);
    }
}
