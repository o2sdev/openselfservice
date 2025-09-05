import type { Meta, StoryObj } from '@storybook/nextjs';
import { addDays } from 'date-fns';
import { useState } from 'react';

import { Calendar } from './calendar';

const meta = {
    title: 'Elements/Calendar',
    component: Calendar,
    tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleDateSelection: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [date, setDate] = useState<Date | undefined>(new Date());

        return (
            <div className="space-y-2">
                <Calendar mode="single" selected={date} onSelect={setDate} />
                <p className="text-sm text-muted-foreground">Selected date: {date?.toDateString()}</p>
            </div>
        );
    },
};

export const DateRangeSelection: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [range, setRange] = useState<{
            from: Date;
            to: Date;
        }>({
            from: new Date(),
            to: addDays(new Date(), 7),
        });

        return (
            <div className="space-y-2">
                <Calendar
                    mode="range"
                    selected={range}
                    onSelect={(range) => {
                        if (range?.to && range.from) {
                            setRange({ from: range.from, to: range.to });
                        }
                    }}
                />
                <p className="text-sm text-muted-foreground">
                    Selected range: {range.from.toDateString()} to {range.to?.toDateString() || '...'}
                </p>
            </div>
        );
    },
};

export const MultipleMonths: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [date, setDate] = useState<Date | undefined>(new Date());

        return (
            <div className="space-y-2">
                <Calendar mode="single" defaultMonth={date} numberOfMonths={2} selected={date} onSelect={setDate} />
                <p className="text-sm text-muted-foreground">Selected date: {date?.toDateString()}</p>
            </div>
        );
    },
};
