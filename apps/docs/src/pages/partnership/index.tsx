import React, { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import SquareArrowOutUpRight from '@site/src/assets/icons/SquareArrowOutUpRight.svg';
import Icon_call from '@site/src/assets/icons/icon call.svg';
import Icon_handshake from '@site/src/assets/icons/icon handshake.svg';
import Icon_text from '@site/src/assets/icons/icon text.svg';
import Icon_add_logo from '@site/src/assets/icons/o2s-icon-add_logo.svg';
import Icon_badge from '@site/src/assets/icons/o2s-icon-badge.svg';
import Icon_contact from '@site/src/assets/icons/o2s-icon-contact.svg';
import Icon_loop from '@site/src/assets/icons/o2s-icon-loop.svg';
import Icon_roadmap from '@site/src/assets/icons/o2s-icon-roadmap.svg';
import Icon_support from '@site/src/assets/icons/o2s-icon-support.svg';
import { BenefitCardProps, BenefitsSection } from '@site/src/components/BenefitsSection';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';

import Layout from '@theme/Layout';

import { FooterSection } from '../../components/FooterSection';
import { Guide, GuidesSection } from '../../components/GuidesSection';

import styles from './partnership.module.scss';

const whyJoin: Array<BenefitCardProps> = [
    {
        icon: <Icon_support />,
        iconPosition: 'left',
        title: 'Dedicated technical support & onboarding',
        borderColor: 'light',
    },
    {
        icon: <Icon_contact />,
        iconPosition: 'left',
        title: 'Direct contact with our core team',
        borderColor: 'light',
    },
    {
        icon: <Icon_loop />,
        iconPosition: 'left',
        title: 'Roadmap feedback loop',
        borderColor: 'light',
    },
    {
        icon: <Icon_roadmap />,
        iconPosition: 'left',
        title: 'Access to early features and roadmap',
        borderColor: 'light',
    },
    {
        icon: <Icon_badge />,
        iconPosition: 'left',
        title: 'Implementation Partner badge',
        borderColor: 'light',
    },
    {
        icon: <Icon_add_logo />,
        iconPosition: 'left',
        title: 'Your logo on our website',
        borderColor: 'light',
    },
];

const guides: Array<Guide> = [
    {
        title: 'Submit your application',
        description: 'Tell us about your experience and goals',
        icon: <Icon_text />,
        badge: '2 min',
    },
    {
        title: 'Short intro call to align on goals',
        description: "We'll discuss how we can work together",
        icon: <Icon_call />,
        badge: '20 min',
    },
    {
        title: 'Get listed & start collaborating',
        description: 'Join our partner network and grow together',
        icon: <Icon_handshake />,
        badge: '24h',
    },
];

export default function Partnership(): ReactNode {
    const { siteConfig } = useDocusaurusContext();

    return (
        <div className="dxp-page">
            <Layout title="Partnership">
                <div className={styles.linearGradient}>
                    <div className="overflow-hidden">
                        <div className={styles.gradientWrapper}>
                            <div className={styles.gradientCircleGreen} />
                            <div className={styles.gradientCircleBlue} />
                            <div className={`${styles.mainContentWrapper}`}>
                                <HeroBannerSection
                                    heading={
                                        <span className="max-sm:text-4xl">
                                            <span className="text-highlighted">Build with us.</span> Become an O2S
                                            Implementation Partner
                                        </span>
                                    }
                                    description="Are you working on headless or composable customer support portals, large-scale digital platforms or any composable frontends? Join our network of agencies and integrators building modern digital experiences."
                                    mainLink={{
                                        text: 'Apply to become a partner',
                                        url: '#how-to-join',
                                        iconRight: <SquareArrowOutUpRight className="[&>*]:stroke-current" />,
                                    }}
                                />

                                <section className="pr-4 pl-4 mb-40">
                                    <BenefitsSection
                                        title={
                                            <>
                                                <span className="text-highlighted">Why join</span> the O2S Partner
                                                Program?
                                            </>
                                        }
                                        benefits={whyJoin}
                                    />
                                </section>

                                <section id="how-to-join" className="pr-4 pl-4 mb-40 scroll-m-[120px]">
                                    <GuidesSection
                                        title={
                                            <>
                                                How it <span className="text-highlighted">works</span>
                                            </>
                                        }
                                        guides={guides}
                                        info={{
                                            title: 'Ready to join?',
                                            description: (
                                                <>
                                                    We’re looking for{' '}
                                                    <span className="text-highlighted font-semibold">
                                                        early partners
                                                    </span>{' '}
                                                    who want to help shape the future of customer self-service
                                                    platforms.
                                                </>
                                            ),
                                            link: {
                                                text: 'Fill out the application form',
                                                url: '/support/enterprise',
                                                iconRight: <SquareArrowOutUpRight className="[&>*]:stroke-current" />,
                                            },
                                            subtitle: 'Application takes 2 minutes to complete',
                                        }}
                                    />
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-gradient px-4 py-40 mb-0!">
                    <section className="mb-0!">
                        <FooterSection
                            title={'Have questions before applying?'}
                            description={
                                <>
                                    Contact us at{' '}
                                    <a href="mailto:contact@openselfservice.com">contact@openselfservice.com</a>
                                </>
                            }
                        />
                    </section>
                </div>
            </Layout>
        </div>
    );
}
