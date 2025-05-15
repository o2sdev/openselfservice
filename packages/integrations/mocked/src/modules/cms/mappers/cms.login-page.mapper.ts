import { CMS } from '@o2s/framework/modules';

const LOGIN_PAGE_PL: CMS.Model.LoginPage.LoginPage = {
    title: 'Zaloguj się',
    subtitle: 'Wprowadź swój email i hasło, aby uzyskać dostęp do konta',
    username: {
        id: 'username-1',
        name: 'username',
        label: 'Nazwa użytkownika',
        placeholder: 'Wprowadź nazwę użytkownika',
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
    password: {
        id: 'password-1',
        name: 'password',
        label: 'Hasło',
        placeholder: 'Wprowadź swoje hasło',
        errorMessages: [
            {
                type: 'required',
                description: 'Hasło jest wymagane',
                id: 'required-1',
                name: 'Required',
            },
            {
                type: 'min',
                description: 'Hasło musi zawierać co najmniej 4 znaki',
                id: 'min-1',
                name: 'Min',
            },
            {
                type: 'matches',
                description: 'Hasło musi zawierać co najmniej 4 znaki',
                id: 'matches-1',
                name: 'Matches',
            },
        ],
    },
    signIn: 'Zaloguj się',
    providers: {
        title: 'LUB',
        label: 'Zaloguj się przez ',
    },
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
        title: 'Zaloguj się',
        description: 'Wprowadź swój email i hasło, aby uzyskać dostęp do konta',
        keywords: ['zaloguj się', 'hasło', 'email'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
            alt: 'Sign in image',
            width: 640,
            height: 656,
        },
        noIndex: false,
        noFollow: false,
    },
    invalidCredentials: 'Nieprawidłowe dane logowania',
    forgotPassword: {
        label: 'Zapomniałeś hasła?',
        link: '/',
    },
    resetPassword: {
        invalidCredentials: 'Nieprawidłowe dane logowania',
        confirmPassword: {
            id: 'reset-password-confirm-password-1',
            name: 'reset-password-confirm-password',
            label: 'Powtórz nowe hasło',
            placeholder: 'Potwierdź swoje hasło',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Potwierdzenie hasła jest wymagane',
                    id: 'confirm-password-required-1',
                    name: 'Required',
                },
                {
                    type: 'matches',
                    description: 'Hasła muszą być identyczne',
                    id: 'confirm-password-matches-1',
                    name: 'Matches',
                },
            ],
        },
        username: {
            id: 'reset-password-username-1',
            name: 'reset-password-username',
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
        labels: {
            show: 'Pokaż',
            hide: 'Ukryj',
        },
        step1: {
            title: 'Resetowanie hasła',
            subtitle: 'Wprowadź swój adres email, aby zresetować hasło.',
            submitButton: 'Resetuj hasło',
        },
        step2: {
            title: 'Ustaw nowe hasło',
            subtitle: 'Wprowadź nowe hasło i powtórz je, aby je ustawić.',
            submitButton: 'Ustaw nowe hasło',
        },
        password: {
            id: 'reset-password-1',
            name: 'reset-password',
            label: 'Hasło',
            placeholder: 'Wprowadź swoje hasło',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Hasło jest wymagane',
                    id: 'required-1',
                    name: 'Required',
                },
                {
                    type: 'min',
                    description: 'Hasło musi zawierać co najmniej 8 znaków',
                    id: 'min-1',
                    name: 'Min',
                },
                {
                    type: 'matches',
                    description:
                        'Hasło musi zawierać co najmniej jedną wielką literę, jedną małą literę, cyfrę, znak specjalny i nie może zawierać spacji',
                    id: 'matches-1',
                    name: 'Matches',
                },
            ],
            regexValidations: [
                {
                    id: 'lowercase',
                    type: 'lowercase',
                    label: 'Mała litera',
                    regex: '[a-z]',
                },
                {
                    id: 'nospace',
                    type: 'nospace',
                    label: 'Brak spacji',
                    regex: '^\\S*$',
                },
                {
                    id: 'uppercase',
                    type: 'uppercase',
                    label: 'Wielka litera',
                    regex: '[A-Z]',
                },
                {
                    id: 'min',
                    type: 'min',
                    label: 'Min. 8 znaków',
                    regex: '^\\S{8,}$',
                },
                {
                    id: 'digit',
                    type: 'digit',
                    label: 'Cyfra',
                    regex: '[0-9]',
                },
                {
                    id: 'special',
                    type: 'special',
                    label: 'Znak specjalny',
                    regex: "[!#$%&'*+\\-/=?^_`{|}~]",
                },
            ],
        },
    },
};

