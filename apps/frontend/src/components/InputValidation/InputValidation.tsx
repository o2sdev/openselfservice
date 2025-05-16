'use client';

import { Check, X } from 'lucide-react';
import { useEffect, useMemo } from 'react';

import { Typography } from '@o2s/ui/components/typography';

import { InputValidationProps } from './InputValidation.types';

export const InputValidations: React.FC<Readonly<InputValidationProps>> = ({ validations, value, onValid }) => {
    const active = useMemo(
        () =>
            validations.map(({ regex }) => {
                return value.length > 0 && new RegExp(regex).test(value);
            }),
        [value, validations],
    );
    useEffect(() => {
        onValid && onValid(active.every((el) => el));
    }, [active, onValid]);
    return (
        <div className="grid grid-cols-2 gap-2">
            {validations.map(({ label }, index) => (
                <div className="flex items-center gap-2" key={`${label}-${index}`}>
                    {active[index] ? (
                        <Check className="size-6 text-green-700" />
                    ) : (
                        <X className="size-6 text-destructive" />
                    )}
                    <Typography variant="body" className="text-sm">
                        {label}
                    </Typography>
                </div>
            ))}
        </div>
    );
};
