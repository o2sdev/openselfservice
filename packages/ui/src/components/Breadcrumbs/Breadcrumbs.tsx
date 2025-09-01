import { ChevronRight } from 'lucide-react';
import React from 'react';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@o2s/ui/elements/breadcrumb';
import { Link } from '@o2s/ui/elements/link';

import { BreadcrumbsProps } from './Breadcrumbs.types';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs, LinkComponent }) => {
    if (!breadcrumbs?.length) return null;

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs?.map((item, index) =>
                    index !== breadcrumbs.length - 1 ? (
                        <React.Fragment key={`${item.slug}-${index}`}>
                            <BreadcrumbItem>
                                {item.slug ? (
                                    <BreadcrumbLink asChild>
                                        <Link asChild>
                                            <LinkComponent
                                                href={item.slug}
                                                className="no-underline hover:no-underline !text-muted-foreground hover:!text-foreground"
                                            >
                                                {item.label}
                                            </LinkComponent>
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
};
