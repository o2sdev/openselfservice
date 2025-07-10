import { ArrowRight } from 'lucide-react';
import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';

import { Link } from '@o2s/ui/elements/link';
import { Typography } from '@o2s/ui/elements/typography';

import { InformativeCardProps } from './InformativeCard.types';

const InformativeCardContent: React.FC<Readonly<InformativeCardProps>> = ({
    icon,
    iconSize,
    title,
    description,
    href,
    lineClamp,
}) => {
    if (!icon && !title && !description) {
        return null;
    }

    return (
        <div className="flex flex-row w-full gap-2 p-6 items-end justify-between">
            <div className="flex flex-col gap-2 flex-grow">
                {icon && <DynamicIcon name={icon} size={iconSize} className="!text-foreground" />}
                {title && <Typography variant="h3">{title}</Typography>}

                {description && (
                    <Typography
                        variant="p"
                        className={cn(
                            'text-muted-foreground',
                            lineClamp && `overflow-ellipsis line-clamp-${lineClamp}`,
                        )}
                    >
                        {description}
                    </Typography>
                )}
            </div>
            {href && (
                <div className="px-4 py-2 w-4 items-end">
                    <ArrowRight className="h-4 w-4 flex-shrink-0 align-bottom" />
                </div>
            )}
        </div>
    );
};

export const InformativeCard: React.FC<Readonly<InformativeCardProps>> = (props) => {
    const LinkComponent = props.LinkComponent;

    if (props.href) {
        return (
            <Link
                asChild
                className="flex flex-grow whitespace-normal text-foreground hover:no-underline hover:border-primary hover:[&_svg]:text-primary rounded-lg bg-card border border-border w-full h-full items-start"
            >
                <LinkComponent href={props.href} aria-label={props.title}>
                    <InformativeCardContent {...props} />
                </LinkComponent>
            </Link>
        );
    }
    return <InformativeCardContent {...props} />;
};
