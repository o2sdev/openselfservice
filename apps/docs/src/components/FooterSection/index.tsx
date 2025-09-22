import React from 'react';

import { Body, H2 } from '../Typography';

export interface FooterSectionProps {
    title: React.ReactNode;
    description: React.ReactNode;
    primaryButton?: {
        text: string;
        url: string;
        iconLeft?: React.ReactNode;
        iconRight?: React.ReactNode;
        target?: HTMLAnchorElement['target'];
    };
    secondaryButton?: {
        text: string;
        url: string;
        iconLeft?: React.ReactNode;
        iconRight?: React.ReactNode;
        target?: HTMLAnchorElement['target'];
    };
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, description, primaryButton, secondaryButton }) => {
    return (
        <div className="flex flex-col gap-12 items-center justify-start w-full">
            {/* Text Content */}
            <div className="flex flex-col gap-10 items-center justify-start text-center w-full">
                <H2 className="text-3xl text-white w-full mb-0!">{title}</H2>
                <Body className="text-base text-white w-full">{description}</Body>
            </div>

            {/* Buttons */}
            {(primaryButton || secondaryButton) && (
                <div className="flex flex-col md:flex-row gap-2 items-start justify-center">
                    {primaryButton && (
                        <a href={primaryButton.url} className="button" target={primaryButton.target} rel="noopener">
                            {primaryButton.iconLeft}
                            {primaryButton.text}
                            {primaryButton.iconRight}
                        </a>
                    )}
                    {secondaryButton && (
                        <a
                            href={secondaryButton.url}
                            className="button button-ultra"
                            target={secondaryButton.target}
                            rel="noopener"
                        >
                            <span className="label flex items-center justify-center gap-2">
                                {secondaryButton.iconLeft}
                                {secondaryButton.text}
                                {secondaryButton.iconRight}
                            </span>
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};
