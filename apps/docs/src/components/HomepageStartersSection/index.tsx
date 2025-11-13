import React from 'react';

import { HoverCard, HoverCardProps } from '../HoverCard';
import { Body, H2 } from '../Typography';

const STARTERS: HoverCardProps[] = [
    {
        title: 'Customer Portal Starter',
        description:
            'Authentication, notifications, ticketing, service overview, payments, and order history. A production-grade foundation for secure, self-service customer portals.',
        href: '/product/starters#customer-portal-starter',
        ctaLabel: 'Learn More',
        gradient:
            'linear-gradient(90deg, rgba(0, 19, 96, 0.4) 0%, rgba(0, 19, 96, 0.4) 100%), linear-gradient(131.86deg, var(--color-celadon) 1.526%, var(--color-violet) 69.661%)',
        backgroundImage: {
            url: '/img/homepage/starters-card-customer-portal.png',
            alt: 'Customer Portal Starter',
        },
    },
    {
        title: 'Digital Portal Starter',
        description:
            'Headless CMS-powered content portal with knowledge base features. Great for public help centers, marketing sites, and scalable experience platforms.',
        href: '/product/starters#digital-portal-starter',
        ctaLabel: 'Learn More',
        gradient:
            'linear-gradient(90deg, rgba(0, 19, 96, 0.4) 0%, rgba(0, 19, 96, 0.4) 100%), linear-gradient(104.71deg, var(--color-violet) 31.575%, rgba(85, 34, 228, 1) 80.05%)',
        backgroundImage: {
            url: '/img/homepage/starters-card-digital-portal.png',
            alt: 'Digital Portal Starter',
        },
    },
    {
        title: 'Build your own',
        description:
            "Soon, you'll be able to create fully tailored customer self-service frontends — composed of modular UI components, blocks and integrations.",
        gradient: 'var(--color-violet)',
        badge: 'Coming soon',
    },
];

export const HomepageStartersSection: React.FC = () => {
    return (
        <section className="px-4 flex flex-col items-center gap-y-20">
            <div className="flex flex-col gap-6 items-center text-center">
                <H2 className="mb-0!">
                    Start small. <span className="text-highlighted">Scale big.</span>
                </H2>
                <Body className="mb-0!">
                    Choose the frontend starter that matches your current needs and evolve as you grow.
                </Body>
            </div>

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                {STARTERS.map((starter, idx) => (
                    <HoverCard key={idx} {...starter} />
                ))}
            </div>

            <a href="/product/starters" className="button">
                View all starters
            </a>
        </section>
    );
};
