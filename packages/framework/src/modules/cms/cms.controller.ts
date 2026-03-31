import { Controller, Get, NotFoundException, Query, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { of, switchMap, throwError } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Article } from '../articles/articles.model';

import { Model, Request } from './';
import { CmsService } from './cms.service';

/**
 * HTTP controller for CMS content. Base path: `/cms`. Endpoints: get-entry, get-entries, page, pages,
 * login-page, not-found-page, header, footer, app-config, and block endpoints (e.g. /blocks/faq, /blocks/article-list).
 * All methods delegate to {@link CmsService}.
 */
@Controller('/cms')
@UseInterceptors(LoggerService)
@ApiTags('cms')
export class CmsController {
    constructor(protected readonly cms: CmsService) {}

    @Get('/get-entry')
    @ApiOperation({ summary: 'Get CMS entry' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({
        description:
            'Returns a single CMS entry. Structure varies by content type (e.g., Article, Page, Block). Common fields: id, createdAt, updatedAt.',
        schema: { type: 'object', additionalProperties: true },
    })
    getEntry(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getEntry']> {
        return this.cms.getEntry(params);
    }

    @Get('/get-entries')
    @ApiOperation({ summary: 'Get CMS entries' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({
        description:
            'Returns CMS entries collection. Structure varies by content type. Typically contains data array and pagination info.',
        schema: { type: 'object', additionalProperties: true },
    })
    getEntries(@Query() params: Request.GetCmsEntriesParams): ReturnType<CmsService['getEntries']> {
        return this.cms.getEntries(params);
    }

    @Get('/page')
    @ApiOperation({ summary: 'Get CMS page' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns CMS page.', type: Model.Page.Page })
    getPage(@Query() params: Request.GetCmsPageParams): ReturnType<CmsService['getPage']> {
        return this.cms.getPage(params);
    }

    @Get('/pages')
    @ApiOperation({ summary: 'Get CMS pages' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns CMS pages.', type: [Model.Page.Page] })
    getPages(@Query() params: Request.GetCmsPagesParams): ReturnType<CmsService['getPages']> {
        return this.cms.getPages(params);
    }

    @Get('/login-page')
    @ApiOperation({ summary: 'Get CMS login page' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns CMS login page.', type: Model.LoginPage.LoginPage })
    getLoginPage(@Query() params: Request.GetCmsLoginPageParams): ReturnType<CmsService['getLoginPage']> {
        return this.cms.getLoginPage(params);
    }

    @Get('/not-found-page')
    @ApiOperation({ summary: 'Get CMS not-found page' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns CMS not-found page.', type: Model.NotFoundPage.NotFoundPage })
    getNotFoundPage(@Query() params: Request.GetCmsNotFoundPageParams): ReturnType<CmsService['getNotFoundPage']> {
        return this.cms.getNotFoundPage(params);
    }

    @Get('/header')
    @ApiOperation({ summary: 'Get CMS header' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns CMS header.', type: Model.Header.Header })
    getHeader(@Query() params: Request.GetCmsHeaderParams): ReturnType<CmsService['getHeader']> {
        return this.cms.getHeader(params);
    }

    @Get('/footer')
    @ApiOperation({ summary: 'Get CMS footer' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns CMS footer.', type: Model.Footer.Footer })
    getFooter(@Query() params: Request.GetCmsFooterParams): ReturnType<CmsService['getFooter']> {
        return this.cms.getFooter(params);
    }

    @Get('/app-config')
    @ApiOperation({ summary: 'Get CMS app config' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns CMS app config.', type: Model.AppConfig.AppConfig })
    getAppConfig(@Query() params: Request.GetCmsAppConfigParams): ReturnType<CmsService['getAppConfig']> {
        return this.cms.getAppConfig(params);
    }

    @Get('/blocks/faq')
    @ApiOperation({ summary: 'Get FAQ block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns FAQ block.', type: Model.FaqBlock.FaqBlock })
    getFaqBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.FaqBlock.FaqBlock>({ ...params, blockType: 'FaqBlock' });
    }

    @Get('/blocks/ticket-list')
    @ApiOperation({ summary: 'Get ticket-list block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns ticket-list block.', type: Model.TicketListBlock.TicketListBlock })
    getTicketListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.TicketListBlock.TicketListBlock>({
            ...params,
            blockType: 'TicketListBlock',
        });
    }

    @Get('/blocks/ticket-details')
    @ApiOperation({ summary: 'Get ticket-details block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns ticket-details block.', type: Model.TicketDetailsBlock.TicketDetailsBlock })
    getTicketDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.TicketDetailsBlock.TicketDetailsBlock>({
            ...params,
            blockType: 'TicketDetailsBlock',
        });
    }

    @Get('/blocks/notification-list')
    @ApiOperation({ summary: 'Get notification-list block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({
        description: 'Returns notification-list block.',
        type: Model.NotificationListBlock.NotificationListBlock,
    })
    getNotificationListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.NotificationListBlock.NotificationListBlock>({
            ...params,
            blockType: 'NotificationListBlock',
        });
    }

    @Get('/blocks/notification-details')
    @ApiOperation({ summary: 'Get notification-details block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({
        description: 'Returns notification-details block.',
        type: Model.NotificationDetailsBlock.NotificationDetailsBlock,
    })
    getNotificationDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.NotificationDetailsBlock.NotificationDetailsBlock>({
            ...params,
            blockType: 'NotificationDetailsBlock',
        });
    }

    @Get('/blocks/article-list')
    @ApiOperation({ summary: 'Get article-list block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns article-list block.', type: Model.ArticleListBlock.ArticleListBlock })
    getArticleListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.ArticleListBlock.ArticleListBlock>({
            ...params,
            blockType: 'ArticleListBlock',
        });
    }

    @Get('/blocks/article-details')
    @ApiOperation({ summary: 'Get article-details block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns article details from CMS.', type: Article })
    getArticleDetailsBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getEntry']> {
        return this.cms
            .getEntry(params)
            .pipe(
                switchMap((entry) =>
                    entry === undefined ? throwError(() => new NotFoundException('Article not found')) : of(entry),
                ),
            );
    }

    @Get('/blocks/invoice-list')
    @ApiOperation({ summary: 'Get invoice-list block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns invoice-list block.', type: Model.InvoiceListBlock.InvoiceListBlock })
    getInvoiceListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.InvoiceListBlock.InvoiceListBlock>({
            ...params,
            blockType: 'InvoiceListBlock',
        });
    }

    @Get('/blocks/invoice-details')
    @ApiOperation({ summary: 'Get invoice-details block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({
        description: 'Returns invoice-details block.',
        type: Model.InvoiceDetailsBlock.InvoiceDetailsBlock,
    })
    getInvoiceDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.InvoiceDetailsBlock.InvoiceDetailsBlock>({
            ...params,
            blockType: 'InvoiceDetailsBlock',
        });
    }

    @Get('/blocks/resource-list')
    @ApiOperation({ summary: 'Get resource-list block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns resource-list block.', type: Model.ResourceListBlock.ResourceListBlock })
    getResourceListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.ResourceListBlock.ResourceListBlock>({
            ...params,
            blockType: 'ResourceListBlock',
        });
    }

    @Get('/blocks/resource-details')
    @ApiOperation({ summary: 'Get resource-details block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({
        description: 'Returns resource-details block.',
        type: Model.ResourceDetailsBlock.ResourceDetailsBlock,
    })
    getResourceDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.ResourceDetailsBlock.ResourceDetailsBlock>({
            ...params,
            blockType: 'ResourceDetailsBlock',
        });
    }

    @Get('/blocks/user-account')
    @ApiOperation({ summary: 'Get user-account block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns user-account block.', type: Model.UserAccountBlock.UserAccountBlock })
    getUserAccountBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.UserAccountBlock.UserAccountBlock>({
            ...params,
            blockType: 'UserAccountBlock',
        });
    }

    @Get('/blocks/service-list')
    @ApiOperation({ summary: 'Get service-list block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({ description: 'Returns service-list block.', type: Model.ServiceListBlock.ServiceListBlock })
    getServiceListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.ServiceListBlock.ServiceListBlock>({
            ...params,
            blockType: 'ServiceListBlock',
        });
    }

    @Get('/blocks/service-details')
    @ApiOperation({ summary: 'Get service-details block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({
        description: 'Returns service-details block.',
        type: Model.ServiceDetailsBlock.ServiceDetailsBlock,
    })
    getServiceDetailsBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.ServiceDetailsBlock.ServiceDetailsBlock>({
            ...params,
            blockType: 'ServiceDetailsBlock',
        });
    }

    @Get('/blocks/featured-service-list')
    @ApiOperation({ summary: 'Get featured-service-list block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiOkResponse({
        description: 'Returns featured-service-list block.',
        type: Model.FeaturedServiceListBlock.FeaturedServiceListBlock,
    })
    getFeaturedServiceListBlock(@Query() params: Request.GetCmsEntryParams) {
        return this.cms.getBlockConfig<Model.FeaturedServiceListBlock.FeaturedServiceListBlock>({
            ...params,
            blockType: 'FeaturedServiceListBlock',
        });
    }
}
