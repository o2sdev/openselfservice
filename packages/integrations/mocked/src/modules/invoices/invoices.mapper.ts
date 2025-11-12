import { Invoices, Models } from '@o2s/framework/modules';

const dateYesterday = new Date();
dateYesterday.setDate(dateYesterday.getDate() - 1);

const MOCK_INVOICE_1: Invoices.Model.Invoice = {
    id: 'INV-HIL-056782',
    externalId: 'EXT-HIL-24-056782',
    billingAccountId: 'HIL-ACC-10045',
    billingPeriod: '2024-06',
    paymentMethodId: 'PM-CC-4567',
    type: 'STANDARD',
    paymentStatus: 'PAYMENT_DUE',
    issuedDate: new Date(2024, 5, 15).toISOString(),
    paymentDueDate: '2024-07-15',
    currency: 'EUR',
    totalAmountDue: {
        value: 1250.5,
        currency: 'EUR',
    },
    totalNetAmountDue: {
        value: 1016.67,
        currency: 'EUR',
    },
    totalAmountPaid: {
        value: 0,
        currency: 'EUR',
    },
    totalToBePaid: {
        value: 1250.5,
        currency: 'EUR',
    },
};

const MOCK_INVOICE_2: Invoices.Model.Invoice = {
    id: 'INV-HIL-056890',
    externalId: 'EXT-HIL-24-056890',
    billingAccountId: 'HIL-ACC-10045',
    billingPeriod: '2024-05',
    paymentMethodId: 'PM-CC-4567',
    type: 'STANDARD',
    paymentStatus: 'PAYMENT_COMPLETE',
    issuedDate: new Date(2024, 4, 10).toISOString(),
    paymentDueDate: '2024-06-10',
    currency: 'EUR',
    totalAmountDue: {
        value: 3450.75,
        currency: 'EUR',
    },
    totalNetAmountDue: {
        value: 2805.49,
        currency: 'EUR',
    },
    totalAmountPaid: {
        value: 3450.75,
        currency: 'EUR',
    },
    totalToBePaid: {
        value: 0,
        currency: 'EUR',
    },
};

const MOCK_INVOICE_3: Invoices.Model.Invoice = {
    id: 'INV-HIL-057123',
    externalId: 'EXT-HIL-24-057123',
    billingAccountId: 'HIL-ACC-22876',
    billingPeriod: '2024-06',
    paymentMethodId: 'PM-TRF-7890',
    type: 'PROFORMA',
    paymentStatus: 'PAYMENT_DUE',
    issuedDate: new Date(2024, 5, 5).toISOString(),
    paymentDueDate: '2024-07-05',
    currency: 'EUR',
    totalAmountDue: {
        value: 780.25,
        currency: 'EUR',
    },
    totalNetAmountDue: {
        value: 634.35,
        currency: 'EUR',
    },
    totalAmountPaid: {
        value: 0,
        currency: 'EUR',
    },
    totalToBePaid: {
        value: 780.25,
        currency: 'EUR',
    },
};

const MOCK_INVOICE_4: Invoices.Model.Invoice = {
    id: 'INV-HIL-057456',
    externalId: 'EXT-HIL-24-057456',
    billingAccountId: 'HIL-ACC-10045',
    billingPeriod: '2024-04',
    paymentMethodId: 'PM-CC-4567',
    type: 'CREDIT_NOTE',
    paymentStatus: 'PAYMENT_COMPLETE',
    issuedDate: new Date(2024, 3, 20).toISOString(),
    paymentDueDate: '2024-05-20',
    currency: 'EUR',
    totalAmountDue: {
        value: -450.0,
        currency: 'EUR',
    },
    totalNetAmountDue: {
        value: -365.85,
        currency: 'EUR',
    },
    totalAmountPaid: {
        value: -450.0,
        currency: 'EUR',
    },
    totalToBePaid: {
        value: 0,
        currency: 'EUR',
    },
};

const MOCK_INVOICE_5: Invoices.Model.Invoice = {
    id: 'INV-HIL-058234',
    externalId: 'EXT-HIL-24-058234',
    billingAccountId: 'HIL-ACC-35901',
    billingPeriod: '2024-06',
    paymentMethodId: 'PM-TRF-9012',
    type: 'STANDARD',
    paymentStatus: 'PAYMENT_PAST_DUE',
    issuedDate: new Date(2024, 5, 1).toISOString(),
    paymentDueDate: '2024-06-15',
    currency: 'EUR',
    totalAmountDue: {
        value: 5670.3,
        currency: 'EUR',
    },
    totalNetAmountDue: {
        value: 4610.0,
        currency: 'EUR',
    },
    totalAmountPaid: {
        value: 0,
        currency: 'EUR',
    },
    totalToBePaid: {
        value: 5670.3,
        currency: 'EUR',
    },
};

