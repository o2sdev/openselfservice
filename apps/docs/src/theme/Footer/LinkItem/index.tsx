import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import useBaseUrl from '@docusaurus/useBaseUrl';

import type { Props } from '@theme/Footer/LinkItem';
import IconExternalLink from '@theme/Icon/ExternalLink';

export default function FooterLinkItem({ item }: Props): ReactNode {
    const { to, href, label, prependBaseUrlToHref, className, ...props } = item;
    const toUrl = useBaseUrl(to);
    const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });

    return (
        <Link
            className={clsx('footer__link-item', className)}
            {...(href
                ? {
                      href: prependBaseUrlToHref ? normalizedHref : href,
                  }
                : {
                      to: toUrl,
                  })}
            {...props}
        >
            {label}
            {href && !isInternalUrl(href) && <IconExternalLink />}
        </Link>
    );
}
