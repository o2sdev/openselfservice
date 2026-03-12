import { Controller, Get, NotFoundException, Query, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { of, switchMap, throwError } from 'rxjs';

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
@ApiTags('cms')
export class CmsController {
    constructor(protected readonly cms: CmsService) {}

    @Get('/get-entry')
    @ApiOperation({ summary: 'Get CMS entry' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns CMS entry.' })
    getEntry(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getEntry']> {
        return this.cms.getEntry(params);
    }

    @Get('/get-entries')
    @ApiOperation({ summary: 'Get CMS entries' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns CMS entries.' })
    getEntries(@Query() params: Request.GetCmsEntriesParams): ReturnType<CmsService['getEntries']> {
        return this.cms.getEntries(params);
    }

    @Get('/page')
    @ApiOperation({ summary: 'Get CMS page' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns CMS page.' })
    getPage(@Query() params: Request.GetCmsPageParams): ReturnType<CmsService['getPage']> {
        return this.cms.getPage(params);
    }

    @Get('/pages')
    @ApiOperation({ summary: 'Get CMS pages' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns CMS pages.' })
    getPages(@Query() params: Request.GetCmsPagesParams): ReturnType<CmsService['getPages']> {
        return this.cms.getPages(params);
    }

    @Get('/login-page')
    @ApiOperation({ summary: 'Get CMS login page' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns CMS login page.' })
    getLoginPage(@Query() params: Request.GetCmsLoginPageParams): ReturnType<CmsService['getLoginPage']> {
        return this.cms.getLoginPage(params);
    }

    @Get('/not-found-page')
    @ApiOperation({ summary: 'Get CMS not-found page' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns CMS not-found page.' })
    getNotFoundPage(@Query() params: Request.GetCmsNotFoundPageParams): ReturnType<CmsService['getNotFoundPage']> {
        return this.cms.getNotFoundPage(params);
    }

    @Get('/header')
    @ApiOperation({ summary: 'Get CMS header' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns CMS header.' })
    getHeader(@Query() params: Request.GetCmsHeaderParams): ReturnType<CmsService['getHeader']> {
        return this.cms.getHeader(params);
    }

    @Get('/footer')
    @ApiOperation({ summary: 'Get CMS footer' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns CMS footer.' })
    getFooter(@Query() params: Request.GetCmsFooterParams): ReturnType<CmsService['getFooter']> {
        return this.cms.getFooter(params);
    }

    @Get('/app-config')
    @ApiOperation({ summary: 'Get CMS app config' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns CMS app config.' })
    getAppConfig(@Query() params: Request.GetCmsAppConfigParams): ReturnType<CmsService['getAppConfig']> {
        return this.cms.getAppConfig(params);
    }

    @Get('/blocks/faq')
    @ApiOperation({ summary: 'Get FAQ block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns FAQ block.' })
    getFaqBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getFaqBlock']> {
        return this.cms.getFaqBlock(params);
    }

    @Get('/blocks/ticket-list')
    @ApiOperation({ summary: 'Get ticket-list block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns ticket-list block.' })
    getTicketListBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getTicketListBlock']> {
        return this.cms.getTicketListBlock(params);
    }

    @Get('/blocks/ticket-details')
    @ApiOperation({ summary: 'Get ticket-details block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns ticket-details block.' })
    getTicketDetailsBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getTicketDetailsBlock']> {
        return this.cms.getTicketDetailsBlock(params);
    }

    @Get('/blocks/notification-list')
    @ApiOperation({ summary: 'Get notification-list block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns notification-list block.' })
    getNotificationListBlock(
        @Query() params: Request.GetCmsEntryParams,
    ): ReturnType<CmsService['getNotificationListBlock']> {
        return this.cms.getNotificationListBlock(params);
    }

    @Get('/blocks/notification-details')
    @ApiOperation({ summary: 'Get notification-details block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns notification-details block.' })
    getNotificationDetailsBlock(
        @Query() params: Request.GetCmsEntryParams,
    ): ReturnType<CmsService['getNotificationDetailsBlock']> {
        return this.cms.getNotificationDetailsBlock(params);
    }

    @Get('/blocks/article-list')
    @ApiOperation({ summary: 'Get article-list block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns article-list block.' })
    getArticleListBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getArticleListBlock']> {
        return this.cms.getArticleListBlock(params);
    }

    @Get('/blocks/article-details')
    @ApiOperation({ summary: 'Get article-details block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns article-details block.' })
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
    @ApiResponse({ status: 200, description: 'Returns invoice-list block.' })
    getInvoiceListBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getInvoiceListBlock']> {
        return this.cms.getInvoiceListBlock(params);
    }

    @Get('/blocks/invoice-details')
    @ApiOperation({ summary: 'Get invoice-details block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns invoice-details block.' })
    getInvoiceDetailsBlock(
        @Query() params: Request.GetCmsEntryParams,
    ): ReturnType<CmsService['getInvoiceDetailsBlock']> {
        return this.cms.getInvoiceDetailsBlock(params);
    }

    @Get('/blocks/resource-list')
    @ApiOperation({ summary: 'Get resource-list block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns resource-list block.' })
    getResourceListBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getResourceListBlock']> {
        return this.cms.getResourceListBlock(params);
    }

    @Get('/blocks/resource-details')
    @ApiOperation({ summary: 'Get resource-details block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns resource-details block.' })
    getResourceDetailsBlock(
        @Query() params: Request.GetCmsEntryParams,
    ): ReturnType<CmsService['getResourceDetailsBlock']> {
        return this.cms.getResourceDetailsBlock(params);
    }

    @Get('/blocks/user-account')
    @ApiOperation({ summary: 'Get user-account block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns user-account block.' })
    getUserAccountBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getUserAccountBlock']> {
        return this.cms.getUserAccountBlock(params);
    }

    @Get('/blocks/service-list')
    @ApiOperation({ summary: 'Get service-list block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns service-list block.' })
    getServiceListBlock(@Query() params: Request.GetCmsEntryParams): ReturnType<CmsService['getServiceListBlock']> {
        return this.cms.getServiceListBlock(params);
    }

    @Get('/blocks/service-details')
    @ApiOperation({ summary: 'Get service-details block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns service-details block.' })
    getServiceDetailsBlock(
        @Query() params: Request.GetCmsEntryParams,
    ): ReturnType<CmsService['getServiceDetailsBlock']> {
        return this.cms.getServiceDetailsBlock(params);
    }

    @Get('/blocks/featured-service-list')
    @ApiOperation({ summary: 'Get featured-service-list block' })
    @ApiQuery({ name: 'query', required: false, type: String })
    @ApiResponse({ status: 200, description: 'Returns featured-service-list block.' })
    getFeaturedServiceListBlock(
        @Query() params: Request.GetCmsEntryParams,
    ): ReturnType<CmsService['getFeaturedServiceListBlock']> {
        return this.cms.getFeaturedServiceListBlock(params);
    }
}
