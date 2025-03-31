import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

import { Models } from '@o2s/framework/modules';

import { Typography } from '@o2s/ui/components/typography';

import { Price } from '@/components/Price/Price';

export const ChartTooltip = (props: TooltipProps<ValueType, NameType>) => {
    const { active, payload } = props;

    if (!active || !payload?.length) {
        return null;
    }

    return (
        <div className="rounded-md bg-background p-2 border">
            <div className="flex flex-col gap-2">
                {payload
                    .map((bar) => (
                        <div key={bar.name} className="flex flex-row justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0" y="0" width="12" height="12" fill={bar?.color} rx="4" ry="4" />
                                </svg>
                                <Typography variant="small">{`${bar?.name} :`}</Typography>
                            </div>
                            <Typography variant="small" className="text-right">
                                <Price
                                    price={{ value: Number(bar.value), currency: bar.unit as Models.Price.Currency }}
                                />
                            </Typography>
                        </div>
                    ))
                    .reverse()}
            </div>
        </div>
    );
};
