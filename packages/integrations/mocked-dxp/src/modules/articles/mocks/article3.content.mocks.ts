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

export const MOCK_ARTICLE3_EN: Articles.Model.Article[] = [
    {
        id: 'art-003',
        slug: '/personal/help-and-support/finance-and-savings/investment-strategies-for-long-term-wealth-building',
        theme: 'personal',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Investment Strategies for Long-Term Wealth Building',
        lead: 'Learn proven investment approaches that can help you grow your wealth steadily over time while managing risk effectively.',
        tags: ['investing', 'wealth-building', 'financial-planning'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-54.png',
            width: 640,
            height: 427,
            alt: 'Investment growth',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-54.png',
            alt: 'Investment growth thumbnail',
        },
        category: {
            id: 'finance-and-savings-personal',
            title: 'Finance & Savings',
        },
        author: {
            name: 'Jane Doe',
            position: 'Investment Advisor',
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
                title: 'The Foundations of Successful Long-Term Investing',
                content: `
Building wealth through investing is a marathon, not a sprint. While get-rich-quick schemes and market timing strategies may seem appealing, research consistently shows that a disciplined, long-term approach to investing yields the most reliable results. Successful investing requires understanding fundamental principles, developing a sound strategy aligned with your goals, and maintaining the emotional discipline to stick with your plan through market fluctuations. Whether you're just starting your investment journey or looking to refine your existing approach, these time-tested strategies can help you build wealth steadily while managing risk appropriately.

# Diversification: Don't Put All Your Eggs in One Basket

Diversification is one of the most powerful risk management tools available to investors. By spreading your investments across different asset classes (stocks, bonds, real estate, etc.), sectors, and geographic regions, you can reduce the impact of poor performance in any single investment. A well-diversified portfolio tends to experience less volatility while still capturing growth opportunities. Consider using low-cost index funds or exchange-traded funds (ETFs) to easily achieve broad diversification without requiring extensive research or large amounts of capital.

# Asset Allocation Based on Your Time Horizon

Your investment time horizon—the length of time before you'll need to access your money—should significantly influence how you allocate your assets. Generally, the longer your time horizon, the more equity exposure (stocks) you can afford to have in your portfolio, as you'll have more time to recover from market downturns. As you approach your financial goal, gradually shifting toward more conservative investments (bonds, cash equivalents) can help protect your accumulated wealth. Review and adjust your asset allocation periodically as your time horizon changes.

# Dollar-Cost Averaging to Reduce Timing Risk

Rather than trying to time the market perfectly, consider investing a fixed amount at regular intervals, regardless of market conditions. This strategy, known as dollar-cost averaging, means you'll automatically buy more shares when prices are low and fewer when prices are high, potentially lowering your average cost per share over time. This approach removes much of the emotional decision-making from investing and can be particularly effective for long-term goals like retirement.
`,
            },
            {
                id: 'sect-002-4',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'The Power of Patience and Consistency',
                content: `
Successful investing is as much about managing your behavior as it is about selecting the right investments. The most significant barrier to investment success is often our own emotional reactions to market movements. Resist the urge to react to short-term market volatility or chase the latest investment trends. Instead, focus on consistently applying sound investment principles, regularly reviewing and rebalancing your portfolio, and staying committed to your long-term plan. Remember that wealth building through investing typically happens gradually over decades, not days or months. By maintaining realistic expectations, continuing to invest through market cycles, and allowing the power of compounding to work in your favor, you can build substantial wealth over time and achieve your most important financial goals.
`,
            },
        ],
    },
];

