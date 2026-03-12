import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/** Base CMS params: optional preview. */
export class GetCmsParams {
    @ApiPropertyOptional({ description: 'When true, returns draft/preview CMS content.' })
    preview?: boolean;
}

/** Single entry: id, locale. */
export class GetCmsEntryParams extends GetCmsParams {
    @ApiProperty({ description: 'CMS entry identifier.' })
    id!: string;
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
}

/** Multiple entries: locale, type, optional filters. */
export class GetCmsEntriesParams extends GetCmsParams {
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
    @ApiProperty({ description: 'CMS content type key (for example `page`, `article`).' })
    type!: string;
    @ApiPropertyOptional({
        description: 'Optional map of integration-specific filters.',
        additionalProperties: { type: 'string' },
    })
    filters?: {
        [key: string]: string;
    };
}

/** Single page: slug, locale. */
export class GetCmsPageParams extends GetCmsParams {
    @ApiProperty({ description: 'Page slug identifier.' })
    slug!: string;
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
}

/** Page list: locale. */
export class GetCmsPagesParams extends GetCmsParams {
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
}

/** Alternative pages: id, slug, locale. */
export class GetCmsAlternativePagesParams extends GetCmsParams {
    @ApiProperty({ description: 'Current page identifier.' })
    id!: string;
    @ApiProperty({ description: 'Current page slug.' })
    slug!: string;
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
}

/** Login page: locale. */
export class GetCmsLoginPageParams extends GetCmsParams {
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
}

/** Not-found page: locale. */
export class GetCmsNotFoundPageParams extends GetCmsParams {
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
}

/** Header: id, locale. */
export class GetCmsHeaderParams extends GetCmsParams {
    @ApiProperty({ description: 'Header content identifier.' })
    id!: string;
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
}

/** Footer: id, locale. */
export class GetCmsFooterParams extends GetCmsParams {
    @ApiProperty({ description: 'Footer content identifier.' })
    id!: string;
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
}

/** App config: locale, optional referrer. */
export class GetCmsAppConfigParams extends GetCmsParams {
    @ApiPropertyOptional({ description: 'Optional referrer URL or route used for context-aware app config.' })
    referrer?: string;
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
}

/** Organization list: locale. */
export class GetCmsOrganizationListParams extends GetCmsParams {
    @ApiProperty({ description: 'Locale code used to localize the response, for example `pl` or `en`.' })
    locale!: string;
}

/** Survey: code. */
export class GetCmsSurveyParams extends GetCmsParams {
    @ApiProperty({ description: 'Survey code identifier.' })
    code!: string;
}
