import { CMS } from '@o2s/framework/modules';

const RESET_PASSWORD_PAGE_PL: CMS.Model.ResetPasswordPage.ResetPasswordPage = {
    title: 'Resetowanie hasła',
    subtitle: 'Wprowadź swój adres email, aby zresetować hasło.',
    username: {
        id: 'username-1',
        name: 'username',
        label: 'Nazwa użytkownika',
        placeholder: 'Wprowadź swoją nazwę użytkownika',
        errorMessages: [
            {
                type: 'required',
                description: 'Nazwa użytkownika jest wymagana',
                id: 'required-1',
                name: 'Required',
            },
        ],
    },
    resetPassword: 'Resetuj hasło',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    publishedAt: '2024-01-01',
    labels: {
        show: 'Pokaż',
        hide: 'Ukryj',
    },
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
        alt: 'Sign in image',
        width: 640,
        height: 656,
    },
    seo: {
        title: 'Zresetuj hasło',
        description: 'Wprowadź swój email aby zresetować hasło',
        keywords: ['zresetuj hasło', 'hasło', 'email'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
            alt: 'Sign in image',
            width: 640,
            height: 656,
        },
        noIndex: false,
        noFollow: false,
    },
    invalidCredentials: 'Nieprawidłowa nazwa użytkownika',
};

const RESET_PASSWORD_PAGE_EN: CMS.Model.ResetPasswordPage.ResetPasswordPage = {
    title: 'Reset Password',
    subtitle: 'Enter your email address to reset your password.',
    username: {
        id: 'username-1',
        name: 'username',
        label: 'Username',
        placeholder: 'Enter your username',
        errorMessages: [
            {
                type: 'required',
                description: 'Username is required',
                id: 'required-1',
                name: 'Required',
            },
        ],
    },
    resetPassword: 'Reset Password',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    publishedAt: '2024-01-01',
    labels: {
        show: 'Show',
        hide: 'Hide',
    },
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
        alt: 'Sign in image',
        width: 640,
        height: 656,
    },
    seo: {
        title: 'Reset Password',
        description: 'Enter your email to reset your password',
        keywords: ['reset password', 'password', 'email'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
            alt: 'Sign in image',
            width: 640,
            height: 656,
        },
        noIndex: false,
        noFollow: false,
    },
    invalidCredentials: 'Invalid username',
};

const RESET_PASSWORD_PAGE_DE: CMS.Model.ResetPasswordPage.ResetPasswordPage = {
    title: 'Passwort zurücksetzen',
    subtitle: 'Geben Sie Ihre E-Mail-Adresse ein, um Ihr Passwort zurückzusetzen.',
    username: {
        id: 'username-1',
        name: 'username',
        label: 'Benutzername',
        placeholder: 'Geben Sie Ihren Benutzernamen ein',
        errorMessages: [
            {
                type: 'required',
                description: 'Benutzername ist erforderlich',
                id: 'required-1',
                name: 'Required',
            },
        ],
    },
    resetPassword: 'Passwort zurücksetzen',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    publishedAt: '2024-01-01',
    labels: {
        show: 'Anzeigen',
        hide: 'Verbergen',
    },
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
        alt: 'Sign in image',
        width: 640,
        height: 656,
    },
    seo: {
        title: 'Passwort zurücksetzen',
        description: 'Geben Sie Ihre E-Mail-Adresse ein, um Ihr Passwort zurückzusetzen',
        keywords: ['passwort zurücksetzen', 'passwort', 'email'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
            alt: 'Sign in image',
            width: 640,
            height: 656,
        },
        noIndex: false,
        noFollow: false,
    },
    invalidCredentials: 'Ungültiger Benutzername',
};

export const mapResetPasswordPage = (locale: string): CMS.Model.ResetPasswordPage.ResetPasswordPage => {
    switch (locale) {
        case 'en':
            return RESET_PASSWORD_PAGE_EN;
        case 'de':
            return RESET_PASSWORD_PAGE_DE;
        case 'pl':
            return RESET_PASSWORD_PAGE_PL;
    }

    return RESET_PASSWORD_PAGE_EN;
};
