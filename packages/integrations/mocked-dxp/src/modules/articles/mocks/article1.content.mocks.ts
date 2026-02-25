import { Articles } from '@o2s/framework/modules';

// Helper function to create a business version of an article
const createBusinessVersion = (article: Articles.Model.Article): Articles.Model.Article => {
    let slug = article.slug;
    const type =
        slug.includes('/personal/') || slug.includes('/personlich/') || slug.includes('/indywidualny/')
            ? 'business'
            : 'personal';

    // Handle different language versions
    if (slug.includes('/personal/')) {
        slug = slug.replaceAll('/personal/', '/business/');
    } else if (slug.includes('/personlich/')) {
        slug = slug.replaceAll('/personlich/', '/geschaftlich/');
    } else if (slug.includes('/indywidualny/')) {
        slug = slug.replaceAll('/indywidualny/', '/firma/');
    }

    return {
        ...article,
        id: article.id.replaceAll('art-', `art-${type}-`),
        theme: type,
        slug: slug,
        category: article.category
            ? {
                  ...article.category,
                  id: article.category.id.replaceAll('personal', type),
              }
            : undefined,
    };
};

export const MOCK_ARTICLE1_EN: Articles.Model.Article[] = [
    {
        id: 'art-001',
        slug: '/personal/help-and-support/finance-and-savings/smart-budgeting-strategies-for-financial-success',
        theme: 'personal',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Smart Budgeting Strategies for Financial Success',
        lead: 'Master your finances with proven budgeting techniques that help you save more and spend wisely.',
        tags: ['budgeting', 'savings', 'financial-planning'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-56.png',
            width: 640,
            height: 427,
            alt: 'Financial planning',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-56.png',
            alt: 'Financial planning thumbnail',
        },
        category: {
            id: 'finance-and-savings-personal',
            title: 'Finance & Savings',
        },
        author: {
            name: 'Jane Doe',
            position: 'Financial Advisor',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-002-3',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Why Budgeting is Essential for Financial Health',
                content: `
Creating and maintaining a budget is the foundation of financial wellness. A well-planned budget gives you visibility into your income and expenses, helps you prioritize financial goals, and provides a roadmap for achieving them. Without proper budgeting, it's easy to overspend, accumulate debt, and miss opportunities to build wealth. By implementing smart budgeting strategies, individuals can reduce financial stress, increase savings, and make progress toward important life goals like homeownership, education, or retirement. Whether you're just starting your financial journey or looking to optimize your existing approach, these best practices will help you take control of your money.

# The 50/30/20 Rule: A Simple Framework

One of the most accessible budgeting methods is the 50/30/20 rule. Allocate 50% of your after-tax income to necessities (housing, food, utilities), 30% to wants (entertainment, dining out), and 20% to savings and debt repayment. This balanced approach ensures you're covering essentials while still enjoying life and building financial security.

# Zero-Based Budgeting: Give Every Dollar a Purpose

With zero-based budgeting, you assign a specific purpose to every dollar of income until your balance reaches zero. This doesn't mean spending everything—it means allocating funds to savings and investments as well as expenses. This method increases accountability and helps eliminate wasteful spending by forcing you to justify each expenditure.

# Leverage Technology for Better Money Management

Modern budgeting apps and digital banking tools can automatically categorize expenses, track spending patterns, and alert you to unusual activity. Many offer features like bill payment reminders, savings goals tracking, and investment monitoring. Using these tools can simplify the budgeting process and provide valuable insights into your financial habits.
`,
            },
            {
                id: 'sect-002-4',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Making Your Budget Sustainable',
                content: `
Effective budgeting isn't a one-time exercise—it's an ongoing practice that evolves with your life circumstances. Review your budget monthly, adjust categories as needed, and celebrate your progress. Build in some flexibility for unexpected expenses and occasional treats to avoid feeling restricted. Remember that the ultimate goal isn't just to limit spending but to align your financial habits with your values and long-term objectives. By consistently applying these budgeting strategies, you'll develop greater financial confidence and move steadily toward your goals.
`,
            },
        ],
    },
];

