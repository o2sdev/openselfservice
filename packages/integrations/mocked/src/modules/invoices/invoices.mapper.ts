import { Invoices, Models } from '@o2s/framework/modules';

const dateToday = new Date();
const dateYesterday = new Date();
dateYesterday.setDate(dateYesterday.getDate() - 1);

const MOCK_INVOICE_1: Invoices.Model.Invoice = {
    id: 'INV-001',
    externalId: 'EXT-001',
    billingAccountId: 'BA-001',
    billingPeriod: '2024-03',
    paymentMethodId: 'PM-001',
    type: 'STANDARD',
    paymentStatus: 'PAYMENT_DUE',
    issuedDate: dateToday.toISOString(),
    paymentDueDate: '2024-09-31',
    currency: 'PLN',
    totalAmountDue: {
        value: 100,
    },
    totalNetAmountDue: {
        value: 81.3,
    },
    totalAmountPaid: {
        value: 0,
    },
    totalToBePaid: {
        value: 100,
    },
};

const MOCK_INVOICE_2: Invoices.Model.Invoice = {
    id: 'INV-002',
    externalId: 'EXT-002',
    billingAccountId: 'BA-001',
    billingPeriod: '2024-02',
    paymentMethodId: 'PM-001',
    type: 'STANDARD',
    paymentStatus: 'PAYMENT_COMPLETE',
    issuedDate: dateYesterday.toISOString(),
    paymentDueDate: '2024-10-29',
    currency: 'PLN',
    totalAmountDue: {
        value: 150,
    },
    totalNetAmountDue: {
        value: 121.95,
    },
    totalAmountPaid: {
        value: 150,
    },
    totalToBePaid: {
        value: 0,
    },
};

const MOCK_INVOICE_3: Invoices.Model.Invoice = {
    id: 'INV-003',
    externalId: 'EXT-003',
    billingAccountId: 'BA-002',
    billingPeriod: '2024-03',
    paymentMethodId: 'PM-002',
    type: 'PROFORMA',
    paymentStatus: 'PAYMENT_PAST_DUE',
    issuedDate: '2024-03-01',
    paymentDueDate: '2024-12-15',
    currency: 'EUR',
    totalAmountDue: {
        value: 200,
    },
    totalNetAmountDue: {
        value: 162.6,
    },
    totalAmountPaid: {
        value: 0,
    },
    totalToBePaid: {
        value: 200,
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
        id: `INV-RAND-${index + 1}`,
        externalId: `EXT-RAND-${index + 1}`,
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
        currency: currency as Models.Currency.Currency,
        totalAmountDue: {
            value: amountDue,
        },
        totalNetAmountDue: {
            value: Math.random() * 800,
        },
        totalAmountPaid: {
            value: amountPaid,
        },
        totalToBePaid: {
            value: amountToBePaid,
        },
    };
    return invoice;
});

const MOCK_INVOICES = [MOCK_INVOICE_1, MOCK_INVOICE_2, MOCK_INVOICE_3, ...RANDOM_MOCK_INVOICES];

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

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return isAscending ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else if (field === 'issuedDate' || field === 'paymentDueDate') {
                const aDate = new Date(aValue as string);
                const bDate = new Date(bValue as string);
                return isAscending ? aDate.getTime() - bDate.getTime() : bDate.getTime() - aDate.getTime();
            }
            return 0;
        });
    } else {
        shuffleArray(filteredInvoices);
    }

    return {
        data: filteredInvoices.slice(offset, Number(offset) + Number(limit)),
        total: filteredInvoices.length,
    };
};

function shuffleArray(array: Invoices.Model.Invoice[]) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j] as Invoices.Model.Invoice, array[i] as Invoices.Model.Invoice];
    }
}
