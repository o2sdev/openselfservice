import { CMS } from '@o2s/framework/modules';

import {
    PAGE_BUSINESS_ACCOUNTS_GROWTH_DE,
    PAGE_BUSINESS_ACCOUNTS_GROWTH_EN,
    PAGE_BUSINESS_ACCOUNTS_GROWTH_PL,
} from './mocks/pages/business-accounts-growth.page';
import {
    PAGE_BUSINESS_ACCOUNTS_STANDARD_DE,
    PAGE_BUSINESS_ACCOUNTS_STANDARD_EN,
    PAGE_BUSINESS_ACCOUNTS_STANDARD_PL,
} from './mocks/pages/business-accounts-standard.page';
import {
    PAGE_BUSINESS_ACCOUNTS_DE,
    PAGE_BUSINESS_ACCOUNTS_EN,
    PAGE_BUSINESS_ACCOUNTS_PL,
} from './mocks/pages/business-accounts.page';
import {
    PAGE_BUSINESS_CARDS_BUSINESS_DEBIT_DE,
    PAGE_BUSINESS_CARDS_BUSINESS_DEBIT_EN,
    PAGE_BUSINESS_CARDS_BUSINESS_DEBIT_PL,
} from './mocks/pages/business-cards-business-debit.page';
import {
    PAGE_BUSINESS_CARDS_BUSINESS_EXPENSE_DE,
    PAGE_BUSINESS_CARDS_BUSINESS_EXPENSE_EN,
    PAGE_BUSINESS_CARDS_BUSINESS_EXPENSE_PL,
} from './mocks/pages/business-cards-business-expense.page';
import {
    PAGE_BUSINESS_CARDS_DE,
    PAGE_BUSINESS_CARDS_EN,
    PAGE_BUSINESS_CARDS_PL,
} from './mocks/pages/business-cards.page';
import {
    PAGE_BUSINESS_HELP_AND_SUPPORT_1_DE,
    PAGE_BUSINESS_HELP_AND_SUPPORT_1_EN,
    PAGE_BUSINESS_HELP_AND_SUPPORT_1_PL,
} from './mocks/pages/business-help-and-support.page';
import { PAGE_BUSINESS_DE, PAGE_BUSINESS_EN, PAGE_BUSINESS_PL } from './mocks/pages/business.page';
import {
    PAGE_FINANCES_AND_SAVINGS_BUSINESS_DE,
    PAGE_FINANCES_AND_SAVINGS_BUSINESS_EN,
    PAGE_FINANCES_AND_SAVINGS_BUSINESS_PL,
    PAGE_FINANCES_AND_SAVINGS_PERSONAL_DE,
    PAGE_FINANCES_AND_SAVINGS_PERSONAL_EN,
    PAGE_FINANCES_AND_SAVINGS_PERSONAL_PL,
} from './mocks/pages/category.page';
import { PAGE_HOME_DE, PAGE_HOME_EN, PAGE_HOME_PL } from './mocks/pages/home.page';
import {
    PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_DE,
    PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_EN,
    PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_PL,
} from './mocks/pages/personal-accounts-everyday-account.page';
import {
    PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_DE,
    PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_EN,
    PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_PL,
} from './mocks/pages/personal-accounts-savings-account.page';
import {
    PAGE_PERSONAL_ACCOUNTS_DE,
    PAGE_PERSONAL_ACCOUNTS_EN,
    PAGE_PERSONAL_ACCOUNTS_PL,
} from './mocks/pages/personal-accounts.page';
import {
    PAGE_PERSONAL_CARDS_CREDIT_CARD_DE,
    PAGE_PERSONAL_CARDS_CREDIT_CARD_EN,
    PAGE_PERSONAL_CARDS_CREDIT_CARD_PL,
} from './mocks/pages/personal-cards-credit-card.page';
import {
    PAGE_PERSONAL_CARDS_DEBIT_CARD_DE,
    PAGE_PERSONAL_CARDS_DEBIT_CARD_EN,
    PAGE_PERSONAL_CARDS_DEBIT_CARD_PL,
} from './mocks/pages/personal-cards-debit-card.page';
import {
    PAGE_PERSONAL_CARDS_DE,
    PAGE_PERSONAL_CARDS_EN,
    PAGE_PERSONAL_CARDS_PL,
} from './mocks/pages/personal-cards.page';
import {
    PAGE_PERSONAL_HELP_AND_SUPPORT_1_DE,
    PAGE_PERSONAL_HELP_AND_SUPPORT_1_EN,
    PAGE_PERSONAL_HELP_AND_SUPPORT_1_PL,
} from './mocks/pages/personal-help-and-support.page';
import {
    PAGE_PERSONAL_INSURANCE_HOME_INSURANCE_DE,
    PAGE_PERSONAL_INSURANCE_HOME_INSURANCE_EN,
    PAGE_PERSONAL_INSURANCE_HOME_INSURANCE_PL,
} from './mocks/pages/personal-insurance-home-insurance.page';
import {
    PAGE_PERSONAL_INSURANCE_TRAVEL_INSURANCE_DE,
    PAGE_PERSONAL_INSURANCE_TRAVEL_INSURANCE_EN,
    PAGE_PERSONAL_INSURANCE_TRAVEL_INSURANCE_PL,
} from './mocks/pages/personal-insurance-travel-insurance.page';
import {
    PAGE_PERSONAL_INSURANCE_DE,
    PAGE_PERSONAL_INSURANCE_EN,
    PAGE_PERSONAL_INSURANCE_PL,
} from './mocks/pages/personal-insurance.page';
import { PAGE_PERSONAL_DE, PAGE_PERSONAL_EN, PAGE_PERSONAL_PL } from './mocks/pages/personal.page';

