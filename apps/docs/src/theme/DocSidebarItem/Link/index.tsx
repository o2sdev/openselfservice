import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { isActiveSidebarItem } from '@docusaurus/plugin-content-docs/client';
import { ThemeClassNames } from '@docusaurus/theme-common';

import type { Props } from '@theme/DocSidebarItem/Link';
import IconExternalLink from '@theme/Icon/ExternalLink';

import styles from './styles.module.css';

const METHOD_CLASSES = ['get', 'post', 'put', 'patch', 'delete', 'options', 'head'] as const;

function resolveHttpMethod(className: string | undefined) {
    if (!className) return null;
    const tokens = new Set(
        className
            .split(/\s+/)
            .map((token) => token.trim().toLowerCase())
            .filter(Boolean),
    );

    return METHOD_CLASSES.find((method) => tokens.has(method)) ?? null;
}

function LinkLabel({ label, method }: Readonly<{ label: string; method: string | null }>) {
    return (
        <>
            {method ? <span className={clsx(styles.methodBadge, styles[method])}>{method.toUpperCase()}</span> : null}
            <span title={label} className={styles.linkLabel}>
                {label}
            </span>
        </>
    );
}

export default function DocSidebarItemLink({ item, onItemClick, activePath, level, ...props }: Props): ReactNode {
    const { href, label, className, autoAddBaseUrl } = item;
    const isActive = isActiveSidebarItem(item, activePath);
    const isInternalLink = isInternalUrl(href);
    const method = resolveHttpMethod(className);

    return (
        <li
            className={clsx(
                ThemeClassNames.docs.docSidebarItemLink,
                ThemeClassNames.docs.docSidebarItemLinkLevel(level),
                'menu__list-item',
                className,
            )}
            key={label}
        >
            <Link
                className={clsx('menu__link', !isInternalLink && styles.menuExternalLink, {
                    'menu__link--active': isActive,
                })}
                autoAddBaseUrl={autoAddBaseUrl}
                aria-current={isActive ? 'page' : undefined}
                to={href}
                {...(isInternalLink && {
                    onClick: onItemClick ? () => onItemClick(item) : undefined,
                })}
                {...props}
            >
                <LinkLabel label={label} method={method} />
                {!isInternalLink && <IconExternalLink />}
            </Link>
        </li>
    );
}
