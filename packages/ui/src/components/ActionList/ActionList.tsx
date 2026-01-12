import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { MoreActionsMenu } from '@o2s/ui/components/MoreActionsMenu';

import type { ActionListProps } from './ActionList.types';

export const ActionList: React.FC<Readonly<ActionListProps>> = ({
    className,
    showMoreLabel,
    actions,
    triggerVariant = 'outline',
}) => {
    if (!actions?.length) return null;

    const dropdownActions = actions.slice(2);

    return (
        <div className={cn('w-full sm:w-auto flex flex-col sm:flex-row-reverse gap-4 align-end', className)}>
            {actions?.[0]}

            <div className="flex flex-row sm:flex-row-reverse gap-4">
                {actions?.[1]}

                {dropdownActions.length > 0 && (
                    <MoreActionsMenu
                        actions={dropdownActions}
                        showMoreLabel={showMoreLabel}
                        triggerVariant={triggerVariant}
                        triggerIcon="MoreVertical"
                    />
                )}
            </div>
        </div>
    );
};