export const mapPage = (slug: string, locale: string): CMS.Model.Page.Page | undefined => {
    switch (slug) {
        case '/':
            return locale === 'en' ? PAGE_HOME_EN : locale === 'de' ? PAGE_HOME_DE : PAGE_HOME_PL;

        case '/personal':
            return PAGE_PERSONAL_EN;

        case '/personlich':
            return PAGE_PERSONAL_DE;

        case '/indywidualny':
            return PAGE_PERSONAL_PL;

        case '/personal/accounts':
            return PAGE_PERSONAL_ACCOUNTS_EN;

        case '/personlich/konten':
            return PAGE_PERSONAL_ACCOUNTS_DE;

        case '/indywidualny/konta':
            return PAGE_PERSONAL_ACCOUNTS_PL;

        case '/personal/accounts/savings-account':
            return PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_EN;

        case '/personlich/konten/sparen-konto':
            return PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_DE;

        case '/indywidualny/konta/konto-oszczednosciowe':
            return PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_PL;

        case '/personal/accounts/everyday-account':
            return PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_EN;

        case '/personlich/konten/tageskonto':
            return PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_DE;

        case '/indywidualny/konta/konto-codzienne':
            return PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_PL;

        case '/personal/cards':
            return PAGE_PERSONAL_CARDS_EN;

        case '/personlich/karten':
            return PAGE_PERSONAL_CARDS_DE;

        case '/indywidualny/karty':
            return PAGE_PERSONAL_CARDS_PL;

        case '/personal/cards/debit-card':
            return PAGE_PERSONAL_CARDS_DEBIT_CARD_EN;

        case '/personlich/karten/debit-karte':
            return PAGE_PERSONAL_CARDS_DEBIT_CARD_DE;

        case '/indywidualny/karty/karta-debetowa':
            return PAGE_PERSONAL_CARDS_DEBIT_CARD_PL;

        case '/personal/cards/credit-card':
            return PAGE_PERSONAL_CARDS_CREDIT_CARD_EN;

        case '/personlich/karten/kredit-karte':
            return PAGE_PERSONAL_CARDS_CREDIT_CARD_DE;

        case '/indywidualny/karty/karta-kredytowa':
            return PAGE_PERSONAL_CARDS_CREDIT_CARD_PL;

        case '/personal/insurance':
            return PAGE_PERSONAL_INSURANCE_EN;

        case '/personlich/versicherungen':
            return PAGE_PERSONAL_INSURANCE_DE;

        case '/indywidualny/ubezpieczenia':
            return PAGE_PERSONAL_INSURANCE_PL;

        case '/personal/insurance/travel-insurance':
            return PAGE_PERSONAL_INSURANCE_TRAVEL_INSURANCE_EN;

        case '/personlich/versicherungen/reiseversicherung':
            return PAGE_PERSONAL_INSURANCE_TRAVEL_INSURANCE_DE;

        case '/indywidualny/ubezpieczenia/ubezpieczenie-podrozy':
            return PAGE_PERSONAL_INSURANCE_TRAVEL_INSURANCE_PL;

        case '/personal/insurance/home-insurance':
            return PAGE_PERSONAL_INSURANCE_HOME_INSURANCE_EN;

        case '/personlich/versicherungen/hausversicherung':
            return PAGE_PERSONAL_INSURANCE_HOME_INSURANCE_DE;

        case '/indywidualny/ubezpieczenia/ubezpieczenie-domu':
            return PAGE_PERSONAL_INSURANCE_HOME_INSURANCE_PL;

        case '/business':
            return PAGE_BUSINESS_EN;

        case '/geschaftlich':
            return PAGE_BUSINESS_DE;

        case '/firma':
            return PAGE_BUSINESS_PL;

        case '/business/accounts':
            return PAGE_BUSINESS_ACCOUNTS_EN;

        case '/geschaftlich/konten':
            return PAGE_BUSINESS_ACCOUNTS_DE;

        case '/firma/konta':
            return PAGE_BUSINESS_ACCOUNTS_PL;

        case '/business/accounts/standard':
            return PAGE_BUSINESS_ACCOUNTS_STANDARD_EN;

        case '/geschaftlich/konten/standard':
            return PAGE_BUSINESS_ACCOUNTS_STANDARD_DE;

        case '/firma/konta/standard':
            return PAGE_BUSINESS_ACCOUNTS_STANDARD_PL;

        case '/business/accounts/growth':
            return PAGE_BUSINESS_ACCOUNTS_GROWTH_EN;

        case '/geschaftlich/konten/growth':
            return PAGE_BUSINESS_ACCOUNTS_GROWTH_DE;

        case '/firma/konta/growth':
            return PAGE_BUSINESS_ACCOUNTS_GROWTH_PL;

        case '/business/cards':
            return PAGE_BUSINESS_CARDS_EN;

        case '/geschaftlich/karten':
            return PAGE_BUSINESS_CARDS_DE;

        case '/firma/karten':
            return PAGE_BUSINESS_CARDS_PL;

        case '/business/cards/business-debit':
            return PAGE_BUSINESS_CARDS_BUSINESS_DEBIT_EN;

        case '/geschaftlich/karten/business-debit':
            return PAGE_BUSINESS_CARDS_BUSINESS_DEBIT_DE;

        case '/firma/karty/business-debit':
            return PAGE_BUSINESS_CARDS_BUSINESS_DEBIT_PL;

        case '/business/cards/business-expense':
            return PAGE_BUSINESS_CARDS_BUSINESS_EXPENSE_EN;

        case '/geschaftlich/karten/business-expense':
            return PAGE_BUSINESS_CARDS_BUSINESS_EXPENSE_DE;

        case '/firma/karty/business-expense':
            return PAGE_BUSINESS_CARDS_BUSINESS_EXPENSE_PL;

        case '/personal/help-and-support':
            return PAGE_PERSONAL_HELP_AND_SUPPORT_1_EN;

        case '/personlich/hilfe-und-support':
            return PAGE_PERSONAL_HELP_AND_SUPPORT_1_DE;

        case '/indywidualny/pomoc-i-wsparcie':
            return PAGE_PERSONAL_HELP_AND_SUPPORT_1_PL;

        case '/business/help-and-support':
            return PAGE_BUSINESS_HELP_AND_SUPPORT_1_EN;

        case '/geschaftlich/hilfe-und-support':
            return PAGE_BUSINESS_HELP_AND_SUPPORT_1_DE;

        case '/firma/pomoc-i-wsparcie':
            return PAGE_BUSINESS_HELP_AND_SUPPORT_1_PL;

        case '/personal/help-and-support/finance-and-savings':
            return PAGE_FINANCES_AND_SAVINGS_PERSONAL_EN;

        case '/personlich/hilfe-und-support/finanzen-und-sparen':
            return PAGE_FINANCES_AND_SAVINGS_PERSONAL_DE;

        case '/indywidualny/pomoc-i-wsparcie/finanse-i-oszczednosci':
            return PAGE_FINANCES_AND_SAVINGS_PERSONAL_PL;

        case '/business/help-and-support/finance-and-savings':
            return PAGE_FINANCES_AND_SAVINGS_BUSINESS_EN;

        case '/geschaftlich/hilfe-und-support/finanzen-und-sparen':
            return PAGE_FINANCES_AND_SAVINGS_BUSINESS_DE;

        case '/firma/pomoc-i-wsparcie/finanse-i-oszczednosci':
            return PAGE_FINANCES_AND_SAVINGS_BUSINESS_PL;

        default:
            return undefined;
    }
};

