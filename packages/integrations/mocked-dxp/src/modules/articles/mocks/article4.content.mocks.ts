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

export const MOCK_ARTICLE4_EN: Articles.Model.Article[] = [
    {
        id: 'art-004',
        slug: '/personal/help-and-support/finance-and-savings/how-to-optimize-your-cnc-machine-for-maximum-efficiency',
        theme: 'personal',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Essential Cybersecurity Practices for Protecting Your Financial Accounts',
        lead: 'Learn how to safeguard your financial information from cyber threats with these proven security measures.',
        tags: ['cybersecurity', 'financial-protection', 'online-banking'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-8.png',
            width: 640,
            height: 427,
            alt: 'Cybersecurity protection',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-8.png',
            alt: 'Cybersecurity protection thumbnail',
        },
        category: {
            id: 'finance-and-savings-personal',
            title: 'Finance & Savings',
        },
        author: {
            name: 'Jane Doe',
            position: 'Cybersecurity Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-002-2',
                createdAt: '2023-06-10T11:00:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/youtube-player.jpg',
                    alt: 'Digital security for financial accounts',
                },
            },
            {
                id: 'sect-002-3',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'The Growing Threat to Your Financial Security',
                content: `
In today's digital world, your financial information is constantly at risk from increasingly sophisticated cyber threats. Data breaches, phishing attacks, and malware have become more targeted and complex, putting your bank accounts, investment portfolios, and personal identity at greater risk than ever before. The financial consequences of these attacks can be devastating—from drained accounts and stolen identities to damaged credit scores that can take years to repair. However, by implementing robust cybersecurity practices, you can significantly reduce your vulnerability and protect your financial well-being. Whether you're managing personal finances or business accounts, these essential security measures will help safeguard your financial future.

# Use Strong, Unique Passwords and Multi-Factor Authentication

The first line of defense for your financial accounts is strong authentication. Create complex passwords that include a mix of uppercase and lowercase letters, numbers, and special characters—and never reuse passwords across different accounts. Even better, enable multi-factor authentication (MFA) whenever available. MFA adds an extra layer of security by requiring something you know (password) and something you have (like a code sent to your phone), making unauthorized access significantly more difficult even if your password is compromised.

# Monitor Your Accounts Regularly

Early detection is crucial in minimizing damage from financial fraud. Set up account alerts to notify you of unusual activity, such as large transactions or logins from unfamiliar devices or locations. Review your bank and credit card statements at least weekly, and check your credit reports from all three major bureaus (Experian, Equifax, and TransUnion) at least quarterly. Many financial institutions offer real-time monitoring tools through their mobile apps, making it easier than ever to keep an eye on your accounts.

# Secure Your Devices and Networks

The devices and networks you use to access financial information can be vulnerable entry points for cybercriminals. Keep your operating systems, browsers, and security software updated with the latest patches. Use encrypted connections (look for "https" and a padlock icon in your browser) when accessing financial websites, and avoid conducting financial transactions on public Wi-Fi networks. Consider using a virtual private network (VPN) for an additional layer of encryption when accessing sensitive information outside your home network.
`,
            },
            {
                id: 'sect-002-4',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Staying Vigilant in a Changing Threat Landscape',
                content: `
Protecting your financial security in the digital age is not a one-time effort—it requires ongoing vigilance, regular updates to your security practices, and continuous education about emerging threats. Cybercriminals constantly evolve their tactics, making it essential to stay informed about the latest security best practices. Consider signing up for security alerts from your financial institutions and government agencies like the Federal Trade Commission. Remember that while technology provides powerful protection tools, your awareness and caution remain the most critical factors in preventing financial fraud. By implementing these cybersecurity measures and maintaining a security-first mindset when managing your finances online, you can significantly reduce your risk and enjoy the convenience of digital banking with greater peace of mind.
`,
            },
        ],
    },
];

