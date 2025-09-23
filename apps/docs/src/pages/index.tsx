import type { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Cerrad from '@site/src/assets/logos/Cerrad.svg';
import Orange from '@site/src/assets/logos/Orange.svg';
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
import OrangeEnergia from '../assets/logos/OrangeEnergia.svg';
import { ClientsSection } from '../components/ClientsSection';

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
                                            <b>Open Self Service</b> is an open-source framework that lets you easily
                                            integrate APIs, unify data, and build scalable, high-performance customer
                                            support portals with Next.js, TypeScript, and NestJS.
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
                                                We spent 10 years designing, implementing, and maintaining dedicated{' '}
                                                <br />
                                                self-service solutions and digital platforms for various sectors.
                                            </>
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
