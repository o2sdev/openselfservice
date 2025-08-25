import { Models } from '@o2s/utils.frontend';

export type ErrorPageProps = {
    errorType: string;
    title: string;
    description: string;
    link: {
        url: string;
        label: string;
    };
    LinkComponent: Models.Link.LinkComponent;
};
