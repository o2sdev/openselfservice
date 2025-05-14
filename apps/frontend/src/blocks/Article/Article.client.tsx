import React from 'react';

import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { Author } from '@/components/Author/Author';
import { Container } from '@/components/Container/Container';
import { Image } from '@/components/Image/Image';
import { RichText } from '@/components/RichText/RichText';

import { ArticlePureProps } from './Article.types';

export const ArticlePure: React.FC<Readonly<ArticlePureProps>> = ({ ...component }) => {
    const {
        data: { author, createdAt, sections },
    } = component;
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Typography variant="h1" asChild>
                    <h1>{component.data.title}</h1>
                </Typography>
                {author && <Author name={author.name} avatar={author.avatar?.url} position={author.position} />}
                <Typography variant="p">{createdAt}</Typography>
            </div>
            <Separator />

            <Container variant="narrow">
                <ul className="flex flex-col gap-20">
                    {sections.map((section, index) => {
                        switch (section.__typename) {
                            case 'ArticleSectionText':
                                return (
                                    <li
                                        key={`${section.id}-text`}
                                        className={cn(
                                            'flex flex-col gap-6',
                                            index > 0 && 'pt-20 border-t border-t-border ',
                                        )}
                                    >
                                        <Typography variant="h2" asChild>
                                            <h2>{section.title}</h2>
                                        </Typography>
                                        <RichText content={section.content} startingHeadingLevel={3} />
                                    </li>
                                );
                            case 'ArticleSectionImage':
                                return (
                                    <li
                                        key={`${section.id}-img`}
                                        className={cn(
                                            'flex flex-col gap-4',
                                            index > 0 && 'pt-20 border-t border-t-border ',
                                        )}
                                    >
                                        <div className="relative overflow-hidden max-w-fit mx-auto">
                                            <Image
                                                src={section.image.url}
                                                alt={section.image.alt}
                                                width={section.image.width}
                                                height={section.image.height}
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                        {section.caption && (
                                            <Typography variant="small" className="text-muted-foreground text-center">
                                                {section.caption}
                                            </Typography>
                                        )}
                                    </li>
                                );
                        }
                    })}
                </ul>
            </Container>
        </div>
    );
};
