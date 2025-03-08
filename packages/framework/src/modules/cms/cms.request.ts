export class GetCmsEntryParams {
    id!: string;
    locale!: string;
}

export class GetCmsEntriesParams {
    locale!: string;
    type!: string;
    filters?: {
        [key: string]: string;
    };
}

export class GetCmsPageParams {
    slug!: string;
    locale!: string;
}

export class GetCmsPagesParams {
    locale!: string;
}
export class GetCmsAlternativePagesParams {
    id!: string;
    slug!: string;
    locale!: string;
}

export class GetCmsLoginPageParams {
    locale!: string;
}

export class GetCmsNotFoundPageParams {
    locale!: string;
}

export class GetCmsHeaderParams {
    id!: string;
    locale!: string;
}
export class GetCmsFooterParams {
    id!: string;
    locale!: string;
}

export class GetCmsAppConfigParams {
    locale!: string;
}
