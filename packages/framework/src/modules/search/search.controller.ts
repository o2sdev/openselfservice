import { Body, Controller, Get, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { SearchPayload } from './search.model';
import { SearchService } from './search.service';

@Controller('/search')
@UseInterceptors(LoggerService)
export class SearchController {
    constructor(protected readonly searchService: SearchService) {}

    @Get()
    search(@Query('index') index: string, @Body() searchPayload: SearchPayload) {
        return this.searchService.search(index, searchPayload);
    }
}
