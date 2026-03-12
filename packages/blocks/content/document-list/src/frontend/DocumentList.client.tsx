'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { RichText } from '@o2s/ui/components/RichText';

import { Button } from '@o2s/ui/elements/button';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { DocumentListPureProps } from './DocumentList.types';

export const DocumentListPure: React.FC<DocumentListPureProps> = ({
    locale,
    accessToken,
    routing,
    hasPriority,
    ...component
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const { title, description, documents } = component;

    return (
        <div className="w-full flex flex-col gap-8">
            <div className="w-full flex flex-col gap-6 md:gap-12">
                <div className="flex flex-col gap-5">
                    {title && (
                        <Typography variant="highlightedMedium" asChild>
                            <h2>{title}</h2>
                        </Typography>
                    )}

                    {description && <RichText content={description} className="text-muted-foreground" />}
                </div>

                {documents && documents?.length > 0 && (
                    <ul className="flex flex-col gap-0 w-full">
                        {documents.map(
                            (document, index) =>
                                document.file.url && (
                                    <li key={`${document.title}-${index}`}>
                                        <Button
                                            asChild
                                            variant="link"
                                            className="py-4 px-0 h-auto text-foreground text-md hover:text-foreground whitespace-normal"
                                        >
                                            <LinkComponent
                                                href={document.file.url}
                                                download={document.file.alt}
                                                target="_blank"
                                            >
                                                <div className="flex gap-3">
                                                    {document.icon && (
                                                        <DynamicIcon
                                                            name={document.icon}
                                                            size={24}
                                                            className="text-primary"
                                                        />
                                                    )}
                                                    <Typography variant="body" asChild>
                                                        <p>{document.title}</p>
                                                    </Typography>
                                                </div>
                                            </LinkComponent>
                                        </Button>
                                        <Separator />
                                    </li>
                                ),
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};
