import { Modules } from '@o2s/api-harmonization';
import { Building2, ChevronDown } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import React, { useState, useTransition } from 'react';

import { useToast } from '@o2s/ui/hooks/use-toast';

import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

import { Button } from '@o2s/ui/elements/button';
import { LoadingOverlay } from '@o2s/ui/elements/loading-overlay';
import { Sheet, SheetContent, SheetTrigger } from '@o2s/ui/elements/sheet';
import { Typography } from '@o2s/ui/elements/typography';

import { sdk } from '@/api/sdk';

import { Content } from './Content/Content';
import { ContextSwitcherProps } from './ContextSwitcher.types';

export const ContextSwitcher: React.FC<ContextSwitcherProps> = ({ data }) => {
    const session = useSession();
    const locale = useLocale();

    const { labels } = useGlobalContext();

    const { toast } = useToast();

    const [isOpen, setIsOpen] = useState(false);

    const [customerData, setCustomerData] = useState<Modules.Organizations.Model.CustomerList>();

    const [isPending, startTransition] = useTransition();

    if (!data.showContextSwitcher || !session.data?.user?.customer?.name) {
        return null;
    }

    const handleOpen = async (shouldOpen: boolean) => {
        if (shouldOpen) {
            if (customerData) {
                setIsOpen(true);
                return;
            }

            startTransition(async () => {
                try {
                    const data = await sdk.modules.getCustomers(
                        {},
                        { 'x-locale': locale },
                        session.data?.accessToken || '',
                    );

                    if (!data) {
                        throw new Error('No customers found');
                    }

                    setCustomerData(data);

                    setIsOpen(true);
                } catch (_error) {
                    toast({
                        variant: 'destructive',
                        title: labels.errors.requestError.title,
                        description: labels.errors.requestError.content,
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
                    <Button
                        variant="tertiary"
                        className="w-full max-w-full md:max-w-[130px] lg:max-w-[330px] justify-between"
                    >
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

            <SheetContent closeLabel={data.closeLabel}>{customerData && <Content data={customerData} />}</SheetContent>
        </Sheet>
    );
};
