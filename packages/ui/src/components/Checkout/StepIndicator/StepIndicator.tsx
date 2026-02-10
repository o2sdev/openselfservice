import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Badge } from '@o2s/ui/elements/badge';
import { Typography } from '@o2s/ui/elements/typography';

import type { StepIndicatorProps } from './StepIndicator.types';

export const StepIndicator: React.FC<Readonly<StepIndicatorProps>> = ({ steps, currentStep }) => {
    return (
        <div className="w-full flex items-center justify-center gap-2 md:gap-4 py-6">
            {steps.map((label, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === currentStep;
                const isCompleted = stepNumber < currentStep;
                const isLast = index === steps.length - 1;

                return (
                    <React.Fragment key={stepNumber}>
                        <div className="flex flex-col items-center gap-2">
                            <Badge
                                variant={isActive ? 'default' : isCompleted ? 'secondary' : 'outline'}
                                className={cn(
                                    'h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold',
                                    isActive && 'bg-primary text-primary-foreground',
                                )}
                            >
                                {stepNumber}
                            </Badge>
                            <Typography
                                variant="small"
                                className={cn(
                                    'text-center max-w-[100px] md:max-w-none',
                                    isActive ? 'font-semibold' : 'text-muted-foreground',
                                )}
                            >
                                {label}
                            </Typography>
                        </div>
                        {!isLast && (
                            <div
                                className={cn(
                                    'flex-1 h-0.5 min-w-[20px] md:min-w-[40px]',
                                    isCompleted ? 'bg-primary' : 'bg-border',
                                )}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};
