import { MoreVertical } from 'lucide-react';

import { Button } from '@o2s/ui/components/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@o2s/ui/components/dropdown-menu';
import { cn } from '@o2s/ui/lib/utils';

import { Link as NextLink } from '@/i18n';

import { DynamicIcon } from '../DynamicIcon/DynamicIcon';

import { ActionLinksProps } from './ActionLinks.types';

export const ActionLinks: React.FC<Readonly<ActionLinksProps>> = ({ actionLinks, className, showMoreLabel }) => {
    const visibleActions = actionLinks.filter((a) => a.visible);
    const hiddenActions = actionLinks.filter((a) => !a.visible);

    const allButLast = visibleActions.slice(0, -1);
    const lastVisible = visibleActions[visibleActions.length - 1];

    return (
        <div className={cn('w-full sm:w-auto flex flex-col sm:flex-row-reverse gap-4 align-end', className)}>
            {allButLast.map((action, idx) => (
                <Button
                    asChild
                    variant={idx === 0 ? 'default' : 'secondary'}
                    key={action.label}
                    className="no-underline hover:no-underline"
                >
                    <NextLink href={action.slug}>
                        {action.icon && <DynamicIcon name={action.icon} size={16} />}
                        {action.label}
                    </NextLink>
                </Button>
            ))}

            {lastVisible && (
                <div className="flex flex-row sm:flex-row-reverse gap-4">
                    <Button
                        asChild
                        variant={visibleActions.length === 1 ? 'default' : 'secondary'}
                        key={lastVisible.label}
                        className="no-underline hover:no-underline w-full"
                    >
                        <NextLink href={lastVisible.slug}>
                            {lastVisible.icon && <DynamicIcon name={lastVisible.icon} size={16} />}
                            {lastVisible.label}
                        </NextLink>
                    </Button>
                    {hiddenActions.length > 0 && (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" aria-label={showMoreLabel} className="w-auto">
                                    <MoreVertical />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {hiddenActions.map((action) => (
                                    <DropdownMenuItem asChild key={action.label}>
                                        <NextLink
                                            href={action.slug}
                                            className="flex items-center gap-2 !no-underline hover:!no-underline cursor-pointer"
                                        >
                                            {action.icon && <DynamicIcon name={action.icon} size={16} />}
                                            {action.label}
                                        </NextLink>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
            )}
        </div>
    );
};
