import { Models } from '@o2s/framework/modules';
import React from 'react';

import { Price } from '@o2s/ui/components/Price';

import { Typography } from '@o2s/ui/elements/typography';

import { ChartTooltipProps } from './ChartTooltip.types';

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ type = 'number', active, payload }) => {
    if (!active || !payload?.length) {
        return null;
    }

    return (
        <div className="rounded-md bg-background p-2 border">
            <div className="flex flex-col gap-2">
                {payload
                    .map((item, index) => (
                        <div key={`${item.name}-${index}`} className="flex flex-row justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0" y="0" width="12" height="12" fill={item?.color} rx="4" ry="4" />
                                </svg>
                                <Typography variant="small">{`${item?.name} :`}</Typography>
                            </div>
                            <Typography variant="small" className="text-right">
                                {type === 'price' ? (
                                    <Price
                                        price={{
                                            value: Number(item.value),
                                            currency: item.unit as Models.Price.Currency,
                                        }}
                                    />
                                ) : (
                                    item.value
                                )}
                            </Typography>
                        </div>
                    ))
                    .reverse()}
            </div>
        </div>
    );
};
