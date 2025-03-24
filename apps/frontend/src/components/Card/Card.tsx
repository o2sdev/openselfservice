import Image from 'next/image';

import { Badge } from '@o2s/ui/components/badge';
import { Button } from '@o2s/ui/components/button';
import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { RichText } from '../RichText/RichText';

import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({
    title,
    description,
    price,
    image,
    tags,
    status,
    buttonLabel,
    onButtonClick,
}) => {
    return (
        <div
            className={cn(
                'flex flex-col bg-card rounded-lg border border-border shadow-sm relative max-w-[500px] w-full',
            )}
        >
            {/* Image section */}
            <div className="relative overflow-hidden h-[180px] rounded-t-lg">
                {image.url && image.alternativeText && (
                    <Image
                        src={image.url}
                        alt={image.alternativeText}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                )}
            </div>
            <div className="p-6 flex flex-col gap-6">
                {/* Content section */}
                <div className="flex flex-col">
                    <div className="flex flex-col gap-4">
                        <Typography variant="highlightedSmall">{title}</Typography>

                        {tags?.map((tag) => (
                            <Badge key={tag.label} variant={tag.variant} className="absolute top-[168px] left-6">
                                {tag.label}
                            </Badge>
                        ))}

                        {description && <RichText content={description} className="text-muted-foreground" />}
                    </div>
                </div>

                <Separator className="w-full" />

                {/* Footer section */}
                <div className="flex items-start sm:items-center justify-between gap-4 sm:flex-row flex-col w-full">
                    <Typography variant="highlightedSmall" className="w-full">
                        {price?.period ? `${price?.value} / ${price?.period}` : price?.value}
                    </Typography>

                    <div className="flex sm:items-center gap-4 sm:flex-row flex-col w-full justify-end">
                        {status && (
                            <Badge key={status.label} variant={status.variant} className="w-fit">
                                {status.label}
                            </Badge>
                        )}

                        {buttonLabel && (
                            <Button variant="default" onClick={onButtonClick} className="w-full sm:w-none">
                                {buttonLabel}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
