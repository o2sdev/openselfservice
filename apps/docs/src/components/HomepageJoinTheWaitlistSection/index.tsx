import React, { type ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { H2 } from '@site/src/components/Typography';
import WaitlistForm from '@site/src/components/WaitlistForm';

import styles from './styles.module.css';

const description = 'Join the waitlist to be among the first to explore our composable Customer Portals framework.';

export default function HomepageJoinTheWaitlistSection(): ReactNode {
    const { siteConfig } = useDocusaurusContext();

    return (
        <section className={styles.homepageJoinTheWaitlistSection}>
            <div className="container pt-16 md:pt-40 pb-8 md:pb-20">
                <div className={`flex flex-col md:flex-row gap-12 md:gap-28`}>
                    <div className="w-full md:w-1/2 space-y-4">
                        <H2 className="mb-[48px]">
                            Be the first to experience <br />
                            <span className="text-highlighted">{siteConfig.customFields.brandName as ReactNode}</span>
                        </H2>
                        <p>{description}</p>
                    </div>

                    <div className="w-full md:w-1/2">
                        <WaitlistForm inputId="waitlistFooterFormInput" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm pt-16 md:pt-40">
                    <div className="text-left flex items-center gap-2">
                        Made by{' '}
                        <a href="https://hycom.digital" target="_blank" aria-label="Hycom">
                            <img src="/img/logos/hycom.svg" alt="hycom logo" />
                        </a>
                    </div>

                    <div className="text-right flex flex-col md:flex-row justify-between items-center gap-4">
                        <a
                            className="text-white! underline"
                            href="https://hycom.digital/privacy-policy"
                            target="_blank"
                        >
                            Privacy Policy
                        </a>{' '}
                        Open Self Service © ${new Date().getFullYear()} Hycom S.A.
                    </div>
                </div>
            </div>
        </section>
    );
}