export const getAllPages = (locale: string): CMS.Model.Page.Page[] => {
    switch (locale) {
        case 'pl':
            return [
                PAGE_BUSINESS_PL,
                PAGE_PERSONAL_HELP_AND_SUPPORT_1_PL,
                PAGE_BUSINESS_HELP_AND_SUPPORT_1_PL,
                PAGE_PERSONAL_ACCOUNTS_PL,
                PAGE_BUSINESS_ACCOUNTS_PL,
                PAGE_PERSONAL_PL,
                PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_PL,
                PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_PL,
                PAGE_PERSONAL_CARDS_PL,
                PAGE_PERSONAL_CARDS_DEBIT_CARD_PL,
                PAGE_FINANCES_AND_SAVINGS_PERSONAL_PL,
                PAGE_FINANCES_AND_SAVINGS_BUSINESS_PL,
            ];
        case 'de':
            return [
                PAGE_BUSINESS_DE,
                PAGE_PERSONAL_HELP_AND_SUPPORT_1_DE,
                PAGE_BUSINESS_HELP_AND_SUPPORT_1_DE,
                PAGE_PERSONAL_ACCOUNTS_DE,
                PAGE_BUSINESS_ACCOUNTS_DE,
                PAGE_PERSONAL_DE,
                PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_DE,
                PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_DE,
                PAGE_PERSONAL_CARDS_DE,
                PAGE_PERSONAL_CARDS_DEBIT_CARD_DE,
                PAGE_FINANCES_AND_SAVINGS_PERSONAL_DE,
                PAGE_FINANCES_AND_SAVINGS_BUSINESS_DE,
            ];
        case 'en':
            return [
                PAGE_BUSINESS_EN,
                PAGE_PERSONAL_HELP_AND_SUPPORT_1_EN,
                PAGE_BUSINESS_HELP_AND_SUPPORT_1_EN,
                PAGE_PERSONAL_ACCOUNTS_EN,
                PAGE_BUSINESS_ACCOUNTS_EN,
                PAGE_PERSONAL_EN,
                PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_EN,
                PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_EN,
                PAGE_PERSONAL_CARDS_EN,
                PAGE_PERSONAL_CARDS_DEBIT_CARD_EN,
                PAGE_FINANCES_AND_SAVINGS_PERSONAL_EN,
                PAGE_FINANCES_AND_SAVINGS_BUSINESS_EN,
            ];
        default:
            return [];
    }
};

