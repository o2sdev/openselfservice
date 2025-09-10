import type { Meta, StoryObj } from '@storybook/nextjs';

import { ArticlePure } from './Article.client';

const meta = {
    title: 'Blocks/Article',
    component: ArticlePure,
} satisfies Meta<typeof ArticlePure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        __typename: 'ArticleBlock',
        id: 'art-001',
        data: {
            id: 'art-001',
            slug: '/help-and-support/warranty-and-repair/managing-your-powerpro-tools-online',
            permissions: [],
            createdAt: '05/12/2023',
            updatedAt: '06/15/2023',
            title: 'Managing Your PowerPro Tools Online',
            lead: 'Learn how to efficiently manage your PowerPro tools through our self-service portal available 24/7.',
            tags: ['tag1', 'tag2'],
            image: {
                url: 'https://raw.githubusercontent.com/dxpdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-managing-thumb.jpg',
                width: 640,
                height: 427,
                alt: '',
            },
            thumbnail: {
                url: 'https://example.com/images/tool-management-thumb.jpg',
                alt: '',
            },
            category: {
                id: 'warranty-and-repair',
                title: 'Warranty & Repair',
            },
            author: {
                name: 'John Smith',
                position: 'Content Creator',
                avatar: {
                    url: 'https://avatar.iran.liara.run/public/boy',
                    alt: '',
                },
            },
            sections: [
                {
                    id: 'sect-001-1',
                    createdAt: '2023-05-12T08:30:00Z',
                    updatedAt: '2023-06-15T14:25:00Z',
                    __typename: 'ArticleSectionText',
                    title: 'Getting Started',
                    content:
                        "To begin managing your PowerPro tools online, log into your account at powerprotools.com and navigate to the 'My Tools' section.",
                },
                {
                    id: 'sect-001-2',
                    createdAt: '2023-05-12T09:15:00Z',
                    updatedAt: '2023-06-15T14:25:00Z',
                    __typename: 'ArticleSectionImage',
                    image: {
                        url: 'https://raw.githubusercontent.com/dxpdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-managing-dash.jpg',
                        alt: 'PowerPro dashboard view',
                    },
                    caption:
                        'The PowerPro tool management dashboard provides a comprehensive overview of your registered tools.',
                },
                {
                    id: 'sect-001-3',
                    createdAt: '2023-05-12T08:30:00Z',
                    updatedAt: '2023-06-15T14:25:00Z',
                    __typename: 'ArticleSectionText',
                    title: 'Getting Started',
                    content:
                        '# Managing Your PowerPro Tools Online\n\nWelcome to our comprehensive guide on efficiently managing your PowerPro tools through our self-service portal. This guide will walk you through all the features and benefits of our 24/7 online management system.\n\n## Getting Started with the PowerPro Portal\n\nThe PowerPro self-service portal provides a convenient way to manage all your tools in one place. Here\'s how to get started:\n\n### Creating Your Account\n\nBefore you can manage your tools online, you\'ll need to create an account:\n\n1. Visit [powerprotools.com](https://powerprotools.com)\n2. Click on the "Register" button in the top right corner\n3. Fill in your personal details and create a password\n4. Verify your email address through the confirmation link\n\n> **Pro Tip:** Use a strong password combining letters, numbers, and special characters to keep your account secure.\n\n### Logging In to Your Account\n\nOnce your account is created, you can log in anytime:\n\n1. Go to the PowerPro portal login page\n2. Enter your email and password\n3. Click "Sign In"\n4. You\'ll be directed to your personalized dashboard\n\n![PowerPro Dashboard](https://raw.githubusercontent.com/dxpdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-managing-login.jpg "PowerPro Dashboard")\n\n## Registering Your Tools\n\nOne of the key benefits of the PowerPro portal is the ability to register and track all your tools in one place.\n\n### How to Register a New Tool\n\nFollow these simple steps to add a tool to your account:\n\n1. From your dashboard, select "Add New Tool"\n2. Enter the tool\'s serial number (found on the tool or packaging)\n3. Upload your proof of purchase (receipt or invoice)\n4. Add any additional information (date of purchase, retailer, etc.)\n5. Click "Register Tool"\n\n### Benefits of Tool Registration\n\n* **Extended Warranty** - Registered tools receive an additional 1-year warranty\n* **Service Reminders** - Get notifications when your tool is due for maintenance\n* **Theft Protection** - Registered tools can be flagged if stolen\n* **Simplified Repairs** - Streamlined process for warranty claims\n\n## Maintenance Scheduling\n\nRegular maintenance extends the life of your tools and ensures optimal performance.\n\n### Scheduling a Maintenance Appointment\n\nThe portal makes it easy to schedule maintenance:\n\n1. Select the tool from your inventory\n2. Click "Schedule Maintenance"\n3. Choose your preferred service center location\n4. Select an available date and time\n5. Confirm your appointment\n\n### Maintenance History Table\n\n| Tool Model | Last Service | Service Type | Next Recommended Service |\n|------------|--------------|--------------|--------------------------|\n| PowerDrill XR200 | 03/15/2023 | Standard Tune-up | 09/15/2023 |\n| CircSaw Pro 400 | 01/10/2023 | Blade Replacement | 07/10/2023 |\n| Impact Driver T3 | 05/22/2023 | Full Inspection | 11/22/2023 |\n\n## Warranty Claims and Repairs\n\nIf your tool needs repair, our online system simplifies the warranty claim process.\n\n### Filing a Warranty Claim\n\n<table>\n  <thead>\n    <tr>\n      <th>Step</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td data-highlighted>1</td>\n      <td data-highlighted>Select the tool requiring repair from your inventory</td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>Click "File Warranty Claim"</td>\n    </tr>\n    <tr>\n      <td>3</td>\n      <td>Describe the issue and upload photos if applicable</td>\n    </tr>\n    <tr>\n      <td>4</td>\n      <td>Choose between mail-in repair or service center drop-off</td>\n    </tr>\n    <tr>\n      <td>5</td>\n      <td>Submit your claim and track its status online</td>\n    </tr>\n  </tbody>\n</table>\n\n### Tracking Repair Status\n\n![Repair Tracking Interface](https://raw.githubusercontent.com/dxpdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-managing-tracking.jpg "Repair Tracking Interface")\n\nOur repair tracking system provides real-time updates on your tool\'s repair status:\n\n* **Received** - Your tool has arrived at our repair center\n* **Diagnosed** - Technicians have identified the issue\n* **In Repair** - Work is being performed on your tool\n* **Quality Check** - Final testing before completion\n* **Shipped** - Your tool is on its way back to you\n\n## Managing Multiple Tools\n\nFor professionals with numerous tools, our management system offers advanced features.\n\n### Tool Inventory Dashboard\n\nThe inventory dashboard gives you a complete overview of your tool collection:\n\n1. Total number of registered tools\n2. Warranty status for each tool\n3. Maintenance schedule\n4. Usage statistics\n5. Replacement parts inventory\n\n### Tool Categories\n\nOrganize your tools by category for easier management:\n\n* **Power Drills**\n  * Cordless Drills\n  * Hammer Drills\n  * Impact Drivers\n* **Saws**\n  * Circular Saws\n  * Jigsaws\n  * Reciprocating Saws\n* **Sanders & Grinders**\n* **Measurement Tools**\n* **Accessories & Attachments**\n\n## Mobile App Integration\n\nAccess your tool management system on the go with our mobile application.\n\n### Key Mobile Features\n\n1. Scan tool barcodes for instant registration\n2. Access digital manuals and how-to videos\n3. Receive push notifications for maintenance reminders\n4. Chat with customer support directly\n5. Locate nearby service centers with GPS integration\n\n![Mobile App Interface](https://raw.githubusercontent.com/dxpdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-managing-app.jpg "PowerPro Mobile App")\n\n## Conclusion\n\nThe PowerPro online management system revolutionizes how you maintain and organize your tools. By taking advantage of these features, you\'ll extend the life of your tools, simplify repairs, and maximize your investment.\n\nFor additional assistance, contact our customer support team at support@powerprotools.com or call 1-800-POWERTOOLS.',
                },
            ],
        },
        slug: '/help-and-support/warranty-and-repair/managing-your-powerpro-tools-online',
        accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFuZSBEb2UiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJyb2xlIjoic2VsZnNlcnZpY2Vfb3JnX2FkbWluIiwiY3VzdG9tZXIiOnsiaWQiOiJjdXN0LTAwMSIsInJvbGVzIjpbInNlbGZzZXJ2aWNlX29yZ191c2VyIiwic2VsZnNlcnZpY2Vfb3JnX3VzZXIiLCJzZWxmc2VydmljZV9vcmdfYWRtaW4iXSwibmFtZSI6IkFjbWUgQ29ycG9yYXRpb24ifSwiaWF0IjoxNzU2MzA4NDg5fQ.81np4FkOHC31kr35r1IKYYDB0j3tMU6GB6uHyMVn2L8',
        locale: 'en',
        routing: {
            locales: ['en', 'de', 'pl'],
            defaultLocale: 'en',
            pathnames: {
                '/login': {
                    en: '/sign-in',
                    de: '/einloggen',
                    pl: '/logowanie',
                },
            },
        },
    },
};
