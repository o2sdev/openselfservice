import clsx from 'clsx';
import React, { useState } from 'react';

import { Body } from '@site/src/components/Typography';

const GetStartedButtons = () => {
    return (
        <div>
            <div className="flex gap-6 max-w-md">
                <a href="/docs" className={clsx('w-full md:w-auto button')}>
                    Get started
                </a>
                <a
                    href="https://demo.openselfservice.com"
                    target="_blank"
                    className={clsx('w-full md:w-auto button button-secondary')}
                >
                    See our demo app
                </a>
            </div>
        </div>
    );
};

export default GetStartedButtons;