const RANDOM_MOCK_INVOICES: Invoices.Model.Invoice[] = Array.from({ length: 100 }, (_, index) => {
    const amountPaid = Math.random() * (100 - 10) + 10;
    const amountDue = Math.random() * (100 - 10) + 10;
    const amountToBePaid = amountDue - amountPaid;
    const currency = ['PLN', 'EUR', 'GBP', 'USD'][Math.floor(Math.random() * 4)];

    // Random selection between current and previous year
    const currentYear = new Date().getFullYear();
    const year = Math.random() < 0.5 ? currentYear : currentYear - 1;

    // If current year, limit to current month
    const maxMonth = year === currentYear ? new Date().getMonth() : 11;
    const randomMonth = Math.floor(Math.random() * (maxMonth + 1));

    const randomDate = new Date(year, randomMonth, Math.floor(Math.random() * 28) + 1);

    const invoice = {
        id: `INV-HIL-${index + 1}`,
        externalId: `EXT-HIL-${index + 1}`,
        billingAccountId: `BA-RAND-${Math.floor(Math.random() * 10) + 1}`,
        billingPeriod: `2024-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}`,
        paymentMethodId: `PM-RAND-${Math.floor(Math.random() * 5) + 1}`,
        type: ['STANDARD', 'PROFORMA', 'CREDIT_NOTE', 'DEBIT_NOTE'][
            Math.floor(Math.random() * 4)
        ] as Invoices.Model.InvoiceType,
        paymentStatus: ['PAYMENT_DUE', 'PAYMENT_COMPLETE', 'PAYMENT_PAST_DUE', 'PAYMENT_DECLINED'][
            Math.floor(Math.random() * 3)
        ] as Invoices.Model.PaymentStatusType,
        issuedDate: randomDate.toISOString(),
        paymentDueDate: randomDate.toISOString(),
        currency: currency as Models.Price.Currency,
        totalAmountDue: {
            value: amountDue,
            currency: currency as Models.Price.Currency,
        },
        totalNetAmountDue: {
            value: Math.random() * 800,
            currency: currency as Models.Price.Currency,
        },
        totalAmountPaid: {
            value: amountPaid,
            currency: currency as Models.Price.Currency,
        },
        totalToBePaid: {
            value: amountToBePaid,
            currency: currency as Models.Price.Currency,
        },
    };
    return invoice;
});

const MOCK_INVOICES = [
    MOCK_INVOICE_1,
    MOCK_INVOICE_2,
    MOCK_INVOICE_3,
    MOCK_INVOICE_4,
    MOCK_INVOICE_5,
    ...RANDOM_MOCK_INVOICES,
];

export const mapInvoice = (id: string): Invoices.Model.Invoice => {
    const invoice = MOCK_INVOICES.find((invoice) => invoice.id === id);
    if (!invoice) {
        throw new Error(`Invoice with id ${id} not found`);
    }
    return invoice;
};

export const mapInvoices = (query: Invoices.Request.GetInvoiceListQuery): Invoices.Model.Invoices => {
    const { offset = 0, limit = 5 } = query;
    let filteredInvoices = MOCK_INVOICES.filter((invoice) => {
        if (query.search) {
            const searchLower = query.search.toLowerCase();
            const matchesSearch =
                invoice.id.toLowerCase().includes(searchLower) ||
                invoice.externalId.toLowerCase().includes(searchLower) ||
                invoice.billingAccountId.toLowerCase().includes(searchLower) ||
                invoice.billingPeriod.toLowerCase().includes(searchLower);
            if (!matchesSearch) {
                return false;
            }
        }

        if (query.type && invoice.type !== query.type) {
            return false;
        }
        if (query.paymentStatus && invoice.paymentStatus !== query.paymentStatus) {
            return false;
        }
        if (query.dateFrom && new Date(invoice.issuedDate) < new Date(query.dateFrom)) {
            return false;
        }
        if (query.dateTo && new Date(invoice.issuedDate) > new Date(query.dateTo)) {
            return false;
        }
        return true;
    });

    if (query.sort) {
        const [field, order] = query.sort.split('_');
        const isAscending = order === 'ASC';

        filteredInvoices = filteredInvoices.sort((a, b) => {
            const aValue = a[field as keyof Invoices.Model.Invoice];
            const bValue = b[field as keyof Invoices.Model.Invoice];

            if (
                field === 'totalAmountDue' ||
                field === 'totalNetAmountDue' ||
                field === 'totalAmountPaid' ||
                field === 'totalToBePaid'
            ) {
                const aValueNumber = (aValue as Models.Price.Price).value;
                const bValueNumber = (bValue as Models.Price.Price).value;
                return isAscending ? aValueNumber - bValueNumber : bValueNumber - aValueNumber;
            } else if (field === 'issuedDate' || field === 'paymentDueDate') {
                const aDate = new Date(aValue as string);
                const bDate = new Date(bValue as string);
                return isAscending ? aDate.getTime() - bDate.getTime() : bDate.getTime() - aDate.getTime();
            } else if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            }
            return 0;
        });
    }

    return {
        data: filteredInvoices.slice(offset, Number(offset) + Number(limit)),
        total: filteredInvoices.length,
    };
};
