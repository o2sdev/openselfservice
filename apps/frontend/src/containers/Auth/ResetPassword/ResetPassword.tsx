'use client';

import { Field, FieldProps, Form, Formik } from 'formik';
import { AlertCircle } from 'lucide-react';
import { AuthError } from 'next-auth';
import React, { useState } from 'react';
import { object as YupObject, string as YupString, ref } from 'yup';

import { Alert, AlertDescription } from '@o2s/ui/components/alert';
import { Button } from '@o2s/ui/components/button';
import { Typography } from '@o2s/ui/components/typography';

import { FormField } from '../FormField/FormField';
import { PasswordFormField } from '../FormField/PasswordFormField';

import { FormValues, ResetPasswordFormProps } from './ResetPassword.types';

const MIN_USERNAME_CHARS = 5;
const MAX_USERNAME_CHARS = 64;

const MIN_PASSWORD_CHARS = 8;
const MAX_PASSWORD_CHARS = 64;

export const ResetPasswordForm: React.FC<Readonly<ResetPasswordFormProps>> = ({
    labels,
    onResetPassword,
    onSetNewPassword,
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<AuthError | null>(null);
    const [currentStep, setCurrentStep] = useState(1);
    const currentLabels = currentStep === 1 ? labels.step1 : labels.step2;

    const userNameSchema = YupString()
        .required(labels.username.errorMessages?.find((err) => err.type === 'required')?.description)
        .min(MIN_USERNAME_CHARS, labels.username.errorMessages?.find((error) => error.type === 'min')?.description)
        .max(MAX_USERNAME_CHARS, labels.username.errorMessages?.find((error) => error.type === 'max')?.description)
        .matches(
            /^[a-zA-Z0-9._@-]+$/,
            labels.username.errorMessages?.find((error) => error.type === 'matches')?.description,
        );
    const passwordSchema = YupString()
        .required(labels.password.errorMessages?.find((error) => error.type === 'required')?.description)
        .min(MIN_PASSWORD_CHARS, labels.password.errorMessages?.find((error) => error.type === 'min')?.description)
        .max(MAX_PASSWORD_CHARS, labels.password.errorMessages?.find((error) => error.type === 'max')?.description)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%&'*+\-/=?^_`{|}~])[^\s]*$/,
            labels.password.errorMessages?.find((error) => error.type === 'matches')?.description,
        );

    const validationSchema = [
        YupObject().shape({
            username: userNameSchema,
        }),
        YupObject().shape({
            password: passwordSchema,
            confirmPassword: YupString()
                .required(labels.confirmPassword.errorMessages?.find((error) => error.type === 'required')?.description)
                .oneOf(
                    [ref('password')],
                    labels.confirmPassword.errorMessages?.find((error) => error.type === 'matches')?.description,
                ),
        }),
    ];

    return (
        <div className="flex flex-col gap-12 w-full">
            <div className="flex flex-col gap-6">
                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4 mt-1" />
                        <AlertDescription>
                            <Typography variant="small" className="mt-1">
                                {labels.invalidCredentials}
                            </Typography>
                        </AlertDescription>
                    </Alert>
                )}
                <div className="flex flex-col gap-2 items-center text-center">
                    <Typography variant="h1" asChild>
                        <h1>{currentLabels.title}</h1>
                    </Typography>
                    {currentLabels.subtitle && (
                        <Typography variant="body" className="text-muted-foreground">
                            {currentLabels.subtitle}
                        </Typography>
                    )}
                </div>

                <Formik<FormValues>
                    initialValues={{
                        username: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    onSubmit={async (values) => {
                        setError(null);
                        setIsSubmitting(true);
                        const error =
                            currentStep === 1 ? await onResetPassword(values) : await onSetNewPassword(values);
                        if (error) {
                            setIsSubmitting(false);
                            setError(error);
                        }
                        setTimeout(() => {
                            setCurrentStep(currentStep + 1);
                            setIsSubmitting(false);
                        }, 1000);
                    }}
                    validateOnBlur={true}
                    validateOnMount={false}
                    validateOnChange={false}
                    validationSchema={validationSchema[currentStep - 1]}
                >
                    <Form>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
                                {currentStep === 1 && (
                                    <Field name="username" validateOnChange={true}>
                                        {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                                            <FormField
                                                field={field}
                                                touched={touched}
                                                errors={errors}
                                                name="username"
                                                label={labels.username.label}
                                                placeholder={labels.username.placeholder}
                                                disabled={isSubmitting}
                                            />
                                        )}
                                    </Field>
                                )}
                                {currentStep === 2 && (
                                    <>
                                        <Field name="password">
                                            {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                                                <PasswordFormField
                                                    field={field}
                                                    touched={touched}
                                                    errors={errors}
                                                    name="password"
                                                    label={labels.password.label}
                                                    placeholder={labels.password.placeholder}
                                                    disabled={isSubmitting}
                                                    showLabel={labels.password.show}
                                                    hideLabel={labels.password.hide}
                                                    validations={labels.password.regexValidations}
                                                />
                                            )}
                                        </Field>
                                        <Field name="confirmPassword">
                                            {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                                                <PasswordFormField
                                                    field={field}
                                                    touched={touched}
                                                    errors={errors}
                                                    name="confirmPassword"
                                                    label={labels.confirmPassword.label}
                                                    placeholder={labels.confirmPassword.placeholder}
                                                    disabled={isSubmitting}
                                                    showLabel={labels.confirmPassword.show}
                                                    hideLabel={labels.confirmPassword.hide}
                                                />
                                            )}
                                        </Field>
                                    </>
                                )}
                            </div>

                            <Button type="submit" disabled={isSubmitting}>
                                {currentLabels.submitButton}
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
