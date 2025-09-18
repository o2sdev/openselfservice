import React from 'react';

import { Author } from '@o2s/ui/components/Author';
import { Image } from '@o2s/ui/components/Image';

import { Typography } from '@o2s/ui/elements/typography';

import { BlogCardProps } from './BlogCard.types';

export const BlogCard: React.FC<Readonly<BlogCardProps>> = ({
    title,
    lead,
    image,
    url,
    date,
    author,
    categoryTitle,
    LinkComponent,
    priority,
}) => {
    return (
        <LinkComponent
            href={url}
            aria-label={title}
            className="group text-foreground w-full focus-visible:ring-offset-4 block"
        >
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
                                priority={priority}
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
        </LinkComponent>
    );
};
