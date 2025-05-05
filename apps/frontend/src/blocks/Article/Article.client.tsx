import React from 'react';

import { Typography } from '@o2s/ui/components/typography';

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
        <div className="w-full flex flex-col gap-4">
            {component.__typename}: {component.id}
            <a href="https://markdown-it.github.io/">https://markdown-it.github.io/</a>
            <div className="border p-4">
                {author && <Author name={author.name} avatar={author.avatar} position={author.position} />}

                {createdAt}

                <Container variant="narrow">
                    <ul className="flex flex-col gap-4">
                        {sections.map((section) => {
                            switch (section.__typename) {
                                case 'ArticleSectionText':
                                    return (
                                        <li key={section.id} className="border p-4">
                                            <Typography variant="h2">{section.__typename}</Typography>
                                            <RichText content={section.content} />
                                        </li>
                                    );
                                case 'ArticleSectionImage':
                                    return (
                                        <li key={section.id} className="border p-4">
                                            <Typography variant="h2">{section.__typename}</Typography>
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
        </div>
    );
};
