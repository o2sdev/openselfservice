import { CMS } from '@o2s/framework/modules';

const CREATE_ACCOUNT_PL: CMS.Model.CreateAccountPage.CreateAccountPage = {
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    publishedAt: '2024-01-01',
    sideContent: {
        title: 'Korzyści z konta B2B',
        icons: [
            {
                name: 'KeySquare',
                title: 'Jedno ID',
                description:
                    'Jedno ID zapewnia łatwy dostęp do stron internetowych, sklepów, aplikacji i usług za pomocą jednego logowania.',
            },
            {
                name: 'Tags',
                title: 'Spersonalizowane ceny',
                description:
                    'Dostęp do ofert specjalnych, rabatów hurtowych i specjalnych promocji dopasowanych do Twoich wzorców zakupowych.',
            },
            {
                name: 'PackageCheck',
                title: 'Szybsze i łatwiejsze zamawianie',
                description:
                    'Składaj zamówienia hurtowe, ponawiaj zakupy jednym kliknięciem i zarządzaj listami zakupów.',
            },
        ],
    },
    seo: {
        title: 'Utwórz konto',
        description: 'Wprowadź swoje dane, aby utworzyć nowe konto',
        keywords: ['utwórz konto', 'rejestracja', 'nowe konto'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
            alt: 'Utwórz konto obraz',
            width: 640,
            height: 656,
        },
        noIndex: false,
        noFollow: false,
    },
    labels: {
        username: {
            id: 'username',
            name: 'username',
            label: 'Email',
            placeholder: 'jan.kowalski@firma.com',
            description: 'Email używany do celów biznesowych. To będzie nazwa użytkownika Twojego konta',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Email jest wymagany',
                    id: 'required-1',
                    name: 'Required',
                },
                {
                    type: 'username',
                    description: 'Wprowadź prawidłowy adres username',
                    id: 'username-1',
                    name: 'Email',
                },
                {
                    type: 'max',
                    description: 'Email może zawierać maksymalnie 128 znaków',
                    id: 'max-1',
                    name: 'Max',
                },
            ],
        },
        taxId: {
            id: 'company-tax-id',
            name: 'taxId',
            label: 'NIP firmy',
            placeholder: '12-3456789',
            description: 'Pozwala nam sprawdzić czy firma jest w naszej bazie danych',
            errorMessages: [
                {
                    type: 'required',
                    description: 'NIP firmy jest wymagany',
                    id: 'required-2',
                    name: 'Required',
                },
                {
                    type: 'matches',
                    description: 'NIP musi mieć dokładnie 10 znaków i zawierać tylko cyfry oraz myślniki',
                    id: 'matches-2',
                    name: 'Matches',
                },
            ],
        },
        optionalLabel: 'Opcjonalne',
        requiredLabel: 'Wymagane',
        step1: {
            title: 'Utwórz konto',
            subtitle: 'Wprowadź NIP firmy i username poniżej, aby utworzyć konto.',
            submitButton: 'Kontynuuj',
            signIn: {
                title: 'Masz już konto?',
                button: {
                    label: 'Zaloguj się',
                    link: '/pl/zaloguj-sie',
                },
            },
            invalidCredentials: 'Nieprawidłowe dane logowania',
        },
        step2: {
            title: 'Utwórz konto',
            subtitle: 'Wypełnij pozostałe dane, aby utworzyć swoje konto.',
            submitButton: 'Zarejestruj się',
            badge: 'Dołącz jako nowa firma',
            firstName: {
                id: 'first-name',
                name: 'firstName',
                label: 'Imię',
                placeholder: 'Jan',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Imię jest wymagane',
                        id: 'required-3',
                        name: 'Required',
                    },
                    {
                        type: 'min',
                        description: 'Imię musi zawierać co najmniej 2 znaki',
                        id: 'min-3',
                        name: 'Min',
                    },
                    {
                        type: 'max',
                        description: 'Imię może zawierać maksymalnie 64 znaki',
                        id: 'max-3',
                        name: 'Max',
                    },
                ],
            },
            lastName: {
                id: 'last-name',
                name: 'lastName',
                label: 'Nazwisko',
                placeholder: 'Kowalski',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Nazwisko jest wymagane',
                        id: 'required-4',
                        name: 'Required',
                    },
                    {
                        type: 'min',
                        description: 'Nazwisko musi zawierać co najmniej 2 znaki',
                        id: 'min-4',
                        name: 'Min',
                    },
                    {
                        type: 'max',
                        description: 'Nazwisko może zawierać maksymalnie 64 znaki',
                        id: 'max-4',
                        name: 'Max',
                    },
                ],
            },
            companyName: {
                id: 'company-name',
                name: 'companyName',
                label: 'Nazwa firmy',
                placeholder: 'Nazwa nowej firmy',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Nazwa firmy jest wymagana',
                        id: 'required-5',
                        name: 'Required',
                    },
                    {
                        type: 'max',
                        description: 'Nazwa firmy może zawierać maksymalnie 256 znaków',
                        id: 'max-5',
                        name: 'Max',
                    },
                ],
            },
            clientId: {
                id: 'client-id',
                name: 'clientId',
                label: 'ID Klienta',
                placeholder: '1298001',
                description: 'Znajdź ID Klienta, np. na fakturze. Powiązany numer telefonu: +48 ****** 1432',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'ID Klienta jest wymagane',
                        id: 'required-6',
                        name: 'Required',
                    },
                    {
                        type: 'max',
                        description: 'ID Klienta może zawierać maksymalnie 64 znaki',
                        id: 'max-6',
                        name: 'Max',
                    },
                    {
                        type: 'matches',
                        description: 'ID Klienta może zawierać tylko cyfry',
                        id: 'matches-6',
                        name: 'Matches',
                    },
                ],
            },
            phone: {
                id: 'phone-number',
                name: 'phoneNumber',
                label: 'Numer telefonu',
                placeholder: '+48 123-456-789',
                description: 'Telefon używany do celów biznesowych',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Numer telefonu jest wymagany',
                        id: 'required-7',
                        name: 'Required',
                    },
                    {
                        type: 'matches',
                        description: 'Numer telefonu musi zawierać 10-13 cyfr z opcjonalnym znakiem +',
                        id: 'matches-7',
                        name: 'Matches',
                    },
                ],
            },
            position: {
                id: 'position',
                name: 'position',
                label: 'Stanowisko',
                placeholder: 'Wybierz swoje stanowisko',
                options: [
                    { label: 'Prezes', value: 'ceo' },
                    { label: 'Dyrektor techniczny', value: 'cto' },
                    { label: 'Dyrektor finansowy', value: 'cfo' },
                    { label: 'Menedżer', value: 'manager' },
                    { label: 'Programista', value: 'developer' },
                    { label: 'Projektant', value: 'designer' },
                    { label: 'Księgowy', value: 'accountant' },
                    { label: 'Przedstawiciel handlowy', value: 'sales' },
                    { label: 'Inne', value: 'other' },
                ],
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Stanowisko jest wymagane',
                        id: 'required-8',
                        name: 'Required',
                    },
                ],
            },

            changeCompanyTaxIdLabel: 'Zmień',
            companySectionTitle: 'Informacje o firmie',
            userSectionTitle: 'Twoje informacje',
            activationContactInfo:
                'Po utworzeniu konta nasz przedstawiciel skontaktuje się z Tobą w ciągu 24 godzin, aby pomóc w jego aktywacji.',
            termsAndConditions:
                'Tworząc konto, wyrażasz zgodę na nasze Warunki użytkowania i Politykę prywatności. Możesz usunąć konto w dowolnym momencie.',
            creatingAccountProblem: 'Problem z utworzeniem konta',
        },
    },
};

