export class GetCmsParams {
    preview?: boolean;
}

export class GetCmsEntryParams extends GetCmsParams {
    id!: string;
    locale!: string;
}

export class GetCmsEntriesParams extends GetCmsParams {
    locale!: string;
    type!: string;
    filters?: {
        [key: string]: string;
    };
}

export class GetCmsPageParams extends GetCmsParams {
    slug!: string;
    locale!: string;
}

export class GetCmsPagesParams extends GetCmsParams {
    locale!: string;
}
export class GetCmsAlternativePagesParams extends GetCmsParams {
    id!: string;
    slug!: string;
    locale!: string;
}

export class GetCmsLoginPageParams extends GetCmsParams {
    locale!: string;
}

export class GetCmsNotFoundPageParams extends GetCmsParams {
    locale!: string;
}

export class GetCmsHeaderParams extends GetCmsParams {
    id!: string;
    locale!: string;
}
export class GetCmsFooterParams extends GetCmsParams {
    id!: string;
    locale!: string;
}

export class GetCmsAppConfigParams extends GetCmsParams {
    referrer?: string;
    locale!: string;
}

export class GetCmsOrganizationListParams extends GetCmsParams {
    locale!: string;
}
export class GetCmsSurveyParams extends GetCmsParams {
    code!: string;
}
