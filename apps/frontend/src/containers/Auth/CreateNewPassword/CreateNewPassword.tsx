'use client';

import { Field, FieldProps, Form, Formik } from 'formik';
import { AlertCircle } from 'lucide-react';
import { AuthError } from 'next-auth';
import React, { useState } from 'react';
import { object as YupObject } from 'yup';

import { Alert, AlertDescription } from '@o2s/ui/components/alert';
import { Button } from '@o2s/ui/components/button';
import { Typography } from '@o2s/ui/components/typography';

import { PasswordFormField } from '../FormField/PasswordFormField';
import { getConfirmPasswordSchema } from '../Utils/validationSchema';
import { getPasswordSchema } from '../Utils/validationSchema';

import { CreateNewPasswordFormProps, FormValues } from './CreateNewPassword.types';

export const CreateNewPasswordForm: React.FC<Readonly<CreateNewPasswordFormProps>> = ({
    labels,
    onCreateNewPassword,
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<AuthError | null>(null);

    const validationSchema = YupObject().shape({
        password: getPasswordSchema(labels.password.errorMessages),
        confirmPassword: getConfirmPasswordSchema(labels.confirmPassword.errorMessages),
    });

    return (
        <div className="flex flex-col gap-12 w-full">
            <div className="flex flex-col gap-6">
                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4 mt-1" />
                        <AlertDescription>
                            <Typography variant="small" className="mt-1">
                                {labels.creatingPasswordError}
                            </Typography>
                        </AlertDescription>
                    </Alert>
                )}
                <div className="flex flex-col gap-2 items-center text-center">
                    <Typography variant="h1" asChild>
                        <h1>{labels.title}</h1>
                    </Typography>
                    {labels.subtitle && (
                        <Typography variant="body" className="text-muted-foreground">
                            {labels.subtitle}
                        </Typography>
                    )}
                </div>

                <Formik<FormValues>
                    initialValues={{
                        password: '',
                        confirmPassword: '',
                    }}
                    onSubmit={async (values) => {
                        setError(null);
                        setIsSubmitting(true);
                        const error = await onCreateNewPassword(values);
                        if (error) {
                            setIsSubmitting(false);
                            setError(error);
                        }
                    }}
                    validateOnBlur={true}
                    validateOnMount={false}
                    validateOnChange={false}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-4">
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
                            </div>

                            <Button type="submit" disabled={isSubmitting}>
                                {labels.submitButton}
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
