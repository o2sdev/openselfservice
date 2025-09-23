import React from 'react';

import HubspotForm from '@site/src/components/HubspotForm';

import Layout from '@theme/Layout';

import styles from './contact.module.scss';

const Contact = () => {
    const portalId = '143969481';
    const formId = '0a05bbf7-cb3c-4a69-bbec-9b6801df31a8';

    return (
        <Layout
            title="Contact us"
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
                                            Get <span className={styles['text-highlighted']}>in touch</span>
                                        </h1>
                                        <p>
                                            Want to build a tailored customer support platform?
                                            <br /> Need expert technical guidance or have questions about extended Open
                                            Self Service features and offer?
                                        </p>
                                        <p>Please send all your enquiries using the form.</p>
                                        <p>
                                            You can also reach us at{' '}
                                            <a href="mailto:contact@openselfservice.com">contact@openselfservice.com</a>
                                        </p>
                                    </div>
                                    <HubspotForm
                                        portalId={portalId}
                                        formId={formId}
                                        title="Contact us"
                                        description={
                                            <>Fill out the form below and we'll get back to you as soon as possible.</>
                                        }
                                        pageName="Contact - Open Self Service"
                                        fields={[
                                            {
                                                __typename: 'text',
                                                label: 'Email',
                                                type: 'email',
                                                required: true,
                                                name: 'email',
                                            },
                                            {
                                                __typename: 'text',
                                                label: 'First Name',
                                                type: 'text',
                                                name: 'firstname',
                                            },
                                            { __typename: 'text', label: 'Last Name', type: 'text', name: 'lastname' },
                                            {
                                                __typename: 'textarea',
                                                label: 'Message',
                                                required: true,
                                                name: 'message',
                                                rows: 2,
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

export default Contact;
