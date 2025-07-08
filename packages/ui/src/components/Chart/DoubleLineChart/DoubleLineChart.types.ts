import { ChartTooltipProps } from '@o2s/ui/components/Chart/ChartTooltip/ChartTooltip.types';

export interface LineChartData {
    label: string;
    prev: number;
    current: number;
}

export interface DoubleLineChartProps {
    chartData: LineChartData[];
    legend: {
        prev: string;
        current: string;
    };
    tooltipType?: ChartTooltipProps['type'];
}
