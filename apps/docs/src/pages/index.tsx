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
                                            Build digital platforms for customer support.
                                            <br />
                                            <span className="text-highlighted">
                                                Vendor-agnostic.
                                                <br /> Flexible. Open.
                                            </span>
                                        </>
                                    }
                                    description={
                                        <Body>
                                            Open Self Service is a modular frontend layer for composable customer
                                            portals, support apps, and digital self-service platforms.
                                            <br />
                                            Connect it to your own APIs or use our growing set of ready-made
                                            integrations to accelerate development and optimize customer experience.
                                        </Body>
                                    }
                                    cliCommand="npx create-dxp-app"
                                    mainLink={{
                                        text: 'Explore app starters',
                                        url: '/product/starters',
                                    }}
                                    secondaryLink={{
                                        text: 'See on GitHub',
                                        url: 'https://github.com/o2sdev/dxp-starter-kit',
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

                    {/* <HomepageAboutSection /> */}
                    {/* <HomepageBenefitsSection /> */}
                </div>
            </Layout>
        </div>
    );
}
