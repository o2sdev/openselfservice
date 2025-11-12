import React from 'react';

import RocketIcon from '@site/src/assets/icons/Rocket.svg';
import BadgeIcon from '@site/src/assets/icons/o2s-icon-badge.svg';
import ContactIcon from '@site/src/assets/icons/o2s-icon-contact.svg';
import LoopIcon from '@site/src/assets/icons/o2s-icon-loop.svg';
import RoadmapIcon from '@site/src/assets/icons/o2s-icon-roadmap.svg';
import SupportIcon from '@site/src/assets/icons/o2s-icon-support.svg';
import { type BenefitCardProps, BenefitsSection } from '@site/src/components/BenefitsSection';
import { FooterSection } from '@site/src/components/FooterSection';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { Body } from '@site/src/components/Typography';

import Layout from '@theme/Layout';

import styles from './product.module.scss';

const benefits: Array<BenefitCardProps> = [
    {
        icon: <SupportIcon className="w-[50px] h-[50px]" />,
        title: 'Theming with Tailwind',
        borderColor: 'transparent',
    },
    {
        icon: <ContactIcon className="w-[50px] h-[50px]" />,
        title: 'Override or extend components',
        borderColor: 'transparent',
    },
    {
        icon: <LoopIcon className="w-[50px] h-[50px]" />,
        title: 'Add custom blocks (frontend + BFF logic)',
        borderColor: 'transparent',
    },
    {
        icon: <RoadmapIcon className="w-[50px] h-[50px]" />,
        title: 'CMS schema and layout control',
        borderColor: 'transparent',
    },
    {
        icon: <BadgeIcon className="w-[50px] h-[50px]" />,
        title: 'Lighthouse 90+ scores (Performance, SEO, A11y)',
        borderColor: 'transparent',
    },
];

export default function ProductStarters() {
    return (
        <Layout title="Starters">
            <div className={styles.linearGradient}>
                <div style={{ overflow: 'hidden' }}>
                    <main className={styles.mainContentWrapper}>
                        <div className={styles.gradientWrapper}>
                            {/* TODO: add new gradient circle here */}
                            <div className={styles.gradientCircleBlue} />
                            <HeroBannerSection
                                badge={{
                                    text: 'Starters',
                                    icon: <RocketIcon className="*:stroke-white" />,
                                }}
                                heading={
                                    <>
                                        Start fast with{' '}
                                        <span className="text-highlighted">frontend application starters</span>
                                    </>
                                }
                                description={
                                    <Body>
                                        Use one of our pre-configured starter kits to launch your project — then extend
                                        it with your own blocks and integrations.
                                    </Body>
                                }
                            />
                            <div className="flex flex-col gap-y-40 pb-40">
                                <section className="px-4 flex flex-col gap-20 w-full">
                                    <BenefitsSection
                                        title={
                                            <>
                                                <span className="text-highlighted">What you get</span>
                                                <span className="text-white">{' with every starter'}</span>
                                            </>
                                        }
                                        description={
                                            <>
                                                Each starter includes a modular frontend layer built on Open Self
                                                Service — with fully customizable UI, layout blocks, and modern DX
                                                features.
                                            </>
                                        }
                                        benefits={benefits}
                                    />
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
