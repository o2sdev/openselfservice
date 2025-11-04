'use client';

import { useContentfulInspectorMode } from '@contentful/live-preview/react';

interface DataAttribute {
    [key: string]: string;
}

type Props<T> = {
    [key in keyof T]: unknown;
} & {
    __id: string;
};

export const getDataAttribute = <T>(data: Props<T> | undefined, name: keyof Omit<Props<T>, '__id'>): DataAttribute => {
    const inspectorProps = useContentfulInspectorMode();

    if (!data) return {};

    return {
        ...inspectorProps({
            entryId: data.__id,
            fieldId: data[name] as unknown as string,
        }),
    };
};
