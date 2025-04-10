import { Building2, ChevronDown } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import { Button } from '@o2s/ui/components/button';
import { Sheet, SheetContent, SheetTrigger } from '@o2s/ui/components/sheet';
import { Typography } from '@o2s/ui/components/typography';

import { Content } from './Content/Content';
import { ContextSwitcherProps } from './ContextSwitcher.types';

export const ContextSwitcher = ({ labels, open = false }: ContextSwitcherProps) => {
    const session = useSession();
    const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(open);

    if (!labels) {
        return null;
    }

    return (
        <Sheet open={isCompanyMenuOpen} onOpenChange={setIsCompanyMenuOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="tertiary"
                    className="max-w-full md:max-w-[130px] lg:max-w-[330px] justify-between"
                    onClick={() => setIsCompanyMenuOpen((prev) => !prev)}
                >
                    <span className="flex items-center gap-2 w-full truncate">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <Typography className="truncate" variant="small">
                            {session.data?.user?.customer?.name}
                        </Typography>
                    </span>
                    <ChevronDown className="w-4 h-4 shrink-0" />
                </Button>
            </SheetTrigger>
            <SheetContent closeLabel={labels.close}>{isCompanyMenuOpen && <Content labels={labels} />}</SheetContent>
        </Sheet>
    );
};
