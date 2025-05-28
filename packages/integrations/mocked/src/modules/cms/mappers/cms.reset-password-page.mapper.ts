import { CMS } from '@o2s/framework/modules';

const RESET_PASSWORD_PAGE_PL: CMS.Model.ResetPasswordPage.ResetPasswordPage = {
    title: 'Resetowanie hasła',
    subtitle: 'Wprowadź swój adres email, aby zresetować hasło.',
    username: {
        id: 'username-1',
        name: 'username',
        label: 'Nazwa użytkownika',
        description: 'Powiązana z Twoim ID Klienta',
        placeholder: 'Wprowadź swoją nazwę użytkownika',
        errorMessages: [
            {
                type: 'required',
                description: 'Nazwa użytkownika jest wymagana',
                id: 'required-1',
                name: 'Required',
            },
            {
                type: 'matches',
                description: 'Nazwa użytkownika może zawierać tylko litery, cyfry, kropki, myślniki i znak @',
                id: 'matches-1',
                name: 'Matches',
            },
            {
                type: 'min',
                description: 'Nazwa użytkownika musi zawierać co najmniej 5 znaków',
                id: 'min-1',
                name: 'Min',
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
        requiredLabel: 'Wymagane',
        optionalLabel: 'Opcjonalne',
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
        description: 'Associated with your Client ID',
        placeholder: 'Enter your username',
        errorMessages: [
            {
                type: 'required',
                description: 'Username is required',
                id: 'required-1',
                name: 'Required',
            },
            {
                type: 'matches',
                description: 'Username can only contain letters, numbers, dots, hyphens and @',
                id: 'matches-1',
                name: 'Matches',
            },
            {
                type: 'min',
                description: 'Username must contain at least 5 characters',
                id: 'min-1',
                name: 'Min',
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
        requiredLabel: 'Required',
        optionalLabel: 'Optional',
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
        description: 'Mit Ihrer Kunden-ID verknüpft',
        placeholder: 'Geben Sie Ihren Benutzernamen ein',
        errorMessages: [
            {
                type: 'required',
                description: 'Benutzername ist erforderlich',
                id: 'required-1',
                name: 'Required',
            },
            {
                type: 'min',
                description: 'Benutzername muss mindestens 5 Zeichen lang sein',
                id: 'min-1',
                name: 'Min',
            },
            {
                type: 'matches',
                description: 'Benutzername kann nur Buchstaben, Zahlen, Punkte, Bindestriche und @ enthalten',
                id: 'matches-1',
                name: 'Matches',
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
        requiredLabel: 'Erforderlich',
        optionalLabel: 'Optional',
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
