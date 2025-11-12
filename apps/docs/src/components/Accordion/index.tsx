import * as AccordionPrimitive from '@radix-ui/react-accordion';
import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import ChevronDownIcon from '@site/src/assets/icons/ChevronDown.svg';
import { BodyBold } from '@site/src/components/Typography';

import styles from './Accordion.module.scss';

export interface AccordionItem {
    title: string;
    content: ReactNode;
    value: string;
}

export interface AccordionProps {
    items: AccordionItem[];
    type?: 'single' | 'multiple';
    defaultValue?: string;
    className?: string;
}

const AccordionRoot: React.FC<AccordionProps> = ({ items, type = 'single', defaultValue, className }) => {
    if (type === 'single') {
        return (
            <AccordionPrimitive.Root
                type="single"
                defaultValue={defaultValue}
                collapsible
                className={clsx('flex flex-col items-start w-full', className)}
            >
                {items.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>{item.content}</AccordionContent>
                    </AccordionItem>
                ))}
            </AccordionPrimitive.Root>
        );
    }

    return (
        <AccordionPrimitive.Root
            type="multiple"
            defaultValue={defaultValue ? [defaultValue] : undefined}
            className={clsx('flex flex-col items-start w-full', className)}
        >
            {items.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </AccordionPrimitive.Root>
    );
};

const AccordionItem: React.FC<{
    children: ReactNode;
    value: string;
    className?: string;
}> = ({ children, value, className }) => {
    return (
        <AccordionPrimitive.Item value={value} className={clsx('border-b border-white w-full', className)}>
            {children}
        </AccordionPrimitive.Item>
    );
};

const AccordionTrigger: React.FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className }) => {
    return (
        <AccordionPrimitive.Trigger
            className={clsx(
                'flex flex-1 items-center justify-between py-4 px-0 cursor-pointer text-white bg-transparent border-none transition-all w-full',
                'data-[state=open]:[&_svg]:rotate-180',
                className,
            )}
        >
            <BodyBold className="mb-0!">{children}</BodyBold>
            <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
    );
};

const AccordionContent: React.FC<{
    children: ReactNode;
    className?: string;
}> = ({ children, className }) => {
    return (
        <AccordionPrimitive.Content className={clsx(styles.accordionContent, className)}>
            <div className="pb-4 pt-0">{children}</div>
        </AccordionPrimitive.Content>
    );
};

export default AccordionRoot;
