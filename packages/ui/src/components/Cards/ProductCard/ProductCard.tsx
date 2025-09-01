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
            <div className="relative overflow-hidden h-[180px] flex-shrink-0 rounded-t-lg">
                {image?.url && image?.alt && (
                    <Image
                        src={image.url}
                        alt={image.alt}
                        sizes="180px"
                        fill
                        className="object-cover object-center"
                        priority={image.priority}
                    />
                )}
            </div>
            <div className="p-6 flex flex-col gap-6 h-full">
                {/* Content section */}
                <div className="flex flex-col h-full">
                    <div className="flex flex-col gap-4">
                        <Typography variant="highlightedSmall" className="line-clamp-2">
                            {title}
                        </Typography>

                        {tags && tags.length > 0 && (
                            <ul className="flex flex-wrap gap-2 absolute top-[165px] left-6">
                                {tags.map((tag) => (
                                    <li key={tag.label}>
                                        <Badge variant={tag.variant}>{tag.label}</Badge>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <RichText content={description} className="text-muted-foreground" />
                    </div>
                </div>

                <Separator />

                {/* Footer section */}
                <div className="flex items-start sm:items-center justify-between gap-4 sm:flex-row flex-col w-full">
                    <Typography variant="highlightedSmall" className="w-full">
                        <Price price={price} />
                    </Typography>

                    <div className="flex sm:items-center gap-4 sm:flex-row flex-col w-full justify-end">
                        {status && (
                            <Badge key={status.label} variant={status.variant} className="w-fit">
                                {status.label}
                            </Badge>
                        )}

                        {action}

                        {link && (
                            <Link asChild variant="primaryButton">
                                <LinkComponent href={link.url}>{link.label}</LinkComponent>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