export const MOCK_ARTICLE1_DE: Articles.Model.Article[] = [
    {
        id: 'art-001',
        slug: '/personlich/hilfe-und-support/finanzen-und-sparen/intelligente-budgetierungsstrategien-fuer-finanziellen-erfolg',
        theme: 'personal',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Intelligente Budgetierungsstrategien für finanziellen Erfolg',
        lead: 'Beherrschen Sie Ihre Finanzen mit bewährten Budgetierungstechniken, die Ihnen helfen, mehr zu sparen und klug auszugeben.',
        tags: ['budgetierung', 'sparen', 'finanzplanung'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-56.png',
            width: 640,
            height: 427,
            alt: 'Finanzplanung',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-56.png',
            alt: 'Finanzplanung Thumbnail',
        },
        category: {
            id: 'finance-and-savings-personal',
            title: 'Finanzen & Sparen',
        },
        author: {
            name: 'Jane Doe',
            position: 'Finanzberaterin',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-002-3',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Warum Budgetierung für die finanzielle Gesundheit unerlässlich ist',
                content: `
Die Erstellung und Pflege eines Budgets ist die Grundlage für finanzielles Wohlbefinden. Ein gut geplantes Budget gibt Ihnen Einblick in Ihre Einnahmen und Ausgaben, hilft Ihnen, finanzielle Ziele zu priorisieren und bietet einen Fahrplan, um diese zu erreichen. Ohne ordnungsgemäße Budgetierung ist es leicht, zu viel auszugeben, Schulden anzuhäufen und Möglichkeiten zum Vermögensaufbau zu verpassen. Durch die Implementierung intelligenter Budgetierungsstrategien können Einzelpersonen finanziellen Stress reduzieren, Ersparnisse erhöhen und Fortschritte bei wichtigen Lebenszielen wie Eigenheimbesitz, Bildung oder Ruhestand erzielen. Ob Sie gerade erst mit Ihrer finanziellen Reise beginnen oder Ihren bestehenden Ansatz optimieren möchten, diese bewährten Praktiken helfen Ihnen, die Kontrolle über Ihr Geld zu übernehmen.

# Die 50/30/20-Regel: Ein einfacher Rahmen

Eine der zugänglichsten Budgetierungsmethoden ist die 50/30/20-Regel. Weisen Sie 50% Ihres Nettoeinkommens für Notwendigkeiten (Wohnen, Lebensmittel, Versorgungsleistungen), 30% für Wünsche (Unterhaltung, Auswärtsessen) und 20% für Sparen und Schuldenrückzahlung zu. Dieser ausgewogene Ansatz stellt sicher, dass Sie das Wesentliche abdecken, während Sie das Leben genießen und finanzielle Sicherheit aufbauen.

# Zero-Based Budgeting: Geben Sie jedem Euro einen Zweck

Beim Zero-Based Budgeting weisen Sie jedem Euro Ihres Einkommens einen bestimmten Zweck zu, bis Ihr Kontostand Null erreicht. Das bedeutet nicht, alles auszugeben – es bedeutet, Mittel für Sparen und Investitionen sowie für Ausgaben zuzuweisen. Diese Methode erhöht die Verantwortlichkeit und hilft, verschwenderische Ausgaben zu eliminieren, indem sie Sie zwingt, jede Ausgabe zu rechtfertigen.

# Nutzen Sie Technologie für besseres Geldmanagement

Moderne Budgetierungs-Apps und digitale Banking-Tools können Ausgaben automatisch kategorisieren, Ausgabenmuster verfolgen und Sie vor ungewöhnlichen Aktivitäten warnen. Viele bieten Funktionen wie Zahlungserinnerungen, Tracking von Sparzielen und Investitionsüberwachung. Die Verwendung dieser Tools kann den Budgetierungsprozess vereinfachen und wertvolle Einblicke in Ihre finanziellen Gewohnheiten bieten.
`,
            },
            {
                id: 'sect-002-4',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Ihr Budget nachhaltig gestalten',
                content: `
Effektive Budgetierung ist keine einmalige Übung – es ist eine fortlaufende Praxis, die sich mit Ihren Lebensumständen weiterentwickelt. Überprüfen Sie Ihr Budget monatlich, passen Sie Kategorien nach Bedarf an und feiern Sie Ihre Fortschritte. Bauen Sie etwas Flexibilität für unerwartete Ausgaben und gelegentliche Belohnungen ein, um sich nicht eingeschränkt zu fühlen. Denken Sie daran, dass das ultimative Ziel nicht nur darin besteht, Ausgaben zu begrenzen, sondern Ihre finanziellen Gewohnheiten mit Ihren Werten und langfristigen Zielen in Einklang zu bringen. Durch die konsequente Anwendung dieser Budgetierungsstrategien werden Sie größeres finanzielles Vertrauen entwickeln und stetig auf Ihre Ziele zusteuern.
`,
            },
        ],
    },
];

