import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

export interface ChartTooltipProps extends TooltipProps<ValueType, NameType> {
    type?: 'price' | 'number';
}
