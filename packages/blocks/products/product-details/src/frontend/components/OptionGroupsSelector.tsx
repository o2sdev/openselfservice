import React from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/elements/select';
import { Typography } from '@o2s/ui/elements/typography';

interface OptionGroupsSelectorProps {
    optionGroups: { id: string; title: string; values: string[] }[];
    selectedOptions: Record<string, string>;
    availableValuesPerGroup: Map<string, Set<string>>;
    onOptionChange: (optionId: string, value: string) => void;
}

export const OptionGroupsSelector: React.FC<OptionGroupsSelectorProps> = ({
    optionGroups,
    selectedOptions,
    availableValuesPerGroup,
    onOptionChange,
}) => {
    return (
        <div className="flex flex-col gap-4">
            {optionGroups.map((group) => (
                <div key={group.id} className="flex flex-col gap-2">
                    <Typography className="text-sm text-muted-foreground">{group.title}</Typography>
                    <Select
                        value={selectedOptions[group.id] ?? ''}
                        onValueChange={(value: string) => onOptionChange(group.id, value)}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {group.values.map((value) => {
                                const isAvailable = availableValuesPerGroup.get(group.id)?.has(value) ?? true;
                                return (
                                    <SelectItem
                                        key={value}
                                        value={value}
                                        className={!isAvailable ? 'opacity-50 text-muted-foreground' : undefined}
                                    >
                                        {value}
                                    </SelectItem>
                                );
                            })}
                        </SelectContent>
                    </Select>
                </div>
            ))}
        </div>
    );
};
