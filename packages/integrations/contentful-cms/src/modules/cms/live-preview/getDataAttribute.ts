'use client';

import { useContentfulInspectorMode } from '@contentful/live-preview/react';

interface DataAttribute {
    [key: string]: string | null;
}

type Props<T> = {
    [key in keyof T]: unknown;
} & {
    __id: string;
};

/**
 * Hook that returns a function to automatically get inspector attributes from meta object
 * This is the recommended way to use inspector mode in components
 *
 * @example
 * const inspector = useInspector();
 * <div {...inspector(meta, 'title')}>Title</div>
 */
export const useInspector = () => {
    const inspectorProps = useContentfulInspectorMode();

    return <T>(data: Props<T> | undefined, name: keyof Omit<Props<T>, '__id'>): DataAttribute => {
        if (!data) return {};

        const attributes = inspectorProps({
            entryId: data.__id,
            fieldId: data[name] as unknown as string,
        });

        return attributes as DataAttribute;
    };
};
