'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { Button } from '@o2s/ui/components/button';
import { Separator } from '@o2s/ui/components/separator';
import { TextItem } from '@o2s/ui/components/text-item';
import { Tooltip, TooltipContent, TooltipTrigger } from '@o2s/ui/components/tooltip';
import { Typography } from '@o2s/ui/components/typography';

import { Container } from '@/components/Container/Container';

import { signOutAction } from './Actions/Actions';
import { UserAccountPureProps } from './UserAccount.types';

export const UserAccountPure: React.FC<UserAccountPureProps> = (component) => {
    const { fields, labels, basicInformationTitle, basicInformationDescription, user, title } = component;

    const t = useTranslations();
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    return (
        <div className="w-full">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-4 justify-between">
                        <Typography variant="h1" asChild>
                            <h1>{title}</h1>
                        </Typography>
                        <form action={signOutAction}>
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
                            <Tooltip open={isTooltipOpen} onOpenChange={setIsTooltipOpen}>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-full md:w-fit"
                                        onClick={() => setIsTooltipOpen(true)}
                                    >
                                        {labels.edit}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t('general.comingSoon')}</p>
                                </TooltipContent>
                            </Tooltip>
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
