import { Tickets } from '@o2s/framework/modules';

const dateToday = new Date();
dateToday.setHours(dateToday.getHours() - 1);
const dateYesterday = new Date();
dateYesterday.setDate(dateYesterday.getDate() - 1);

const MOCK_TICKET_1: Tickets.Model.Ticket = {
    id: 'EL-465 920 678',
    createdAt: dateToday.toISOString(),
    updatedAt: dateToday.toISOString(),
    topic: 'TOPIC_1',
    type: 'TYPE_1',
    status: 'OPEN',
    attachments: [
        {
            name: 'Invoice.pdf',
            url: 'https://example.com/attachment.pdf',
            size: 1024,
            author: {
                name: 'Customer support',
                email: 'customer@support.com',
            },
            date: '2024-12-12T12:00:00',
            ariaLabel: 'Download Invoice.pdf',
        },
    ],
    properties: [
        {
            id: 'description',
            value: `
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mollis nibh.
</p>
<p>
Nunc arcu lorem, auctor sed neque at, scelerisque tincidunt
<a href="/">Lorem ipsum</a> ipsum. Mauris volutpat dapibus urna imperdiet vulputate. Nullam egestas interdum magna ac eleifend. Etiam urna nisi, dignissim quis maximus ut, scelerisque at lacus.
</p>
            `,
        },
        {
            id: 'address',
            value: 'Lorem ipsum dolor sit',
        },
        {
            id: 'contact',
            value: 'Lorem ipsum dolor sit',
        },
    ],
    comments: [
        {
            author: {
                name: 'Customer support',
                email: 'customer@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mollis nibh.
`,
        },
    ],
};
const MOCK_TICKET_2: Tickets.Model.Ticket = {
    id: 'EL-465 920 677',
    createdAt: dateYesterday.toISOString(),
    updatedAt: dateYesterday.toISOString(),
    topic: 'TOPIC_2',
    type: 'TYPE_2',
    status: 'CLOSED',
    properties: [
        {
            id: 'description',
            value: `<p>...</p>`,
        },
        {
            id: 'address',
            value: 'Lorem ipsum dolor sit',
        },
        {
            id: 'contact',
            value: 'Lorem ipsum dolor sit',
        },
    ],
    comments: [
        {
            author: {
                name: 'Customer support',
                email: 'customer@support.com',
            },
            date: dateToday.toISOString(),
            content: `
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mollis nibh.
</p>
<p>
Nunc arcu lorem, auctor sed neque at, scelerisque tincidunt
<a href="/">Lorem ipsum</a> ipsum. Mauris volutpat dapibus urna imperdiet vulputate. Nullam egestas interdum magna ac eleifend. Etiam urna nisi, dignissim quis maximus ut, scelerisque at lacus.
</p>
`,
        },
        {
            author: {
                name: 'Customer support',
                email: 'customer@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
Dear Mr. Felix Smartmann,

we have received your lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaOdpowiedz na zgłoszenie 123 123 123 z 22 sierpnia 2022 roku. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Please complete the documents and send it to our e-mail: customerservice@enco.com.

Kind regards,
Customer Support Team
`,
        },
    ],
};
const MOCK_TICKET_3: Tickets.Model.Ticket = {
    id: 'EL-465 920 676',
    createdAt: '2024-12-12T10:00:00',
    updatedAt: '2024-12-14T16:00:00',
    topic: 'TOPIC_3',
    type: 'TYPE_3',
    status: 'IN_PROGRESS',
    properties: [
        {
            id: 'description',
            value: `
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mollis nibh.
</p>
<p>
Nunc arcu lorem, auctor sed neque at, scelerisque tincidunt
<a href="/">Lorem ipsum</a> ipsum. Mauris volutpat dapibus urna imperdiet vulputate. Nullam egestas interdum magna ac eleifend. Etiam urna nisi, dignissim quis maximus ut, scelerisque at lacus.
</p>
            `,
        },
        {
            id: 'address',
            value: 'Lorem ipsum dolor sit',
        },
        {
            id: 'contact',
            value: 'Lorem ipsum dolor sit',
        },
    ],
    comments: [
        {
            author: {
                name: 'Customer support',
                email: 'customer@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mollis nibh.
</p>
<p>
Nunc arcu lorem, auctor sed neque at, scelerisque tincidunt
<a href="/">Lorem ipsum</a> ipsum. Mauris volutpat dapibus urna imperdiet vulputate. Nullam egestas interdum magna ac eleifend. Etiam urna nisi, dignissim quis maximus ut, scelerisque at lacus.
</p>
`,
        },
        {
            author: {
                name: 'Customer support2',
                email: 'customer@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mollis nibh.
</p>
<p>
Nunc arcu lorem, auctor sed neque at, scelerisque tincidunt
<a href="/">Lorem ipsum</a> ipsum. Mauris volutpat dapibus urna imperdiet vulputate. Nullam egestas interdum magna ac eleifend. Etiam urna nisi, dignissim quis maximus ut, scelerisque at lacus.
</p>
`,
        },
    ],
};
const MOCK_TICKET_4: Tickets.Model.Ticket = {
    id: 'EL-465 920 675',
    createdAt: '2024-12-10T10:00:00',
    updatedAt: '2024-12-12T16:00:00',
    topic: 'TOPIC_1',
    type: 'TYPE_4',
    status: 'OPEN',
    properties: [
        {
            id: 'description',
            value: `
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mollis nibh.
</p>
<p>
Nunc arcu lorem, auctor sed neque at, scelerisque tincidunt
<a href="/">Lorem ipsum</a> ipsum. Mauris volutpat dapibus urna imperdiet vulputate. Nullam egestas interdum magna ac eleifend. Etiam urna nisi, dignissim quis maximus ut, scelerisque at lacus.
</p>
            `,
        },
        {
            id: 'address',
            value: 'Lorem ipsum dolor sit',
        },
        {
            id: 'contact',
            value: 'Lorem ipsum dolor sit',
        },
    ],
};
const MOCK_TICKET_5: Tickets.Model.Ticket = {
    id: 'EL-465 920 674',
    createdAt: '2024-12-10T10:00:00',
    updatedAt: '2024-12-12T16:00:00',
    topic: 'TOPIC_2',
    type: 'TYPE_5',
    status: 'OPEN',
    properties: [
        {
            id: 'description',
            value: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mollis nibh.

Nunc arcu lorem, auctor sed neque at, scelerisque tincidunt [Lorem ipsum](/) ipsum. Mauris volutpat dapibus urna imperdiet vulputate. Nullam egestas interdum magna ac eleifend. Etiam urna nisi, dignissim quis maximus ut, scelerisque at lacus.
            `,
        },
        {
            id: 'address',
            value: 'Lorem ipsum dolor sit',
        },
        {
            id: 'contact',
            value: 'Lorem ipsum dolor sit',
        },
    ],
    comments: [
        {
            author: {
                name: 'Customer support',
                email: 'customer@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mollis nibh.
`,
        },
    ],
    attachments: [
        {
            name: 'Invoice.pdf',
            url: 'https://example.com/attachment.pdf',
            size: 1024,
            author: {
                name: 'Customer support',
                email: 'customer@support.com',
            },
            date: '2024-12-12T12:00:00',
            ariaLabel: 'Download Invoice.pdf',
        },
    ],
};

const RANDOM_MOCK_TICKETS: Tickets.Model.Ticket[] = Array.from({ length: 100 }, (_, index) => ({
    id: `EL-465 920 ${573 - index}`,
    createdAt: new Date(2024, 11, Math.floor(Math.random() * 31) + 1).toISOString(),
    updatedAt: new Date(2024, 11, Math.floor(Math.random() * 31) + 1).toISOString(),
    topic: `TOPIC_${Math.floor(Math.random() * 5) + 1}`,
    type: `TYPE_${Math.floor(Math.random() * 5) + 1}`,
    status: ['OPEN', 'CLOSED', 'IN_PROGRESS'][Math.floor(Math.random() * 3)] as Tickets.Model.TicketStatus,
    properties: [
        {
            id: 'description',
            value: `
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel mollis nibh.
</p>
<p>
Nunc arcu lorem, auctor sed neque at, scelerisque tincidunt
<a href="/">Lorem ipsum</a> ipsum.
</p>`,
        },
        {
            id: 'address',
            value: 'Lorem ipsum dolor sit',
        },
        {
            id: 'contact',
            value: 'Lorem ipsum dolor sit',
        },
    ],
    comments:
        Math.random() > 0.5
            ? [
                  {
                      author: {
                          name: 'Customer support',
                          email: 'customer@support.com',
                      },
                      date: new Date(2024, 11, Math.floor(Math.random() * 31) + 1).toISOString(),
                      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  },
              ]
            : [],
    attachments:
        Math.random() > 0.7
            ? [
                  {
                      name: 'Document.pdf',
                      url: 'https://example.com/attachment.pdf',
                      size: Math.floor(Math.random() * 5000) + 500,
                      author: {
                          name: 'Customer support',
                          email: 'customer@support.com',
                      },
                      date: new Date(2024, 11, Math.floor(Math.random() * 31) + 1).toISOString(),
                      ariaLabel: 'Download Document.pdf',
                  },
              ]
            : [],
}));

const CUSTOM_TICKETS = [MOCK_TICKET_1, MOCK_TICKET_2, MOCK_TICKET_3, MOCK_TICKET_4, MOCK_TICKET_5];

const MOCK_TICKETS = [...CUSTOM_TICKETS, ...RANDOM_MOCK_TICKETS];

export const mapTicket = (id: string): Tickets.Model.Ticket | undefined => {
    return MOCK_TICKETS.find((ticket) => ticket.id === id);
};

export const mapTickets = (options: Tickets.Request.GetTicketListQuery): Tickets.Model.Tickets => {
    const { offset = 0, limit = 10 } = options;
    let items = MOCK_TICKETS.filter(
        (item) =>
            (!options.topic || item.topic === options.topic) &&
            (!options.type || item.type === options.type) &&
            (!options.status || item.status === options.status) &&
            (!options.dateFrom || new Date(item.createdAt) >= new Date(options.dateFrom)) &&
            (!options.dateTo || new Date(item.createdAt) <= new Date(options.dateTo)) &&
            (!options.dateFrom || new Date(item.updatedAt) >= new Date(options.dateFrom)) &&
            (!options.dateTo || new Date(item.updatedAt) <= new Date(options.dateTo)),
    );

    if (options.sort) {
        const [field, order] = options.sort.split('_');
        const isAscending = order === 'ASC';

        items = items.sort((a, b) => {
            const aValue = a[field as keyof Tickets.Model.Ticket];
            const bValue = b[field as keyof Tickets.Model.Ticket];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (field === 'createdAt' || field === 'updatedAt') {
                const aDate = new Date(aValue as string);
                const bDate = new Date(bValue as string);
                return isAscending ? aDate.getTime() - bDate.getTime() : bDate.getTime() - aDate.getTime();
            }
            return 0;
        });
    } else {
        shuffleArray(items);
    }

    return {
        data: items.slice(offset, Number(offset) + Number(limit)),
        total: items.length,
    };
};

function shuffleArray(array: Tickets.Model.Ticket[]) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j] as Tickets.Model.Ticket, array[i] as Tickets.Model.Ticket];
    }
}
