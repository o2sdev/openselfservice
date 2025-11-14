import React, { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Icon_Discord2 from '@site/src/assets/icons/Discord2.svg';
import Icon_FolderOpenDot from '@site/src/assets/icons/FolderOpenDot.svg';
import Icon_Github2 from '@site/src/assets/icons/Github2.svg';
import Icon_Mail from '@site/src/assets/icons/Mail.svg';
import Icon_Map from '@site/src/assets/icons/Map.svg';
import Icon_PencilLine from '@site/src/assets/icons/PencilLine.svg';
import Icon_discord from '@site/src/assets/icons/discord.svg';
import { BenefitCardProps, BenefitsSection } from '@site/src/components/BenefitsSection';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';

import Layout from '@theme/Layout';

import { FooterSection } from '../../components/FooterSection';
import { Body } from '../../components/Typography';

import styles from './support.module.scss';

const offer: Array<BenefitCardProps> = [
    {
        icon: <Icon_FolderOpenDot />,
        title: 'Documentation & Guides',
        description:
            'Clear and comprehensive documentation to help you get started, integrate APIs, and build custom modules.',
        link: {
            text: 'Read the docs',
            url: '/docs',
        },
        borderColor: 'light',
    },
    {
        icon: <Icon_Discord2 />,
        title: 'Join the Discord Community',
        description: 'Ask questions, get support, and connect with other developers building with O2S.',
        link: {
            text: 'Join Discord',
            url: 'https://discord.gg/4R568nZgsT',
            target: '_blank',
        },
        borderColor: 'light',
    },
    {
        icon: <Icon_Github2 />,
        title: 'GitHub Issues & Discussions',
        description: 'Report bugs, request features, or participate in open discussions.',
        link: {
            text: 'Go to GitHub',
            url: 'https://github.com/o2sdev/openselfservice',
            target: '_blank',
        },
        borderColor: 'light',
    },
    {
        icon: <Icon_Map />,
        title: 'Public Roadmap',
        description: 'See what’s planned, what’s in progress, and what’s already shipped. Shape it with us.',
        link: {
            text: 'View roadmap',
            url: 'https://github.com/orgs/o2sdev/projects/2',
            target: '_blank',
        },
        borderColor: 'light',
    },
    {
        icon: <Icon_PencilLine />,
        title: 'Technical Blog',
        description: 'Explore deep-dives into architecture, integrations, and real-world examples of using O2S.',
        link: {
            text: 'Read the blog',
            url: '/blog',
        },
        borderColor: 'light',
    },
    {
        icon: <Icon_Mail />,
        title: 'Contact us',
        description:
            'Need expert technical guidance or have questions about extended Open Self Service features and offer?',
        link: {
            text: 'Go to contact form',
            url: '/contact',
        },
        borderColor: 'light',
    },
];

export default function SupportStandard(): ReactNode {
    const { siteConfig } = useDocusaurusContext();

    return (
        <div className="dxp-page">
            <Layout title="Support">
                <div className={styles.linearGradient}>
                    <div className="overflow-hidden">
                        <div className={styles.gradientWrapper}>
                            <div className={styles.gradientCircleGreen} />
                            <div className={styles.gradientCircleBlue} />
                            <div className={`${styles.mainContentWrapper}`}>
                                <HeroBannerSection
                                    heading={
                                        <span className="max-sm:text-4xl">
                                            Everything developers need to{' '}
                                            <span className="text-highlighted">build with confidence</span>
                                        </span>
                                    }
                                    description={
                                        <Body>
                                            Open Self Service provides a developer-first experience with clear guidance,
                                            open collaboration, and active community support. Whether you’re just
                                            getting started or maintaining a production setup, we’ve got you covered.
                                        </Body>
                                    }
                                    mainLink={{
                                        text: 'Join the Discord Community',
                                        url: 'https://discord.gg/4R568nZgsT',
                                        iconLeft: <Icon_discord className="*:stroke-current" />,
                                        target: '_blank',
                                    }}
                                    tertiaryLink={{
                                        text: 'Enterprise Support',
                                        url: '/support/enterprise',
                                    }}
                                />

                                <section className="pr-4 pl-4 mb-40">
                                    <BenefitsSection benefits={offer} />
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-gradient-2 px-4 py-40 mb-0!">
                    <section className="mb-0!">
                        <FooterSection
                            title={'Need help or want to contribute?'}
                            description={<>Join the community and start building with O2S.</>}
                            primaryButton={{
                                text: 'Join the Discord Community',
                                url: 'https://discord.gg/4R568nZgsT',
                                iconLeft: <Icon_discord className="*:stroke-current" />,
                                target: '_blank',
                            }}
                        />
                    </section>
                </div>
            </Layout>
        </div>
    );
}
