import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { AuthLayoutProps } from './AuthLayout.types';

export const AuthLayout: React.FC<AuthLayoutProps> = ({
    layout = 'main-side',
    toolbar,
    children,
    sideVisibleOnMobile = false,
    sideClassName,
}) => {
    const main = (
        <div className="flex flex-col md:max-w-[50%] w-full py-20 px-4 self-center">
            <div className="flex flex-col justify-center items-center md:h-full">
                <div className="w-full max-w-[360px] m-auto">
                    {toolbar ? <div className="flex justify-center mb-6">{toolbar}</div> : null}

                    <div className="">{children[0]}</div>
                </div>
            </div>
        </div>
    );

    const side = (
        <div className={cn('relative w-full md:max-w-[50%]', !sideVisibleOnMobile && 'md:block hidden', sideClassName)}>
            {children[1]}
        </div>
    );

    return (
        <div className="flex flex-col md:flex-row grow w-full ml-auto mr-auto max-w-7xl">
            {layout === 'main-side' ? (
                <>
                    {main}
                    {side}
                </>
            ) : (
                <>
                    {side}
                    {main}
                </>
            )}
        </div>
    );
};
