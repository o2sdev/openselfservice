import React from 'react';

import HubspotForm from '@site/src/components/HubspotForm';

import Layout from '@theme/Layout';

import CircleCheckIcon from '../../assets/icons/circle-check.svg';
import styles from '../contact/contact.module.scss';

const SupportEnterprise = () => {
    const portalId = '143969481';
    const formId = '6b3de277-12b7-4850-816b-2dc93d7ba30d';

    return (
        <Layout
            title="Enterprise support"
            description="Fill in the form if you want to contact with the Open Self Service team"
        >
            <div className="linearGradient static">
                <div className={styles.contactContainer}>
                    <div className="gradientWrapper">
                        <div className="gradientCircleGreen static" />
                        <div className="gradientCircleBlue static" />
                        <div className="mainContentWrapper">
                            <div className="container flex flex-col">
                                <div className="grid md:grid-cols-2 gap-14 md:gap-28 mt-14">
                                    <div>
                                        <h1 className={styles['font-extrabold']}>
                                            <span className={styles['text-highlighted']}>Enterprise</span>
                                            <br /> support
                                        </h1>
                                        <p>
                                            Need more confidence for production? Our Enterprise offering is designed for
                                            teams that require reliability, hands-on support, and architectural
                                            flexibility.
                                        </p>
                                        <ul className="space-y-2 ml-0! p-0! list-none">
                                            {[
                                                'Priority support with SLA',
                                                'Implementation support and onboarding',
                                                'Code and architecture reviews',
                                                'Architecture and performance audits',
                                                'Custom integrations (CRMs, support platforms, CMSs…)',
                                                'Influence on roadmap and access to private betas',
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <CircleCheckIcon className="h-5 w-5 shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <HubspotForm
                                        portalId={portalId}
                                        formId={formId}
                                        title="Let’s talk Enterprise"
                                        description={
                                            <>
                                                Interested in using Open Self Service in a production environment? Tell
                                                us about your project and we’ll get in touch with tailored options.
                                            </>
                                        }
                                        pageName="Enterprise support - Open Self Service"
                                        fields={[
                                            {
                                                __typename: 'text',
                                                label: 'First Name',
                                                type: 'text',
                                                required: true,
                                                name: 'firstname',
                                                objectTypeId: '0-1',
                                            },
                                            {
                                                __typename: 'text',
                                                label: 'Last Name',
                                                type: 'text',
                                                required: true,
                                                name: 'lastname',
                                                objectTypeId: '0-1',
                                            },
                                            {
                                                __typename: 'text',
                                                label: 'Work Email',
                                                type: 'email',
                                                required: true,
                                                name: 'email',
                                                objectTypeId: '0-1',
                                            },
                                            {
                                                __typename: 'text',
                                                label: 'Company',
                                                type: 'text',
                                                name: 'name',
                                                objectTypeId: '0-2',
                                            },
                                            {
                                                __typename: 'textarea',
                                                label: 'Your needs',
                                                name: 'your_needs',
                                                rows: 2,
                                                objectTypeId: '0-1',
                                            },
                                        ]}
                                        consents={[
                                            {
                                                name: 'email_contact_consent',
                                                required: true,
                                                label: (
                                                    <>
                                                        I consent to the processing of my personal data by Hycom&nbsp;SA
                                                        as described in the{' '}
                                                        <a
                                                            href="/docs/openselfservice_EN_Information_obligation.pdf"
                                                            target="_blank"
                                                            className={styles.contactFormText}
                                                        >
                                                            information clause
                                                        </a>{' '}
                                                        to respond to inquiries and provide information about products
                                                        and services.
                                                    </>
                                                ),
                                                objectTypeId: '0-1',
                                            },
                                            {
                                                name: 'i_d_like_to_receive_product_updates_and_roadmap_news_',
                                                required: false,
                                                label: <>I’d like to receive product updates and roadmap news.</>,
                                                objectTypeId: '0-1',
                                            },
                                        ]}
                                    />
                                </div>
                                <div className="mt-14 md:mt-24 w-full flex justify-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SupportEnterprise;
