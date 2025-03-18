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
                description: 'Nazwa użytkownika może zawierać tylko litery, cyfry, kropki i myślniki',
                id: 'matches-1',
                name: 'Matches',
            },
            {
                type: 'min',
                description: 'Nazwa użytkownika musi zawierać co najmniej 3 znaki',
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
                type: 'matches',
                description: 'Hasło musi zawierać co najmniej 8 znaków',
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
        alternativeText: 'Sign in image',
        width: 640,
        height: 656,
        name: 'Sign in image',
    },
    seo: {
        title: 'Zaloguj się',
        description: 'Wprowadź swój email i hasło, aby uzyskać dostęp do konta',
        keywords: ['zaloguj się', 'hasło', 'email'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
            alternativeText: 'Sign in image',
            width: 640,
            height: 656,
            name: 'Sign in image',
        },
        noIndex: false,
        noFollow: false,
    },
    invalidCredentials: 'Nieprawidłowe dane logowania',
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
                description: 'Username can only contain letters, numbers, dots and hyphens',
                id: 'matches-1',
                name: 'Matches',
            },
            {
                type: 'min',
                description: 'Username must contain at least 3 characters',
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
                type: 'matches',
                description: 'Password must contain at least 8 characters',
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
        alternativeText: 'Sign in image',
        width: 640,
        height: 656,
        name: 'Sign in image',
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
            alternativeText: 'Open Self Service - The Open Source Composable Frontend for Customer Portals',
            width: 640,
            height: 656,
            name: 'Sign in image',
        },
        noIndex: false,
        noFollow: false,
    },
    invalidCredentials: 'Invalid credentials',
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
                type: 'matches',
                description: 'Benutzername kann nur Buchstaben, Zahlen, Punkte und Bindestriche enthalten',
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
                type: 'matches',
                description: 'Passwort muss mindestens 8 Zeichen lang sein',
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
        alternativeText: 'Sign in image',
        width: 640,
        height: 656,
        name: 'Sign in image',
    },
    seo: {
        title: 'Einloggen',
        description: 'Geben Sie Ihre E-Mail und Ihr Passwort ein, um auf Ihr Konto zuzugreifen',
        keywords: ['einloggen', 'passwort', 'email'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
            alternativeText: 'Sign in image',
            width: 640,
            height: 656,
            name: 'Sign in image',
        },
        noIndex: false,
        noFollow: false,
    },
    invalidCredentials: 'Ungültige Anmeldeinformationen',
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
