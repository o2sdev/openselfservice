import type { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Cerrad from '@site/src/assets/logos/Cerrad.svg';
import Osadkowski from '@site/src/assets/logos/Osadkowski.svg';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { HomepageAboutSection } from '@site/src/components/HomepageAboutSection';
import { HomepageArchitectureSection } from '@site/src/components/HomepageArchitectureSection';
import { HomepageBenefitsSection } from '@site/src/components/HomepageBenefitsSection';
import { HomepageUseCases } from '@site/src/components/HomepageUseCases';

import Layout from '@theme/Layout';

import Bosch from '../assets/logos/Bosch.svg';
import DeutscheTelekom from '../assets/logos/DeutscheTelekom.svg';
import DormerPramet from '../assets/logos/DormerPramet.svg';
import Fortum from '../assets/logos/Fortum.svg';
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
                                            <br /> The Open Source
                                            <span className="text-highlighted"> Composable Frontend </span>for Customer
                                            Portals
                                        </>
                                    }
                                    description={
                                        <>
                                            <Body>
                                                <b>Open Self Service</b> is an open-source framework for building modern
                                                customer-facing portals in composable architecture. It helps you
                                                integrate APIs, unify data, and deliver scalable, high-performance
                                                self-service experiences using Next.js, TypeScript, and NestJS.
                                            </Body>
                                            <Body>
                                                The framework provides the frontend layer – designed to connect with
                                                your existing backend services or integrate with headless platforms
                                                using our ready-to-use connectors.
                                            </Body>
                                        </>
                                    }
                                    cliCommand="npx create-o2s-app"
                                    mainLink={{
                                        text: 'See our demo app',
                                        url: 'https://demo.openselfservice.com',
                                    }}
                                    secondaryLink={{
                                        text: 'Star us on GitHub',
                                        url: 'https://github.com/o2sdev/openselfservice',
                                    }}
                                    heroImage={{
                                        url: '/img/homepage/banner.png',
                                        alt: 'Laptop with connecting nodes illustration',
                                    }}
                                />

                                <section className="pr-4 pl-4 mb-40 scroll-m-[120px]">
                                    <ClientsSection
                                        lead={
                                            <>
                                                <Body>
                                                    We’ve spent over a decade designing, building, and operating
                                                    self-service portals and digital platforms across industries. Our
                                                    experience spans telecom, energy, manufacturing, and financial
                                                    services — with solutions used by millions of end users.
                                                </Body>
                                            </>
                                        }
                                        clients={[
                                            { name: 'Orange Energia', img: <OrangeEnergia /> },
                                            { name: 'Osadkowski', img: <Osadkowski /> },
                                            { name: 'Fortum', img: <Fortum /> },
                                            { name: 'Dormer Pramet', img: <DormerPramet /> },
                                            { name: 'Cerrad', img: <Cerrad /> },
                                            { name: 'Deutsche Telekom', img: <DeutscheTelekom /> },
                                            { name: 'Bosch', img: <Bosch /> },
                                        ]}
                                    />
                                </section>

                                <HomepageArchitectureSection />
                                <HomepageUseCases />
                            </div>
                        </div>
                    </div>

                    <HomepageAboutSection />
                    <HomepageBenefitsSection />
                </div>
            </Layout>
        </div>
    );
}
