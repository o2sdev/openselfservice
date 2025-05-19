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

    @Get('/reset-password-page')
    getResetPasswordPage(@Query() params: Request.GetCmsResetPasswordPageParams) {
        return this.cms.getResetPasswordPage(params);
    }

    @Get('/create-new-password-page')
    getCreateNewPasswordPage(@Query() params: Request.GetCmsCreateNewPasswordPageParams) {
        return this.cms.getCreateNewPasswordPage(params);
    }

    @Get('/not-found-page')
    getNotFoundPage(@Query() params: Request.GetCmsNotFoundPageParams) {
        return this.cms.getNotFoundPage(params);
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

    @Get('/blocks/faq')
    getFaqBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getFaqBlock(params);
    }

    @Get('/blocks/ticket-list')
    getTicketListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getTicketListBlock(params);
    }

    @Get('/blocks/ticket-details')
    getTicketDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getTicketDetailsBlock(params);
    }

    @Get('/blocks/notification-list')
    getNotificationListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getNotificationListBlock(params);
    }

    @Get('/blocks/notification-details')
    getNotificationDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getNotificationDetailsBlock(params);
    }

    @Get('/blocks/article-list')
    getArticleListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getArticleListBlock(params);
    }

    @Get('/blocks/article-details')
    getArticleDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        // TODO: fix it
        return this.cms.getArticleListBlock(params);
    }

    @Get('/blocks/invoice-list')
    getInvoiceListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getInvoiceListBlock(params);
    }

    @Get('/blocks/invoice-details')
    getInvoiceDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getInvoiceDetailsBlock(params);
    }

    @Get('/blocks/resource-list')
    getResourceListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getResourceListBlock(params);
    }

    @Get('/blocks/resource-details')
    getResourceDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getResourceDetailsBlock(params);
    }

    @Get('/blocks/user-account')
    getUserAccountBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getUserAccountBlock(params);
    }

    @Get('/blocks/service-list')
    getServiceListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getServiceListBlock(params);
    }

    @Get('/blocks/service-details')
    getServiceDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getServiceDetailsBlock(params);
    }
}