const CREATE_ACCOUNT_EN: CMS.Model.CreateAccountPage.CreateAccountPage = {
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    publishedAt: '2024-01-01',
    sideContent: {
        title: 'Benefits of a B2B account',
        icons: [
            {
                name: 'KeySquare',
                title: 'Single ID',
                description: 'Single ID provides easy access to websites, shops, apps, and services with one login.',
            },
            {
                name: 'Tags',
                title: 'Personalized prices',
                description:
                    'Access custom offers, volume discounts, and special deals that match your purchasing patterns.',
            },
            {
                name: 'PackageCheck',
                title: 'Quicker & easier ordering',
                description: 'Place bulk orders, reorder purchases with one click, and manage shopping lists.',
            },
        ],
    },
    seo: {
        title: 'Create Account | Open Self Service demo application',
        description:
            "Demo app of Open Self Service. Build future-proof Customer Portals with composable architecture and a modern frontend tech stack. Open Self Service offers a Next.js boilerplate, an API integration & data normalization server, and capabilities to integrate headless APIs like CMS, CRM, Search or headless e-commerce. It's powered by Next.js, React.js, TypeScript, and NestJS.",
        keywords: [
            'Open Self Service',
            'create account',
            'registration',
            'new account',
            'open source customer portal',
            'headless customer portal',
            'composable frontend',
            'Next.js',
            'TypeScript',
            'NestJS',
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
    labels: {
        username: {
            id: 'username',
            name: 'username',
            label: 'Email',
            placeholder: 'frank.smith@companyname.com',
            description: 'Email used for business purposes. This will be your account username',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Email is required',
                    id: 'required-1',
                    name: 'Required',
                },
                {
                    type: 'username',
                    description: 'Please enter a valid username address',
                    id: 'username-1',
                    name: 'Email',
                },
                {
                    type: 'max',
                    description: 'Email can contain maximum 128 characters',
                    id: 'max-1',
                    name: 'Max',
                },
            ],
        },
        taxId: {
            id: 'company-tax-id',
            name: 'taxId',
            label: 'Company Tax ID',
            placeholder: '12-3456789',
            description: 'This lets us check if the company is in our database',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Company Tax ID is required',
                    id: 'required-2',
                    name: 'Required',
                },
                {
                    type: 'matches',
                    description: 'Tax ID must be exactly 10 characters long and contain only digits and hyphens',
                    id: 'matches-2',
                    name: 'Matches',
                },
            ],
        },
        optionalLabel: 'Optional',
        requiredLabel: 'Required',
        step1: {
            title: 'Create an account',
            subtitle: 'Please enter your company Tax ID, and username below to create an account.',
            submitButton: 'Continue',
            signIn: {
                title: 'Already have an account?',
                button: {
                    label: 'Sign in',
                    link: '/en/sign-in',
                },
            },
            invalidCredentials: 'Invalid credentials',
        },
        step2: {
            title: 'Create an account',
            subtitle: 'Fill in the remaining details to create your account.',
            submitButton: 'Sign up',
            badge: 'Join as a new company',
            firstName: {
                id: 'first-name',
                name: 'firstName',
                label: 'First Name',
                placeholder: 'Frank',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'First name is required',
                        id: 'required-3',
                        name: 'Required',
                    },
                    {
                        type: 'min',
                        description: 'First name must contain at least 2 characters',
                        id: 'min-3',
                        name: 'Min',
                    },
                    {
                        type: 'max',
                        description: 'First name can contain maximum 64 characters',
                        id: 'max-3',
                        name: 'Max',
                    },
                ],
            },
            lastName: {
                id: 'last-name',
                name: 'lastName',
                label: 'Last Name',
                placeholder: 'Smith',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Last name is required',
                        id: 'required-4',
                        name: 'Required',
                    },
                    {
                        type: 'min',
                        description: 'Last name must contain at least 2 characters',
                        id: 'min-4',
                        name: 'Min',
                    },
                    {
                        type: 'max',
                        description: 'Last name can contain maximum 64 characters',
                        id: 'max-4',
                        name: 'Max',
                    },
                ],
            },
            companyName: {
                id: 'company-name',
                name: 'companyName',
                label: 'Company Name',
                placeholder: 'New Company Name',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Company name is required',
                        id: 'required-5',
                        name: 'Required',
                    },
                    {
                        type: 'max',
                        description: 'Company name can contain maximum 256 characters',
                        id: 'max-5',
                        name: 'Max',
                    },
                ],
            },
            clientId: {
                id: 'client-id',
                name: 'clientId',
                label: 'Client ID',
                placeholder: '1298001',
                description:
                    'Find the Client ID, for example, on the invoice. The phone number associeted with is: +1 ****** 1432',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Client ID is required',
                        id: 'required-6',
                        name: 'Required',
                    },
                    {
                        type: 'max',
                        description: 'Client ID can contain maximum 64 characters',
                        id: 'max-6',
                        name: 'Max',
                    },
                    {
                        type: 'matches',
                        description: 'Client ID can only contain numbers',
                        id: 'matches-6',
                        name: 'Matches',
                    },
                ],
            },
            phone: {
                id: 'phone-number',
                name: 'phoneNumber',
                label: 'Phone Number',
                placeholder: '+1 415-555-1234',
                description: 'Phone used for business purposes',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Phone number is required',
                        id: 'required-7',
                        name: 'Required',
                    },
                    {
                        type: 'matches',
                        description: 'Phone number must contain 10-13 digits with optional + sign',
                        id: 'matches-7',
                        name: 'Matches',
                    },
                ],
            },
            position: {
                id: 'position',
                name: 'position',
                label: 'Position',
                placeholder: 'Select your position',
                options: [
                    { label: 'CEO', value: 'ceo' },
                    { label: 'CTO', value: 'cto' },
                    { label: 'CFO', value: 'cfo' },
                    { label: 'Manager', value: 'manager' },
                    { label: 'Developer', value: 'developer' },
                    { label: 'Designer', value: 'designer' },
                    { label: 'Accountant', value: 'accountant' },
                    { label: 'Sales Representative', value: 'sales' },
                    { label: 'Other', value: 'other' },
                ],
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Position is required',
                        id: 'required-8',
                        name: 'Required',
                    },
                ],
            },

            changeCompanyTaxIdLabel: 'Change',
            companySectionTitle: 'Company Information',
            userSectionTitle: 'Your Information',
            activationContactInfo:
                'Once created, our representative will contact you within 24 hours to assist with its activation.',
            termsAndConditions:
                'By creating an account, you agree to our Terms & Conditions and Privacy Policy. You can delete an account at any time.',
            creatingAccountProblem: 'Creating account problem',
        },
    },
};

