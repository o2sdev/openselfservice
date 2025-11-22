import type { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import GithubIcon from '@site/src/assets/icons/github.svg';
import Cerrad from '@site/src/assets/logos/Cerrad.svg';
import DeutscheTelekom from '@site/src/assets/logos/DeutscheTelekom.svg';
import DormerPramet from '@site/src/assets/logos/DormerPramet.svg';
import Fortum from '@site/src/assets/logos/Fortum.svg';
import Orange from '@site/src/assets/logos/Orange.svg';
import OrangeEnergia from '@site/src/assets/logos/OrangeEnergia.svg';
import Osadkowski from '@site/src/assets/logos/Osadkowski.svg';
import { ClientsSection } from '@site/src/components/ClientsSection';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { HomepageAboutSection } from '@site/src/components/HomepageAboutSection';
import { HomepageArchitectureSection } from '@site/src/components/HomepageArchitectureSection';
import { HomepageBenefitsSection } from '@site/src/components/HomepageBenefitsSection';
import { HomepageFeaturesSection } from '@site/src/components/HomepageFeaturesSection';
import { HomepageStartersSection } from '@site/src/components/HomepageStartersSection';
import { HomepageUseCases } from '@site/src/components/HomepageUseCases';
import { SubscribeSection } from '@site/src/components/SubscribeSection';
import { Body, BodyBold } from '@site/src/components/Typography';

import Layout from '@theme/Layout';

import styles from './main.module.scss';

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();

    return (
        <div>
            <Layout title={`${siteConfig.customFields.fullPageTitle}`}>
                <div className={styles.linearGradient}>
                    <div style={{ overflow: 'hidden' }}>
                        <div className={styles.gradientWrapper}>
                            <div className={styles.gradientCircleGreen} />
                            <div className={styles.gradientCircleBlue} />
                            <main className={styles.mainContentWrapper}>
                                <HeroBannerSection
                                    heading={
                                        <>
                                            <br />
                                            Frontend stack for
                                            <span className="text-highlighted"> customer self-service</span>{' '}
                                            experiences.
                                            <br />
                                        </>
                                    }
                                    description={
                                        <Body>
                                            <b>Open Self Service</b> is a composable frontend layer for customer
                                            portals, support apps, and digital self-service platforms. It can be powered
                                            by your own backend APIs or our growing set of ready-made integrations.
                                        </Body>
                                    }
                                    cliCommand="npx create-o2s-app"
                                    mainLink={{
                                        text: 'Explore features',
                                        url: '/product/features',
                                    }}
                                    secondaryLink={{
                                        text: 'See on GitHub',
                                        url: 'https://github.com/o2sdev/openselfservice',
                                        iconLeft: <GithubIcon />,
                                    }}
                                    heroImage={{
                                        url: '/img/homepage/banner.png',
                                        alt: 'Laptop with connecting nodes illustration',
                                    }}
                                />

                                <div className="flex flex-col gap-y-40 pb-16">
                                    <section className="px-4 scroll-m-[120px]">
                                        <ClientsSection
                                            lead={
                                                <Body>
                                                    We’ve spent over a decade designing, building, and operating
                                                    self-service portals and digital platforms across industries. Our
                                                    experience spans telecom, energy, manufacturing, and financial
                                                    services — with solutions used by millions of end users.
                                                </Body>
                                            }
                                            clients={[
                                                { name: 'Orange Energia', img: <OrangeEnergia /> },
                                                { name: 'Osadkowski', img: <Osadkowski /> },
                                                { name: 'Fortum', img: <Fortum /> },
                                                { name: 'Dormer Pramet', img: <DormerPramet /> },
                                                { name: 'Cerrad', img: <Cerrad /> },
                                                { name: 'Deutsche Telekom', img: <DeutscheTelekom /> },
                                                { name: 'Orange', img: <Orange /> },
                                            ]}
                                        />
                                    </section>

                                    <HomepageStartersSection />
                                    <HomepageFeaturesSection />
                                    <HomepageArchitectureSection />
                                    {/* <HomepageUseCases /> */}
                                </div>
                            </main>
                        </div>
                    </div>

                    <div className="section-gradient-1 py-40 mb-0!">
                        <section className="mb-0! px-4 max-w-[1080px] mx-auto">
                            <SubscribeSection portalId="143969481" formId="ad91735e-018c-4a60-a749-18f11d57b0e4" />
                        </section>
                    </div>

                    {/* <HomepageAboutSection /> */}
                    {/* <HomepageBenefitsSection /> */}
                </div>
            </Layout>
        </div>
    );
}
