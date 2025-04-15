import clsx from 'clsx';
import React, { useState } from 'react';

import { Body } from '@site/src/components/Typography';

import styles from './styles.module.css';

const WaitlistForm = ({ inputId }) => {
    const [email, setEmail] = useState('');
    const [emailContactConsent, setEmailContactConsent] = useState(false);
    const [status, setStatus] = useState({ type: null, message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const portalId = '143969481';
    const formId = 'f885f9f0-db7a-44e9-9541-0ee41958024c';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!emailContactConsent) {
            setStatus({
                type: 'error',
                message: 'You must agree to the privacy policy to join the waitlist.',
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
                pageUri: 'https://openselfservice.com',
                pageName: 'Open Self Service',
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
        <div>
            {status.type !== 'success' && (
                <form onSubmit={handleSubmit}>
                    <label className="text-2xl mb-6 font-semibold! leading-9 block" htmlFor={inputId}>
                        Join the waitlist
                    </label>
                    <div className="flex gap-2 max-w-md">
                        <input
                            id={inputId}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className={clsx(
                                'w-full md:w-auto md:max-w-none md:min-w-[258px] text-base md:text-sm',
                                styles.input,
                            )}
                            required
                            disabled={isSubmitting}
                        />
                        <button type="submit" className={clsx('min-w-[115px]', styles.button)} disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Get notified'}
                        </button>
                    </div>
                    <div className="flex mt-4 max-w-[405px]">
                        <input
                            type="checkbox"
                            id={inputId + 'emailContactConsent'}
                            checked={emailContactConsent}
                            onChange={(e) => setEmailContactConsent(e.target.checked)}
                            className={clsx('', styles.checkbox)}
                            required
                            disabled={isSubmitting}
                        />
                        <label htmlFor={inputId + 'emailContactConsent'} className="ml-2 text-xs cursor-pointer">
                            I consent to the processing of my personal data by Hycom&nbsp;SA as described in the{' '}
                            <a href="docs/openselfservice_EN_Information_obligation.pdf" target="_blank">
                                information clause
                            </a>{' '}
                            to respond to inquiries and provide information about products and services.
                        </label>
                    </div>
                </form>
            )}

            {status.type && <Body className={clsx('mt-5', styles[status.type])}>{status.message}</Body>}
        </div>
    );
};

export default WaitlistForm;
