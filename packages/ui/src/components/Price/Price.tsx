import { useLocale } from 'next-intl';

import { PriceProps } from './Price.types';
import { usePriceService } from './usePriceService';

export const Price = ({ price }: PriceProps) => {
    const locale = useLocale();
    const priceService = usePriceService(locale);

    if (!price) {
        return null;
    }

    if (price.period) {
        return `${priceService.formatPrice(price).format} / ${price.period}`;
    }

    return priceService.formatPrice(price).format;
};
