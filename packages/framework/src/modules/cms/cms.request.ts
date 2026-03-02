/** Base CMS params: optional preview. */
export class GetCmsParams {
    preview?: boolean;
}

/** Single entry: id, locale. */
export class GetCmsEntryParams extends GetCmsParams {
    id!: string;
    locale!: string;
}

/** Multiple entries: locale, type, optional filters. */
export class GetCmsEntriesParams extends GetCmsParams {
    locale!: string;
    type!: string;
    filters?: {
        [key: string]: string;
    };
}

/** Single page: slug, locale. */
export class GetCmsPageParams extends GetCmsParams {
    slug!: string;
    locale!: string;
}

/** Page list: locale. */
export class GetCmsPagesParams extends GetCmsParams {
    locale!: string;
}

/** Alternative pages: id, slug, locale. */
export class GetCmsAlternativePagesParams extends GetCmsParams {
    id!: string;
    slug!: string;
    locale!: string;
}

/** Login page: locale. */
export class GetCmsLoginPageParams extends GetCmsParams {
    locale!: string;
}

/** Not-found page: locale. */
export class GetCmsNotFoundPageParams extends GetCmsParams {
    locale!: string;
}

/** Header: id, locale. */
export class GetCmsHeaderParams extends GetCmsParams {
    id!: string;
    locale!: string;
}

/** Footer: id, locale. */
export class GetCmsFooterParams extends GetCmsParams {
    id!: string;
    locale!: string;
}

/** App config: locale, optional referrer. */
export class GetCmsAppConfigParams extends GetCmsParams {
    referrer?: string;
    locale!: string;
}

/** Organization list: locale. */
export class GetCmsOrganizationListParams extends GetCmsParams {
    locale!: string;
}

/** Survey: code. */
export class GetCmsSurveyParams extends GetCmsParams {
    code!: string;
}
