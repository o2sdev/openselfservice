export type Mapping<T> = {
    [key in keyof T]?: {
        [key: string]: string;
    };
};

export type MappingMeta<T> = {
    [key in keyof T]?: {
        [key: string]: {
            __id: string;
            value: string;
        };
    } & {
        __id: string;
    };
};
