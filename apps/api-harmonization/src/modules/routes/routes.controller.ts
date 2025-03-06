import { Controller, Get, Header } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';

import { URL } from './';
import { SitemapEntry } from './models/sitemap.model';
import { SitemapService } from './routes.service';

@Controller(URL)
export class RoutesController {
    constructor(private readonly sitemapService: SitemapService) {}

    @Get('/sitemap')
    async getSitemap(): Promise<SitemapEntry[]> {
        return firstValueFrom(this.sitemapService.getSitemap());
    }

    @Get('/sitemap.xml')
    @Header('Content-Type', 'text/xml')
    getSitemapXml() {
        return this.sitemapService.getSitemap().pipe(map((entries) => this.sitemapService.getSitemapXml(entries)));
    }
}