export const getAlternativePages = (id: string, slug: string, locale: string): CMS.Model.Page.Page[] => {
    return [
        PAGE_BUSINESS_DE,
        PAGE_BUSINESS_EN,
        PAGE_BUSINESS_PL,
        PAGE_PERSONAL_DE,
        PAGE_PERSONAL_EN,
        PAGE_PERSONAL_PL,
        PAGE_PERSONAL_ACCOUNTS_DE,
        PAGE_PERSONAL_ACCOUNTS_EN,
        PAGE_PERSONAL_ACCOUNTS_PL,
        PAGE_BUSINESS_ACCOUNTS_DE,
        PAGE_BUSINESS_ACCOUNTS_EN,
        PAGE_BUSINESS_ACCOUNTS_PL,
        PAGE_PERSONAL_CARDS_DE,
        PAGE_PERSONAL_CARDS_EN,
        PAGE_PERSONAL_CARDS_PL,
        PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_DE,
        PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_EN,
        PAGE_PERSONAL_ACCOUNTS_EVERYDAY_ACCOUNT_PL,
        PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_DE,
        PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_EN,
        PAGE_PERSONAL_ACCOUNTS_SAVINGS_ACCOUNT_PL,
        PAGE_PERSONAL_CARDS_DEBIT_CARD_DE,
        PAGE_PERSONAL_CARDS_DEBIT_CARD_EN,
        PAGE_PERSONAL_CARDS_DEBIT_CARD_PL,
        PAGE_PERSONAL_HELP_AND_SUPPORT_1_EN,
        PAGE_PERSONAL_HELP_AND_SUPPORT_1_DE,
        PAGE_PERSONAL_HELP_AND_SUPPORT_1_PL,
        PAGE_BUSINESS_HELP_AND_SUPPORT_1_EN,
        PAGE_BUSINESS_HELP_AND_SUPPORT_1_DE,
        PAGE_BUSINESS_HELP_AND_SUPPORT_1_PL,
        PAGE_FINANCES_AND_SAVINGS_PERSONAL_PL,
        PAGE_FINANCES_AND_SAVINGS_BUSINESS_PL,
        PAGE_FINANCES_AND_SAVINGS_PERSONAL_DE,
        PAGE_FINANCES_AND_SAVINGS_BUSINESS_DE,
        PAGE_FINANCES_AND_SAVINGS_PERSONAL_EN,
        PAGE_FINANCES_AND_SAVINGS_BUSINESS_EN,
    ]
        .filter((page) => page.id === id)
        .map((page) => {
            return mapPage(page.slug, locale)!;
        })
        .map((page) => {
            return {
                ...page,
                slug: page.slug.replace('(.+)', slug.match(/(.+)\/(.+)/)?.[2] || ''),
            };
        });
};
