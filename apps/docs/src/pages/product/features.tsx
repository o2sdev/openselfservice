import React from 'react';

import StarIcon from '@site/src/assets/icons/Star.svg';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { Body } from '@site/src/components/Typography';

import Layout from '@theme/Layout';

import styles from './product.module.scss';

export default function ProductFeatures() {
    return (
        <Layout title="Features">
            <div className={styles.linearGradient}>
                <div style={{ overflow: 'hidden' }}>
                    <div className={styles.gradientWrapper}>
                        <div className={styles.gradientCircleGreen} />
                        <div className={styles.gradientCircleBlue} />
                        <main className={styles.mainContentWrapper}>
                            <HeroBannerSection
                                badge={{
                                    text: 'Product Features',
                                    icon: <StarIcon className="*:stroke-white" />,
                                }}
                                heading={
                                    <>
                                        Explore what <span className="text-highlighted">Open Self Service</span> offers
                                    </>
                                }
                                description={
                                    <Body>
                                        Here's a breakdown of what the framework enables — both for business outcomes
                                        and developer experience.
                                    </Body>
                                }
                            />
                            <div>KEY BENEFITS here</div>
                            <div>TECHNICAL CAPABILITIES BY COMPONENT here</div>
                            <div>FUNCTIONAL BLOCKS here</div>
                            <div>Footer section here</div>
                        </main>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
