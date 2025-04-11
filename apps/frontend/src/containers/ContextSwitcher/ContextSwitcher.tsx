import { Modules } from '@o2s/api-harmonization';
import { Building2, ChevronDown } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import React, { useState, useTransition } from 'react';

import { Models } from '@o2s/framework/modules';

import { Button } from '@o2s/ui/components/button';
import { LoadingOverlay } from '@o2s/ui/components/loading-overlay';
import { Sheet, SheetContent, SheetTrigger } from '@o2s/ui/components/sheet';
import { Typography } from '@o2s/ui/components/typography';
import { useToast } from '@o2s/ui/hooks/use-toast';

import { sdk } from '@/api/sdk';

import { Content } from './Content/Content';
import { ContextSwitcherProps } from './ContextSwitcher.types';

export const ContextSwitcher: React.FC<ContextSwitcherProps> = ({ labels }) => {
    const session = useSession();
    const locale = useLocale();

    const { toast } = useToast();

    const [isOpen, setIsOpen] = useState(false);

    const [data, setData] = useState<Modules.Organizations.Model.OrganizationList>();
    const [customers, setCustomers] = useState<Models.Customer.Customer[]>();

    const [isPending, startTransition] = useTransition();

    if (!(labels && session.data?.user?.customer?.name)) {
        return null;
    }

    const handleOpen = async (shouldOpen: boolean) => {
        if (shouldOpen) {
            if (data) {
                setIsOpen(true);
                return;
            }

            startTransition(async () => {
                try {
                    const organizations = await sdk.modules.getOrganizations(
                        {},
                        { 'x-locale': locale },
                        session.data?.accessToken || '',
                    );

                    if (!organizations) {
                        throw new Error('No organizations found');
                    }

                    setData(organizations);

                    const customersData = organizations.items
                        .map((organization) => organization.customers)
                        .reduce((acc, curr) => [...acc, ...curr], [])
                        .sort((a, b) => a.name.localeCompare(b.name));

                    if (!customersData.length) {
                        throw new Error('No customers found');
                    }

                    setCustomers(customersData);
                    setIsOpen(true);
                } catch (_error) {
                    toast({
                        variant: 'destructive',
                        // TODO: get labels from configurable texts
                        title: 'Uh oh! Something went wrong.',
                        description: 'There was a problem with your request.',
                    });
                }
            });
        } else {
            setIsOpen(false);
        }
    };

    return (
        <Sheet open={isOpen} onOpenChange={handleOpen}>
            <LoadingOverlay isActive={isPending} size="small">
                <SheetTrigger asChild>
                    <Button variant="tertiary" className="max-w-full md:max-w-[130px] lg:max-w-[330px] justify-between">
                        <span className="flex items-center gap-2 w-full truncate">
                            <Building2 className="w-4 h-4 shrink-0" />
                            <Typography className="truncate" variant="small">
                                {session.data.user.customer.name}
                            </Typography>
                        </span>
                        <ChevronDown className="w-4 h-4 shrink-0" />
                    </Button>
                </SheetTrigger>
            </LoadingOverlay>

            <SheetContent closeLabel={labels.close}>
                {data && customers && <Content data={data} customers={customers} />}
            </SheetContent>
        </Sheet>
    );
};