const CREATE_ACCOUNT_DE: CMS.Model.CreateAccountPage.CreateAccountPage = {
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    publishedAt: '2024-01-01',
    sideContent: {
        title: 'Vorteile eines B2B-Kontos',
        icons: [
            {
                name: 'KeySquare',
                title: 'Einmalige ID',
                description:
                    'Einmalige ID bietet einfachen Zugang zu Websites, Shops, Apps und Services mit einem Login.',
            },
            {
                name: 'Tags',
                title: 'Personalisierte Preise',
                description:
                    'Zugang zu individuellen Angeboten, Mengenrabatten und Sonderaktionen, die zu Ihren Einkaufsmustern passen.',
            },
            {
                name: 'PackageCheck',
                title: 'Schnellere und einfachere Bestellung',
                description:
                    'Bulk-Bestellungen aufgeben, Käufe mit einem Klick wiederholen und Einkaufslisten verwalten.',
            },
        ],
    },
    seo: {
        title: 'Konto erstellen',
        description: 'Geben Sie Ihre Daten ein, um ein neues Konto zu erstellen',
        keywords: ['konto erstellen', 'registrierung', 'neues konto'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/sign-in.jpg',
            alt: 'Konto erstellen Bild',
            width: 640,
            height: 656,
        },
        noIndex: false,
        noFollow: false,
    },
    labels: {
        username: {
            id: 'username',
            name: 'username',
            label: 'E-Mail',
            placeholder: 'frank.mueller@firmenname.de',
            description: 'E-Mail für geschäftliche Zwecke. Dies wird Ihr Benutzername sein',
            errorMessages: [
                {
                    type: 'required',
                    description: 'E-Mail ist erforderlich',
                    id: 'required-1',
                    name: 'Required',
                },
                {
                    type: 'username',
                    description: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
                    id: 'username-1',
                    name: 'Email',
                },
                {
                    type: 'max',
                    description: 'E-Mail kann maximal 128 Zeichen enthalten',
                    id: 'max-1',
                    name: 'Max',
                },
            ],
        },
        taxId: {
            id: 'company-tax-id',
            name: 'taxId',
            label: 'Steuer-ID des Unternehmens',
            placeholder: '12-3456789',
            description: 'Dies ermöglicht uns zu prüfen, ob das Unternehmen in unserer Datenbank ist',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Steuer-ID des Unternehmens ist erforderlich',
                    id: 'required-2',
                    name: 'Required',
                },
                {
                    type: 'matches',
                    description:
                        'Steuer-ID muss genau 10 Zeichen lang sein und darf nur Ziffern und Bindestriche enthalten',
                    id: 'matches-2',
                    name: 'Matches',
                },
            ],
        },
        optionalLabel: 'Optional',
        requiredLabel: 'Erforderlich',
        step1: {
            title: 'Konto erstellen',
            subtitle:
                'Geben Sie die Steuer-ID Ihres Unternehmens und Ihre E-Mail unten ein, um ein Konto zu erstellen.',
            submitButton: 'Weiter',
            signIn: {
                title: 'Haben Sie bereits ein Konto?',
                button: {
                    label: 'Anmelden',
                    link: '/de/anmelden',
                },
            },
            invalidCredentials: 'Ungültige Anmeldedaten',
        },
        step2: {
            title: 'Konto erstellen',
            subtitle: 'Füllen Sie die restlichen Details aus, um Ihr Konto zu erstellen.',
            submitButton: 'Registrieren',
            badge: 'Als neues Unternehmen beitreten',
            firstName: {
                id: 'first-name',
                name: 'firstName',
                label: 'Vorname',
                placeholder: 'Frank',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Vorname ist erforderlich',
                        id: 'required-3',
                        name: 'Required',
                    },
                    {
                        type: 'min',
                        description: 'Vorname muss mindestens 2 Zeichen enthalten',
                        id: 'min-3',
                        name: 'Min',
                    },
                    {
                        type: 'max',
                        description: 'Vorname kann maximal 64 Zeichen enthalten',
                        id: 'max-3',
                        name: 'Max',
                    },
                ],
            },
            lastName: {
                id: 'last-name',
                name: 'lastName',
                label: 'Nachname',
                placeholder: 'Müller',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Nachname ist erforderlich',
                        id: 'required-4',
                        name: 'Required',
                    },
                    {
                        type: 'min',
                        description: 'Nachname muss mindestens 2 Zeichen enthalten',
                        id: 'min-4',
                        name: 'Min',
                    },
                    {
                        type: 'max',
                        description: 'Nachname kann maximal 64 Zeichen enthalten',
                        id: 'max-4',
                        name: 'Max',
                    },
                ],
            },
            companyName: {
                id: 'company-name',
                name: 'companyName',
                label: 'Firmenname',
                placeholder: 'Neuer Firmenname',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Firmenname ist erforderlich',
                        id: 'required-5',
                        name: 'Required',
                    },
                    {
                        type: 'max',
                        description: 'Firmenname kann maximal 256 Zeichen enthalten',
                        id: 'max-5',
                        name: 'Max',
                    },
                ],
            },
            clientId: {
                id: 'client-id',
                name: 'clientId',
                label: 'Kunden-ID',
                placeholder: '1298001',
                description:
                    'Finden Sie die Kunden-ID, z.B. auf der Rechnung. Die zugehörige Telefonnummer: +49 ****** 1432',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Kunden-ID ist erforderlich',
                        id: 'required-6',
                        name: 'Required',
                    },
                    {
                        type: 'max',
                        description: 'Kunden-ID kann maximal 64 Zeichen enthalten',
                        id: 'max-6',
                        name: 'Max',
                    },
                    {
                        type: 'matches',
                        description: 'Kunden-ID kann nur Zahlen enthalten',
                        id: 'matches-6',
                        name: 'Matches',
                    },
                ],
            },
            phone: {
                id: 'phone-number',
                name: 'phoneNumber',
                label: 'Telefonnummer',
                placeholder: '+49 30-1234567',
                description: 'Telefon für geschäftliche Zwecke',
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Telefonnummer ist erforderlich',
                        id: 'required-7',
                        name: 'Required',
                    },
                    {
                        type: 'matches',
                        description: 'Telefonnummer muss 10-13 Ziffern mit optionalem + Zeichen enthalten',
                        id: 'matches-7',
                        name: 'Matches',
                    },
                ],
            },
            position: {
                id: 'position',
                name: 'position',
                label: 'Position',
                placeholder: 'Wählen Sie Ihre Position',
                options: [
                    { label: 'Geschäftsführer', value: 'ceo' },
                    { label: 'Technischer Direktor', value: 'cto' },
                    { label: 'Finanzdirektor', value: 'cfo' },
                    { label: 'Manager', value: 'manager' },
                    { label: 'Entwickler', value: 'developer' },
                    { label: 'Designer', value: 'designer' },
                    { label: 'Buchhalter', value: 'accountant' },
                    { label: 'Vertriebsmitarbeiter', value: 'sales' },
                    { label: 'Andere', value: 'other' },
                ],
                errorMessages: [
                    {
                        type: 'required',
                        description: 'Position ist erforderlich',
                        id: 'required-8',
                        name: 'Required',
                    },
                ],
            },

            changeCompanyTaxIdLabel: 'Ändern',
            companySectionTitle: 'Unternehmensinformationen',
            userSectionTitle: 'Ihre Informationen',
            activationContactInfo:
                'Nach der Erstellung wird sich unser Vertreter innerhalb von 24 Stunden mit Ihnen in Verbindung setzen, um bei der Aktivierung zu helfen.',
            termsAndConditions:
                'Durch die Erstellung eines Kontos stimmen Sie unseren Geschäftsbedingungen und Datenschutzrichtlinien zu. Sie können ein Konto jederzeit löschen.',
            creatingAccountProblem: 'Problem beim Erstellen des Kontos',
        },
    },
};

export const mapCreateAccountPage = (locale: string): CMS.Model.CreateAccountPage.CreateAccountPage => {
    switch (locale) {
        case 'en':
            return CREATE_ACCOUNT_EN;
        case 'de':
            return CREATE_ACCOUNT_DE;
        case 'pl':
            return CREATE_ACCOUNT_PL;
    }

    return CREATE_ACCOUNT_EN;
};
