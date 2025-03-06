import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { CmsService } from './cms.service';

@Controller('/cms')
@UseInterceptors(LoggerService)
export class CmsController {
    constructor(protected readonly cms: CmsService) {}

    @Get('/get-entry')
    getEntry(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getEntry(params);
    }

    @Get('/get-entries')
    getEntries(@Query() params: Request.GetCmsEntriesParams) {
        return this.cms.getEntries(params);
    }

    @Get('/page')
    getPage(@Query() params: Request.GetCmsPageParams) {
        return this.cms.getPage(params);
    }

    @Get('/pages')
    getPages(@Query() params: Request.GetCmsPagesParams) {
        return this.cms.getPages(params);
    }

    @Get('/login-page')
    getLoginPage(@Query() params: Request.GetCmsPageParams) {
        return this.cms.getLoginPage(params);
    }

    @Get('/header')
    getHeader(@Query() params: Request.GetCmsHeaderParams) {
        return this.cms.getHeader(params);
    }

    @Get('/footer')
    getFooter(@Query() params: Request.GetCmsFooterParams) {
        return this.cms.getFooter(params);
    }

    @Get('/app-config')
    getAppConfig(@Query() params: Request.GetCmsAppConfigParams) {
        return this.cms.getAppConfig(params);
    }

    @Get('/components/faq')
    getFaqComponent(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getFaqComponent(params);
    }

    @Get('/components/ticket-list')
    getTicketListComponent(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getTicketListComponent(params);
    }

    @Get('/components/ticket-details')
    getTicketDetailsComponent(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getTicketDetailsComponent(params);
    }

    @Get('/components/notification-list')
    getNotificationListComponent(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getNotificationListComponent(params);
    }

    @Get('/components/notification-details')
    getNotificationDetailsComponent(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getNotificationDetailsComponent(params);
    }

    @Get('/components/article-list')
    getArticleListComponent(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getArticleListComponent(params);
    }

    @Get('/components/article-details')
    getArticleDetailsComponent(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getArticleDetailsComponent(params);
    }

    @Get('/components/invoice-list')
    getInvoiceListComponent(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getInvoiceListComponent(params);
    }

    @Get('/components/invoice-details')
    getInvoiceDetailsComponent(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getInvoiceDetailsComponent(params);
    }

    @Get('/components/resource-list')
    getResourceListComponent(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getResourceListComponent(params);
    }

    @Get('/components/resource-details')
    getResourceDetailsComponent(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getResourceDetailsComponent(params);
    }
}
