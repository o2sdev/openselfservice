import { Models } from '@o2s/framework/modules';

import { ChartTooltipProps } from '@/components/Chart/ChartTooltip/ChartTooltip.types';

import { BarData } from '../ChartRoundedBar/ChartRoundedBar.types';

export interface StackedBarChartProps {
    chartData: BarData[];
    labels: {
        topSegment: string;
        middleSegment: string;
        bottomSegment: string;
    };
    unit: Models.Price.Price['currency'];
    maxBarSize?: number;
    tooltipType?: ChartTooltipProps['type'];
}
