import { CMS } from '@o2s/framework/modules';

import { businessAccountsGrowthPage } from './mocks/pages/business-accounts-growth.page';
import { businessAccountsStandardPage } from './mocks/pages/business-accounts-standard.page';
import { businessAccountsPage } from './mocks/pages/business-accounts.page';
import { businessCardsBusinessDebitPage } from './mocks/pages/business-cards-business-debit.page';
import { businessCardsBusinessExpensePage } from './mocks/pages/business-cards-business-expense.page';
import { businessCardsPage } from './mocks/pages/business-cards.page';
import { businessHelpAndSupportPage } from './mocks/pages/business-help-and-support.page';
import { businessPage } from './mocks/pages/business.page';
import { financesAndSavingsBusinessPage, financesAndSavingsPersonalPage } from './mocks/pages/category.page';
import { homePage } from './mocks/pages/home.page';
import { personalAccountsEverydayAccountPage } from './mocks/pages/personal-accounts-everyday-account.page';
import { personalAccountsSavingsAccountPage } from './mocks/pages/personal-accounts-savings-account.page';
import { personalAccountsPage } from './mocks/pages/personal-accounts.page';
import { personalCardsCreditCardPage } from './mocks/pages/personal-cards-credit-card.page';
import { personalCardsDebitCardPage } from './mocks/pages/personal-cards-debit-card.page';
import { personalCardsPage } from './mocks/pages/personal-cards.page';
import { personalHelpAndSupportPage } from './mocks/pages/personal-help-and-support.page';
import { personalInsuranceHomeInsurancePage } from './mocks/pages/personal-insurance-home-insurance.page';
import { personalInsuranceTravelInsurancePage } from './mocks/pages/personal-insurance-travel-insurance.page';
import { personalInsurancePage } from './mocks/pages/personal-insurance.page';
import { personalPage } from './mocks/pages/personal.page';

/**
 * Every page this integration serves. Each one is declared once, with an entry per locale, and the
 * registry derives the routing, the page list and the localized alternates from those declarations,
 * so the three cannot list different pages.
 */
export const pages = CMS.Pages.createPageRegistry(
    [
        homePage,
        personalPage,
        personalAccountsPage,
        personalAccountsSavingsAccountPage,
        personalAccountsEverydayAccountPage,
        personalCardsPage,
        personalCardsDebitCardPage,
        personalCardsCreditCardPage,
        personalInsurancePage,
        personalInsuranceTravelInsurancePage,
        personalInsuranceHomeInsurancePage,
        businessPage,
        businessAccountsPage,
        businessAccountsStandardPage,
        businessAccountsGrowthPage,
        businessCardsPage,
        businessCardsBusinessDebitPage,
        businessCardsBusinessExpensePage,
        personalHelpAndSupportPage,
        businessHelpAndSupportPage,
        financesAndSavingsPersonalPage,
        financesAndSavingsBusinessPage,
    ],
    {
        defaults: {
            createdAt: '2025-01-01',
            updatedAt: '2025-01-01',
            seo: {
                noIndex: false,
                noFollow: false,
                description:
                    "Demo app of Digital Experience Platform Kit. Build future-proof portals with composable architecture and a modern frontend tech stack. DXP offers a Next.js boilerplate, an API integration & data normalization server, and capabilities to integrate headless APIs like CMS, CRM, Search or headless e-commerce. It's powered by Next.js, React.js, TypeScript, and NestJS.",
                keywords: [
                    'open source portal',
                    'headless portal',
                    'composable frontend',
                    'fullstack framework',
                    'composable architecture',
                    'MACH',
                    'Next.js',
                    'TypeScript',
                    'NestJS',
                    'headless integration',
                    'portal framework',
                    'headless CMS',
                    'headless self service',
                    'CRM headless frontend',
                    'e-commerce API',
                    'open-source frontend',
                    'composable CX',
                    'digital experience',
                    'digital experience platform',
                    'frontend starter',
                ],
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/dxp-social-card-1.png',
                    width: 150,
                    height: 150,
                    alt: 'Digital Experience Platform Kit - The Open Source Composable Frontend for Portals',
                },
            },
        },
    },
);

export const mapPage = (slug: string, locale: string): CMS.Model.Page.Page | undefined => pages.mapPage(slug, locale);

export const getAllPages = (locale: string): CMS.Model.Page.Page[] =>
    pages.getAllPages(locale, { includeDynamic: false });

export const getAlternativePages = (id: string, slug: string, locale: string): CMS.Model.Page.Page[] =>
    pages.getAlternativePages(id, slug, locale);
