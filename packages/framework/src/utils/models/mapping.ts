export type Mapping<T> = {
    [key in keyof T]?: {
        [key: string]: string;
    };
};
