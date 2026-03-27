import { Body, Controller, Post, Query, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { SearchPayload, SearchResultResponse } from './search.model';
import { SearchService } from './search.service';

/**
 * HTTP controller for search. Base path: `/search`. All methods delegate to {@link SearchService}.
 */
@Controller('/search')
@UseInterceptors(LoggerService)
@ApiTags('search')
export class SearchController {
    constructor(protected readonly searchService: SearchService) {}

    @Post()
    @ApiOperation({ summary: 'Search across index' })
    @ApiQuery({ name: 'index', type: String, description: 'Search index name (e.g., articles, products).' })
    @ApiBody({ type: SearchPayload, description: 'Search query and filters.' })
    @ApiOkResponse({ description: 'Returns search results.', type: SearchResultResponse })
    search(@Query('index') index: string, @Body() searchPayload: SearchPayload): ReturnType<SearchService['search']> {
        return this.searchService.search(index, searchPayload);
    }
}
