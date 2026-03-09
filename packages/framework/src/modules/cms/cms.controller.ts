import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Model, Request } from './';
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
        return this.cms.getBlockConfig<Model.FaqBlock.FaqBlock>({ ...params, blockType: 'FaqBlock' });
    }

    @Get('/blocks/ticket-list')
    getTicketListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.TicketListBlock.TicketListBlock>({
            ...params,
            blockType: 'TicketListBlock',
        });
    }

    @Get('/blocks/ticket-details')
    getTicketDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.TicketDetailsBlock.TicketDetailsBlock>({
            ...params,
            blockType: 'TicketDetailsBlock',
        });
    }

    @Get('/blocks/notification-list')
    getNotificationListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.NotificationListBlock.NotificationListBlock>({
            ...params,
            blockType: 'NotificationListBlock',
        });
    }

    @Get('/blocks/notification-details')
    getNotificationDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.NotificationDetailsBlock.NotificationDetailsBlock>({
            ...params,
            blockType: 'NotificationDetailsBlock',
        });
    }

    @Get('/blocks/article-list')
    getArticleListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.ArticleListBlock.ArticleListBlock>({
            ...params,
            blockType: 'ArticleListBlock',
        });
    }

    @Get('/blocks/article-details')
    getArticleDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        // TODO: fix it
        return this.cms.getBlockConfig<Model.ArticleListBlock.ArticleListBlock>({
            ...params,
            blockType: 'ArticleListBlock',
        });
    }

    @Get('/blocks/invoice-list')
    getInvoiceListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.InvoiceListBlock.InvoiceListBlock>({
            ...params,
            blockType: 'InvoiceListBlock',
        });
    }

    @Get('/blocks/invoice-details')
    getInvoiceDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.InvoiceDetailsBlock.InvoiceDetailsBlock>({
            ...params,
            blockType: 'InvoiceDetailsBlock',
        });
    }

    @Get('/blocks/resource-list')
    getResourceListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.ResourceListBlock.ResourceListBlock>({
            ...params,
            blockType: 'ResourceListBlock',
        });
    }

    @Get('/blocks/resource-details')
    getResourceDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.ResourceDetailsBlock.ResourceDetailsBlock>({
            ...params,
            blockType: 'ResourceDetailsBlock',
        });
    }

    @Get('/blocks/user-account')
    getUserAccountBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.UserAccountBlock.UserAccountBlock>({
            ...params,
            blockType: 'UserAccountBlock',
        });
    }

    @Get('/blocks/service-list')
    getServiceListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.ServiceListBlock.ServiceListBlock>({
            ...params,
            blockType: 'ServiceListBlock',
        });
    }

    @Get('/blocks/service-details')
    getServiceDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.ServiceDetailsBlock.ServiceDetailsBlock>({
            ...params,
            blockType: 'ServiceDetailsBlock',
        });
    }

    @Get('/blocks/featured-service-list')
    getFeaturedServiceListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.FeaturedServiceListBlock.FeaturedServiceListBlock>({
            ...params,
            blockType: 'FeaturedServiceListBlock',
        });
    }
}
