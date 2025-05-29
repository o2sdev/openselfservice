import { useTranslations } from 'next-intl';

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
import { TooltipHover } from '../TooltipHover/TooltipHover';

import { ActionLinkProps, ActionLinksProps } from './ActionLinks.types';

export const ActionLinks: React.FC<Readonly<ActionLinksProps>> = ({
    actionLinks,
    className,
    showMoreLabel,
    alert = false,
    hideAll = false,
    triggerVariant = 'outline',
}) => {
    if (!actionLinks.length) {
        return null;
    }

    const visibleActions = hideAll ? [] : actionLinks.slice(0, 2);
    const hiddenActions = hideAll ? actionLinks : actionLinks.slice(2);

    return (
        <div className={cn('w-full sm:w-auto flex flex-col sm:flex-row-reverse gap-4 align-end', className)}>
            {visibleActions[0] && (
                <ActionLink
                    key={visibleActions[0].label}
                    actionLink={visibleActions[0]}
                    variant={alert ? 'destructive' : 'default'}
                />
            )}

            <div className="flex flex-row sm:flex-row-reverse gap-4">
                {visibleActions[1] && (
                    <ActionLink key={visibleActions[1].label} actionLink={visibleActions[1]} variant={'secondary'} />
                )}

                {hiddenActions.length > 0 && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={triggerVariant} size="icon" aria-label={showMoreLabel}>
                                <DynamicIcon name="MoreVertical" size={16} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="min-w-50">
                            {hiddenActions.map((action) => (
                                <DropdownMenuItem asChild key={action.label} disabled={action.inProgress}>
                                    <NextLink
                                        href={action.url}
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
        </div>
    );
};

const ActionLink: React.FC<Readonly<ActionLinkProps>> = ({ actionLink, variant }) => {
    const t = useTranslations();

    return actionLink.inProgress ? (
        <TooltipHover
            key={actionLink.label}
            trigger={(setIsOpen) => (
                <Button variant={variant} onClick={() => setIsOpen(true)}>
                    {actionLink.icon && <DynamicIcon name={actionLink.icon} size={16} />}
                    {actionLink.label}
                </Button>
            )}
            content={<p>{t('general.comingSoon')}</p>}
        />
    ) : (
        <Button asChild variant={variant} key={actionLink.label} className="no-underline hover:no-underline">
            <NextLink href={actionLink.url}>
                {actionLink.icon && <DynamicIcon name={actionLink.icon} size={16} />}
                {actionLink.label}
            </NextLink>
        </Button>
    );
};
