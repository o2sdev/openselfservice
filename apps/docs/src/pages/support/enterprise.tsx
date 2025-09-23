import React from 'react';

import HubspotForm from '@site/src/components/HubspotForm';

import Layout from '@theme/Layout';

import styles from '../contact/contact.module.scss';

const SupportEnterprise = () => {
    const portalId = '143969481';
    const formId = '0a05bbf7-cb3c-4a69-bbec-9b6801df31a8';

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
                                                label: 'Full Name',
                                                type: 'text',
                                                required: true,
                                                name: 'name',
                                            },
                                            {
                                                __typename: 'text',
                                                label: 'Work Email',
                                                type: 'email',
                                                required: true,
                                                name: 'email',
                                            },
                                            { __typename: 'text', label: 'Company', type: 'text', name: 'company' },
                                            { __typename: 'textarea', label: 'Your needs', name: 'message', rows: 2 },
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