export const MOCK_ARTICLE1_PL: Articles.Model.Article[] = [
    {
        id: 'art-001',
        slug: '/indywidualny/pomoc-i-wsparcie/finanse-i-oszczednosci/inteligentne-strategie-budzetowania-dla-sukcesu-finansowego',
        theme: 'personal',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Inteligentne strategie budżetowania dla sukcesu finansowego',
        lead: 'Opanuj swoje finanse dzięki sprawdzonym technikom budżetowania, które pomogą Ci więcej oszczędzać i mądrze wydawać.',
        tags: ['budżetowanie', 'oszczędności', 'planowanie-finansowe'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-56.png',
            width: 640,
            height: 427,
            alt: 'Planowanie finansowe',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-56.png',
            alt: 'Miniatura planowania finansowego',
        },
        category: {
            id: 'finance-and-savings-personal',
            title: 'Finanse i Oszczędności',
        },
        author: {
            name: 'Jane Doe',
            position: 'Doradca Finansowy',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-002-3',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Dlaczego budżetowanie jest niezbędne dla zdrowia finansowego',
                content: `
Tworzenie i utrzymywanie budżetu jest podstawą dobrostanu finansowego. Dobrze zaplanowany budżet daje wgląd w dochody i wydatki, pomaga ustalić priorytety celów finansowych i dostarcza mapę drogową do ich osiągnięcia. Bez odpowiedniego budżetowania łatwo jest wydawać za dużo, gromadzić długi i przegapiać okazje do budowania majątku. Wdrażając inteligentne strategie budżetowania, osoby mogą zmniejszyć stres finansowy, zwiększyć oszczędności i poczynić postępy w realizacji ważnych celów życiowych, takich jak posiadanie domu, edukacja czy emerytura. Niezależnie od tego, czy dopiero rozpoczynasz swoją podróż finansową, czy chcesz zoptymalizować swoje obecne podejście, te najlepsze praktyki pomogą Ci przejąć kontrolę nad swoimi pieniędzmi.

# Zasada 50/30/20: Prosta struktura

Jedną z najbardziej dostępnych metod budżetowania jest zasada 50/30/20. Przeznacz 50% dochodu po opodatkowaniu na potrzeby (mieszkanie, żywność, media), 30% na zachcianki (rozrywka, jedzenie na mieście) i 20% na oszczędności i spłatę długów. To zrównoważone podejście zapewnia, że pokrywasz podstawowe potrzeby, jednocześnie ciesząc się życiem i budując bezpieczeństwo finansowe.

# Budżetowanie od zera: Nadaj każdej złotówce cel

Przy budżetowaniu od zera przypisujesz konkretny cel każdej złotówce dochodu, aż saldo osiągnie zero. Nie oznacza to wydawania wszystkiego – oznacza to przydzielanie środków na oszczędności i inwestycje, a także na wydatki. Ta metoda zwiększa odpowiedzialność i pomaga wyeliminować marnotrawne wydatki, zmuszając Cię do uzasadnienia każdego wydatku.

# Wykorzystaj technologię do lepszego zarządzania pieniędzmi

Nowoczesne aplikacje do budżetowania i cyfrowe narzędzia bankowe mogą automatycznie kategoryzować wydatki, śledzić wzorce wydatków i ostrzegać o nietypowej aktywności. Wiele z nich oferuje funkcje takie jak przypomnienia o płatnościach, śledzenie celów oszczędnościowych i monitorowanie inwestycji. Korzystanie z tych narzędzi może uprościć proces budżetowania i dostarczyć cennych informacji na temat Twoich nawyków finansowych.
`,
            },
            {
                id: 'sect-002-4',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Jak uczynić swój budżet zrównoważonym',
                content: `
Efektywne budżetowanie nie jest jednorazowym ćwiczeniem – to ciągła praktyka, która ewoluuje wraz z okolicznościami życiowymi. Przeglądaj swój budżet co miesiąc, dostosowuj kategorie w razie potrzeby i świętuj swoje postępy. Uwzględnij pewną elastyczność na nieoczekiwane wydatki i okazjonalne przyjemności, aby uniknąć poczucia ograniczenia. Pamiętaj, że ostatecznym celem nie jest tylko ograniczenie wydatków, ale dostosowanie nawyków finansowych do Twoich wartości i długoterminowych celów. Konsekwentnie stosując te strategie budżetowania, rozwiniesz większą pewność finansową i będziesz stale zmierzać w kierunku swoich celów.
`,
            },
        ],
    },
];

// Create business versions of the articles
export const MOCK_ARTICLE1_BUSINESS_EN: Articles.Model.Article[] = MOCK_ARTICLE1_EN.map(createBusinessVersion);
export const MOCK_ARTICLE1_BUSINESS_DE: Articles.Model.Article[] = MOCK_ARTICLE1_DE.map(createBusinessVersion);
export const MOCK_ARTICLE1_BUSINESS_PL: Articles.Model.Article[] = MOCK_ARTICLE1_PL.map(createBusinessVersion);
