import { ReactNode } from 'react';

export interface IconItem {
    name: string;
    title: string;
    description: string;
    size?: number;
    color?: string;
    className?: string;
}

export interface IconsListProps {
    header?: ReactNode;
    icons: IconItem[];
    className?: string;
    listClassName?: string;
    listItemClassName?: string;
}
