import { Models } from '@o2s/framework/modules';

import { ChartRoundedBarProps } from '../ChartRoundedBar';
import { ChartTooltipProps } from '../ChartTooltip';

export interface StackedBarChartProps {
    chartData: ChartRoundedBarProps[];
    labels: {
        topSegment: string;
        middleSegment: string;
        bottomSegment: string;
    };
    unit: Models.Price.Price['currency'];
    maxBarSize?: number;
    tooltipType?: ChartTooltipProps['type'];
}