export const MOCK_ARTICLE4_DE: Articles.Model.Article[] = [
    {
        id: 'art-004',
        slug: '/personlich/hilfe-und-support/finanzen-und-sparen/wie-sie-ihre-cnc-maschine-fuer-maximale-effizienz-optimieren',
        theme: 'personal',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Wesentliche Cybersicherheitspraktiken zum Schutz Ihrer Finanzkonten',
        lead: 'Erfahren Sie, wie Sie Ihre Finanzinformationen mit bewährten Sicherheitsmaßnahmen vor Cyberbedrohungen schützen können.',
        tags: ['cybersicherheit', 'finanzieller-schutz', 'online-banking'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-8.png',
            width: 640,
            height: 427,
            alt: 'Cybersicherheitsschutz',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-8.png',
            alt: 'Cybersicherheitsschutz Thumbnail',
        },
        category: {
            id: 'finance-and-savings-personal',
            title: 'Finanzen & Sparen',
        },
        author: {
            name: 'Jane Doe',
            position: 'Cybersicherheitsspezialistin',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-002-2',
                createdAt: '2023-06-10T11:00:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/youtube-player.jpg',
                    alt: 'Digitale Sicherheit für Finanzkonten',
                },
            },
            {
                id: 'sect-002-3',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Die wachsende Bedrohung für Ihre finanzielle Sicherheit',
                content: `
In der heutigen digitalen Welt sind Ihre Finanzinformationen ständig durch immer ausgefeiltere Cyberbedrohungen gefährdet. Datenschutzverletzungen, Phishing-Angriffe und Malware sind gezielter und komplexer geworden, wodurch Ihre Bankkonten, Anlageportfolios und persönliche Identität stärker gefährdet sind als je zuvor. Die finanziellen Folgen dieser Angriffe können verheerend sein – von geleerten Konten und gestohlenen Identitäten bis hin zu beschädigten Kreditwürdigkeiten, deren Wiederherstellung Jahre dauern kann. Durch die Implementierung robuster Cybersicherheitspraktiken können Sie jedoch Ihre Anfälligkeit erheblich reduzieren und Ihr finanzielles Wohlbefinden schützen. Ob Sie persönliche Finanzen oder Geschäftskonten verwalten, diese wesentlichen Sicherheitsmaßnahmen helfen, Ihre finanzielle Zukunft zu schützen.

# Verwenden Sie starke, einzigartige Passwörter und Multi-Faktor-Authentifizierung

Die erste Verteidigungslinie für Ihre Finanzkonten ist eine starke Authentifizierung. Erstellen Sie komplexe Passwörter, die eine Mischung aus Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen enthalten – und verwenden Sie niemals Passwörter für verschiedene Konten wieder. Noch besser ist es, wenn möglich, die Multi-Faktor-Authentifizierung (MFA) zu aktivieren. MFA fügt eine zusätzliche Sicherheitsebene hinzu, indem etwas, das Sie wissen (Passwort), und etwas, das Sie haben (wie ein an Ihr Telefon gesendeter Code), erforderlich ist, was unbefugten Zugriff erheblich erschwert, selbst wenn Ihr Passwort kompromittiert wurde.

# Überwachen Sie Ihre Konten regelmäßig

Früherkennung ist entscheidend, um Schäden durch Finanzbetrug zu minimieren. Richten Sie Kontobenachrichtigungen ein, die Sie über ungewöhnliche Aktivitäten informieren, wie große Transaktionen oder Anmeldungen von unbekannten Geräten oder Standorten. Überprüfen Sie Ihre Bank- und Kreditkartenauszüge mindestens wöchentlich und prüfen Sie Ihre Kreditberichte von allen drei großen Büros (Experian, Equifax und TransUnion) mindestens vierteljährlich. Viele Finanzinstitute bieten Echtzeit-Überwachungstools über ihre mobilen Apps an, was es einfacher denn je macht, Ihre Konten im Auge zu behalten.

# Sichern Sie Ihre Geräte und Netzwerke

Die Geräte und Netzwerke, die Sie für den Zugriff auf Finanzinformationen verwenden, können anfällige Eintrittspunkte für Cyberkriminelle sein. Halten Sie Ihre Betriebssysteme, Browser und Sicherheitssoftware mit den neuesten Updates aktuell. Verwenden Sie verschlüsselte Verbindungen (achten Sie auf "https" und ein Schlosssymbol in Ihrem Browser), wenn Sie auf Finanzwebsites zugreifen, und vermeiden Sie die Durchführung von Finanztransaktionen in öffentlichen WLAN-Netzwerken. Erwägen Sie die Verwendung eines virtuellen privaten Netzwerks (VPN) für eine zusätzliche Verschlüsselungsebene, wenn Sie außerhalb Ihres Heimnetzwerks auf sensible Informationen zugreifen.
`,
            },
            {
                id: 'sect-002-4',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Wachsam bleiben in einer sich verändernden Bedrohungslandschaft',
                content: `
Der Schutz Ihrer finanziellen Sicherheit im digitalen Zeitalter ist keine einmalige Aufgabe – er erfordert ständige Wachsamkeit, regelmäßige Aktualisierungen Ihrer Sicherheitspraktiken und kontinuierliche Bildung über neue Bedrohungen. Cyberkriminelle entwickeln ihre Taktiken ständig weiter, was es unerlässlich macht, über die neuesten Sicherheitsmaßnahmen informiert zu bleiben. Erwägen Sie, sich für Sicherheitsbenachrichtigungen von Ihren Finanzinstituten und Regierungsbehörden wie der Bundesanstalt für Finanzdienstleistungsaufsicht anzumelden. Denken Sie daran, dass, während Technologie leistungsstarke Schutzwerkzeuge bietet, Ihr Bewusstsein und Ihre Vorsicht die wichtigsten Faktoren bei der Verhinderung von Finanzbetrug bleiben. Durch die Implementierung dieser Cybersicherheitsmaßnahmen und die Aufrechterhaltung einer sicherheitsorientierten Denkweise bei der Verwaltung Ihrer Finanzen online können Sie Ihr Risiko erheblich reduzieren und die Bequemlichkeit des digitalen Bankings mit größerer Seelenruhe genießen.
`,
            },
        ],
    },
];

