import React, { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import GithubIcon from '@site/src/assets/icons/github.svg';
import { BenefitCardProps, BenefitsSection } from '@site/src/components/BenefitsSection';
import { DXPArchitectureSection } from '@site/src/components/DXPArchitectureSection';
import { DXPComplexPlatformsSection } from '@site/src/components/DXPComplexPlatformsSection';
import { DXPFeaturesSection } from '@site/src/components/DXPFeaturesSection';
import { DXPIntegrationsSection } from '@site/src/components/DXPIntegrationsSection';
import { DXPUseCasesSection } from '@site/src/components/DXPUseCasesSection';
import { FooterSection } from '@site/src/components/FooterSection';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';

import Layout from '@theme/Layout';

import CodeIcon from '../../assets/icons/code.svg';
import NetworkIcon from '../../assets/icons/network.svg';
import PenToolIcon from '../../assets/icons/pentool.svg';

import styles from './dxp.module.scss';

const benefits: Array<BenefitCardProps> = [
    {
        team: 'Frontend Developers',
        icon: <CodeIcon className="w-4 h-4 text-[#21d99a]" />,
        title: 'Quick start with zero boilerplate',
        borderColor: 'blue',
    },
    {
        team: 'Content Teams',
        icon: <PenToolIcon className="w-4 h-4 text-[#21d99a]" />,
        title: 'Structured CMS and ready to use content models',
        borderColor: 'light',
    },
    {
        team: 'Solution Architects',
        icon: <NetworkIcon className="w-4 h-4 text-[#21d99a]" />,
        title: 'Flexible, composable stack as a base for future scaling',
        borderColor: 'light',
    },
];

export default function DXPStarter(): ReactNode {
    const { siteConfig } = useDocusaurusContext();

    return (
        <div className="dxp-page">
            <Layout title="DXP Frontend Starter - Open Self Service">
                <div className={styles.linearGradient}>
                    <div className="overflow-hidden">
                        <div className={styles.gradientWrapper}>
                            <div className={styles.gradientCircleGreen} />
                            <div className={styles.gradientCircleBlue} />
                            <div className={`${styles.mainContentWrapper}`}>
                                <HeroBannerSection
                                    heading={
                                        <>
                                            <br /> <span className="text-highlighted">Digital Experience Platform</span>{' '}
                                            Frontend Starter Kit
                                        </>
                                    }
                                    description={[
                                        'Kick-start your modern, composable digital platform with our Next.js based starter and built-in Strapi CMS integration.',
                                        'Start small and scale with composable architecture, ready-to-use integrations and our API composition server.',
                                        "It's open-source. Use our starter, build your own, extend it however you need.",
                                    ]}
                                    cliCommand="npx create-dxp-app"
                                    mainLink={{
                                        text: 'See DXP demo app',
                                        url: 'https://demo-dxp.openselfservice.com',
                                        target: '_blank',
                                    }}
                                    secondaryLink={{
                                        text: 'See on GitHub',
                                        url: 'https://github.com/o2sdev/dxp-starter-kit',
                                        target: '_blank',
                                    }}
                                    heroImage={{
                                        url: '/img/homepage/banner-dxp.png',
                                        alt: 'DXP Platform illustration',
                                    }}
                                    isDXPage={true}
                                />

                                <section className="pr-4 pl-4 mb-4 mt-10">
                                    <DXPFeaturesSection />
                                </section>

                                <section className="pr-4 pl-4 mb-40">
                                    <DXPIntegrationsSection />
                                </section>

                                <section className="pr-4 pl-4 mb-10">
                                    <DXPArchitectureSection />
                                </section>

                                <section className="pr-4 pl-4 mb-40">
                                    <DXPComplexPlatformsSection />
                                </section>

                                <section className="pr-4 pl-4 mb-40">
                                    <DXPUseCasesSection />
                                </section>

                                <section className="pr-4 pl-4 mb-40">
                                    <BenefitsSection
                                        title={
                                            <>
                                                Benefits for <span className="text-highlighted">every team</span>
                                            </>
                                        }
                                        benefits={benefits}
                                    />
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="section-gradient-1 px-4 py-40 mb-0!">
                        <section className="mb-0!">
                            <FooterSection
                                title={
                                    <>
                                        <span className="text-white">Ready to </span>
                                        <span className="text-highlighted">get started?</span>
                                    </>
                                }
                                description="Build your next digital experience platform with our composable frontend starter kit."
                                primaryButton={{
                                    text: 'See DXP demo app',
                                    url: 'https://demo-dxp.openselfservice.com',
                                    target: '_blank',
                                }}
                                secondaryButton={{
                                    text: 'See on GitHub',
                                    url: '"https://github.com/o2sdev/dxp-starter-kit"',
                                    iconLeft: <GithubIcon className="[&>*]:stroke-current" />,
                                    target: 'blank',
                                }}
                            />
                        </section>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
