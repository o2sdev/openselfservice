import { ArrowRight } from 'lucide-react';
import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { RichText } from '@o2s/ui/components/RichText';

import { Typography } from '@o2s/ui/elements/typography';

import { InformativeCardProps } from './InformativeCard.types';

const InformativeCardContent: React.FC<Readonly<InformativeCardProps>> = ({
    icon,
    title,
    description,
    href,
    lineClamp = 7,
}) => {
    if (!icon && !title && !description) {
        return null;
    }

    return (
        <div className="flex flex-row w-full h-full gap-2 p-6 justify-between">
            <div className="flex flex-col gap-2 flex-grow">
                {icon && (
                    <DynamicIcon
                        name={icon.name}
                        size={icon.size}
                        className={cn('text-foreground', icon.className)}
                        strokeWidth={icon.strokeWidth}
                    />
                )}
                {title && <Typography variant="h3">{title}</Typography>}

                {description && (
                    <RichText
                        baseFontSize="body"
                        content={description}
                        className={cn(
                            'text-muted-foreground',
                            lineClamp && `overflow-ellipsis line-clamp-${lineClamp}`,
                        )}
                    />
                )}
            </div>
            {href && (
                <div className="px-4 py-2 w-4 self-end">
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
            <LinkComponent
                href={props.href}
                aria-label={props.title}
                className="flex flex-grow text-foreground rounded-lg bg-card border border-card-border hover:border-primary w-full h-full items-start"
            >
                <InformativeCardContent {...props} />
            </LinkComponent>
        );
    }
    return <InformativeCardContent {...props} />;
};