const LOGIN_PAGE_EN: CMS.Model.LoginPage.LoginPage = {
    title: 'Sign in',
    subtitle: 'Please enter your email and password below to access your account.',
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
    password: {
        id: 'password-1',
        name: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        errorMessages: [
            {
                type: 'required',
                description: 'Password is required',
                id: 'required-1',
                name: 'Required',
            },
            {
                type: 'min',
                description: 'Password must contain at least 4 characters',
                id: 'min-1',
                name: 'Min',
            },
            {
                type: 'matches',
                description: 'Password must contain at least 4 characters',
                id: 'matches-1',
                name: 'Matches',
            },
        ],
    },
    signIn: 'Sign in',
    providers: {
        title: 'OR',
        label: 'Sign in with ',
    },
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
        title: 'Sign in | Open Self Service demo application',
        description:
            "Demo app of Open Self Service. Build future-proof Customer Portals with composable architecture and a modern frontend tech stack. Open Self Service offers a Next.js boilerplate, an API integration & data normalization server, and capabilities to integrate headless APIs like CMS, CRM, Search or headless e-commerce. It's powered by Next.js, React.js, TypeScript, and NestJS.",
        keywords: [
            'Open Self Service',
            'open source customer portal',
            'headless customer portal',
            'composable frontend',
            'fullstack framework',
            'composable architecture',
            'MACH',
            'Next.js',
            'TypeScript',
            'NestJS',
            'headless integration',
            'customer portal framework',
            'headless CMS',
            'headless self service',
            'CRM headless frontend',
            'e-commerce API',
            'self-service platform',
            'open-source frontend',
            'composable CX',
        ],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/o2s-social-card-1.jpg',
            alt: 'Open Self Service - The Open Source Composable Frontend for Customer Portals',
            width: 640,
            height: 656,
        },
        noIndex: false,
        noFollow: false,
    },
    invalidCredentials: 'Invalid credentials',
    forgotPassword: {
        label: 'Forgot password?',
        link: '/',
    },
    resetPassword: {
        invalidCredentials: 'Invalid credentials',
        confirmPassword: {
            id: 'reset-password-confirm-password-1',
            name: 'reset-password-confirm-password',
            label: 'Re-enter new password',
            placeholder: 'Confirm your password',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Password confirmation is required',
                    id: 'required-1',
                    name: 'Required',
                },
                {
                    type: 'matches',
                    description: 'Passwords must match',
                    id: 'matches-1',
                    name: 'Matches',
                },
            ],
        },
        username: {
            id: 'reset-password-username-1',
            name: 'reset-password-username',
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
        labels: {
            show: 'Show',
            hide: 'Hide',
        },
        step1: {
            title: 'Reset the password',
            subtitle: 'Please enter your email to reset the password.',
            submitButton: 'Reset the password',
        },
        step2: {
            title: 'Set the new password',
            subtitle: 'Please enter a new password and re-enter it to set your password.',
            submitButton: 'Set the new password',
        },
        password: {
            id: 'reset-password-1',
            name: 'reset-password',
            label: 'Password',
            placeholder: 'Enter your password',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Password is required',
                    id: 'required-1',
                    name: 'Required',
                },
                {
                    type: 'min',
                    description: 'Password must contain at least 8 characters',
                    id: 'min-1',
                    name: 'Min',
                },
                {
                    type: 'matches',
                    description:
                        'Password must contain at least one uppercase, lowercase, digit, special character and no spaces',
                    id: 'matches-1',
                    name: 'Matches',
                },
            ],
            regexValidations: [
                {
                    id: 'lowercase',
                    type: 'lowercase',
                    label: 'Lowercase letter',
                    regex: '[a-z]',
                },
                {
                    id: 'nospace',
                    type: 'nospace',
                    label: 'No spaces',
                    regex: '^\\S*$',
                },
                {
                    id: 'uppercase',
                    type: 'uppercase',
                    label: 'Uppercase letter',
                    regex: '[A-Z]',
                },
                {
                    id: 'min',
                    type: 'min',
                    label: 'Min. 8 characters',
                    regex: '^\\S{8,}$',
                },
                {
                    id: 'digit',
                    type: 'digit',
                    label: 'Digit',
                    regex: '[0-9]',
                },
                {
                    id: 'special',
                    type: 'special',
                    label: 'Special character',
                    regex: "[!#$%&'*+\\-/=?^_`{|}~]",
                },
            ],
        },
    },
};

