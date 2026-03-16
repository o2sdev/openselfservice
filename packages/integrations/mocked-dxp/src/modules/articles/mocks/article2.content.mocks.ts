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

export const MOCK_ARTICLE2_EN: Articles.Model.Article[] = [
    {
        id: 'art-002',
        slug: '/personal/help-and-support/finance-and-savings/understanding-insurance-types-for-complete-protection',
        theme: 'personal',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Understanding Insurance Types for Complete Protection',
        lead: 'Navigate the complex world of insurance to ensure you and your loved ones are properly protected against life uncertainties.',
        tags: ['insurance', 'financial-planning', 'risk-management'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-6.png',
            width: 640,
            height: 427,
            alt: 'Insurance protection',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-6.png',
            alt: 'Insurance protection thumbnail',
        },
        category: {
            id: 'finance-and-savings-personal',
            title: 'Finance & Savings',
        },
        author: {
            name: 'Jane Doe',
            position: 'Insurance Specialist',
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
                title: 'Why Insurance is Essential for Financial Security',
                content: `
Insurance is a fundamental component of a comprehensive financial plan, providing a safety net against unexpected events that could otherwise lead to financial hardship. While many people view insurance as an unnecessary expense, it's actually an investment in your future security and peace of mind. Without adequate coverage, a single accident, illness, or disaster could deplete your savings and even lead to debt. By understanding the different types of insurance available and how they work together, you can create a protection strategy that safeguards your assets, income, and loved ones. Whether you're just starting out or reviewing your existing coverage, this guide will help you make informed decisions about your insurance needs.

# Life Insurance: Protecting Your Loved Ones

Life insurance provides financial support to your dependents in the event of your death. There are two main types: term life, which covers you for a specific period, and permanent life, which provides lifelong coverage and may include an investment component. The amount of coverage you need depends on factors like your income, debts, and the number of people who rely on you financially. Consider not just immediate expenses like funeral costs, but also long-term needs like mortgage payments, education expenses, and income replacement.

# Health Insurance: Managing Medical Costs

Health insurance helps cover the cost of medical care, from routine check-ups to emergency treatments and chronic condition management. With healthcare costs continuing to rise, having comprehensive health coverage is crucial for preventing financial strain during illness or injury. When selecting a plan, consider factors like premium costs, deductibles, co-pays, network restrictions, and coverage for prescription medications. Many employers offer health insurance benefits, but individual plans are also available through government marketplaces or private insurers.

# Property and Casualty Insurance: Protecting Your Assets

Homeowners or renters insurance protects your dwelling and possessions against damage or theft, while auto insurance covers vehicle-related losses and liability. Additional policies like umbrella insurance provide extra liability protection beyond the limits of your standard policies. When evaluating property insurance, consider replacement cost versus actual cash value coverage, deductible amounts, and additional endorsements for high-value items or specific perils not covered by standard policies.
`,
            },
            {
                id: 'sect-002-4',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Building Your Insurance Portfolio',
                content: `
Creating a comprehensive insurance portfolio requires balancing coverage needs with budget constraints. Start by identifying your most significant risks and prioritizing coverage accordingly. Work with knowledgeable insurance professionals who can help you understand policy details and find the best options for your situation. Review your coverage annually or whenever you experience major life changes like marriage, having children, buying a home, or changing jobs. Remember that the goal isn't to be over-insured, but rather to have the right types and amounts of coverage to protect what matters most to you. With a thoughtfully designed insurance strategy, you can face the future with confidence, knowing you've taken steps to shield yourself and your family from financial hardship.
`,
            },
        ],
    },
];

