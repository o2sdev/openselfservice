import React from 'react';
import { Image } from 'src/components/Image/Image';

import { Link } from '@o2s/ui/components/link';
import { Typography } from '@o2s/ui/components/typography';

import { Link as NextLink } from '@/i18n';

import { Author } from '../Author/Author';

import { BlogCardProps } from './BlogCard.types';

export const BlogCard: React.FC<Readonly<BlogCardProps>> = ({
    title,
    lead,
    image,
    url,
    date,
    author,
    categoryTitle,
}) => {
    return (
        <Link
            asChild
            className="group whitespace-normal text-foreground hover:no-underline w-full focus-visible:ring-offset-4"
        >
            <NextLink href={url} aria-label={title}>
                <div className="flex flex-col gap-6">
                    {image && (
                        <div className="relative overflow-hidden max-h-[164px] flex-shrink-0 rounded-xl w-full">
                            {image?.url && (
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    className="object-cover object-center max-h-[164px] max-w-full"
                                />
                            )}
                        </div>
                    )}
                    <div className="flex flex-col gap-2">
                        <Typography variant="body" className="flex flex-row gap-2 text-muted-foreground items-center">
                            <span>{date}</span>
                            {categoryTitle && (
                                <>
                                    <span className="text-sm">·</span>
                                    <span>{categoryTitle}</span>
                                </>
                            )}
                        </Typography>
                        <Typography variant="body" className="overflow-ellipsis font-medium line-clamp-2">
                            {title}
                        </Typography>
                        <Typography
                            variant="body"
                            className="text-muted-foreground line-clamp-3 overflow-ellipsis group-hover:underline"
                        >
                            {lead}
                        </Typography>
                    </div>
                    {author && <Author name={author.name} avatar={author.avatar} position={author.position} />}
                </div>
            </NextLink>
        </Link>
    );
};
