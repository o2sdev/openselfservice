import { CMS } from '@o2s/framework/modules';

const MOCK_USER_ACCOUNT_COMPONENT: CMS.Model.UserAccountComponent.UserAccountComponent = {
    id: 'user-account-1',
    title: 'User Account',
    basicInformationTitle: 'Basic Information',
    basicInformationDescription: 'Lorem ipsum dolor sit amet',
    fields: [
        {
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

export const mapUserAccountComponent = (): CMS.Model.UserAccountComponent.UserAccountComponent => {
    return MOCK_USER_ACCOUNT_COMPONENT;
};
