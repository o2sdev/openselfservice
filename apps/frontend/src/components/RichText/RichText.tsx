import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import NextLink, { LinkProps } from 'next/link';
import React, { FC, ReactNode } from 'react';

import { Link } from '@o2s/ui/components/link';
import { Typography, TypographyProps } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { RichTextProps } from './RichText.types';

const LinkComp: FC<LinkProps & { children: ReactNode; className?: string }> = ({ children, ...props }) => {
    const { className, ...rest } = props;
    return (
        <Link className={className} asChild>
            <NextLink {...rest}>{children}</NextLink>
        </Link>
    );
};

const TypographyComp: FC<TypographyProps & { children: ReactNode; tag: string }> = ({ children, ...props }) => {
    const Tag = props.tag || 'p';
    return (
        <Typography variant={props.variant} asChild>
            <Tag {...props}>{children}</Tag>
        </Typography>
    );
};

export const RichText: FC<RichTextProps> = ({ content, baseFontSize = 'body', className }) => {
    if (!content) {
        return null;
    }

    const baseFontSizeClass = baseFontSize === 'body' ? 'text-base md:text-base' : 'text-sm md:text-sm';

    const overrides: MarkdownToJSX.Overrides = {
        a: {
            component: LinkComp,
            props: {
                className: `${baseFontSizeClass} text-foreground hover:text-primary underline`,
            },
        },
        h1: {
            component: TypographyComp,
            props: {
                variant: 'h1',
                tag: 'h1',
            },
        },
        h2: {
            component: TypographyComp,
            props: {
                variant: 'h2',
                tag: 'h2',
                className: 'mt-10 pb-2 border-b border-border',
            },
        },
        h3: {
            component: TypographyComp,
            props: {
                variant: 'h3',
                tag: 'h3',
                className: 'mt-8',
            },
        },
        h4: {
            component: TypographyComp,
            props: {
                variant: 'h4',
                tag: 'h4',
                className: 'mt-8',
            },
        },
        p: {
            component: TypographyComp,
            props: {
                variant: baseFontSize,
                className: cn('[&:not(:first-child)]:mt-6', className),
            },
        },
        blockquote: {
            component: TypographyComp,
            props: {
                variant: 'blockquote',
                tag: 'blockquote',
                className: cn('mt-6 first:mt-0', baseFontSizeClass, className),
            },
        },
        strong: {
            component: TypographyComp,
            props: {
                variant: baseFontSize,
                tag: 'strong',
                className: cn('font-semibold', className),
            },
        },
        em: {
            component: TypographyComp,
            props: {
                variant: baseFontSize,
                tag: 'em',
                className: cn('italic', className),
            },
        },
        ul: {
            component: TypographyComp,
            props: {
                variant: baseFontSize,
                tag: 'ul',
                className: cn('list-disc list-outside mt-6 mb-6 pl-10 first:mt-0 last:mb-0', className),
            },
        },
        li: {
            component: TypographyComp,
            props: {
                variant: baseFontSize,
                tag: 'li',
                className: cn('mt-2 ml-2', className),
            },
        },
        ol: {
            component: TypographyComp,
            props: {
                variant: baseFontSize,
                tag: 'ol',
                className: cn('list-decimal list-inside mt-6 mb-6 first:mt-0 last:mb-0', className),
            },
        },
        pre: {
            component: TypographyComp,
            props: {
                variant: 'inlineCode',
                tag: 'pre',
                className: cn('mt-6 first:mt-0 text-foreground', baseFontSizeClass),
            },
        },
        img: {
            component: TypographyComp,
            props: {
                variant: 'image',
                tag: 'img',
                className: cn('mt-6 first:mt-0', className),
            },
        },
        table: {
            component: TypographyComp,
            props: {
                variant: 'table',
                tag: 'table',
                className: cn('mt-6 first:mt-0', className),
            },
        },
        thead: {
            component: TypographyComp,
            props: {
                tag: 'thead',
            },
        },
        tbody: {
            component: TypographyComp,
            props: {
                tag: 'tbody',
            },
        },
        tr: {
            component: TypographyComp,
            props: {
                variant: 'tableRow',
                tag: 'tr',
            },
        },
        th: {
            component: TypographyComp,
            props: {
                variant: 'tableHeader',
                tag: 'th',
                className: cn('p-4', className),
            },
        },
        td: {
            component: ({ children, ...props }: { children: ReactNode; 'data-highlighted'?: boolean }) => {
                const variant = props['data-highlighted'] ? 'tableCellHighlighted' : 'tableCell';
                return (
                    <TypographyComp variant={variant} tag="td" {...props}>
                        {children}
                    </TypographyComp>
                );
            },
        },
    };

    const markdown = (
        <Markdown
            options={{
                forceBlock: true,
                overrides,
            }}
        >
            {content}
        </Markdown>
    );

    return <div>{markdown}</div>;
};
