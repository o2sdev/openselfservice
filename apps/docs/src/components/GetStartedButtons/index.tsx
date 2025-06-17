import clsx from 'clsx';
import React, { useState } from 'react';

import GithubActiveIcon from '@site/src/assets/icons/github-active.svg';
import GithubIcon from '@site/src/assets/icons/github.svg';
import { Body } from '@site/src/components/Typography';

const GetStartedButtons = () => {
    return (
        <div>
            <div className="sm:flex gap-6">
                <a className={clsx('button button mb-4')} href="https://demo.openselfservice.com" target="_blank">
                    See our demo app
                </a>
                <a
                    href="https://github.com/o2sdev/openselfservice"
                    className={clsx('button button-ultra')}
                    target="_blank"
                    rel="noopener"
                >
                    <span className="label flex items-center justify-center gap-2">
                        <span className="relative h-5 w-5 mr-2 flex-shrink-0">
                            <GithubIcon className="absolute inset-0 h-5 w-5 transition-opacity duration-200 pointer-events-none github-icon-default" />
                            <GithubActiveIcon className="absolute inset-0 h-5 w-5 transition-opacity duration-200 pointer-events-none github-icon-active" />
                        </span>
                        Star us on GitHub
                    </span>
                </a>
            </div>
        </div>
    );
};

export default GetStartedButtons;
