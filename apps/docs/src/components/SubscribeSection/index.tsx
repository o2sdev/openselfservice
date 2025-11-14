import clsx from 'clsx';
import React, { useState } from 'react';

import CircleAlertIcon from '@site/src/assets/icons/circle-alert.svg';
import CircleCheckIcon from '@site/src/assets/icons/circle-check.svg';
import { H2, H3 } from '@site/src/components/Typography';

import styles from './SubscribeSection.module.scss';

interface SubscribeSectionProps {
    portalId: string;
    formId: string;
}

export const SubscribeSection: React.FC<SubscribeSectionProps> = ({ portalId, formId }) => {
    const [email, setEmail] = useState('');
    const [emailContactConsent, setEmailContactConsent] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
        type: null,
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const getPageUri = () => {
        if (typeof window !== 'undefined' && window.location) {
            return window.location.href;
        }
        return '';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!emailContactConsent) {
            setStatus({
                type: 'error',
                message: 'Please agree to the privacy policy to subscribe.',
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
                    name: 'email_contact_consent',
                    value: emailContactConsent,
                },
            ],
            context: {
                pageUri: getPageUri(),
                pageName: 'Homepage - Open Self Service',
            },
            legalConsentOptions: {
                consent: {
                    consentToProcess: true,
                    text: 'I consent to the processing of my personal data by Hycom SA as described in the openselfservice_EN_Information_obligation.pdf information clause to respond to inquiries and provide information about products and services.',
                    communications: [
                        {
                            value: true,
                            subscriptionTypeId: '296606641',
                            text: 'I agree to receive communications that respond to inquiries and provide information about products and services.',
                        },
                    ],
                },
            },
        };

        const url = new URL(window.location.href);

        try {
            const response = await fetch(
                `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                },
            );

            if (response.ok) {
                const data = await response.json();
                setStatus({ type: 'success', message: data.inlineMessage });
                setEmail('');
                setEmailContactConsent(false);

                url.searchParams.append('success', 'true');
                window.history.replaceState(null, null, url);
            } else {
                const data = await response.json();
                setStatus({ type: 'error', message: data.message });
                setIsSubmitting(false);

                url.searchParams.append('success', 'false');
                window.history.replaceState(null, null, url);
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'An unexpected error occurred. Please try again later.',
            });
            setIsSubmitting(false);

            url.searchParams.append('success', 'false');
            window.history.replaceState(null, null, url);
        }
    };

    return (
        <div
            className={clsx(
                'flex flex-col md:flex-row gap-12 md:gap-28 items-start justify-start w-full',
                styles.container,
            )}
        >
            {/* Text Content */}
            <div className="flex flex-col gap-10 items-start justify-start flex-1 md:flex-1">
                <H2 className="mb-0!">
                    <span className="text-highlighted">Be the first</span> to know about the latest updates, features,
                    and insights
                </H2>
            </div>

            {/* Form */}
            <div className="w-full md:w-auto md:flex-1 md:max-w-none">
                {status.type !== 'success' && (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div>
                            <H3 className="mb-6!">Subscribe now</H3>
                            <div className="flex gap-2">
                                <label htmlFor="subscribe-email" className="sr-only">
                                    Your email address
                                </label>
                                <input
                                    id="subscribe-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className={clsx(
                                        'flex-1 h-10 px-3 py-2 rounded-md bg-white text-sm text-gray-900',
                                        styles.input,
                                    )}
                                    required
                                    disabled={isSubmitting}
                                />
                                <button type="submit" className="button text-sm!" disabled={isSubmitting}>
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="subscribe-consent"
                                checked={emailContactConsent}
                                onChange={(e) => setEmailContactConsent(e.target.checked)}
                                className="mt-0.5 accent-violet"
                                required
                                disabled={isSubmitting}
                            />
                            <label htmlFor="subscribe-consent" className="text-sm text-white cursor-pointer leading-5">
                                I consent to the processing of my personal data by Hycom&nbsp;SA as described in the{' '}
                                <a
                                    href="/docs/openselfservice_EN_Information_obligation.pdf"
                                    target="_blank"
                                    className="underline"
                                >
                                    information clause
                                </a>{' '}
                                to respond to inquiries and provide information about products and services.
                            </label>
                        </div>
                    </form>
                )}

                {status.type && (
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <div className={clsx('flex items-start gap-2', styles.contactFormText)}>
                            {status.type === 'success' ? (
                                <CircleCheckIcon className="h-6 w-6 shrink-0 mt-0.5" />
                            ) : (
                                <CircleAlertIcon className="h-6 w-6 shrink-0 mt-0.5" />
                            )}
                            <p
                                className={clsx('mb-0!', status.type === 'success' ? styles.success : styles.error)}
                                dangerouslySetInnerHTML={{ __html: status.message }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
