import type { Meta, StoryObj } from '@storybook/nextjs';
import { FileText, Github, Twitter } from 'lucide-react';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from './navigation-menu';

const meta = {
    title: 'Elements/NavigationMenu',
    component: NavigationMenu,
    tags: ['autodocs'],
} satisfies Meta<typeof NavigationMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <FileText className="h-6 w-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">Documentation</div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Learn how to integrate our components in your application
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink asChild>
                                    <a
                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        href="/"
                                    >
                                        <div className="text-sm font-medium leading-none">Getting Started</div>
                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                            A quick start guide to set up your application with our library
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="https://github.com" className={navigationMenuTriggerStyle()}>
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="https://twitter.com" className={navigationMenuTriggerStyle()}>
                        <Twitter className="mr-2 h-4 w-4" />
                        Twitter
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    ),
};
