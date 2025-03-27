import { ChevronRight } from 'lucide-react';
import React from 'react';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@o2s/ui/components/breadcrumb';
import { Link } from '@o2s/ui/components/link';

import { Link as NextLink } from '@/i18n';

import { BreadcrumbsProps } from './Breadcrumbs.types';

export function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
    if (!breadcrumbs?.length) return null;

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs?.map((item, index) =>
                    index !== breadcrumbs.length - 1 ? (
                        <React.Fragment key={item.slug}>
                            <BreadcrumbItem>
                                {item.slug ? (
                                    <BreadcrumbLink asChild>
                                        <Link asChild>
                                            <NextLink
                                                href={item.slug}
                                                className="no-underline hover:no-underline !text-muted-foreground hover:!text-foreground"
                                            >
                                                {item.label}
                                            </NextLink>
                                        </Link>
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="[&>svg]:w-4 [&>svg]:h-4">
                                <ChevronRight className="text-muted-foreground" />
                            </BreadcrumbSeparator>
                        </React.Fragment>
                    ) : (
                        <BreadcrumbItem key={item.slug}>
                            <BreadcrumbPage>{item.label}</BreadcrumbPage>
                        </BreadcrumbItem>
                    ),
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