export const MOCK_ARTICLE2_DE: Articles.Model.Article[] = [
    {
        id: 'art-002',
        slug: '/personlich/hilfe-und-support/finanzen-und-sparen/versicherungsarten-verstehen-fuer-vollstaendigen-schutz',
        theme: 'personal',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Versicherungsarten verstehen für vollständigen Schutz',
        lead: 'Navigieren Sie durch die komplexe Welt der Versicherungen, um sicherzustellen, dass Sie und Ihre Lieben vor den Unwägbarkeiten des Lebens angemessen geschützt sind.',
        tags: ['versicherung', 'finanzplanung', 'risikomanagement'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-6.png',
            width: 640,
            height: 427,
            alt: 'Versicherungsschutz',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-6.png',
            alt: 'Versicherungsschutz Thumbnail',
        },
        category: {
            id: 'finance-and-savings-personal',
            title: 'Finanzen & Sparen',
        },
        author: {
            name: 'Jane Doe',
            position: 'Versicherungsspezialistin',
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
                title: 'Warum Versicherungen für die finanzielle Sicherheit unerlässlich sind',
                content: `
Versicherungen sind ein grundlegender Bestandteil eines umfassenden Finanzplans und bieten ein Sicherheitsnetz gegen unerwartete Ereignisse, die sonst zu finanziellen Schwierigkeiten führen könnten. Während viele Menschen Versicherungen als unnötige Ausgabe betrachten, handelt es sich tatsächlich um eine Investition in Ihre zukünftige Sicherheit und Ihren Seelenfrieden. Ohne ausreichenden Versicherungsschutz könnte ein einziger Unfall, eine Krankheit oder eine Katastrophe Ihre Ersparnisse aufzehren und sogar zu Schulden führen. Indem Sie die verschiedenen verfügbaren Versicherungsarten und deren Zusammenwirken verstehen, können Sie eine Schutzstrategie entwickeln, die Ihr Vermögen, Ihr Einkommen und Ihre Lieben absichert. Ob Sie gerade erst anfangen oder Ihren bestehenden Versicherungsschutz überprüfen, dieser Leitfaden hilft Ihnen, fundierte Entscheidungen über Ihren Versicherungsbedarf zu treffen.

# Lebensversicherung: Schutz Ihrer Angehörigen

Eine Lebensversicherung bietet Ihren Angehörigen im Todesfall finanzielle Unterstützung. Es gibt zwei Haupttypen: die Risikolebensversicherung, die Sie für einen bestimmten Zeitraum abdeckt, und die permanente Lebensversicherung, die lebenslangen Schutz bietet und möglicherweise eine Investitionskomponente enthält. Die Höhe des benötigten Versicherungsschutzes hängt von Faktoren wie Ihrem Einkommen, Ihren Schulden und der Anzahl der Personen ab, die finanziell von Ihnen abhängig sind. Berücksichtigen Sie nicht nur unmittelbare Ausgaben wie Beerdigungskosten, sondern auch langfristige Bedürfnisse wie Hypothekenzahlungen, Bildungsausgaben und Einkommensersatz.

# Krankenversicherung: Verwaltung medizinischer Kosten

Die Krankenversicherung hilft, die Kosten für medizinische Versorgung zu decken, von Routineuntersuchungen bis hin zu Notfallbehandlungen und der Behandlung chronischer Erkrankungen. Da die Gesundheitskosten weiter steigen, ist ein umfassender Krankenversicherungsschutz entscheidend, um finanzielle Belastungen während Krankheit oder Verletzung zu vermeiden. Bei der Auswahl eines Plans sollten Sie Faktoren wie Prämienkosten, Selbstbehalte, Zuzahlungen, Netzwerkbeschränkungen und die Abdeckung von verschreibungspflichtigen Medikamenten berücksichtigen. Viele Arbeitgeber bieten Krankenversicherungsleistungen an, aber individuelle Pläne sind auch über staatliche Marktplätze oder private Versicherer erhältlich.

# Sach- und Haftpflichtversicherung: Schutz Ihres Vermögens

Eine Hausrat- oder Mietversicherung schützt Ihre Wohnung und Besitztümer vor Schäden oder Diebstahl, während eine Kfz-Versicherung fahrzeugbezogene Verluste und Haftpflicht abdeckt. Zusätzliche Policen wie eine Umbrella-Versicherung bieten zusätzlichen Haftpflichtschutz über die Grenzen Ihrer Standardpolicen hinaus. Bei der Bewertung von Sachversicherungen sollten Sie den Neuwert im Vergleich zum Zeitwert, die Höhe der Selbstbeteiligung und zusätzliche Ergänzungen für hochwertige Gegenstände oder spezifische Gefahren, die nicht durch Standardpolicen abgedeckt sind, berücksichtigen.
`,
            },
            {
                id: 'sect-002-4',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Aufbau Ihres Versicherungsportfolios',
                content: `
Die Erstellung eines umfassenden Versicherungsportfolios erfordert ein Gleichgewicht zwischen Deckungsbedarf und Budgetbeschränkungen. Beginnen Sie damit, Ihre bedeutendsten Risiken zu identifizieren und die Deckung entsprechend zu priorisieren. Arbeiten Sie mit sachkundigen Versicherungsfachleuten zusammen, die Ihnen helfen können, Policendetails zu verstehen und die besten Optionen für Ihre Situation zu finden. Überprüfen Sie Ihren Versicherungsschutz jährlich oder bei größeren Lebensveränderungen wie Heirat, Kinderkriegen, Hauskauf oder Jobwechsel. Denken Sie daran, dass das Ziel nicht darin besteht, überversichert zu sein, sondern die richtigen Arten und Beträge an Deckung zu haben, um das zu schützen, was Ihnen am wichtigsten ist. Mit einer durchdacht gestalteten Versicherungsstrategie können Sie der Zukunft mit Zuversicht entgegensehen, im Wissen, dass Sie Maßnahmen ergriffen haben, um sich und Ihre Familie vor finanziellen Schwierigkeiten zu schützen.
`,
            },
        ],
    },
];