const LOGIN_PAGE_DE: CMS.Model.LoginPage.LoginPage = {
    title: 'Einloggen',
    subtitle: 'Geben Sie Ihre E-Mail und Ihr Passwort ein, um auf Ihr Konto zuzugreifen',
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
    password: {
        id: 'password-1',
        name: 'password',
        label: 'Passwort',
        placeholder: 'Geben Sie Ihr Passwort ein',
        errorMessages: [
            {
                type: 'required',
                description: 'Passwort ist erforderlich',
                id: 'required-1',
                name: 'Required',
            },
            {
                type: 'min',
                description: 'Passwort muss mindestens 4 Zeichen lang sein',
                id: 'min-1',
                name: 'Min',
            },
            {
                type: 'matches',
                description: 'Passwort muss mindestens 4 Zeichen lang sein',
                id: 'matches-1',
                name: 'Matches',
            },
        ],
    },
    signIn: 'Anmelden',
    providers: {
        title: 'ODER',
        label: 'Anmelden mit ',
    },
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
        title: 'Einloggen',
        description: 'Geben Sie Ihre E-Mail und Ihr Passwort ein, um auf Ihr Konto zuzugreifen',
        keywords: ['einloggen', 'passwort', 'email'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
            alt: 'Sign in image',
            width: 640,
            height: 656,
        },
        noIndex: false,
        noFollow: false,
    },
    invalidCredentials: 'Ungültige Anmeldeinformationen',
    forgotPassword: {
        label: 'Passwort vergessen?',
        link: '/',
    },
    resetPassword: {
        invalidCredentials: 'Ungültige Anmeldedaten',
        confirmPassword: {
            id: 'reset-password-confirm-password-1',
            name: 'reset-password-confirm-password',
            label: 'Neues Passwort wiederholen',
            placeholder: 'Passwort bestätigen',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Passwortbestätigung ist erforderlich',
                    id: 'required-1',
                    name: 'Required',
                },
                {
                    type: 'matches',
                    description: 'Passwörter müssen übereinstimmen',
                    id: 'matches-1',
                    name: 'Matches',
                },
            ],
        },
        username: {
            id: 'reset-password-username-1',
            name: 'reset-password-username',
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
        labels: {
            show: 'Anzeigen',
            hide: 'Ausblenden',
        },
        step1: {
            title: 'Passwort zurücksetzen',
            subtitle: 'Bitte geben Sie Ihre E-Mail-Adresse ein, um das Passwort zurückzusetzen.',
            submitButton: 'Passwort zurücksetzen',
        },
        step2: {
            title: 'Neues Passwort festlegen',
            subtitle: 'Bitte geben Sie ein neues Passwort ein und wiederholen Sie es.',
            submitButton: 'Neues Passwort festlegen',
        },
        password: {
            id: 'reset-password-1',
            name: 'reset-password',
            label: 'Passwort',
            placeholder: 'Geben Sie Ihr Passwort ein',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Passwort ist erforderlich',
                    id: 'required-1',
                    name: 'Required',
                },
                {
                    type: 'min',
                    description: 'Das Passwort muss mindestens 8 Zeichen enthalten',
                    id: 'min-1',
                    name: 'Min',
                },
                {
                    type: 'matches',
                    description:
                        'Das Passwort muss mindestens einen Großbuchstaben, einen Kleinbuchstaben, eine Zahl, ein Sonderzeichen enthalten und keine Leerzeichen aufweisen',
                    id: 'matches-1',
                    name: 'Matches',
                },
            ],
            regexValidations: [
                {
                    id: 'lowercase',
                    type: 'lowercase',
                    label: 'Kleinbuchstabe',
                    regex: '[a-z]',
                },
                {
                    id: 'nospace',
                    type: 'nospace',
                    label: 'Keine Leerzeichen',
                    regex: '^\\S*$',
                },
                {
                    id: 'uppercase',
                    type: 'uppercase',
                    label: 'Großbuchstabe',
                    regex: '[A-Z]',
                },
                {
                    id: 'min',
                    type: 'min',
                    label: 'Mind. 8 Zeichen',
                    regex: '^\\S{8,}$',
                },
                {
                    id: 'digit',
                    type: 'digit',
                    label: 'Ziffer',
                    regex: '[0-9]',
                },
                {
                    id: 'special',
                    type: 'special',
                    label: 'Sonderzeichen',
                    regex: "[!#$%&'*+\\-/=?^_`{|}~]",
                },
            ],
        },
    },
};

export const mapLoginPage = (locale: string): CMS.Model.LoginPage.LoginPage => {
    switch (locale) {
        case 'en':
            return LOGIN_PAGE_EN;
        case 'de':
            return LOGIN_PAGE_DE;
        case 'pl':
            return LOGIN_PAGE_PL;
    }

    return LOGIN_PAGE_EN;
};
