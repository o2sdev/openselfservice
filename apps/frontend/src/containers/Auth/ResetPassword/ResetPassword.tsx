'use client';

import { Field, FieldProps, Form, Formik } from 'formik';
import { AlertCircle } from 'lucide-react';
import { AuthError } from 'next-auth';
import React, { useState } from 'react';
import { object as YupObject } from 'yup';

import { Alert, AlertDescription } from '@o2s/ui/components/alert';
import { Button } from '@o2s/ui/components/button';
import { Typography } from '@o2s/ui/components/typography';

import { FormField } from '../FormField/FormField';
import { getUsernameSchema } from '../Utils/validationSchema';

import { FormValues, ResetPasswordFormProps } from './ResetPassword.types';

export const ResetPasswordForm: React.FC<Readonly<ResetPasswordFormProps>> = ({ labels, onResetPassword }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<AuthError | null>(null);

    const validationSchema = YupObject().shape({
        username: getUsernameSchema(labels.username.errorMessages),
    });

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
                        username: '',
                    }}
                    onSubmit={async (values) => {
                        setError(null);
                        setIsSubmitting(true);
                        const error = await onResetPassword(values);
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
                            </div>

                            <Button type="submit" disabled={isSubmitting}>
                                {labels.resetPassword}
                            </Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
