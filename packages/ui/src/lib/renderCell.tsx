import React from 'react';

import { Price } from '@o2s/ui/components/Price';

import { Badge } from '@o2s/ui/elements/badge';
import { BadgeStatus } from '@o2s/ui/elements/badge-status';
import { Button } from '@o2s/ui/elements/button';
import { Link } from '@o2s/ui/elements/link';

import { DataListColumnConfig } from '../components/DataList/DataList.types';

/**
 * Default cell renderer based on column type
 * Shared utility for both DataList and DataGrid components
 */
export function renderCell<T>(
    value: Record<string, unknown>,
    item: T,
    column: DataListColumnConfig<T>,
): React.ReactNode {
    if (value === null || value === undefined) {
        return null;
    }

    if (column.type === 'custom') {
        return column.render(value, item, column);
    }

    switch (column.type) {
        case 'text': {
            const displayField = column.displayField || 'label';
            if (typeof value === 'object' && value !== null) {
                return String(value[displayField]);
            }
            return String(value);
        }

        case 'badge': {
            const badgeLabel = String(value[column.labelField || 'label']);
            const badgeValue = String(value[column.valueField || 'value']);
            const variant = column.variant ? column.variant(badgeValue) : 'default';

            return <Badge variant={variant}>{badgeLabel}</Badge>;
        }

        case 'status':
            return <BadgeStatus variant="default" />;

        case 'date': {
            const dateDisplayField = column.displayField || 'label';
            if (typeof value === 'object' && value !== null) {
                return String(value[dateDisplayField]);
            }
            return String(value);
        }

        case 'price': {
            if (typeof value === 'object' && value !== null && 'value' in value) {
                const priceValue = value.value as { value: number; currency?: string };
                const currency = (
                    column.config?.currencyKey ? String(item[column.config.currencyKey]) : priceValue.currency || 'USD'
                ) as 'USD' | 'EUR' | 'GBP' | 'PLN';
                return <Price price={{ value: priceValue.value, currency }} />;
            }
            if (typeof value === 'object' && value !== null) {
                return <Price price={value as unknown as { value: number; currency: 'USD' | 'EUR' | 'GBP' | 'PLN' }} />;
            }
            return null;
        }

        case 'link': {
            const linkDisplayField = column.displayField || 'label';
            const linkLabel =
                typeof value === 'object' && value !== null ? String(value[linkDisplayField]) : String(value);
            const href = column.config?.hrefKey ? String(item[column.config.hrefKey]) : '#';
            const linkVariant = column.config?.variant ? column.config.variant : 'link';
            const linkClassName = column.config?.className
                ? column.config.className
                : 'flex items-center justify-end gap-2';

            if (linkVariant === 'link') {
                return (
                    <Link href={href} asChild>
                        <Button variant="link" className={linkClassName}>
                            {linkLabel}
                        </Button>
                    </Link>
                );
            }
            return (
                <Button variant={linkVariant} className={linkClassName}>
                    {linkLabel}
                </Button>
            );
        }

        default:
            return String(value);
    }
}