export const MOCK_ARTICLE3_DE: Articles.Model.Article[] = [
    {
        id: 'art-003',
        slug: '/personlich/hilfe-und-support/finanzen-und-sparen/anlagestrategien-fuer-langfristigen-vermoegensaufbau',
        theme: 'personal',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Anlagestrategien für langfristigen Vermögensaufbau',
        lead: 'Erfahren Sie bewährte Anlageansätze, die Ihnen helfen können, Ihr Vermögen im Laufe der Zeit stetig zu vermehren und gleichzeitig Risiken effektiv zu managen.',
        tags: ['investieren', 'vermögensaufbau', 'finanzplanung'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-54.png',
            width: 640,
            height: 427,
            alt: 'Anlagewachstum',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-54.png',
            alt: 'Anlagewachstum Thumbnail',
        },
        category: {
            id: 'finance-and-savings-personal',
            title: 'Finanzen & Sparen',
        },
        author: {
            name: 'Jane Doe',
            position: 'Anlageberaterin',
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
                title: 'Die Grundlagen erfolgreicher langfristiger Geldanlage',
                content: `
Vermögensaufbau durch Investieren ist ein Marathon, kein Sprint. Während Schnellreichwerden-Systeme und Market-Timing-Strategien verlockend erscheinen mögen, zeigt die Forschung konsequent, dass ein disziplinierter, langfristiger Anlageansatz die zuverlässigsten Ergebnisse liefert. Erfolgreiches Investieren erfordert das Verständnis grundlegender Prinzipien, die Entwicklung einer soliden, auf Ihre Ziele abgestimmten Strategie und die emotionale Disziplin, an Ihrem Plan trotz Marktschwankungen festzuhalten. Ob Sie gerade erst mit Ihrer Anlagekarriere beginnen oder Ihren bestehenden Ansatz verfeinern möchten, diese bewährten Strategien können Ihnen helfen, stetig Vermögen aufzubauen und gleichzeitig Risiken angemessen zu managen.

# Diversifikation: Legen Sie nicht alle Eier in einen Korb

Diversifikation ist eines der mächtigsten Risikomanagement-Instrumente für Anleger. Indem Sie Ihre Investitionen auf verschiedene Anlageklassen (Aktien, Anleihen, Immobilien usw.), Sektoren und geografische Regionen verteilen, können Sie die Auswirkungen schlechter Performance einzelner Anlagen reduzieren. Ein gut diversifiziertes Portfolio neigt zu geringerer Volatilität, während es gleichzeitig Wachstumschancen nutzt. Erwägen Sie die Verwendung kostengünstiger Indexfonds oder ETFs (Exchange-Traded Funds), um einfach eine breite Diversifikation zu erreichen, ohne umfangreiche Recherchen oder große Kapitalbeträge zu benötigen.

# Vermögensallokation basierend auf Ihrem Zeithorizont

Ihr Anlagehorizont – die Zeitspanne, bevor Sie auf Ihr Geld zugreifen müssen – sollte maßgeblich beeinflussen, wie Sie Ihre Vermögenswerte allokieren. Generell gilt: Je länger Ihr Zeithorizont, desto mehr Aktienexposition können Sie sich in Ihrem Portfolio leisten, da Sie mehr Zeit haben, sich von Marktabschwüngen zu erholen. Wenn Sie sich Ihrem finanziellen Ziel nähern, kann eine schrittweise Verlagerung zu konservativeren Anlagen (Anleihen, Geldmarktäquivalente) helfen, Ihr angesammeltes Vermögen zu schützen. Überprüfen und passen Sie Ihre Vermögensallokation regelmäßig an, wenn sich Ihr Zeithorizont ändert.

# Cost-Average-Effekt zur Reduzierung des Timing-Risikos

Anstatt zu versuchen, den Markt perfekt zu timen, sollten Sie erwägen, unabhängig von den Marktbedingungen regelmäßig einen festen Betrag zu investieren. Diese Strategie, bekannt als Cost-Average-Effekt, bedeutet, dass Sie automatisch mehr Anteile kaufen, wenn die Preise niedrig sind, und weniger, wenn die Preise hoch sind, was im Laufe der Zeit Ihre durchschnittlichen Kosten pro Anteil senken kann. Dieser Ansatz nimmt einen Großteil der emotionalen Entscheidungsfindung aus dem Investieren heraus und kann besonders effektiv für langfristige Ziele wie die Altersvorsorge sein.
`,
            },
            {
                id: 'sect-002-4',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Die Kraft der Geduld und Konsequenz',
                content: `
Erfolgreiches Investieren hat ebenso viel mit dem Management Ihres Verhaltens zu tun wie mit der Auswahl der richtigen Anlagen. Die größte Hürde für den Anlageerfolg sind oft unsere eigenen emotionalen Reaktionen auf Marktbewegungen. Widerstehen Sie dem Drang, auf kurzfristige Marktvolatilität zu reagieren oder den neuesten Anlagetrends nachzujagen. Konzentrieren Sie sich stattdessen darauf, konsequent solide Anlageprinzipien anzuwenden, Ihr Portfolio regelmäßig zu überprüfen und neu auszurichten und Ihrem langfristigen Plan treu zu bleiben. Denken Sie daran, dass Vermögensaufbau durch Investieren typischerweise allmählich über Jahrzehnte erfolgt, nicht über Tage oder Monate. Indem Sie realistische Erwartungen beibehalten, weiterhin durch Marktzyklen hindurch investieren und die Kraft des Zinseszinseffekts für sich arbeiten lassen, können Sie im Laufe der Zeit erhebliches Vermögen aufbauen und Ihre wichtigsten finanziellen Ziele erreichen.
`,
            },
        ],
    },
];

