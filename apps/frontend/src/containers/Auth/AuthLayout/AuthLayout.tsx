import React from 'react';

import { AuthLayoutProps } from './AuthLayout.types';

export const AuthLayout: React.FC<AuthLayoutProps> = ({ layout = 'main-side', toolbar, children }) => {
    const main = (
        <div className="flex flex-col md:max-w-[50%] w-full p-4">
            <div className="flex flex-col justify-center items-center md:h-full">
                <div className="w-full max-w-sm m-auto">
                    {toolbar ? <div className="flex justify-center mb-6">{toolbar}</div> : null}

                    <div className="">{children[0]}</div>
                </div>
            </div>
        </div>
    );

    const side = <div className="relative w-full max-w-[50%] md:block hidden">{children[1]}</div>;

    return (
        <div className="flex grow w-full ml-auto mr-auto max-w-7xl">
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
