import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@o2s/ui/components/avatar';
import { Typography } from '@o2s/ui/components/typography';

import { Container } from '@/components/Container/Container';
import { Image } from '@/components/Image/Image';
import { RichText } from '@/components/RichText/RichText';

import { ArticlePureProps } from './Article.types';

export const ArticlePure: React.FC<ArticlePureProps> = ({ ...component }) => {
    const {
        data: { author, sections },
    } = component;

    return (
        <div className="w-full flex flex-col gap-4">
            {author && (
                // the same avatar as on the ticket details page - let's extract it to a component
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src={author.avatar} />
                        <AvatarFallback name={author.name} />
                    </Avatar>
                    <div className="flex flex-col gap-1">
                        <Typography variant="subtitle">{author.name}</Typography>
                        <Typography variant="small" className="text-muted-foreground">
                            {author.position}
                        </Typography>
                    </div>
                </div>
            )}

            <Container variant="narrow">
                <ul className="flex flex-col gap-4">
                    {sections.map((section) => {
                        switch (section.__typename) {
                            case 'ArticleSectionText':
                                return (
                                    <li key={section.id}>
                                        <RichText content={section.content} />
                                    </li>
                                );
                            case 'ArticleSectionImage':
                                return (
                                    <li key={section.id}>
                                        <Image
                                            src={section.image.url}
                                            alt={section.image.alt}
                                            width={section.image.width}
                                            height={section.image.height}
                                        />
                                        <Typography>{section.caption}</Typography>
                                    </li>
                                );
                        }
                    })}
                </ul>
            </Container>
        </div>
    );
};
