import React, { FC } from 'react';
import { Props } from 'recharts/types/cartesian/Bar';

import { ChartRoundedBarProps } from './ChartRoundedBar.types';

export const ChartRoundedBar: FC<Props & ChartRoundedBarProps> = (props) => {
    const {
        x: xString,
        y: yString,
        width: widthString,
        height: heightString,
        fill,
        stroke,
        dataKey,
        topSegment,
        middleSegment,
        bottomSegment,
    } = props;
    const x = Number(xString);
    const y = Number(yString);
    const width = Number(widthString) || 0;
    const height = Number(heightString) || 0;
    const topSegmentValue = Number(topSegment) || 0;
    const middleSegmentValue = Number(middleSegment) || 0;
    const bottomSegmentValue = Number(bottomSegment) || 0;

    if (height === 0) return null;

    const radius = 4;

    // Check if this is the only segment in the bar
    const isOnlySegment =
        (dataKey === 'topSegment' && topSegmentValue === 0 && bottomSegmentValue === 0) ||
        (dataKey === 'middleSegment' && topSegmentValue === 0 && bottomSegmentValue === 0) ||
        (dataKey === 'bottomSegment' && topSegmentValue === 0 && middleSegmentValue === 0);

    // Check if this is the top segment
    const isTopSegment =
        (dataKey === 'topSegment' && topSegmentValue > 0) ||
        (dataKey === 'middleSegment' && topSegmentValue === 0 && middleSegmentValue > 0) ||
        (dataKey === 'bottomSegment' && topSegmentValue === 0 && middleSegmentValue === 0 && bottomSegmentValue > 0);

    // Check if this is the bottom segment
    const isBottomSegment =
        (dataKey === 'bottomSegment' && bottomSegmentValue > 0) ||
        (dataKey === 'middleSegment' && bottomSegmentValue === 0 && middleSegmentValue > 0) ||
        (dataKey === 'topSegment' && bottomSegmentValue === 0 && middleSegmentValue === 0 && topSegmentValue > 0);

    if (isOnlySegment) {
        // All corners rounded
        return (
            <path
                d={`
                    M ${x},${y + radius}
                    Q ${x},${y} ${x + radius},${y}
                    L ${x + width - radius},${y}
                    Q ${x + width},${y} ${x + width},${y + radius}
                    L ${x + width},${y + height - radius}
                    Q ${x + width},${y + height} ${x + width - radius},${y + height}
                    L ${x + radius},${y + height}
                    Q ${x},${y + height} ${x},${y + height - radius}
                    Z
                `}
                fill={fill}
                stroke={stroke}
            />
        );
    }

    if (isTopSegment) {
        // Only top corners rounded
        return (
            <path
                d={`
                    M ${x},${y + radius}
                    Q ${x},${y} ${x + radius},${y}
                    L ${x + width - radius},${y}
                    Q ${x + width},${y} ${x + width},${y + radius}
                    L ${x + width},${y + height}
                    L ${x},${y + height}
                    Z
                `}
                fill={fill}
                stroke={stroke}
            />
        );
    }

    if (isBottomSegment) {
        // Only bottom corners rounded
        return (
            <path
                d={`
                    M ${x},${y}
                    L ${x + width},${y}
                    L ${x + width},${y + height - radius}
                    Q ${x + width},${y + height} ${x + width - radius},${y + height}
                    L ${x + radius},${y + height}
                    Q ${x},${y + height} ${x},${y + height - radius}
                    Z
                `}
                fill={fill}
                stroke={stroke}
            />
        );
    }

    // Middle segment without rounding
    return (
        <path
            d={`
                M ${x},${y}
                L ${x + width},${y}
                L ${x + width},${y + height}
                L ${x},${y + height}
                Z
            `}
            fill={fill}
            stroke={stroke}
        />
    );
};
