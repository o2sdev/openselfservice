import React, { useMemo } from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';

import { Typography } from '@o2s/ui/elements/typography';

import type { StepIndicatorProps } from './StepIndicator.types';

type StepState = {
    stepNumber: number;
    isActive: boolean;
    isCompleted: boolean;
    isLast: boolean;
    isFilled: boolean;
};

function getStepState(index: number, currentStep: number, totalSteps: number): StepState {
    const stepNumber = index + 1;
    return {
        stepNumber,
        isActive: stepNumber === currentStep,
        isCompleted: stepNumber < currentStep,
        isLast: index === totalSteps - 1,
        isFilled: stepNumber <= currentStep,
    };
}

function StepCircle({
    stepNumber,
    isCompleted,
    isFilled,
    className,
}: {
    stepNumber: number;
    isCompleted: boolean;
    isFilled: boolean;
    className?: string;
}) {
    return (
        <div
            className={cn(
                'h-10 w-10 rounded-full flex items-center justify-center shrink-0',
                isFilled ? 'bg-success text-success-foreground' : 'border-2 border-border bg-background',
                className,
            )}
        >
            {isCompleted ? (
                <DynamicIcon name="Check" size={20} strokeWidth={2.5} />
            ) : (
                <span className="text-sm font-semibold">{stepNumber}</span>
            )}
        </div>
    );
}

export const StepIndicator: React.FC<Readonly<StepIndicatorProps>> = ({ steps, currentStep }) => {
    const stepsWithState = useMemo(
        () => steps.map((label, index) => ({ label, ...getStepState(index, currentStep, steps.length) })),
        [steps, currentStep],
    );

    return (
        <div className="w-full">
            {/* Desktop: flex with justify-between, connector lines via ::after */}
            <div className="hidden md:flex flex-col gap-4">
                <div className="flex justify-between">
                    {stepsWithState.map(({ label, stepNumber, isActive, isCompleted, isLast, isFilled }) => (
                        <div
                            key={stepNumber}
                            className={cn(
                                'flex-1 flex flex-col items-center min-w-0 relative',
                                !isLast &&
                                    "after:content-[''] after:absolute after:top-5 after:left-[calc(50%+40px)] after:h-0.5 after:w-[calc(100%-80px)] after:-translate-y-1/2 after:z-0",
                                !isLast && (isCompleted ? 'after:bg-success' : 'after:bg-border'),
                            )}
                        >
                            <StepCircle
                                stepNumber={stepNumber}
                                isCompleted={isCompleted}
                                isFilled={isFilled}
                                className="relative z-10"
                            />
                            <Typography
                                variant="small"
                                className={cn(
                                    'text-center mt-2 px-2 w-full',
                                    isActive ? 'font-semibold' : 'text-muted-foreground',
                                )}
                            >
                                {label}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile: vertical layout */}
            <div className="flex flex-col md:hidden gap-0">
                {stepsWithState.map(({ label, stepNumber, isActive, isCompleted, isLast, isFilled }) => (
                    <div key={stepNumber} className="flex items-start gap-3">
                        <div className="flex flex-col items-center shrink-0">
                            <StepCircle stepNumber={stepNumber} isCompleted={isCompleted} isFilled={isFilled} />
                            {!isLast && (
                                <div className={cn('w-0.5 h-8 my-2', isCompleted ? 'bg-success' : 'bg-border')} />
                            )}
                        </div>
                        <div className="pt-2 pb-4">
                            <Typography
                                variant="small"
                                className={cn(isActive ? 'font-semibold' : 'text-muted-foreground')}
                            >
                                {label}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
