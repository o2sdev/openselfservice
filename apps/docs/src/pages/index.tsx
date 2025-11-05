import type { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import GithubIcon from '@site/src/assets/icons/github.svg';
import Cerrad from '@site/src/assets/logos/Cerrad.svg';
import Osadkowski from '@site/src/assets/logos/Osadkowski.svg';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { HomepageAboutSection } from '@site/src/components/HomepageAboutSection';
import { HomepageArchitectureSection } from '@site/src/components/HomepageArchitectureSection';
import { HomepageBenefitsSection } from '@site/src/components/HomepageBenefitsSection';
import { HomepageUseCases } from '@site/src/components/HomepageUseCases';

import Layout from '@theme/Layout';

import DeutscheTelekom from '../assets/logos/DeutscheTelekom.svg';
import DormerPramet from '../assets/logos/DormerPramet.svg';
import Fortum from '../assets/logos/Fortum.svg';
import Orange from '../assets/logos/Orange.svg';
import OrangeEnergia from '../assets/logos/OrangeEnergia.svg';
import { ClientsSection } from '../components/ClientsSection';
import { Body, BodyBold } from '../components/Typography';

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
                            <div className={`${styles.mainContentWrapper}`}>
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
                                        url: 'https://demo.openselfservice.com', // TODO: add link to app starters
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

                                <section className="px-4 mb-40 scroll-m-[120px]">
                                    <ClientsSection
                                        lead={
                                            <Body>
                                                We’ve spent over a decade designing, building, and operating
                                                self-service portals and digital platforms across industries. Our
                                                experience spans telecom, energy, manufacturing, and financial services
                                                — with solutions used by millions of end users.
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

                                <HomepageArchitectureSection />
                                {/* <HomepageUseCases /> */}
                            </div>
                        </div>
                    </div>

                    {/* <HomepageAboutSection /> */}
                    {/* <HomepageBenefitsSection /> */}
                </div>
            </Layout>
        </div>
    );
}
