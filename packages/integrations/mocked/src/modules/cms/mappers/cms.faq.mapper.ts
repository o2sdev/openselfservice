import { CMS } from '@o2s/framework/modules';

const MOCK_TICKET_LIST_COMPONENT: CMS.Model.FaqComponent.FaqComponent = {
    id: 'faq-1',
    title: 'FAQ',
    items: [
        {
            title: 'Plain text content',
            content: 'Lorem ipsum dolor sit amet',
        },
        {
            title: 'HTML content',
            content: `
<h3>Lorem ipsum</h3>
Lorem ipsum <a href="http://google.com">dolor sit</a>
`,
        },
        {
            title: 'Markdown content',
            content: `
## Lorem ipsum
Lorem ipsum [dolor sit](http://google.com) amet
`,
        },
    ],
    banner: {
        title: 'Still have questions?',
        description: 'If you have further questions or need assistance, our team is here to help!',
        buttons: [{ label: 'Contact us', url: '/contact' }],
    },
};

export const mapFaqComponent = (): CMS.Model.FaqComponent.FaqComponent => {
    return MOCK_TICKET_LIST_COMPONENT;
};
