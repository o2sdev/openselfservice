import { Building2, ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { Alert } from '@o2s/ui/components/alert';
import { Button } from '@o2s/ui/components/button';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@o2s/ui/components/sheet';
import { Typography } from '@o2s/ui/components/typography';

import { ContextSwitcherProps } from './ContextSwitcher.types';

export const ContextSwitcher = ({ context }: ContextSwitcherProps) => {
    const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);

    if (!context) {
        return null;
    }

    return (
        <Sheet open={isCompanyMenuOpen} onOpenChange={setIsCompanyMenuOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="secondary"
                    className="max-w-full md:max-w-[130px] lg:max-w-[330px] justify-between"
                    onClick={() => setIsCompanyMenuOpen((prev) => !prev)}
                >
                    <span className="flex items-center gap-2 w-full truncate">
                        <Building2 className="w-4 h-4 shrink-0" />
                        <Typography className="truncate" variant="small">
                            Power Construction AG
                        </Typography>
                    </span>
                    <ChevronDown className="w-4 h-4 shrink-0" />
                </Button>
            </SheetTrigger>

            <SheetContent>
                <div className="flex flex-col gap-6">
                    <SheetHeader>
                        <SheetTitle asChild>
                            <Typography variant="h2" asChild>
                                <h2>{context.label}</h2>
                            </Typography>
                        </SheetTitle>
                    </SheetHeader>

                    <Alert>Option to switch user organizations is coming soon!</Alert>

                    <SheetFooter>
                        <Button variant="default" onClick={() => console.log('apply')}>
                            {context.apply}
                        </Button>
                    </SheetFooter>
                </div>
            </SheetContent>
        </Sheet>
    );
};
