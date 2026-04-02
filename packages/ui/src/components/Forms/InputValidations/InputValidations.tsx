'use client';

import { Check, X } from 'lucide-react';
import React, { useEffect, useMemo } from 'react';

import { Typography } from '@o2s/ui/elements/typography';

import { InputValidationsProps } from './InputValidations.types';

export const InputValidations: React.FC<Readonly<InputValidationsProps>> = ({ validations, value, onValid }) => {
    const active = useMemo(
        () =>
            validations.map(({ pattern }) => {
                const regexObj = new RegExp(pattern);
                return regexObj.test(value);
            }),
        [validations, value],
    );

    useEffect(() => {
        if (onValid) {
            onValid(active.every(Boolean));
        }
    }, [active, onValid]);

    const renderValidationItem = (label: string, isActive = false) => (
        <>
            {isActive ? <Check className="size-6 text-green-700" /> : <X className="size-6 text-destructive" />}
            <Typography variant="body" className="text-sm">
                {label}
            </Typography>
        </>
    );

    if (validations.length === 0) {
        return null;
    }

    if (validations.length === 1 && validations[0]) {
        return (
            <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">{renderValidationItem(validations[0].label, active[0])}</div>
            </div>
        );
    }

    return (
        <ul className="grid grid-cols-2 gap-2">
            {validations.map(({ label }, index) => (
                <li className="flex items-center gap-2" key={`${label}-${index}`}>
                    {renderValidationItem(label, active[index])}
                </li>
            ))}
        </ul>
    );
};
