import clsx from 'clsx';
import React, { useState } from 'react';

import { Body } from '@site/src/components/Typography';

import styles from './HubspotForm.module.scss';

type HubspotField = {
    __typename: 'text' | 'email' | 'textarea' | 'select' | 'checkboxGroup' | 'radioGroup';
    label: string;
    required?: boolean;
    name: string;
    rows?: number;
};

type HubspotFieldText = HubspotField & {
    __typename: 'text';
    type: 'text' | 'email';
};
type HubspotFieldTextarea = HubspotField & {
    __typename: 'textarea';
};
type HubspotFieldSelect = HubspotField & {
    __typename: 'select';
    options: {
        label: string;
        value?: string;
        other?: boolean;
    }[];
    other?: HubspotFieldText;
};
type HubspotFieldCheckboxGroup = HubspotField & {
    __typename: 'checkboxGroup';
    options: {
        label: string;
        value?: string;
        other?: boolean;
    }[];
    other?: HubspotFieldText;
};
type HubspotFieldRadioGroup = HubspotField & {
    __typename: 'radioGroup';
    options: {
        label: string;
        value?: string;
        other?: boolean;
    }[];
};

type HubspotConsent = {
    label: React.ReactNode;
    required?: boolean;
    name?: string;
    defaultChecked?: boolean;
};

type HubspotFormProps = {
    portalId: string;
    formId: string;
    title: string;
    description: React.ReactNode;
    pageName: string;
    fields: (
        | HubspotFieldText
        | HubspotFieldTextarea
        | HubspotFieldSelect
        | HubspotFieldCheckboxGroup
        | HubspotFieldRadioGroup
    )[];
    consents?: HubspotConsent[];
};

