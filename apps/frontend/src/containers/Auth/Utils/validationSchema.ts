import { string as YupString, ref } from 'yup';

import { Models } from '@o2s/framework/modules';

const MIN_USERNAME_CHARS = 5;
const MAX_USERNAME_CHARS = 64;

const MIN_PASSWORD_CHARS = 8;
const MAX_PASSWORD_CHARS = 64;

const MAX_EMAIL_CHARS = 128;
const MAX_COMPANY_NAME_CHARS = 256;
const MAX_CLIENT_ID_CHARS = 64;
const MIN_NAME_CHARS = 2;
const MAX_NAME_CHARS = 64;

export const getUsernameSchema = (errorMessages?: Models.FormField.ErrorMessage[]) => {
    return YupString()
        .required(errorMessages?.find((error) => error.type === 'required')?.description)
        .min(MIN_USERNAME_CHARS, errorMessages?.find((error) => error.type === 'min')?.description)
        .max(MAX_USERNAME_CHARS, errorMessages?.find((error) => error.type === 'max')?.description)
        .matches(/^[a-zA-Z0-9._@-]+$/, errorMessages?.find((error) => error.type === 'matches')?.description);
};

export const getPasswordSchema = (errorMessages?: Models.FormField.ErrorMessage[]) => {
    return YupString()
        .required(errorMessages?.find((error) => error.type === 'required')?.description)
        .min(MIN_PASSWORD_CHARS, errorMessages?.find((error) => error.type === 'min')?.description)
        .max(MAX_PASSWORD_CHARS, errorMessages?.find((error) => error.type === 'max')?.description)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%&'*+\-/=?^_`{|}~])[^\s]*$/,
            errorMessages?.find((error) => error.type === 'matches')?.description,
        );
};

export const getConfirmPasswordSchema = (errorMessages?: Models.FormField.ErrorMessage[]) => {
    return YupString()
        .required(errorMessages?.find((error) => error.type === 'required')?.description)
        .oneOf([ref('password')], errorMessages?.find((error) => error.type === 'matches')?.description);
};

export const getCompanyNameSchema = (errorMessages?: Models.FormField.ErrorMessage[]) => {
    return YupString()
        .required(errorMessages?.find((error) => error.type === 'required')?.description)
        .max(MAX_COMPANY_NAME_CHARS, errorMessages?.find((error) => error.type === 'max')?.description);
};

export const getTaxIdSchema = (errorMessages?: Models.FormField.ErrorMessage[]) => {
    return YupString()
        .required(errorMessages?.find((error) => error.type === 'required')?.description)
        .matches(/^[0-9-]{10}$/, errorMessages?.find((error) => error.type === 'matches')?.description);
};

export const getClientIdSchema = (errorMessages?: Models.FormField.ErrorMessage[]) => {
    return YupString()
        .required(errorMessages?.find((error) => error.type === 'required')?.description)
        .max(MAX_CLIENT_ID_CHARS, errorMessages?.find((error) => error.type === 'max')?.description)
        .matches(/^[0-9]+$/, errorMessages?.find((error) => error.type === 'matches')?.description);
};

export const getFirstNameSchema = (errorMessages?: Models.FormField.ErrorMessage[]) => {
    return YupString()
        .required(errorMessages?.find((error) => error.type === 'required')?.description)
        .min(MIN_NAME_CHARS, errorMessages?.find((error) => error.type === 'min')?.description)
        .max(MAX_NAME_CHARS, errorMessages?.find((error) => error.type === 'max')?.description);
};

export const getLastNameSchema = (errorMessages?: Models.FormField.ErrorMessage[]) => {
    return YupString()
        .required(errorMessages?.find((error) => error.type === 'required')?.description)
        .min(MIN_NAME_CHARS, errorMessages?.find((error) => error.type === 'min')?.description)
        .max(MAX_NAME_CHARS, errorMessages?.find((error) => error.type === 'max')?.description);
};

export const getPhoneNumberSchema = (errorMessages?: Models.FormField.ErrorMessage[]) => {
    return YupString()
        .required(errorMessages?.find((error) => error.type === 'required')?.description)
        .matches(/^\+?[0-9]{10,13}$/, errorMessages?.find((error) => error.type === 'matches')?.description);
};
