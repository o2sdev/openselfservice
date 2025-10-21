import { CMS } from '@o2s/framework/modules';

const MOCK_USER_ACCOUNT_BLOCK_EN: CMS.Model.UserAccountBlock.UserAccountBlock = {
    id: 'user-account-1',
    title: 'User Account',
    basicInformationTitle: 'Basic Information',
    basicInformationDescription: 'Update your personal information to keep your account details current and accurate.',
    fields: [
        {
            __typename: 'Input',
            id: 'first-name-1',
            name: 'firstName',
            label: 'First Name',
            placeholder: 'Enter first name',
            errorMessages: [
                {
                    type: 'required',
                    description: 'First name is required',
                    id: 'required-1',
                    name: 'Required',
                },
                {
                    type: 'matches',
                    description: 'First name can contain only letters, numbers, dots and hyphens',
                    id: 'matches-1',
                    name: 'Matches',
                },
                {
                    type: 'min',
                    description: 'First name must be at least 3 characters long',
                    id: 'min-1',
                    name: 'Min',
                },
            ],
        },
        {
            __typename: 'Input',
            id: 'last-name-1',
            name: 'lastName',
            label: 'Last Name',
            placeholder: 'Enter last name',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Last name is required',
                    id: 'required-1',
                    name: 'Required',
                },
            ],
        },
        {
            __typename: 'Input',
            id: 'email-1',
            name: 'email',
            label: 'Email',
            placeholder: 'Enter email',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Email is required',
                    id: 'required-1',
                    name: 'Required',
                },
            ],
        },
    ],
    labels: {
        edit: 'Edit',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        logOut: 'Log out',
    },
};

const MOCK_USER_ACCOUNT_BLOCK_PL: CMS.Model.UserAccountBlock.UserAccountBlock = {
    id: 'user-account-1',
    title: 'Konto Użytkownika',
    basicInformationTitle: 'Podstawowe Informacje',
    basicInformationDescription:
        'Zaktualizuj swoje dane osobowe, aby utrzymać aktualne i dokładne informacje o koncie.',
    fields: [
        {
            __typename: 'Input',
            id: 'first-name-1',
            name: 'firstName',
            label: 'Imię',
            placeholder: 'Wprowadź imię',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Imię jest wymagane',
                    id: 'required-1',
                    name: 'Wymagane',
                },
                {
                    type: 'matches',
                    description: 'Imię może zawierać tylko litery, cyfry, kropki i myślniki',
                    id: 'matches-1',
                    name: 'Dopasowanie',
                },
                {
                    type: 'min',
                    description: 'Imię musi mieć co najmniej 3 znaki',
                    id: 'min-1',
                    name: 'Minimum',
                },
            ],
        },
        {
            __typename: 'Input',
            id: 'last-name-1',
            name: 'lastName',
            label: 'Nazwisko',
            placeholder: 'Wprowadź nazwisko',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Nazwisko jest wymagane',
                    id: 'required-1',
                    name: 'Wymagane',
                },
            ],
        },
        {
            __typename: 'Input',
            id: 'email-1',
            name: 'email',
            label: 'Email',
            placeholder: 'Wprowadź email',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Email jest wymagany',
                    id: 'required-1',
                    name: 'Wymagane',
                },
            ],
        },
    ],
    labels: {
        edit: 'Edytuj',
        save: 'Zapisz',
        cancel: 'Anuluj',
        delete: 'Usuń',
        logOut: 'Wyloguj',
    },
};

const MOCK_USER_ACCOUNT_BLOCK_DE: CMS.Model.UserAccountBlock.UserAccountBlock = {
    id: 'user-account-1',
    title: 'Benutzerkonto',
    basicInformationTitle: 'Grundinformationen',
    basicInformationDescription:
        'Aktualisieren Sie Ihre persönlichen Daten, um Ihre Kontoinformationen aktuell und genau zu halten.',
    fields: [
        {
            __typename: 'Input',
            id: 'first-name-1',
            name: 'firstName',
            label: 'Vorname',
            placeholder: 'Vorname eingeben',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Vorname ist erforderlich',
                    id: 'required-1',
                    name: 'Erforderlich',
                },
                {
                    type: 'matches',
                    description: 'Vorname darf nur Buchstaben, Zahlen, Punkte und Bindestriche enthalten',
                    id: 'matches-1',
                    name: 'Übereinstimmung',
                },
                {
                    type: 'min',
                    description: 'Vorname muss mindestens 3 Zeichen lang sein',
                    id: 'min-1',
                    name: 'Minimum',
                },
            ],
        },
        {
            __typename: 'Input',
            id: 'last-name-1',
            name: 'lastName',
            label: 'Nachname',
            placeholder: 'Nachname eingeben',
            errorMessages: [
                {
                    type: 'required',
                    description: 'Nachname ist erforderlich',
                    id: 'required-1',
                    name: 'Erforderlich',
                },
            ],
        },
        {
            __typename: 'Input',
            id: 'email-1',
            name: 'email',
            label: 'E-Mail',
            placeholder: 'E-Mail eingeben',
            errorMessages: [
                {
                    type: 'required',
                    description: 'E-Mail ist erforderlich',
                    id: 'required-1',
                    name: 'Erforderlich',
                },
            ],
        },
    ],
    labels: {
        edit: 'Bearbeiten',
        save: 'Speichern',
        cancel: 'Abbrechen',
        delete: 'Löschen',
        logOut: 'Abmelden',
    },
};

export const mapUserAccountBlock = (locale: string): CMS.Model.UserAccountBlock.UserAccountBlock => {
    switch (locale) {
        case 'pl':
            return MOCK_USER_ACCOUNT_BLOCK_PL;
        case 'de':
            return MOCK_USER_ACCOUNT_BLOCK_DE;
        default:
            return MOCK_USER_ACCOUNT_BLOCK_EN;
    }
};
