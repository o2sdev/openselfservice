import clsx from 'clsx';
import React, { useState } from 'react';

import { Body } from '@site/src/components/Typography';

import Layout from '@theme/Layout';

import styles from '../contact/contact.module.scss';

const SupportEnterprise = ({ inputId }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [emailContactConsent, setEmailContactConsent] = useState(false);
    const [newsletterConsent, setNewsletterConsent] = useState(false);
    const [status, setStatus] = useState({ type: null, message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const portalId = '143969481';
    const formId = '0a05bbf7-cb3c-4a69-bbec-9b6801df31a8';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!emailContactConsent) {
            setStatus({
                type: 'error',
                message: 'You must agree to the privacy policy.',
            });
            return;
        }
        setIsSubmitting(true);

        const payload = {
            fields: [
                {
                    name: 'email',
                    value: email,
                },
                {
                    name: 'name',
                    value: name,
                },
                {
                    name: 'company',
                    value: company,
                },
                {
                    name: 'message',
                    value: message,
                },
                {
                    name: 'email_contact_consent',
                    value: emailContactConsent,
                },
                {
                    name: 'newsletter_consent',
                    value: newsletterConsent,
                },
            ],
            context: {
                pageUri: 'https://openselfservice.com/contact',
                pageName: 'Contact - Open Self Service',
            },
            legalConsentOptions: {
                consent: {
                    consentToProcess: true,
                    text: 'I consent to the processing of my personal data by Hycom SA as described in the openselfservice_EN_Information_obligation.pdf information clause to respond to inquiries and provide information about products and services.',
                    communications: [
                        {
                            value: true,
                            subscriptionTypeId: '296606641', // id extracted from HS form's input id
                            text: 'I agree to receive communications that respond to inquiries and provide information about products and services.',
                        },
                    ],
                },
            },
        };

        try {
            const response = await fetch(
                `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                },
            );

            if (response.ok) {
                const data = await response.json();
                setStatus({
                    type: 'success',
                    message: data.inlineMessage,
                });
                setEmail('');
                setEmailContactConsent(false);
            } else {
                const data = await response.json();
                setStatus({
                    type: 'error',
                    message: data.message,
                });
                setIsSubmitting(false);
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'An unexpected error occurred. Please try again later.',
            });
            setIsSubmitting(false);
        }
    };

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
                                    <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-lg mx-auto">
                                        {status.type !== 'success' && (
                                            <form onSubmit={handleSubmit}>
                                                <h2 className={styles.contactFormH2 + ' mb-2'}>
                                                    Let’s talk Enterprise
                                                </h2>
                                                <p className={'mb-6 text-sm ' + styles.contactFormText}>
                                                    Interested in using Open Self Service in a production environment?
                                                    Tell us about your project and we’ll get in touch with tailored
                                                    options.
                                                </p>
                                                <label
                                                    className={
                                                        'block text-sm font-medium mb-1 ' + styles.contactFormText
                                                    }
                                                    htmlFor="name"
                                                >
                                                    Full Name*
                                                </label>
                                                <input
                                                    className={
                                                        'w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ' +
                                                        styles.contactFormText
                                                    }
                                                    type="name"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />

                                                <label
                                                    className={
                                                        'block text-sm font-medium mb-1 ' + styles.contactFormText
                                                    }
                                                    htmlFor="email"
                                                >
                                                    Work Email*
                                                </label>
                                                <input
                                                    className={
                                                        'w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ' +
                                                        styles.contactFormText
                                                    }
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />

                                                <label
                                                    className={
                                                        'block text-sm font-medium mb-1 ' + styles.contactFormText
                                                    }
                                                    htmlFor="company"
                                                >
                                                    Company
                                                </label>
                                                <input
                                                    className={
                                                        'w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ' +
                                                        styles.contactFormText
                                                    }
                                                    type="text"
                                                    id="company"
                                                    name="company"
                                                    value={company}
                                                    onChange={(e) => setCompany(e.target.value)}
                                                />

                                                <label
                                                    className={
                                                        'block text-sm font-medium mb-1 ' + styles.contactFormText
                                                    }
                                                    htmlFor="message"
                                                >
                                                    Your needs*
                                                </label>
                                                <textarea
                                                    className={
                                                        'w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ' +
                                                        styles.contactFormText
                                                    }
                                                    id="message"
                                                    name="message"
                                                    rows={2}
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />

                                                <div className="flex items-start mb-4">
                                                    <input
                                                        className="mr-2 accent-[#4c5ce5]"
                                                        type="checkbox"
                                                        id="consent"
                                                        name="consent"
                                                        required
                                                        checked={emailContactConsent}
                                                        onChange={(e) => setEmailContactConsent(e.target.checked)}
                                                        disabled={isSubmitting}
                                                    />
                                                    <label
                                                        htmlFor="consent"
                                                        className={
                                                            'mt-0.5 text-xs select-none ' + styles.contactFormText
                                                        }
                                                    >
                                                        I consent to the processing of my personal data by Hycom&nbsp;SA
                                                        as described in the{' '}
                                                        <a
                                                            href="docs/openselfservice_EN_Information_obligation.pdf"
                                                            target="_blank"
                                                            className={styles.contactFormText}
                                                        >
                                                            information clause
                                                        </a>{' '}
                                                        to respond to inquiries and provide information about products
                                                        and services.
                                                    </label>
                                                </div>
                                                <div className="flex items-start mb-4">
                                                    <input
                                                        className="mr-2 accent-[#4c5ce5]"
                                                        type="checkbox"
                                                        id="newsletterConsent"
                                                        name="newsletterConsent"
                                                        required
                                                        checked={newsletterConsent}
                                                        onChange={(e) => setNewsletterConsent(e.target.checked)}
                                                        disabled={isSubmitting}
                                                    />
                                                    <label
                                                        htmlFor="newsletterConsent"
                                                        className={
                                                            'mt-0.5 text-xs select-none ' + styles.contactFormText
                                                        }
                                                    >
                                                        I’d like to receive product updates and roadmap news.
                                                    </label>
                                                </div>
                                                <button type="submit" className="w-full button text-lg font-semibold">
                                                    Send
                                                </button>
                                            </form>
                                        )}

                                        {status.type && (
                                            <Body
                                                className={clsx(
                                                    'margin-top--xs contactFormText msg',
                                                    styles['msg'],
                                                    styles[status.type],
                                                )}
                                            >
                                                {status.message}
                                            </Body>
                                        )}
                                    </div>
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
