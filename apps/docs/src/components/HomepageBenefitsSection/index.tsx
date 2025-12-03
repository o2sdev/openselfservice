import React, { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/core/lib/client/exports/useDocusaurusContext';

import { H2, H3 } from '../Typography';

interface BenefitProps {
    title: string;
    description: React.ReactNode;
    image: React.ReactNode;
    reverse?: boolean;
}

const Benefit = ({ title, description, image }: BenefitProps) => (
    <div>
        <div className="mb-6">{image}</div>
        <div>
            <H3>{title}</H3>
        </div>
        <div>{description}</div>
    </div>
);

export function HomepageBenefitsSection() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <section className="container my-16! md:mb-32! lg:mb-32!">
            <H2>
                Why <span className="text-highlighted md:inline">{siteConfig.customFields.brandName as ReactNode}</span>
                ?
            </H2>

            <div className="flex flex-col">
                <div className="grid md:grid-cols-3 gap-20">
                    <Benefit
                        title="Quick start"
                        description={
                            <div>
                                <p>
                                    Open Self&nbsp;Service is the perfect boilerplate for building large-scale, headless
                                    Customer Portals. With our Next.js starter app, ready-to-use data models, and
                                    pre-integrations, you can accelerate your custom implementations.
                                </p>
                                <p>
                                    Our modern tech stack is built with tools your team already knows and loves,
                                    ensuring a smooth development process.
                                </p>
                                <p>
                                    Comprehensive documentation helps you quickly set up, learn, and deploy the stack
                                    with ease.
                                </p>
                            </div>
                        }
                        image={
                            <img
                                src="/img/homepage/benefit-1.svg"
                                alt="Illustration of 1st bennefit"
                                className="h-[170px]"
                            />
                        }
                    />

                    <Benefit
                        title="Extend easily"
                        description={
                            <div>
                                <p>
                                    Open Self&nbsp;Service is fully extensible, enabling you to adapt every layer of the
                                    solution. Expand integrations with new APIs, adjust the harmonized data model,
                                    enhance the Next.js application, or create custom UI components tailored to your
                                    needs.
                                </p>
                                <p>
                                    This flexibility helps you build unique digital service portals while leveraging
                                    harmonized data and your custom integrations across all layers.
                                </p>
                            </div>
                        }
                        image={
                            <img
                                src="/img/homepage/benefit-2.svg"
                                alt="Illustration of 2nd bennefit"
                                className="h-[170px]"
                            />
                        }
                    />

                    <Benefit
                        title="Be ready to modernize"
                        description={
                            <div>
                                <p>
                                    Open Self&nbsp;Service empowers you to create frontend solutions that are built for
                                    the future. With full decoupling between frontend and backend, and the support of
                                    our API Harmonization Server, your applications remain resilient to changes in your
                                    underlying backend infrastructure.
                                </p>
                                <p className="mb-0">
                                    Future upgrades, migrations, or system modernizations become simple and efficient.
                                </p>
                            </div>
                        }
                        image={
                            <img
                                src="/img/homepage/benefit-3.svg"
                                alt="Illustration of 3rd bennefit"
                                className="h-[170px]"
                            />
                        }
                    />
                </div>
            </div>
        </section>
    );
}
