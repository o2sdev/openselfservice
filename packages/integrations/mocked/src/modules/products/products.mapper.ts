import { Products } from '@o2s/framework/modules';

import { MOCK_PRODUCTS_DE, MOCK_PRODUCTS_EN, MOCK_PRODUCTS_PL } from '../resources/mock/products.mock';

export { MOCK_PRODUCTS_EN, MOCK_PRODUCTS_DE, MOCK_PRODUCTS_PL };

export const mapProduct = (id: string, locale?: string): Products.Model.Product => {
    let productsSource = MOCK_PRODUCTS_EN;
    if (locale === 'pl') {
        productsSource = MOCK_PRODUCTS_PL;
    } else if (locale === 'de') {
        productsSource = MOCK_PRODUCTS_DE;
    }

    const product = productsSource.find((product) => product.id === id);
    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }
    return product;
};

export const mapProducts = (options: Products.Request.GetProductListQuery): Products.Model.Products => {
    const { sort, locale, offset = 0, limit = 12 } = options;

    let productsSource = MOCK_PRODUCTS_EN;
    if (locale === 'pl') {
        productsSource = MOCK_PRODUCTS_PL;
    } else if (locale === 'de') {
        productsSource = MOCK_PRODUCTS_DE;
    }

    const filteredProducts = productsSource.filter((product) => {
        if (options.type && product.type !== options.type) {
            return false;
        }
        if (options.category && product.category !== options.category) {
            return false;
        }
        return true;
    });

    const data = [...filteredProducts];

    if (sort) {
        const [field, order] = sort.split('_');
        const isAscending = order === 'ASC';

        data.sort((a, b) => {
            const aValue = a[field as keyof Products.Model.Product];
            const bValue = b[field as keyof Products.Model.Product];

            if (field === 'name') {
                const aField = a.name;
                const bField = b.name;
                return isAscending ? aField.localeCompare(bField) : bField.localeCompare(aField);
            } else if (field === 'price') {
                const aPrice = a.price.value;
                const bPrice = b.price.value;
                return isAscending ? aPrice - bPrice : bPrice - aPrice;
            } else if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                return isAscending ? aValue - bValue : bValue - aValue;
            }
            return 0;
        });
    }

    return {
        data: data.slice(offset, Number(offset) + Number(limit)),
        total: data.length,
    };
};

export const mapRelatedProducts = (options: Products.Request.GetRelatedProductListParams): Products.Model.Products => {
    const { offset = 0, limit = 10, sort, locale } = options;

    let productsSource = MOCK_PRODUCTS_EN;
    if (locale === 'pl') {
        productsSource = MOCK_PRODUCTS_PL;
    } else if (locale === 'de') {
        productsSource = MOCK_PRODUCTS_DE;
    }

    const products: Products.Model.Product[] = productsSource;

    if (!products.length) {
        return {
            data: [],
            total: 0,
        };
    }

    const data = products;

    if (sort) {
        const [field, order] = sort.split('_');
        const isAscending = order === 'ASC';

        data.sort((a, b) => {
            const aValue = a[field as keyof Products.Model.Product];
            const bValue = b[field as keyof Products.Model.Product];

            if (field === 'name') {
                const aField = a.name;
                const bField = b.name;
                return isAscending ? aField.localeCompare(bField) : bField.localeCompare(aField);
            } else if (field === 'price') {
                const aPrice = a.price.value;
                const bPrice = b.price.value;
                return isAscending ? aPrice - bPrice : bPrice - aPrice;
            } else if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (typeof aValue === 'number' && typeof bValue === 'number') {
                return isAscending ? aValue - bValue : bValue - aValue;
            }
            return 0;
        });
    }

    return {
        data: data.slice(offset, Number(offset) + Number(limit)),
        total: data.length,
    };
};