export const MOCK_ARTICLE4_PL: Articles.Model.Article[] = [
    {
        id: 'art-004',
        slug: '/indywidualny/pomoc-i-wsparcie/finanse-i-oszczednosci/jak-zoptymalizowac-maszyne-cnc-dla-maksymalnej-wydajnosci',
        theme: 'personal',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Podstawowe praktyki cyberbezpieczeństwa dla ochrony Twoich kont finansowych',
        lead: 'Dowiedz się, jak zabezpieczyć swoje informacje finansowe przed zagrożeniami cybernetycznymi dzięki sprawdzonym środkom bezpieczeństwa.',
        tags: ['cyberbezpieczeństwo', 'ochrona-finansowa', 'bankowość-internetowa'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-8.png',
            width: 640,
            height: 427,
            alt: 'Ochrona cyberbezpieczeństwa',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/demo/Frame-8.png',
            alt: 'Miniatura ochrony cyberbezpieczeństwa',
        },
        category: {
            id: 'finance-and-savings-personal',
            title: 'Finanse i Oszczędności',
        },
        author: {
            name: 'Jane Doe',
            position: 'Specjalista ds. Cyberbezpieczeństwa',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-002-2',
                createdAt: '2023-06-10T11:00:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/refs/heads/main/packages/integrations/mocked/public/images/youtube-player.jpg',
                    alt: 'Cyfrowe bezpieczeństwo dla kont finansowych',
                },
            },
            {
                id: 'sect-002-3',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Rosnące zagrożenie dla Twojego bezpieczeństwa finansowego',
                content: `
W dzisiejszym cyfrowym świecie Twoje informacje finansowe są stale narażone na coraz bardziej wyrafinowane zagrożenia cybernetyczne. Naruszenia danych, ataki phishingowe i złośliwe oprogramowanie stały się bardziej ukierunkowane i złożone, narażając Twoje konta bankowe, portfele inwestycyjne i tożsamość osobistą na większe ryzyko niż kiedykolwiek wcześniej. Finansowe konsekwencje tych ataków mogą być druzgocące – od opróżnionych kont i skradzionej tożsamości po uszkodzone oceny kredytowe, których naprawa może zająć lata. Jednak wdrażając solidne praktyki cyberbezpieczeństwa, możesz znacznie zmniejszyć swoją podatność i chronić swoje finansowe dobro. Niezależnie od tego, czy zarządzasz finansami osobistymi czy kontami firmowymi, te podstawowe środki bezpieczeństwa pomogą zabezpieczyć Twoją finansową przyszłość.

# Używaj silnych, unikalnych haseł i uwierzytelniania wieloskładnikowego

Pierwszą linią obrony dla Twoich kont finansowych jest silne uwierzytelnianie. Twórz złożone hasła, które zawierają mieszankę wielkich i małych liter, cyfr i znaków specjalnych – i nigdy nie używaj ponownie haseł w różnych kontach. Jeszcze lepiej, włącz uwierzytelnianie wieloskładnikowe (MFA) zawsze, gdy jest dostępne. MFA dodaje dodatkową warstwę bezpieczeństwa, wymagając czegoś, co znasz (hasło) i czegoś, co masz (jak kod wysłany na Twój telefon), co znacznie utrudnia nieuprawniony dostęp, nawet jeśli Twoje hasło zostanie skompromitowane.

# Regularnie monitoruj swoje konta

Wczesne wykrycie jest kluczowe w minimalizowaniu szkód wynikających z oszustw finansowych. Skonfiguruj alerty konta, aby powiadamiały Cię o nietypowej aktywności, takiej jak duże transakcje lub logowania z nieznanych urządzeń lub lokalizacji. Przeglądaj wyciągi z banku i karty kredytowej co najmniej raz w tygodniu i sprawdzaj swoje raporty kredytowe ze wszystkich trzech głównych biur (Experian, Equifax i TransUnion) co najmniej raz na kwartał. Wiele instytucji finansowych oferuje narzędzia do monitorowania w czasie rzeczywistym za pośrednictwem swoich aplikacji mobilnych, co ułatwia niż kiedykolwiek wcześniej śledzenie swoich kont.

# Zabezpiecz swoje urządzenia i sieci

Urządzenia i sieci, których używasz do uzyskiwania dostępu do informacji finansowych, mogą być podatnymi punktami wejścia dla cyberprzestępców. Aktualizuj swoje systemy operacyjne, przeglądarki i oprogramowanie zabezpieczające najnowszymi łatkami. Używaj szyfrowanych połączeń (szukaj "https" i ikony kłódki w przeglądarce) podczas uzyskiwania dostępu do stron finansowych i unikaj przeprowadzania transakcji finansowych w publicznych sieciach Wi-Fi. Rozważ użycie wirtualnej sieci prywatnej (VPN) dla dodatkowej warstwy szyfrowania podczas uzyskiwania dostępu do wrażliwych informacji poza siecią domową.
`,
            },
            {
                id: 'sect-002-4',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Zachowanie czujności w zmieniającym się krajobrazie zagrożeń',
                content: `
Ochrona Twojego bezpieczeństwa finansowego w erze cyfrowej nie jest jednorazowym wysiłkiem – wymaga ciągłej czujności, regularnych aktualizacji praktyk bezpieczeństwa i nieustannej edukacji na temat pojawiających się zagrożeń. Cyberprzestępcy nieustannie rozwijają swoje taktyki, co sprawia, że kluczowe jest bycie na bieżąco z najnowszymi najlepszymi praktykami bezpieczeństwa. Rozważ zapisanie się do alertów bezpieczeństwa od swoich instytucji finansowych i agencji rządowych, takich jak Urząd Ochrony Konkurencji i Konsumentów. Pamiętaj, że choć technologia zapewnia potężne narzędzia ochrony, Twoja świadomość i ostrożność pozostają najważniejszymi czynnikami w zapobieganiu oszustwom finansowym. Wdrażając te środki cyberbezpieczeństwa i utrzymując podejście zorientowane na bezpieczeństwo podczas zarządzania swoimi finansami online, możesz znacznie zmniejszyć ryzyko i cieszyć się wygodą bankowości cyfrowej z większym spokojem ducha.
`,
            },
        ],
    },
];

// Create business versions of the articles
export const MOCK_ARTICLE4_BUSINESS_EN: Articles.Model.Article[] = MOCK_ARTICLE4_EN.map(createBusinessVersion);
export const MOCK_ARTICLE4_BUSINESS_DE: Articles.Model.Article[] = MOCK_ARTICLE4_DE.map(createBusinessVersion);
export const MOCK_ARTICLE4_BUSINESS_PL: Articles.Model.Article[] = MOCK_ARTICLE4_PL.map(createBusinessVersion);
