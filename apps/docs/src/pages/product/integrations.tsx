import React from 'react';

import BlocksIcon from '@site/src/assets/icons/Blocks.svg';
import { FooterSection } from '@site/src/components/FooterSection';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { Body } from '@site/src/components/Typography';

import Layout from '@theme/Layout';

import styles from './product.module.scss';

export default function ProductIntegrations() {
    return (
        <Layout title="Integrations">
            <div className={styles.linearGradient}>
                <div style={{ overflow: 'hidden' }}>
                    <main className={styles.mainContentWrapper}>
                        <div className={styles.gradientWrapper}>
                            {/* TODO: add new gradient circle here */}
                            <div className={styles.gradientCircleBlue} />
                            <HeroBannerSection
                                badge={{
                                    text: 'Integrations',
                                    icon: <BlocksIcon className="*:stroke-white" />,
                                }}
                                heading={
                                    <>
                                        Available <span className="text-highlighted">integrations</span>
                                    </>
                                }
                                description={
                                    <Body>
                                        Below is a list of current and upcoming integrations. All of them follow the
                                        same pattern:
                                    </Body>
                                }
                            />
                            <div className="flex flex-col gap-y-40 pb-40">
                                <section className="px-4 flex flex-col gap-20 w-full">
                                    Integrations: in progress...
                                </section>
                            </div>
                        </div>
                        <div className="section-gradient-1 px-4 py-40 mb-0!">
                            <section className="mb-0!">
                                <FooterSection
                                    title={
                                        <>
                                            <span className="text-white">Looking for </span>
                                            <span className="text-highlighted">something else?</span>
                                        </>
                                    }
                                    description="Tell us what kind of frontend starter would help your next project.We're planning more — and we want your input."
                                    primaryButton={{
                                        text: 'Submit your idea',
                                        url: '/contact', // TODO: confirm link
                                    }}
                                />
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </Layout>
    );
}
