import Image from 'next/image';

import { Badge } from '@o2s/ui/components/badge';
import { Link } from '@o2s/ui/components/link';
import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { Link as NextLink } from '@/i18n';

import { Price } from '../Price/Price';
import { RichText } from '../RichText/RichText';

import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({ title, description, price, image, tags, status, link }) => {
    return (
        <div className={cn('flex flex-col bg-card rounded-lg border border-border shadow-sm relative w-full h-full')}>
            {/* Image section */}
            <div className="relative overflow-hidden h-[180px] flex-shrink-0 rounded-t-lg">
                {image.url && image.alternativeText && (
                    <Image
                        src={image.url}
                        alt={image.alternativeText}
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

                        {link && (
                            <Link asChild variant="primaryButton">
                                <NextLink href={link.url}>{link.label}</NextLink>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
