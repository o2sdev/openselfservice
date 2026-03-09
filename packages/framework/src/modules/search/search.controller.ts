import { Body, Controller, Post, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { SearchPayload } from './search.model';
import { SearchService } from './search.service';

@Controller('/search')
@UseInterceptors(LoggerService)
export class SearchController {
    constructor(protected readonly searchService: SearchService) {}

    @Post()
    search(@Query('index') index: string, @Body() searchPayload: SearchPayload): ReturnType<SearchService['search']> {
        return this.searchService.search(index, searchPayload);
    }
}
