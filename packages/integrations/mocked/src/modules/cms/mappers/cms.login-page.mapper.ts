import { CMS } from '@o2s/framework/modules';

const LOGIN_PAGE_PL: CMS.Model.LoginPage.LoginPage = {
    title: 'Zaloguj się',
    subtitle: 'Wprowadź swój email i hasło, aby uzyskać dostęp do konta',
    username: {
        id: 'username-1',
        name: 'username',
        label: 'Nazwa użytkownika',
        description: 'Powiązana z Twoim ID Klienta',
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
        link: '/pl/reset-hasla',
    },
    resetPasswordMessage: {
        title: 'Jeśli podany adres email jest powiązany z kontem, otrzymasz wiadomość z linkiem do resetowania hasła.',
        description: 'Sprawdź folder spam, jeśli wiadomość nie dotarła.',
    },
    newPasswordMessage: {
        title: 'Nowe hasło zostało ustawione.',
        description: 'Możesz się teraz zalogować.',
    },
};

const LOGIN_PAGE_EN: CMS.Model.LoginPage.LoginPage = {
    title: 'Sign in',
    subtitle: 'Please enter your email and password below to access your account.',
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
        link: '/en/reset-password',
    },
    resetPasswordMessage: {
        title: 'If the email is linked to an account, you should receive a message with a return link.',
        description: 'Check spam if it does not arrive.',
    },
    newPasswordMessage: {
        title: 'The new password has been set.',
        description: 'You can now sign in.',
    },
};

const LOGIN_PAGE_DE: CMS.Model.LoginPage.LoginPage = {
    title: 'Einloggen',
    subtitle: 'Geben Sie Ihre E-Mail und Ihr Passwort ein, um auf Ihr Konto zuzugreifen',
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
                description: 'Das Passwort muss mindestens 8 Zeichen lang sein',
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
        link: '/de/passwort-zuruecksetzen',
    },
    resetPasswordMessage: {
        title: 'Wenn die E-Mail mit einem Konto verknüpft ist, erhalten Sie eine Nachricht mit einem Rücksetzlink.',
        description: 'Überprüfen Sie den Spam-Ordner, falls die Nachricht nicht ankommt.',
    },
    newPasswordMessage: {
        title: 'Das neue Passwort wurde festgelegt.',
        description: 'Sie können sich jetzt anmelden.',
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