export const MOCK_ARTICLE2_PL: Articles.Model.Article[] = [
    {
        id: 'art-002',
        slug: '/indywidualny/pomoc-i-wsparcie/finanse-i-oszczednosci/zrozumienie-rodzajow-ubezpieczen-dla-pelnej-ochrony',
        theme: 'personal',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Zrozumienie rodzajów ubezpieczeń dla pełnej ochrony',
        lead: 'Poruszaj się po złożonym świecie ubezpieczeń, aby zapewnić sobie i swoim bliskim odpowiednią ochronę przed niepewnościami życia.',
        tags: ['ubezpieczenie', 'planowanie-finansowe', 'zarządzanie-ryzykiem'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-6.png',
            width: 640,
            height: 427,
            alt: 'Ochrona ubezpieczeniowa',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-6.png',
            alt: 'Miniatura ochrony ubezpieczeniowej',
        },
        category: {
            id: 'finance-and-savings-personal',
            title: 'Finanse i Oszczędności',
        },
        author: {
            name: 'Jane Doe',
            position: 'Specjalista ds. Ubezpieczeń',
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
                title: 'Dlaczego ubezpieczenie jest niezbędne dla bezpieczeństwa finansowego',
                content: `
Ubezpieczenie jest fundamentalnym elementem kompleksowego planu finansowego, zapewniającym sieć bezpieczeństwa przed nieoczekiwanymi zdarzeniami, które w przeciwnym razie mogłyby prowadzić do trudności finansowych. Podczas gdy wiele osób postrzega ubezpieczenie jako niepotrzebny wydatek, w rzeczywistości jest to inwestycja w przyszłe bezpieczeństwo i spokój ducha. Bez odpowiedniego ubezpieczenia pojedynczy wypadek, choroba lub katastrofa mogłyby wyczerpać Twoje oszczędności, a nawet doprowadzić do zadłużenia. Rozumiejąc różne rodzaje dostępnych ubezpieczeń i sposób ich współdziałania, możesz stworzyć strategię ochrony, która zabezpiecza Twoje aktywa, dochody i bliskich. Niezależnie od tego, czy dopiero zaczynasz, czy przeglądasz istniejące ubezpieczenie, ten przewodnik pomoże Ci podejmować świadome decyzje dotyczące Twoich potrzeb ubezpieczeniowych.

# Ubezpieczenie na życie: Ochrona Twoich bliskich

Ubezpieczenie na życie zapewnia wsparcie finansowe Twoim bliskim w przypadku Twojej śmierci. Istnieją dwa główne rodzaje: terminowe, które obejmuje Cię przez określony czas, oraz stałe, które zapewnia dożywotnią ochronę i może zawierać komponent inwestycyjny. Wysokość potrzebnego ubezpieczenia zależy od takich czynników jak Twój dochód, zadłużenie i liczba osób, które finansowo polegają na Tobie. Rozważ nie tylko natychmiastowe wydatki, takie jak koszty pogrzebu, ale także długoterminowe potrzeby, takie jak spłaty kredytu hipotecznego, wydatki na edukację i zastąpienie dochodu.

# Ubezpieczenie zdrowotne: Zarządzanie kosztami medycznymi

Ubezpieczenie zdrowotne pomaga pokryć koszty opieki medycznej, od rutynowych badań kontrolnych po leczenie w nagłych wypadkach i zarządzanie chorobami przewlekłymi. Wraz z rosnącymi kosztami opieki zdrowotnej, posiadanie kompleksowego ubezpieczenia zdrowotnego jest kluczowe dla zapobiegania obciążeniom finansowym podczas choroby lub urazu. Wybierając plan, rozważ takie czynniki jak koszty składek, udziały własne, współpłatności, ograniczenia sieci i pokrycie leków na receptę. Wielu pracodawców oferuje świadczenia z tytułu ubezpieczenia zdrowotnego, ale indywidualne plany są również dostępne za pośrednictwem rządowych rynków lub prywatnych ubezpieczycieli.

# Ubezpieczenie majątkowe i od odpowiedzialności cywilnej: Ochrona Twoich aktywów

Ubezpieczenie domu lub mieszkania chroni Twoje mieszkanie i mienie przed uszkodzeniem lub kradzieżą, podczas gdy ubezpieczenie samochodu obejmuje straty związane z pojazdem i odpowiedzialność cywilną. Dodatkowe polisy, takie jak ubezpieczenie parasolowe, zapewniają dodatkową ochronę od odpowiedzialności cywilnej poza limitami standardowych polis. Oceniając ubezpieczenie majątkowe, rozważ pokrycie kosztów odtworzenia w porównaniu z rzeczywistą wartością pieniężną, kwoty udziału własnego i dodatkowe rozszerzenia dla przedmiotów o wysokiej wartości lub konkretnych zagrożeń nieobjętych standardowymi polisami.
`,
            },
            {
                id: 'sect-002-4',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Budowanie portfolio ubezpieczeniowego',
                content: `
Tworzenie kompleksowego portfolio ubezpieczeniowego wymaga zrównoważenia potrzeb w zakresie ochrony z ograniczeniami budżetowymi. Zacznij od zidentyfikowania najważniejszych ryzyk i odpowiedniego ustalenia priorytetów ochrony. Współpracuj z kompetentnymi specjalistami ds. ubezpieczeń, którzy mogą pomóc Ci zrozumieć szczegóły polis i znaleźć najlepsze opcje dla Twojej sytuacji. Przeglądaj swoje ubezpieczenie corocznie lub gdy doświadczasz istotnych zmian życiowych, takich jak małżeństwo, posiadanie dzieci, zakup domu lub zmiana pracy. Pamiętaj, że celem nie jest nadmierne ubezpieczenie, ale posiadanie odpowiednich rodzajów i kwot ochrony, aby zabezpieczyć to, co jest dla Ciebie najważniejsze. Dzięki przemyślanej strategii ubezpieczeniowej możesz patrzeć w przyszłość z pewnością, wiedząc, że podjąłeś kroki, aby chronić siebie i swoją rodzinę przed trudnościami finansowymi.
`,
            },
        ],
    },
];

// Create business versions of the articles
export const MOCK_ARTICLE2_BUSINESS_EN: Articles.Model.Article[] = MOCK_ARTICLE2_EN.map(createBusinessVersion);
export const MOCK_ARTICLE2_BUSINESS_DE: Articles.Model.Article[] = MOCK_ARTICLE2_DE.map(createBusinessVersion);
export const MOCK_ARTICLE2_BUSINESS_PL: Articles.Model.Article[] = MOCK_ARTICLE2_PL.map(createBusinessVersion);
