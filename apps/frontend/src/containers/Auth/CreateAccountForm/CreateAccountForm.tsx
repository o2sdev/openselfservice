'use client';

import { Field, FieldProps, Form, Formik } from 'formik';
import React, { useState, useTransition } from 'react';
import { object as YupObject } from 'yup';

import { Badge } from '@o2s/ui/components/badge';
import { Button } from '@o2s/ui/components/button';
import { LoadingOverlay } from '@o2s/ui/components/loading-overlay';
import { SelectContent, SelectItem, SelectTrigger, SelectValue, SelectWithTitle } from '@o2s/ui/components/select';
import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';

import { Banner } from '@/components/Banner/Banner';
import { Notification } from '@/components/Notification/Notification';
import { RichText } from '@/components/RichText/RichText';

import { FormField } from '../FormField/FormField';
import {
    getClientIdSchema,
    getCompanyNameSchema,
    getCompanyTaxIdSchema,
    getEmailSchema,
    getFirstNameSchema,
    getLastNameSchema,
    getPhoneNumberSchema,
    getPositionSchema,
} from '../Utils/validationSchema';

import { CreateAccountFormProps, FormValues } from './CreateAccountForm.types';

export const CreateAccountForm: React.FC<Readonly<CreateAccountFormProps>> = ({
    labels,
    onRegisterUser,
    onCheckMembership,
    existingCompany,
}) => {
    const [isPending, startTransition] = useTransition();
    const [currentStep, setCurrentStep] = useState<1 | 2>(1);

    const step1ValidationSchema = YupObject().shape({
        email: getEmailSchema(labels.email.errorMessages),
        companyTaxId: getCompanyTaxIdSchema(labels.companyTaxId.errorMessages),
    });

    const step2ValidationSchema = YupObject().shape({
        email: getEmailSchema(labels.email.errorMessages),
        companyTaxId: getCompanyTaxIdSchema(labels.companyTaxId.errorMessages),
        companyName: getCompanyNameSchema(labels.step2.companyName.errorMessages),
        ...(existingCompany && {
            clientId: getClientIdSchema(labels.step2.clientId.errorMessages),
        }),
        ...(!existingCompany && {
            firstName: getFirstNameSchema(labels.step2.firstName.errorMessages),
            lastName: getLastNameSchema(labels.step2.lastName.errorMessages),
            phoneNumber: getPhoneNumberSchema(labels.step2.phoneNumber.errorMessages),
            position: getPositionSchema(labels.step2.position.errorMessages),
        }),
    });

    const handleStep1Submit = async (values: FormValues) => {
        startTransition(async () => {
            try {
                console.log('values', values);
                const error = await onCheckMembership('credentials', values);
                if (error) {
                    console.log(error);
                }
                setCurrentStep(2);
            } catch (err) {
                console.log(err);
            }
        });
    };

    const handleStep2Submit = async (values: FormValues) => {
        startTransition(async () => {
            try {
                const error = await onRegisterUser('credentials', values);
                if (error) {
                    console.log(error);
                }
            } catch (err) {
                console.log(err);
            }
        });
    };

    const currentLabels = currentStep === 1 ? labels.step1 : labels.step2;
    const validationSchema = currentStep === 1 ? step1ValidationSchema : step2ValidationSchema;
    const handleSubmit = currentStep === 1 ? handleStep1Submit : handleStep2Submit;

    const renderStep1Fields = () => (
        <>
            <Field name="email">
                {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                    <FormField
                        field={field}
                        touched={touched}
                        errors={errors}
                        name="email"
                        label={labels.email.label}
                        placeholder={labels.email.placeholder}
                        disabled={isPending}
                        type="email"
                        requiredLabel={labels.requiredLabel}
                        optionalLabel={labels.optionalLabel}
                        isRequired={true}
                    />
                )}
            </Field>

            <Field name="companyTaxId">
                {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                    <FormField
                        field={field}
                        touched={touched}
                        errors={errors}
                        name="companyTaxId"
                        label={labels.companyTaxId.label}
                        placeholder={labels.companyTaxId.placeholder}
                        disabled={isPending}
                        requiredLabel={labels.requiredLabel}
                        optionalLabel={labels.optionalLabel}
                        isRequired={true}
                    />
                )}
            </Field>
        </>
    );

    const renderStep2Fields = () => (
        <>
            {/* Company Section */}
            <div className="flex flex-col gap-4">
                <Typography variant="h3" className="text-sm font-semibold text-muted-foreground">
                    Company Information
                </Typography>

                <Field name="companyTaxId">
                    {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                        <FormField
                            field={field}
                            touched={touched}
                            errors={errors}
                            name="companyTaxId"
                            label={labels.companyTaxId.label}
                            placeholder={labels.companyTaxId.placeholder}
                            disabled={isPending}
                            requiredLabel={labels.requiredLabel}
                            optionalLabel={labels.optionalLabel}
                            isRequired={true}
                            adornment={
                                <Button variant="link" type="button" onClick={() => setCurrentStep(1)}>
                                    {labels.step2.changeCompanyTaxIdLabel}
                                </Button>
                            }
                            adornmentProps={{ behavior: 'append' }}
                        />
                    )}
                </Field>

                <Field name="companyName">
                    {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                        <FormField
                            field={field}
                            touched={touched}
                            errors={errors}
                            name="companyName"
                            label={labels.step2.companyName.label}
                            placeholder={labels.step2.companyName.placeholder}
                            disabled={isPending}
                            requiredLabel={labels.requiredLabel}
                            optionalLabel={labels.optionalLabel}
                            isRequired={true}
                        />
                    )}
                </Field>

                {existingCompany && (
                    <Field name="clientId">
                        {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                            <FormField
                                field={field}
                                touched={touched}
                                errors={errors}
                                name="clientId"
                                label={labels.step2.clientId.label}
                                placeholder={labels.step2.clientId.placeholder}
                                disabled={isPending}
                                requiredLabel={labels.requiredLabel}
                                optionalLabel={labels.optionalLabel}
                                isRequired={true}
                            />
                        )}
                    </Field>
                )}
            </div>

            {/* User Section */}
            <div className="flex flex-col gap-4">
                <Typography variant="h3" className="text-sm font-semibold text-muted-foreground">
                    User Information
                </Typography>

                {!existingCompany && (
                    <Field name="firstName">
                        {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                            <FormField
                                field={field}
                                touched={touched}
                                errors={errors}
                                name="firstName"
                                label={labels.step2.firstName.label}
                                placeholder={labels.step2.firstName.placeholder}
                                disabled={isPending}
                                requiredLabel={labels.requiredLabel}
                                optionalLabel={labels.optionalLabel}
                                isRequired={true}
                            />
                        )}
                    </Field>
                )}

                {!existingCompany && (
                    <Field name="lastName">
                        {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                            <FormField
                                field={field}
                                touched={touched}
                                errors={errors}
                                name="lastName"
                                label={labels.step2.lastName.label}
                                placeholder={labels.step2.lastName.placeholder}
                                disabled={isPending}
                                requiredLabel={labels.requiredLabel}
                                optionalLabel={labels.optionalLabel}
                                isRequired={true}
                            />
                        )}
                    </Field>
                )}

                {!existingCompany && (
                    <Field name="position">
                        {({ field, form: { touched, errors, setFieldValue } }: FieldProps<string, FormValues>) => (
                            <SelectWithTitle
                                id="position"
                                label={labels.step2.position.label}
                                value={field.value}
                                onValueChange={(value) => setFieldValue('position', value)}
                                disabled={isPending}
                                hasError={!!(touched.position && errors.position)}
                                errorMessage={touched.position && errors.position ? String(errors.position) : undefined}
                                description={labels.step2.position.description}
                                requiredLabel={labels.requiredLabel}
                                optionalLabel={labels.optionalLabel}
                            >
                                <SelectTrigger hasError={!!(touched.position && errors.position)}>
                                    <SelectValue placeholder={labels.step2.position.placeholder} />
                                </SelectTrigger>
                                <SelectContent>
                                    {labels.step2.position.options.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </SelectWithTitle>
                        )}
                    </Field>
                )}

                <Field name="email">
                    {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                        <FormField
                            field={field}
                            touched={touched}
                            errors={errors}
                            name="email"
                            label={labels.email.label}
                            placeholder={labels.email.placeholder}
                            disabled={isPending}
                            type="email"
                            requiredLabel={labels.requiredLabel}
                            optionalLabel={labels.optionalLabel}
                            isRequired={true}
                        />
                    )}
                </Field>

                {!existingCompany && (
                    <Field name="phoneNumber">
                        {({ field, form: { touched, errors } }: FieldProps<string, FormValues>) => (
                            <FormField
                                field={field}
                                touched={touched}
                                errors={errors}
                                name="phoneNumber"
                                label={labels.step2.phoneNumber.label}
                                placeholder={labels.step2.phoneNumber.placeholder}
                                disabled={isPending}
                                type="tel"
                                requiredLabel={labels.requiredLabel}
                                optionalLabel={labels.optionalLabel}
                                isRequired={true}
                            />
                        )}
                    </Field>
                )}
            </div>
        </>
    );

    return (
        <div className="flex flex-col gap-12 w-full">
            <div className="flex flex-col gap-6">
                {existingCompany && currentStep === 2 && (
                    <Banner
                        title={labels.step2.existingCompanyMessage.title}
                        description={labels.step2.existingCompanyMessage.description}
                    />
                )}

                <div className="flex flex-col gap-2 items-center text-center">
                    {currentStep === 2 && (
                        <Badge>
                            {existingCompany ? labels.step2.badge.existingCompany : labels.step2.badge.newCompany}
                        </Badge>
                    )}
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
                        email: '',
                        companyName: '',
                        companyTaxId: '',
                        clientId: '',
                        firstName: '',
                        lastName: '',
                        phoneNumber: '',
                        position: '',
                    }}
                    onSubmit={handleSubmit}
                    validateOnBlur={true}
                    validateOnMount={false}
                    validateOnChange={false}
                    validationSchema={validationSchema}
                    enableReinitialize={true}
                >
                    <LoadingOverlay isActive={isPending}>
                        <Form>
                            <div className="flex flex-col gap-6">
                                {currentStep === 1 ? (
                                    <>
                                        {renderStep1Fields()}
                                        <Button type="submit" disabled={isPending}>
                                            {currentLabels.submitButton}
                                        </Button>
                                        <div className="pt-6 flex flex-col gap-6">
                                            <div className="flex flex-row gap-2 items-center mt-[-10px]">
                                                <Separator orientation="horizontal" className="shrink-[1]" />
                                                <div className="flex-shrink-0">
                                                    <Typography variant="body" className="text-muted-foreground">
                                                        {labels.step1.signIn.title}
                                                    </Typography>
                                                </div>
                                                <Separator orientation="horizontal" className="shrink-[1]" />
                                            </div>
                                            <Button variant="outline" className="w-full" asChild>
                                                <a href={labels.step1.signIn.button.link}>
                                                    {labels.step1.signIn.button.label}
                                                </a>
                                            </Button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {renderStep2Fields()}
                                        <div className="flex flex-col gap-4">
                                            <Button type="submit" disabled={isPending}>
                                                {currentLabels.submitButton}
                                            </Button>
                                            <Notification title={labels.step2.activationContactInfo} />
                                            <RichText content={labels.step2.termsAndConditions} />
                                        </div>
                                    </>
                                )}
                            </div>
                        </Form>
                    </LoadingOverlay>
                </Formik>
            </div>
        </div>
    );
};
