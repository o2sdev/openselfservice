import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { RichText } from '@o2s/ui/components/Content/RichText';
import { Image } from '@o2s/ui/components/Media/Image';
import { Price } from '@o2s/ui/components/Products/Price';

import { Badge } from '@o2s/ui/elements/badge';
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
        <div
            className={cn(
                'flex flex-col bg-card rounded-lg border border-border shadow-sm relative w-full h-full',
                link && 'transition-shadow hover:shadow-md',
            )}
        >
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
                        {link ? (
                            <LinkComponent
                                href={link}
                                className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none [&:focus-visible]:ring-2 [&:focus-visible]:ring-ring [&:focus-visible]:ring-offset-2 rounded-lg"
                            >
                                <Typography variant="highlightedSmall" className="line-clamp-2">
                                    {title}
                                </Typography>
                            </LinkComponent>
                        ) : (
                            <Typography variant="highlightedSmall" className="line-clamp-2">
                                {title}
                            </Typography>
                        )}

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
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
                    <div className="flex flex-row gap-2 items-center">
                        <Typography variant="highlightedSmall" className="shrink-0">
                            <Price price={price} />
                        </Typography>

                        {status && (
                            <Badge key={status.label} variant={status.variant} className="w-fit">
                                {status.label}
                            </Badge>
                        )}
                    </div>

                    {action && <div className="relative z-10 [&>*]:w-full [&>*]:sm:w-auto">{action}</div>}
                </div>
            </div>
        </div>
    );
};
