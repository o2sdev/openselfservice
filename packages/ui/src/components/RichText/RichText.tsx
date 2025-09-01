import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import NextLink, { LinkProps } from 'next/link';
import React, { FC, ReactNode } from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Link } from '@o2s/ui/elements/link';
import { Typography, TypographyProps } from '@o2s/ui/elements/typography';

import { RichTextProps } from './RichText.types';

const LinkComp: FC<Readonly<LinkProps & { children: ReactNode; className?: string }>> = ({ children, ...props }) => {
    const { className, ...rest } = props;
    return (
        <Link className={className} asChild>
            <NextLink {...rest}>{children}</NextLink>
        </Link>
    );
};

const TypographyComp: FC<Readonly<TypographyProps & { children: ReactNode; tag: string }>> = ({
    children,
    ...props
}) => {
    const Tag = props.tag || 'p';
    return (
        <Typography variant={props.variant} asChild>
            <Tag {...props}>{children}</Tag>
        </Typography>
    );
};

const TdComp: FC<Readonly<TypographyProps & { children: ReactNode }>> = ({
    children,
    ...props
}: {
    children: ReactNode;
    'data-highlighted'?: boolean;
}) => {
    const variant = props['data-highlighted'] ? 'tableCellHighlighted' : 'tableCell';
    return (
        <TypographyComp variant={variant} tag="td" {...props}>
            {children}
        </TypographyComp>
    );
};

export const RichText: FC<Readonly<RichTextProps>> = ({
    content,
    baseFontSize = 'body',
    className,
    startingHeadingLevel = 1,
}) => {
    if (!content) {
        return null;
    }

    const baseFontSizeClass = baseFontSize === 'body' ? 'text-base md:text-base' : 'text-sm md:text-sm';

    const getHeadingProps = (level: number) => {
        const adjustedLevel = startingHeadingLevel === 1 ? level : level + (startingHeadingLevel - 1);

        const marginClass = {
            1: 'mt-12',
            2: 'mt-10',
            3: 'mt-8',
            4: 'mt-6',
        }[adjustedLevel];

        if (adjustedLevel === 5) {
            return {
                variant: 'subtitle',
                tag: 'p',
                className: cn('mt-6', className),
            };
        }

        if (adjustedLevel >= 6) {
            return {
                variant: 'body',
                tag: 'p',
                className: cn('mt-6', className),
            };
        }

        return {
            variant: `h${adjustedLevel}` as const,
            tag: `h${adjustedLevel}` as const,
            className: cn(marginClass, className),
        };
    };

    const overrides: MarkdownToJSX.Overrides = {
        a: {
            component: LinkComp,
            props: {
                className: `${baseFontSizeClass} text-foreground hover:text-primary underline`,
            },
        },
        ...Object.fromEntries(
            Array.from({ length: 6 }, (_, i) => i + 1).map((level) => [
                `h${level}`,
                {
                    component: TypographyComp,
                    props: getHeadingProps(level),
                },
            ]),
        ),
        p: {
            component: TypographyComp,
            props: {
                variant: baseFontSize,
                className: cn('[&:not(:first-child)]:mt-6', className),
            },
        },
        subtitle: {
            component: TypographyComp,
            props: {
                variant: 'subtitle',
                className: cn(baseFontSize, className),
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
                variant: 'list',
                tag: 'ul',
                className: cn('first:mt-0 last:mb-0', className),
            },
        },
        li: {
            component: TypographyComp,
            props: {
                variant: 'listItem',
                tag: 'li',
                className: cn('marker:text-primary', className),
            },
        },
        ol: {
            component: TypographyComp,
            props: {
                variant: 'listOrdered',
                tag: 'ol',
                className: cn('first:mt-0 last:mb-0', className),
            },
        },
        hr: {
            component: TypographyComp,
            props: {
                variant: baseFontSize,
                tag: 'hr',
                className: cn('mt-6 border border-border border-t-1', className),
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
            component: (props) => (
                <div className="w-full overflow-auto">
                    <TypographyComp {...props} />
                </div>
            ),
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
            component: TdComp,
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
