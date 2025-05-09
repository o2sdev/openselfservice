import React, { FC } from 'react';

import { Typography } from '@o2s/ui/components/typography';

import { FieldsetProps } from './Fieldset.types';

export const Fieldset: FC<FieldsetProps> = ({ legend, children, optionalLabel }) => {
    return (
        <fieldset className={'border-0 m-0 p-0'}>
            <legend className={'items-center gap-2 hidden'}>
                <Typography variant="small">{legend}</Typography>
                <Typography variant="small">{optionalLabel}</Typography>
            </legend>
            <div className={'flex flex-col gap-4'}>{children}</div>
        </fieldset>
    );
};
