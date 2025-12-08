import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetMediaSectionBlockQuery } from './media-section.request';
import { MediaSectionService } from './media-section.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class MediaSectionController {
    constructor(protected readonly service: MediaSectionService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getMediaSectionBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetMediaSectionBlockQuery) {
        return this.service.getMediaSectionBlock(query, headers);
    }
}
