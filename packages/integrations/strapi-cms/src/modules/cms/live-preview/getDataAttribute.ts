'use client';

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
    return <T>(_data: Props<T> | undefined, _name: keyof Omit<Props<T>, '__id'>): DataAttribute => ({});
};
