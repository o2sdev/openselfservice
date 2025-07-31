import React from 'react';

import { Skeleton } from '@o2s/ui/elements/skeleton';

import { LoadingProps } from './Loading.types';

export const Loading: React.FC<LoadingProps> = ({ bars = 2, variant = 'component' }) => {
    switch (variant) {
        case 'post':
            return (
                <div className="flex items-start space-x-4 w-full">
                    <Skeleton variant="circle" />
                    {typeof bars === 'number' ? (
                        Array.from(Array(bars).keys()).map((i) => <Skeleton key={i} />)
                    ) : (
                        <>
                            <div className="space-y-2 w-full hidden md:block">
                                {Array.from(Array(bars[0]).keys()).map((i) => (
                                    <Skeleton key={i} />
                                ))}
                            </div>
                            <div className="space-y-2 w-full block md:hidden">
                                {Array.from(Array(bars[1]).keys()).map((i) => (
                                    <Skeleton key={i} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            );
        case 'component':
            return (
                <div className="flex flex-col space-y-3 w-full">
                    <Skeleton variant="rounded" />
                    <div className="space-y-2 w-full">
                        {typeof bars === 'number' ? (
                            Array.from(Array(bars).keys()).map((i) => <Skeleton key={i} />)
                        ) : (
                            <>
                                <div className="space-y-2 w-full hidden md:block">
                                    {Array.from(Array(bars[0]).keys()).map((i) => (
                                        <Skeleton key={i} />
                                    ))}
                                </div>
                                <div className="space-y-2 w-full block md:hidden">
                                    {Array.from(Array(bars[1]).keys()).map((i) => (
                                        <Skeleton key={i} />
                                    ))}
                                </div>
                            </>
                        )}
                        <Skeleton className="w-3/4" />
                    </div>
                </div>
            );
    }
};
