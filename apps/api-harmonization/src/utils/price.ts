import { Models } from '@o2s/framework/modules';

export const checkNegativeValue = (price: Models.Price.Price): Models.Price.Price => {
    if (price.period) {
        return price.value < 0 ? { value: 0, currency: price.currency, period: price.period } : price;
    }
    return price.value < 0 ? { value: 0, currency: price.currency } : price;
};
