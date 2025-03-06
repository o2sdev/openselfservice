type Price = {
    value: number;
};

export type NumberFormat = {
    value: number;
    format: string;
    unit: string;
    unitDisplay: 'start' | 'end';
};

export type Currency = 'PLN' | 'GBP' | 'EUR' | 'USD';
type UnitReturnType = Pick<NumberFormat, 'unit' | 'unitDisplay'>;

const FALLBACK_CURRENCY = 'PLN';

const currencyUnitMap: Record<Currency, UnitReturnType> = {
    PLN: {
        unit: 'zł',
        unitDisplay: 'end',
    },
    GBP: {
        unit: '£',
        unitDisplay: 'start',
    },
    EUR: {
        unit: '€',
        unitDisplay: 'start',
    },
    USD: {
        unit: '$',
        unitDisplay: 'start',
    },
};

export interface PriceService {
    formatPrice: (price: Price, currency: Currency) => NumberFormat;
}

export const usePriceService = (locale: string): PriceService => {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: true,
    });

    const getUnit = (currency: Currency): UnitReturnType => {
        return currencyUnitMap[currency] || currencyUnitMap[FALLBACK_CURRENCY];
    };

    const formatPrice = ({ value }: Price, currency: Currency): NumberFormat => {
        const format = formatter.format(value);
        const { unit, unitDisplay } = getUnit(currency);

        let formattedPrice = '';
        switch (unitDisplay) {
            case 'start':
                formattedPrice = `${unit} ${format}`;
                break;
            case 'end':
                formattedPrice = `${format} ${unit}`;
                break;
            default:
                formattedPrice = format;
        }

        return {
            value,
            format: formattedPrice,
            unit,
            unitDisplay,
        };
    };

    return {
        formatPrice,
    };
};
