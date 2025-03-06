import { Invoices } from '@o2s/framework/modules';

export const checkNegativeValue = (price: Invoices.Model.Money): Invoices.Model.Money => {
    return price.value < 0 ? { value: 0 } : price;
};
