import type { ReactNode } from 'react';

import { H2 } from '../Typography';

import { Card } from './Card';
import styles from './styles.module.css';

export function HomepageUseCases(): ReactNode {
    return (
        <section className={`${styles.useCasesSection} container`}>
            <H2>
                What can you build with
                <span className="text-highlighted block md:inline"> Open Self Service?</span>
            </H2>
            <p>
                Open Self Service helps you build fast, flexible frontends for apps that serve your customers — not
                admin panels or SPAs, <br />
                but client-facing portals connected to the APIs your business runs on.
            </p>
            <Card
                title="Knowledge base portals"
                description="Allow customers to search, browse and find answers without contacting support – fully customizable and searchable, integrated with CMSs, your dedicated backend or AI-based tools."
                imageSrc="/img/homepage/case-1-img.png"
                imageAlt="Product marketing website preview"
            />

            <Card
                title="Product marketing websites"
                description="Help your users find key information about your products, services, processes, or policies – powered by headless CMS, easy to manage by support and marketing teams."
                imageSrc="/img/homepage/case-2-img.png"
                imageAlt="Product marketing website preview"
            />

            <Card
                title="Asset service management apps"
                description="Let users report product issues, follow ticket resolution, and receive status updates — customizable, scalable, and API-ready."
                imageSrc="/img/homepage/case-3-img.png"
                imageAlt="Product marketing website preview"
            />

            <Card
                title="Complex customer service platforms"
                description="Allow users to view and submit tickets, track their requests, manage orders, reorder products or spare parts, monitor & configure services – integrated with CRMs, ERPs, CMSs, commerce or custom APIs."
                imageSrc="/img/homepage/case-4-img.png"
                imageAlt="Product marketing website preview"
            />

            <Card
                title="B2B after-sales support portals"
                description="Empower customers to handle product servicing, warranty tracking, and returns — solutions integrated with ERP, CRM, and other backend systems."
                imageSrc="/img/homepage/case-5-img.png"
                imageAlt="Product marketing website preview"
            />
        </section>
    );
}