export const MOCK_ARTICLE3_PL: Articles.Model.Article[] = [
    {
        id: 'art-003',
        slug: '/indywidualny/pomoc-i-wsparcie/finanse-i-oszczednosci/strategie-inwestycyjne-dla-dlugoterminowego-budowania-majatku',
        theme: 'personal',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Strategie inwestycyjne dla długoterminowego budowania majątku',
        lead: 'Poznaj sprawdzone podejścia inwestycyjne, które mogą pomóc Ci systematycznie pomnażać majątek, jednocześnie efektywnie zarządzając ryzykiem.',
        tags: ['inwestowanie', 'budowanie-majątku', 'planowanie-finansowe'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-54.png',
            width: 640,
            height: 427,
            alt: 'Wzrost inwestycji',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-54.png',
            alt: 'Miniatura wzrostu inwestycji',
        },
        category: {
            id: 'finance-and-savings-personal',
            title: 'Finanse i Oszczędności',
        },
        author: {
            name: 'Jane Doe',
            position: 'Doradca Inwestycyjny',
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
                title: 'Podstawy udanego inwestowania długoterminowego',
                content: `
Budowanie majątku poprzez inwestowanie to maraton, nie sprint. Choć schematy szybkiego wzbogacenia się i strategie wyczekiwania odpowiedniego momentu na rynku mogą wydawać się atrakcyjne, badania konsekwentnie pokazują, że zdyscyplinowane, długoterminowe podejście do inwestowania przynosi najbardziej niezawodne rezultaty. Udane inwestowanie wymaga zrozumienia fundamentalnych zasad, opracowania solidnej strategii dostosowanej do Twoich celów oraz utrzymania emocjonalnej dyscypliny, aby trzymać się planu pomimo wahań rynkowych. Niezależnie od tego, czy dopiero rozpoczynasz swoją przygodę inwestycyjną, czy chcesz udoskonalić swoje obecne podejście, te sprawdzone strategie mogą pomóc Ci systematycznie budować majątek, jednocześnie odpowiednio zarządzając ryzykiem.

# Dywersyfikacja: Nie wkładaj wszystkich jajek do jednego koszyka

Dywersyfikacja jest jednym z najpotężniejszych narzędzi zarządzania ryzykiem dostępnych dla inwestorów. Rozdzielając swoje inwestycje na różne klasy aktywów (akcje, obligacje, nieruchomości itp.), sektory i regiony geograficzne, możesz zmniejszyć wpływ słabych wyników pojedynczej inwestycji. Dobrze zdywersyfikowany portfel zazwyczaj doświadcza mniejszej zmienności, jednocześnie wykorzystując możliwości wzrostu. Rozważ korzystanie z niskokosztowych funduszy indeksowych lub ETF-ów (funduszy giełdowych), aby łatwo osiągnąć szeroką dywersyfikację bez konieczności przeprowadzania obszernych badań lub dysponowania dużymi kwotami kapitału.

# Alokacja aktywów w oparciu o Twój horyzont czasowy

Twój horyzont inwestycyjny – okres czasu przed potrzebą dostępu do pieniędzy – powinien znacząco wpływać na sposób alokacji aktywów. Ogólnie rzecz biorąc, im dłuższy horyzont czasowy, tym większą ekspozycję na akcje możesz sobie pozwolić w swoim portfelu, ponieważ będziesz mieć więcej czasu na odrobienie strat po spadkach na rynku. Gdy zbliżasz się do swojego celu finansowego, stopniowe przesunięcie w kierunku bardziej konserwatywnych inwestycji (obligacje, ekwiwalenty gotówkowe) może pomóc chronić zgromadzony majątek. Regularnie przeglądaj i dostosowuj alokację aktywów w miarę zmiany horyzontu czasowego.

# Uśrednianie kosztów w celu zmniejszenia ryzyka związanego z wyborem momentu

Zamiast próbować idealnie wyczuć moment na rynku, rozważ inwestowanie stałej kwoty w regularnych odstępach czasu, niezależnie od warunków rynkowych. Ta strategia, znana jako uśrednianie kosztów, oznacza, że automatycznie kupujesz więcej jednostek, gdy ceny są niskie, a mniej, gdy ceny są wysokie, potencjalnie obniżając średni koszt jednostki w czasie. To podejście eliminuje większość emocjonalnego podejmowania decyzji z inwestowania i może być szczególnie skuteczne dla długoterminowych celów, takich jak emerytura.
`,
            },
            {
                id: 'sect-002-4',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Podsumowanie',
                content: `
Optymalizacja maszyny CNC nie jest jednorazowym zadaniem - wymaga ciągłej uwagi, regularnej konserwacji i ciągłego doskonalenia. Wdrażając te strategie, możesz zmaksymalizować wydajność, obniżyć koszty produkcji i osiągnąć wyższą jakość produktów. Inwestowanie w odpowiednie narzędzia, szkolenia i systemy monitorowania zapewni, że twoja operacja CNC pozostanie konkurencyjna w dzisiejszym szybko rozwijającym się środowisku produkcyjnym.
`,
            },
        ],
    },
];

// Create business versions of the articles
export const MOCK_ARTICLE3_BUSINESS_EN: Articles.Model.Article[] = MOCK_ARTICLE3_EN.map(createBusinessVersion);
export const MOCK_ARTICLE3_BUSINESS_DE: Articles.Model.Article[] = MOCK_ARTICLE3_DE.map(createBusinessVersion);
export const MOCK_ARTICLE3_BUSINESS_PL: Articles.Model.Article[] = MOCK_ARTICLE3_PL.map(createBusinessVersion);
