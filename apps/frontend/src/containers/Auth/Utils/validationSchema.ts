import { object as YupObject, string as YupString, ref } from 'yup';

import { Models } from '@o2s/framework/modules';

const MIN_USERNAME_CHARS = 5;
const MAX_USERNAME_CHARS = 64;

const MIN_PASSWORD_CHARS = 8;
const MAX_PASSWORD_CHARS = 64;

export const getUsernameSchema = (errorMessages?: Models.FormField.ErrorMessage[]) => {
    return YupString()
        .required(errorMessages?.find((error) => error.type === 'required')?.description)
        .min(MIN_USERNAME_CHARS, errorMessages?.find((error) => error.type === 'min')?.description)
        .max(MAX_USERNAME_CHARS, errorMessages?.find((error) => error.type === 'max')?.description);
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