const HubspotForm: React.FC<HubspotFormProps> = ({
    portalId,
    formId,
    title,
    description,
    pageName,
    fields,
    consents = [],
}) => {
    const [values, setValues] = useState<Record<string, string | string[]>>(() => {
        const initial: Record<string, string> = {};
        fields.forEach((f) => (initial[f.name] = ''));
        return initial;
    });
    const [consentValues, setConsentValues] = useState<Record<string, boolean>>(() => {
        const initial: Record<string, boolean> = {};
        consents.forEach((c) => (initial[c.name] = !!c.defaultChecked));
        return initial;
    });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
        type: null,
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (id: string, v: string | string[]) => {
        setValues((prev) => ({ ...prev, [id]: v }));
    };

    const handleConsentToggle = (id: string, checked: boolean) => {
        setConsentValues((prev) => ({ ...prev, [id]: checked }));
    };

    const getPageUri = () => {
        if (typeof window !== 'undefined' && window.location) {
            return window.location.href;
        }
        return '';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const missingRequiredConsent = consents.some((c) => c.required && !consentValues[c.name]);
        if (missingRequiredConsent) {
            setStatus({ type: 'error', message: 'Please agree to required consents.' });
            return;
        }
        setIsSubmitting(true);

        const payload = {
            fields: [
                ...fields.map((f) => ({ name: f.name, value: values[f.name] })),
                ...consents.map((c) => ({ name: c.name, value: consentValues[c.name] })),
            ],
            context: {
                pageUri: getPageUri(),
                pageName,
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

        console.log(payload);

        try {
            // const response = await fetch(
            //     `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
            //     {
            //         method: 'POST',
            //         headers: { 'Content-Type': 'application/json' },
            //         body: JSON.stringify(payload),
            //     },
            // );
            //
            // if (response.ok) {
            //     const data = await response.json();
            //     setStatus({ type: 'success', message: data.inlineMessage });
            //     setValues((prev) => {
            //         const cleared: Record<string, string> = {};
            //         Object.keys(prev).forEach((k) => (cleared[k] = ''));
            //         return cleared;
            //     });
            //     setConsentValues((prev) => {
            //         const cleared: Record<string, boolean> = {};
            //         Object.keys(prev).forEach((k) => (cleared[k] = false));
            //         return cleared;
            //     });
            // } else {
            //     const data = await response.json();
            //     setStatus({ type: 'error', message: data.message });
            //     setIsSubmitting(false);
            // }
        } catch (error) {
            setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-lg mx-auto">
            {status.type !== 'success' && (
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.contactFormH2 + ' mb-2'}>{title}</h2>
                    <p className={'mb-6 text-sm ' + styles.contactFormText}>{description}</p>

                    {fields.map((f) => {
                        switch (f.__typename) {
                            case 'text':
                                return (
                                    <div key={f.name}>
                                        <label
                                            className={'block text-sm font-medium mb-1 ' + styles.contactFormText}
                                            htmlFor={f.name}
                                        >
                                            {f.label}
                                            {f.required ? '*' : ''}
                                        </label>
                                        <input
                                            className={
                                                'w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ' +
                                                styles.contactFormText
                                            }
                                            type={f.type}
                                            id={f.name}
                                            name={f.name}
                                            required={!!f.required}
                                            value={values[f.name]}
                                            onChange={(e) => handleChange(f.name, e.target.value)}
                                        />
                                    </div>
                                );
                            case 'textarea':
                                return (
                                    <div key={f.name}>
                                        <label
                                            className={'block text-sm font-medium mb-1 ' + styles.contactFormText}
                                            htmlFor={f.name}
                                        >
                                            {f.label}
                                            {f.required ? '*' : ''}
                                        </label>
                                        <textarea
                                            className={
                                                'w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ' +
                                                styles.contactFormText
                                            }
                                            id={f.name}
                                            name={f.name}
                                            rows={f.rows ?? 2}
                                            required={!!f.required}
                                            value={values[f.name]}
                                            onChange={(e) => handleChange(f.name, e.target.value)}
                                        />
                                    </div>
                                );
                            case 'select': {
                                const other = f.options.find(
                                    (option) =>
                                        (option.value === values[f.name] || option.label === values[f.name]) &&
                                        option.other,
                                );

                                return (
                                    <div key={f.name}>
                                        <label
                                            className={'block text-sm font-medium mb-1 ' + styles.contactFormText}
                                            htmlFor={f.name}
                                        >
                                            {f.label}
                                            {f.required ? '*' : ''}
                                        </label>
                                        <select
                                            className={clsx(
                                                'w-full border border-gray-300 rounded-md px-3 py-2 mb-4',
                                                styles.contactFormText,
                                                styles.contactFormSelect,
                                            )}
                                            id={f.name}
                                            name={f.name}
                                            required={!!f.required}
                                            value={values[f.name]}
                                            onChange={(e) => handleChange(f.name, e.target.value)}
                                        >
                                            {f.options.map((option) => (
                                                <option
                                                    key={option.value || option.label}
                                                    value={option.value || option.label}
                                                >
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>

                                        {other && (
                                            <div key={f.other.name}>
                                                <label
                                                    className={
                                                        'block text-sm font-medium mb-1 ' + styles.contactFormText
                                                    }
                                                    htmlFor={f.other.name}
                                                >
                                                    {f.other.label}
                                                    {f.other.required ? '*' : ''}
                                                </label>
                                                <input
                                                    className={
                                                        'w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ' +
                                                        styles.contactFormText
                                                    }
                                                    type={f.other.type}
                                                    id={f.other.name}
                                                    name={f.other.name}
                                                    required={!!f.other.required}
                                                    value={values[f.other.name] || ''}
                                                    onChange={(e) => handleChange(f.other.name, e.target.value)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                            case 'checkboxGroup': {
                                const other = f.options.find(
                                    (option) =>
                                        (values[f.name] as string[]).includes(option.value || option.label) &&
                                        option.other,
                                );

                                return (
                                    <div key={f.name}>
                                        <fieldset className="p-0 m-0 mb-4 border-none">
                                            <legend
                                                className={'block text-sm font-medium mb-1 ' + styles.contactFormText}
                                            >
                                                {f.label}
                                            </legend>

                                            <div className="space-y-2">
                                                {f.options.map((option, index) => (
                                                    <div className="flex items-start" key={`${f.name}-${index}`}>
                                                        <input
                                                            className="mr-2 accent-[#4c5ce5]"
                                                            type="checkbox"
                                                            id={`${f.name}-${index}`}
                                                            name={`${f.name}-${index}`}
                                                            required={!!f.required && !(values[f.name] as string[]).length}
                                                            checked={
                                                                !!(values[f.name] as string[]).includes(
                                                                    option.value || option.label,
                                                                )
                                                            }
                                                            onChange={(e) => {
                                                                const newValue = [...(values[f.name] as string[])];

                                                                if (e.target.checked) {
                                                                    newValue.push(option.value || option.label);
                                                                } else {
                                                                    newValue.splice(
                                                                        newValue.indexOf(option.value || option.label),
                                                                        1,
                                                                    );
                                                                }

                                                                handleChange(f.name, newValue);
                                                            }}
                                                            disabled={isSubmitting}
                                                        />
                                                        <label
                                                            htmlFor={`${f.name}-${index}`}
                                                            className={
                                                                'mt-0.5 text-xs select-none ' + styles.contactFormText
                                                            }
                                                        >
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </fieldset>

                                        {other && (
                                            <div key={f.other.name}>
                                                <label
                                                    className={
                                                        'block text-sm font-medium mb-1 ' + styles.contactFormText
                                                    }
                                                    htmlFor={f.other.name}
                                                >
                                                    {f.other.label}
                                                    {f.other.required ? '*' : ''}
                                                </label>
                                                <input
                                                    className={
                                                        'w-full border border-gray-300 rounded-md px-3 py-2 mb-4 ' +
                                                        styles.contactFormText
                                                    }
                                                    type={f.other.type}
                                                    id={f.other.name}
                                                    name={f.other.name}
                                                    required={!!f.other.required}
                                                    value={values[f.other.name] || ''}
                                                    onChange={(e) => handleChange(f.other.name, e.target.value)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                        }

                        return null;
                    })}

                    {consents.map((c) => (
                        <div className="flex items-start mb-4" key={c.name}>
                            <input
                                className="mr-2 accent-[#4c5ce5]"
                                type="checkbox"
                                id={c.name}
                                name={c.name}
                                required={!!c.required}
                                checked={!!consentValues[c.name]}
                                onChange={(e) => handleConsentToggle(c.name, e.target.checked)}
                                disabled={isSubmitting}
                            />
                            <label htmlFor={c.name} className={'mt-0.5 text-xs select-none ' + styles.contactFormText}>
                                {c.label}
                            </label>
                        </div>
                    ))}

                    <button type="submit" className="w-full button text-lg font-semibold">
                        Send
                    </button>
                </form>
            )}

            {status.type && (
                <Body className={clsx('margin-top--xs contactFormText msg', styles['msg'], styles[status.type])}>
                    {status.message}
                </Body>
            )}
        </div>
    );
};

export default HubspotForm;
