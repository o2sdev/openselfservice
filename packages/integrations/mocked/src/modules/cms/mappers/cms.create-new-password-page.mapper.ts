import { CMS } from '@o2s/framework/modules';

const CREATE_NEW_PASSWORD_PAGE_PL: CMS.Model.CreateNewPasswordPage.CreateNewPasswordPage = {
    title: 'Ustaw nowe hasło',
    subtitle: 'Wprowadź nowe hasło i powtórz je, aby je ustawić.',
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
    confirmPassword: {
        id: 'confirm-password-1',
        name: 'confirm-password',
        label: 'Powtórz nowe hasło',
        placeholder: 'Potwierdź swoje hasło',
        errorMessages: [
            {
                type: 'required',
                description: 'Potwierdzenie hasła jest wymagane',
                id: 'required-1',
                name: 'Required',
            },
            {
                type: 'matches',
                description: 'Hasła muszą być identyczne',
                id: 'matches-1',
                name: 'Matches',
            },
        ],
    },
    setNewPassword: 'Ustaw nowe hasło',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    publishedAt: '2024-01-01',
    labels: {
        show: 'Pokaż',
        hide: 'Ukryj',
    },
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
        alt: 'Ustaw nowe hasło - obraz',
        width: 640,
        height: 656,
    },
    seo: {
        title: 'Ustaw nowe hasło',
        description: 'Wprowadź nowe hasło i powtórz je, aby je ustawić',
        keywords: ['ustaw hasło', 'nowe hasło', 'reset hasła'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
            alt: 'Ustaw nowe hasło - obraz',
            width: 640,
            height: 656,
        },
        noIndex: false,
        noFollow: false,
    },
    creatingPasswordError: 'Błąd tworzenia hasła',
};

const CREATE_NEW_PASSWORD_PAGE_EN: CMS.Model.CreateNewPasswordPage.CreateNewPasswordPage = {
    title: 'Set the new password',
    subtitle: 'Please enter a new password and re-enter it to set your password.',
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
    confirmPassword: {
        id: 'confirm-password-1',
        name: 'confirm-password',
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
    setNewPassword: 'Set new password',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    publishedAt: '2024-01-01',
    labels: {
        show: 'Show',
        hide: 'Hide',
    },
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
        alt: 'Set new password image',
        width: 640,
        height: 656,
    },
    seo: {
        title: 'Set new password | Open Self Service demo application',
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
    creatingPasswordError: 'Creating password error',
};

const CREATE_NEW_PASSWORD_PAGE_DE: CMS.Model.CreateNewPasswordPage.CreateNewPasswordPage = {
    title: 'Neues Passwort festlegen',
    subtitle: 'Bitte geben Sie ein neues Passwort ein und wiederholen Sie es.',
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
    confirmPassword: {
        id: 'confirm-password-1',
        name: 'confirm-password',
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
    setNewPassword: 'Neues Passwort festlegen',
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    publishedAt: '2024-01-01',
    labels: {
        show: 'Anzeigen',
        hide: 'Verbergen',
    },
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
        alt: 'Neues Passwort festlegen - Bild',
        width: 640,
        height: 656,
    },
    seo: {
        title: 'Neues Passwort festlegen',
        description: 'Bitte geben Sie ein neues Passwort ein und wiederholen Sie es',
        keywords: ['passwort festlegen', 'neues passwort', 'passwort zurücksetzen'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
            alt: 'Neues Passwort festlegen - Bild',
            width: 640,
            height: 656,
        },
        noIndex: false,
        noFollow: false,
    },
    creatingPasswordError: 'Fehler beim Erstellen des Passworts',
};

export const mapCreateNewPasswordPage = (locale: string): CMS.Model.CreateNewPasswordPage.CreateNewPasswordPage => {
    switch (locale) {
        case 'en':
            return CREATE_NEW_PASSWORD_PAGE_EN;
        case 'de':
            return CREATE_NEW_PASSWORD_PAGE_DE;
        case 'pl':
            return CREATE_NEW_PASSWORD_PAGE_PL;
    }

    return CREATE_NEW_PASSWORD_PAGE_EN;
};
