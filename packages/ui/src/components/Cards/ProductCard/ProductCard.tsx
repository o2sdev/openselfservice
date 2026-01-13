import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Image } from '@o2s/ui/components/Image';
import { Price } from '@o2s/ui/components/Price';
import { RichText } from '@o2s/ui/components/RichText';

import { Badge } from '@o2s/ui/elements/badge';
import { Link } from '@o2s/ui/elements/link';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { ProductCardProps } from './ProductCard.types';

export const ProductCard: React.FC<ProductCardProps> = ({
    title,
    description,
    price,
    image,
    tags,
    status,
    link,
    action,
    LinkComponent,
}) => {
    return (
        <div className={cn('flex flex-col bg-card rounded-lg border border-border shadow-sm relative w-full h-full')}>
            {/* Image section */}
            {image?.url && image?.alt && (
                <div className="relative overflow-hidden h-[180px] shrink-0 rounded-t-lg">
                    <Image
                        src={image.url}
                        alt={image.alt}
                        sizes="180px"
                        fill
                        className="object-cover object-center"
                        priority={image.priority}
                    />
                </div>
            )}
            <div className="p-6 flex flex-col gap-6 h-full">
                {/* Content section */}
                <div className="flex flex-col flex-1">
                    <div className="flex flex-col gap-4">
                        <Typography variant="highlightedSmall" className="line-clamp-2">
                            {title}
                        </Typography>

                        {tags && tags.length > 0 && (
                            <ul
                                className={cn(
                                    'flex flex-wrap gap-2',
                                    image?.url && image?.alt && 'absolute top-[165px] left-6',
                                )}
                            >
                                {tags.map((tag) => (
                                    <li key={tag.label}>
                                        <Badge variant={tag.variant}>{tag.label}</Badge>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <RichText
                            content={description}
                            className="text-muted-foreground line-clamp-3 overflow-ellipsis"
                        />
                    </div>
                </div>

                <Separator />

                {/* Footer section */}
                <div className="flex items-start sm:items-center justify-between gap-6 sm:flex-row flex-col w-full">
                    <div className="flex flex-row gap-2 w-full sm:justify-start justify-between items-center">
                        <Typography variant="highlightedSmall" className="shrink-0">
                            <Price price={price} />
                        </Typography>

                        {status && (
                            <div className="">
                                <Badge key={status.label} variant={status.variant} className="w-fit">
                                    {status.label}
                                </Badge>
                            </div>
                        )}
                    </div>

                    {(action || link) && (
                        <div className="flex sm:items-center gap-4 sm:flex-row flex-col w-full justify-end">
                            {action}

                            {link && (
                                <Link asChild variant="primary" size="default">
                                    <LinkComponent href={link.url}>{link.label}</LinkComponent>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
