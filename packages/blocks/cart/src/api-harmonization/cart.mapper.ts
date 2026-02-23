import { CMS, Carts, Models } from '@o2s/framework/modules';

import { CartBlock, CartBlockItem, CartBlockTotals } from './cart.model';

const getZeroPrice = (currency: Models.Price.Currency): Models.Price.Price => ({ value: 0, currency });

const mapCartItems = (cart: Carts.Model.Cart): CartBlockItem[] =>
    cart.items.data.map((item) => ({
        id: item.id,
        productId: item.product.id,
        quantity: item.quantity,
        price: item.price,
        total: item.total,
        product: {
            name: item.product.name,
            subtitle: item.product.shortDescription ?? item.product.subtitle,
            image: item.product.image
                ? { url: item.product.image.url, alt: item.product.image.alt ?? item.product.name }
                : undefined,
            link: item.product.link,
        },
    }));

const mapTotals = (cart: Carts.Model.Cart, defaultCurrency: Models.Price.Currency): CartBlockTotals => {
    const currency = cart.currency ?? defaultCurrency;
    const zero = getZeroPrice(currency);
    return {
        subtotal: cart.subtotal ?? zero,
        tax: cart.taxTotal ?? zero,
        total: cart.total,
    };
};

export const mapCart = (cms: CMS.Model.CartBlock.CartBlock, cart: Carts.Model.Cart | undefined | null): CartBlock => {
    const defaultCurrency = (cms.defaultCurrency as Models.Price.Currency) ?? 'PLN';
    const currency = cart?.currency ?? defaultCurrency;
    const zero = getZeroPrice(currency);

    const items = cart ? mapCartItems(cart) : [];
    const totals = cart ? mapTotals(cart, defaultCurrency) : { subtotal: zero, tax: zero, total: zero };

    return {
        __typename: 'CartBlock',
        id: cms.id,
        title: cms.title ?? '',
        subtitle: cms.subtitle,
        taxRate: cms.taxRate ?? 0,
        defaultCurrency,
        labels: cms.labels ?? { itemTotal: '', unknownProductName: '' },
        actions: cms.actions ?? { increaseQuantity: '', decreaseQuantity: '', quantity: '', remove: '' },
        summaryLabels: cms.summaryLabels ?? { title: '', subtotalLabel: '', taxLabel: '', totalLabel: '' },
        checkoutButton: cms.checkoutButton,
        continueShopping: cms.continueShopping,
        empty: cms.empty ?? { title: '', description: '' },
        items,
        totals,
        promotions: cart?.promotions,
        discountTotal: cart?.discountTotal,
        shippingMethod:
            cart?.shippingMethod && cart.shippingTotal
                ? { name: cart.shippingMethod.name, total: cart.shippingTotal }
                : undefined,
    };
};
