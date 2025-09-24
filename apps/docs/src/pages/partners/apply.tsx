import React from 'react';

import HubspotForm from '@site/src/components/HubspotForm';

import Layout from '@theme/Layout';

import { GuidesSection } from '../../components/GuidesSection';
import { Body } from '../../components/Typography';
import styles from '../contact/contact.module.scss';

import { guides } from './index';

const PartnershipApply = () => {
    const portalId = '143969481';
    const formId = 'd8af9cd0-4e5e-427b-b4c7-324dffecab2e';

    return (
        <Layout
            title="Partner application"
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
                                            <span className={styles['text-highlighted']}>Partner</span>
                                            <br /> application
                                        </h1>
                                        <Body>
                                            Are you working on headless or composable customer support portals,
                                            large-scale digital platforms or any composable frontends? Join our network
                                            of agencies and integrators building modern digital experiences.
                                        </Body>

                                        <GuidesSection guides={guides} />
                                    </div>
                                    <HubspotForm
                                        portalId={portalId}
                                        formId={formId}
                                        title="Apply for Partnership"
                                        description={<>We’ll review and get back to you shortly.</>}
                                        pageName="Partner application - Open Self Service"
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
                                                label: 'Company name',
                                                type: 'text',
                                                required: true,
                                                name: 'name',
                                                objectTypeId: '0-2',
                                            },
                                            {
                                                __typename: 'text',
                                                label: 'Email',
                                                type: 'email',
                                                required: true,
                                                name: 'email',
                                                objectTypeId: '0-1',
                                            },
                                            {
                                                __typename: 'text',
                                                label: 'Website / Portfolio',
                                                type: 'text',
                                                required: true,
                                                name: 'website',
                                                objectTypeId: '0-1',
                                            },
                                            {
                                                __typename: 'select',
                                                label: 'Company size',
                                                required: true,
                                                name: 'company_headcount',
                                                options: [
                                                    {
                                                        label: '',
                                                    },
                                                    {
                                                        label: '1-10',
                                                    },
                                                    {
                                                        label: '11-50',
                                                    },
                                                    {
                                                        label: '51-200',
                                                    },
                                                    {
                                                        label: '201-500',
                                                    },
                                                    {
                                                        label: '501-1000',
                                                    },
                                                    {
                                                        label: 'Over 1000',
                                                        value: '1001<',
                                                    },
                                                ],
                                                objectTypeId: '0-2',
                                            },
                                            {
                                                __typename: 'select',
                                                label: 'Where are you based?',
                                                required: true,
                                                name: 'where_are_you_based_',
                                                options: [
                                                    {
                                                        label: '',
                                                    },
                                                    {
                                                        label: 'EMEA',
                                                    },
                                                    {
                                                        label: 'APAC',
                                                    },
                                                    {
                                                        label: 'AMER',
                                                    },
                                                ],
                                                objectTypeId: '0-1',
                                            },
                                            {
                                                __typename: 'checkboxGroup',
                                                label: 'What types of projects do you usually work on?',
                                                required: true,
                                                name: 'what_types_of_projects_do_you_usually_work_on_',
                                                options: [
                                                    {
                                                        label: 'Customer self-service portals',
                                                    },
                                                    {
                                                        label: 'Headless commerce storefronts',
                                                    },
                                                    {
                                                        label: 'Digital experience platforms',
                                                    },
                                                    {
                                                        label: 'Other (specify below)',
                                                        value: 'Other',
                                                        other: true,
                                                    },
                                                ],
                                                other: {
                                                    __typename: 'text',
                                                    label: 'Other (please specify)',
                                                    type: 'text',
                                                    required: true,
                                                    name: 'other__please_specify_',
                                                    objectTypeId: '0-1',
                                                },
                                                objectTypeId: '0-1',
                                            },
                                            {
                                                __typename: 'select',
                                                label: 'How did you hear about us?',
                                                required: true,
                                                name: 'how_did_you_hear_about_us_',
                                                options: [
                                                    {
                                                        label: '',
                                                    },
                                                    {
                                                        label: 'Google',
                                                    },
                                                    {
                                                        label: 'LinkedIn',
                                                    },
                                                    {
                                                        label: 'GitHub',
                                                    },
                                                    {
                                                        label: 'Other (specify below)',
                                                        other: true,
                                                    },
                                                ],
                                                other: {
                                                    __typename: 'text',
                                                    label: 'If other – please specify',
                                                    type: 'text',
                                                    required: true,
                                                    name: 'if_other___please_specify',
                                                    objectTypeId: '0-1',
                                                },
                                                objectTypeId: '0-1',
                                            },
                                            {
                                                __typename: 'select',
                                                label: 'Have you delivered projects using Open Self Service?',
                                                required: true,
                                                name: 'have_you_delivered_projects_using_open_self_service_',
                                                options: [
                                                    {
                                                        label: '',
                                                    },
                                                    {
                                                        label: 'Yes',
                                                    },
                                                    {
                                                        label: 'No',
                                                    },
                                                    {
                                                        label: 'Soon',
                                                    },
                                                ],
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

export default PartnershipApply;
