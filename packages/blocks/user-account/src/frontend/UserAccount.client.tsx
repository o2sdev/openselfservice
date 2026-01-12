'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { Container } from '@o2s/ui/components/Container';
import { TooltipHover } from '@o2s/ui/components/TooltipHover';

import { Button } from '@o2s/ui/elements/button';
import { Separator } from '@o2s/ui/elements/separator';
import { TextItem } from '@o2s/ui/elements/text-item';
import { Typography } from '@o2s/ui/elements/typography';

import { UserAccountPureProps } from './UserAccount.types';

export const UserAccountPure: React.FC<UserAccountPureProps> = (component) => {
    const { fields, labels, basicInformationTitle, basicInformationDescription, user, title, onSignOut, permissions } =
        component;

    const t = useTranslations();

    // Check view permission - if not allowed, don't render
    if (!permissions?.view) {
        return null;
    }

    return (
        <div className="w-full">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-4 justify-between">
                        <Typography variant="h1" asChild>
                            <h1>{title}</h1>
                        </Typography>
                        <form action={onSignOut}>
                            <div className="flex flex-col items-end">
                                <Button className="w-full md:w-fit">{labels.logOut}</Button>
                            </div>
                        </form>
                    </div>

                    <Separator className="my-6" />

                    <Container variant="narrow">
                        <div className="flex flex-col items-baseline justify-between gap-4 md:flex-row">
                            <div className="flex flex-col gap-2">
                                <Typography variant="h2" asChild>
                                    <h2>{basicInformationTitle}</h2>
                                </Typography>
                                <Typography variant="body" className="text-muted-foreground">
                                    {basicInformationDescription}
                                </Typography>
                            </div>
                            <TooltipHover
                                trigger={(setIsOpen) => (
                                    <Button
                                        variant="outline"
                                        className="w-full md:w-fit"
                                        onClick={() => setIsOpen(true)}
                                    >
                                        {labels.edit}
                                    </Button>
                                )}
                                content={<p>{t('general.comingSoon')}</p>}
                            />
                        </div>

                        <Separator className="mt-6" />

                        {user && (
                            <ul className="flex flex-col">
                                {fields.map((field) => {
                                    switch (field.name) {
                                        case 'firstName':
                                        case 'lastName':
                                        case 'email':
                                            return (
                                                <TextItem key={field.id} title={field.label} tag="li">
                                                    <Typography variant="small" className="text-muted-foreground">
                                                        {user[field.name]}
                                                    </Typography>
                                                </TextItem>
                                            );
                                    }
                                })}
                            </ul>
                        )}
                    </Container>
                </div>
            </div>
        </div>
    );
};
