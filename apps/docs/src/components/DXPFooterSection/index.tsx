import React from 'react';

import GithubActiveIcon from '@site/src/assets/icons/github-active.svg';
import GithubIcon from '@site/src/assets/icons/github.svg';

import { Body, H2 } from '../Typography';

export function DXPFooterSection() {
    return (
        <div className="flex flex-col gap-12 items-center justify-start w-full">
            {/* Text Content */}
            <div className="flex flex-col gap-10 items-center justify-start text-center w-full">
                <H2 className="text-3xl text-white w-full mb-0!">
                    <span className="text-white">Ready to </span>
                    <span className="text-highlighted">get started?</span>
                </H2>
                <Body className="text-base text-white w-full">
                    Build your next digital experience platform with our composable frontend starter kit.
                </Body>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-2 items-start justify-center">
                <a href="https://demo-dxp.openselfservice.com" className="button" target="_blank" rel="noopener">
                    See DXP demo app
                </a>
                <a
                    href="https://github.com/o2sdev/dxp-frontend-starter"
                    className="button button-ultra"
                    target="_blank"
                    rel="noopener"
                >
                    <span className="label flex items-center justify-center gap-2">
                        <span className="relative h-5 w-5 mr-2 flex-shrink-0">
                            <GithubIcon className="absolute inset-0 h-5 w-5 transition-opacity duration-200 pointer-events-none github-icon-default" />
                            <GithubActiveIcon className="absolute inset-0 h-5 w-5 transition-opacity duration-200 pointer-events-none github-icon-active" />
                        </span>
                        See on GitHub
                    </span>
                </a>
            </div>
        </div>
    );
}
