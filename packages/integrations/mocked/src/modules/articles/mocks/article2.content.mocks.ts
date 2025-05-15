import { Articles } from '@o2s/framework/modules';

export const MOCK_ARTICLE2_EN: Articles.Model.Article[] = [
    {
        id: 'art-003',
        slug: '/help-and-support/safety/powerpro-tool-safety-guidelines',
        createdAt: '2023-07-15T09:45:00Z',
        updatedAt: '2023-08-25T13:20:00Z',
        title: 'PowerPro Tool Safety Guidelines',
        lead: 'Discover essential safety practices to follow when using PowerPro tools to prevent accidents and ensure a safe working environment.',
        tags: ['safety', 'tools', 'guidelines'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Tool safety',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-safety-thumb.jpg',
            alt: 'Tool safety thumbnail',
        },
        category: {
            id: 'safety',
            title: 'Safety',
        },
        author: {
            name: 'Michael Johnson',
            position: 'Safety Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-003-1',
                createdAt: '2023-07-15T09:45:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Introduction to Tool Safety',
                content:
                    'Safety should always be your top priority when working with power tools. This guide provides comprehensive safety guidelines for all PowerPro tools to help prevent accidents and injuries.',
            },
            {
                id: 'sect-003-2',
                createdAt: '2023-07-15T10:30:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/800/500',
                    alt: 'Safety equipment',
                },
                caption:
                    'Always use appropriate safety equipment including eye protection, hearing protection, and gloves when operating PowerPro tools.',
            },
            {
                id: 'sect-003-3',
                createdAt: '2023-07-15T09:45:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Comprehensive Safety Guidelines',
                content: `# PowerPro Tool Safety Guidelines

Safety is paramount when working with power tools. This comprehensive guide outlines essential safety practices for using PowerPro tools to prevent accidents and create a safe working environment.

## General Safety Principles

These fundamental safety principles apply to all PowerPro tools and should be followed at all times:

### Personal Protective Equipment (PPE)

Always wear appropriate PPE when operating power tools:

1. **Eye Protection** - Safety glasses or goggles to protect from flying debris
2. **Hearing Protection** - Earplugs or earmuffs for loud tools
3. **Respiratory Protection** - Dust masks or respirators when working with materials that produce dust
4. **Hand Protection** - Gloves appropriate for the task (cut-resistant, impact-resistant, etc.)
5. **Foot Protection** - Steel-toed boots when working with heavy materials

> **Safety Alert:** Never compromise on safety equipment. Even brief exposure to hazards can cause permanent injury.

### Workspace Safety

Maintain a safe workspace to prevent accidents:

1. Keep work areas clean and well-lit
2. Remove clutter that could cause trips or falls
3. Secure loose materials and tools when not in use
4. Ensure proper ventilation, especially when working with chemicals
5. Have a first aid kit and fire extinguisher readily accessible

![Safe Workspace Setup](https://picsum.photos/800/400 "Example of a Safe Workspace")

## Power Tool General Safety

Before using any PowerPro power tool, follow these essential safety practices:

### Pre-Operation Checklist

<table>
  <thead>
    <tr>
      <th>Check Point</th>
      <th>Action Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-highlighted>Tool Condition</td>
      <td data-highlighted>Inspect for damage, loose parts, or defects</td>
    </tr>
    <tr>
      <td>Power Source</td>
      <td>Ensure cords are undamaged and batteries are properly seated</td>
    </tr>
    <tr>
      <td>Guards & Safety Features</td>
      <td>Verify all guards are in place and functioning correctly</td>
    </tr>
    <tr>
      <td>Accessories & Bits</td>
      <td>Confirm they are appropriate for the task and securely attached</td>
    </tr>
    <tr>
      <td>Work Environment</td>
      <td>Check for hazards like flammable materials or wet conditions</td>
    </tr>
  </tbody>
</table>

### Safe Operation Practices

* **Maintain Proper Stance** - Keep balanced with both feet firmly on the ground
* **Use Both Hands** - Follow tool instructions for proper hand placement
* **Avoid Distractions** - Focus entirely on the task at hand
* **Never Disable Safety Features** - Guards and safety switches are there for protection
* **Follow Manufacturer Instructions** - Always operate tools as intended

## Tool-Specific Safety Guidelines

Different tools present unique safety challenges. Follow these specific guidelines for common PowerPro tools:

### Drill Safety

![Drill Safety](https://picsum.photos/800/500 "Proper Drill Handling")

When using PowerPro drills:

1. Secure workpieces with clamps or vises, never hold by hand
2. Use the appropriate bit for the material being drilled
3. Start drilling at low speed and gradually increase
4. Apply steady pressure; excessive force can cause bit breakage
5. Keep the drill perpendicular to the work surface when possible

### Saw Safety

Saws are among the most dangerous power tools. Follow these critical safety guidelines:

| Saw Type | Key Safety Practices | Common Hazards to Avoid |
|----------|---------------------|-------------------------|
| Circular Saw | Keep both hands on designated handles, never reach under material | Kickback, binding, exposed blade |
| Jigsaw | Allow blade to reach full speed before cutting, keep base plate flat | Blade breakage, unstable cutting |
| Reciprocating Saw | Secure workpiece firmly, be aware of hidden objects in cutting path | Unexpected movement, blade contact with utilities |
| Table Saw | Use push sticks for narrow cuts, stand to side of blade | Kickback, reaching over blade |

### Grinder Safety

Grinders operate at extremely high speeds and require special attention:

* **Proper Guard Position** - Always position the guard between you and the wheel
* **Correct Wheel Type** - Use only wheels rated for your grinder's RPM
* **Proper Startup** - Allow grinder to reach full speed before contacting work
* **Grinding Position** - Hold at a 15-30 degree angle to the work surface
* **Cool Down Period** - Let wheels cool naturally, never quench in water

## Electrical Safety

Electrical hazards are present in all power tools. Follow these guidelines to prevent shock and electrical fires:

### Cord and Outlet Safety

1. Inspect cords before each use for damage or fraying
2. Never carry tools by their cords or yank cords from outlets
3. Keep cords away from heat, oil, and sharp edges
4. Use GFCI-protected outlets when working in damp locations
5. Never use tools with damaged plugs or exposed wiring

### Battery Safety for Cordless Tools

* **Proper Charging** - Use only the manufacturer's recommended charger
* **Avoid Extreme Temperatures** - Don't charge or store batteries in very hot or cold conditions
* **Prevent Short Circuits** - Keep battery contacts away from metal objects
* **Proper Disposal** - Never dispose of batteries in regular trash or fire
* **Damage Inspection** - Don't use batteries that show signs of damage or leakage

## Emergency Procedures

Know what to do in case of an accident:

### Minor Injuries

For cuts, abrasions, or minor burns:

1. Stop work immediately
2. Clean the wound with soap and water
3. Apply appropriate first aid
4. Determine if professional medical attention is needed

### Serious Injuries

For severe bleeding, major burns, or electrical shock:

1. Call emergency services immediately
2. If electrical shock occurs, disconnect power source if safe to do so
3. Provide first aid according to training until help arrives
4. Do not move the injured person unless absolutely necessary

## Training and Certification

Proper training is essential for safe tool operation:

* **Read Manuals** - Always read and understand the tool manual before first use
* **Seek Instruction** - Take advantage of PowerPro's free safety training videos
* **Practice** - Start with simple projects to build skill and confidence
* **Stay Updated** - Regularly review safety guidelines and new recommendations
* **Certifications** - Consider professional certification for specialized tools

![Safety Training](https://picsum.photos/600/1200 "PowerPro Safety Training Session")

## Conclusion

Safety is not optional when working with power tools. By following these guidelines, you'll create a safer working environment and reduce the risk of accidents and injuries. Remember that most tool accidents are preventable with proper precautions and attention to safety.

For additional safety information or to report a safety concern with a PowerPro tool, contact our safety hotline at safety@powerprotools.com or call 1-800-SAFE-TOOL.`,
            },
        ],
    },
];

export const MOCK_ARTICLE2_DE: Articles.Model.Article[] = [
    {
        id: 'art-003',
        slug: '/hilfe-und-support/sicherheit/powerpro-werkzeug-sicherheitsrichtlinien',
        createdAt: '2023-07-15T09:45:00Z',
        updatedAt: '2023-08-25T13:20:00Z',
        title: 'PowerPro-Werkzeug-Sicherheitsrichtlinien',
        lead: 'Entdecken Sie wesentliche Sicherheitspraktiken, die bei der Verwendung von PowerPro-Werkzeugen zu befolgen sind, um Unfälle zu vermeiden und eine sichere Arbeitsumgebung zu gewährleisten.',
        tags: ['sicherheit', 'werkzeuge', 'richtlinien'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Werkzeugsicherheit',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-safety-thumb.jpg',
            alt: 'Werkzeugsicherheit-Thumbnail',
        },
        category: {
            id: 'safety',
            title: 'Sicherheit',
        },
        author: {
            name: 'Michael Johnson',
            position: 'Safety Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-003-1',
                createdAt: '2023-07-15T09:45:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Einführung in die Werkzeugsicherheit',
                content:
                    'Sicherheit sollte immer Ihre oberste Priorität sein, wenn Sie mit Elektrowerkzeugen arbeiten. Dieser Leitfaden bietet umfassende Sicherheitsrichtlinien für alle PowerPro-Werkzeuge, um Unfälle und Verletzungen zu vermeiden.',
            },
            {
                id: 'sect-003-2',
                createdAt: '2023-07-15T10:30:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/800/500',
                    alt: 'Sicherheitsausrüstung',
                },
                caption:
                    'Verwenden Sie immer angemessene Sicherheitsausrüstung, einschließlich Augenschutz, Gehörschutz und Handschuhe, wenn Sie PowerPro-Werkzeuge bedienen.',
            },
            {
                id: 'sect-003-3',
                createdAt: '2023-07-15T09:45:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Umfassende Sicherheitsrichtlinien',
                content: `# PowerPro-Werkzeug-Sicherheitsrichtlinien

Sicherheit ist von größter Bedeutung bei der Arbeit mit Elektrowerkzeugen. Dieser umfassende Leitfaden beschreibt wesentliche Sicherheitspraktiken für die Verwendung von PowerPro-Werkzeugen, um Unfälle zu vermeiden und eine sichere Arbeitsumgebung zu schaffen.

## Allgemeine Sicherheitsprinzipien

Diese grundlegenden Sicherheitsprinzipien gelten für alle PowerPro-Werkzeuge und sollten jederzeit befolgt werden:

### Persönliche Schutzausrüstung (PSA)

Tragen Sie immer angemessene PSA bei der Bedienung von Elektrowerkzeugen:

1. **Augenschutz** - Schutzbrille oder Schutzbrille zum Schutz vor fliegenden Trümmern
2. **Gehörschutz** - Ohrstöpsel oder Gehörschutz für laute Werkzeuge
3. **Atemschutz** - Staubmasken oder Atemschutzgeräte bei der Arbeit mit Materialien, die Staub erzeugen
4. **Handschutz** - Für die Aufgabe geeignete Handschuhe (schnittfest, stoßfest usw.)
5. **Fußschutz** - Stahlkappenstiefel bei der Arbeit mit schweren Materialien

> **Sicherheitshinweis:** Gehen Sie niemals Kompromisse bei der Sicherheitsausrüstung ein. Selbst kurze Exposition gegenüber Gefahren kann zu dauerhaften Verletzungen führen.

### Arbeitsplatzsicherheit

Halten Sie einen sicheren Arbeitsplatz, um Unfälle zu vermeiden:

1. Halten Sie Arbeitsbereiche sauber und gut beleuchtet
2. Entfernen Sie Unordnung, die zu Stolpern oder Stürzen führen könnte
3. Sichern Sie lose Materialien und Werkzeuge, wenn sie nicht in Gebrauch sind
4. Sorgen Sie für ausreichende Belüftung, besonders bei der Arbeit mit Chemikalien
5. Halten Sie einen Erste-Hilfe-Kasten und Feuerlöscher griffbereit

![Sichere Arbeitsplatzeinrichtung](https://picsum.photos/800/400 "Beispiel für einen sicheren Arbeitsplatz")

## Allgemeine Sicherheit für Elektrowerkzeuge

Bevor Sie ein PowerPro-Elektrowerkzeug verwenden, befolgen Sie diese wesentlichen Sicherheitspraktiken:

### Checkliste vor dem Betrieb

<table>
  <thead>
    <tr>
      <th>Prüfpunkt</th>
      <th>Erforderliche Maßnahme</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-highlighted>Werkzeugzustand</td>
      <td data-highlighted>Auf Schäden, lose Teile oder Defekte prüfen</td>
    </tr>
    <tr>
      <td>Stromquelle</td>
      <td>Sicherstellen, dass Kabel unbeschädigt und Batterien richtig eingesetzt sind</td>
    </tr>
    <tr>
      <td>Schutzvorrichtungen & Sicherheitsfunktionen</td>
      <td>Überprüfen, ob alle Schutzvorrichtungen vorhanden sind und korrekt funktionieren</td>
    </tr>
    <tr>
      <td>Zubehör & Bits</td>
      <td>Bestätigen, dass sie für die Aufgabe geeignet und sicher befestigt sind</td>
    </tr>
    <tr>
      <td>Arbeitsumgebung</td>
      <td>Auf Gefahren wie brennbare Materialien oder nasse Bedingungen prüfen</td>
    </tr>
  </tbody>
</table>

### Sichere Betriebspraktiken

* **Richtige Haltung beibehalten** - Bleiben Sie ausbalanciert mit beiden Füßen fest auf dem Boden
* **Beide Hände benutzen** - Befolgen Sie die Werkzeuganweisungen für die richtige Handplatzierung
* **Ablenkungen vermeiden** - Konzentrieren Sie sich vollständig auf die aktuelle Aufgabe
* **Niemals Sicherheitsfunktionen deaktivieren** - Schutzvorrichtungen und Sicherheitsschalter dienen Ihrem Schutz
* **Herstelleranweisungen befolgen** - Betreiben Sie Werkzeuge immer wie vorgesehen

## Werkzeugspezifische Sicherheitsrichtlinien

Verschiedene Werkzeuge stellen einzigartige Sicherheitsherausforderungen dar. Befolgen Sie diese spezifischen Richtlinien für gängige PowerPro-Werkzeuge:

### Bohrersicherheit

![Bohrersicherheit](https://picsum.photos/800/500 "Richtige Bohrhandhabung")

Bei der Verwendung von PowerPro-Bohrern:

1. Sichern Sie Werkstücke mit Klemmen oder Schraubstöcken, niemals mit der Hand halten
2. Verwenden Sie den geeigneten Bohrer für das zu bohrende Material
3. Beginnen Sie mit niedriger Geschwindigkeit und erhöhen Sie diese allmählich
4. Üben Sie gleichmäßigen Druck aus; übermäßige Kraft kann zum Bruch des Bohrers führen
5. Halten Sie den Bohrer wenn möglich senkrecht zur Arbeitsfläche

### Sägensicherheit

Sägen gehören zu den gefährlichsten Elektrowerkzeugen. Befolgen Sie diese kritischen Sicherheitsrichtlinien:

| Sägentyp | Wichtige Sicherheitspraktiken | Zu vermeidende häufige Gefahren |
|----------|------------------------------|--------------------------------|
| Kreissäge | Beide Hände an den vorgesehenen Griffen halten, niemals unter das Material greifen | Rückschlag, Klemmen, freiliegendes Sägeblatt |
| Stichsäge | Sägeblatt vor dem Schneiden volle Geschwindigkeit erreichen lassen, Grundplatte flach halten | Sägeblattbruch, instabiles Schneiden |
| Säbelsäge | Werkstück fest sichern, auf versteckte Objekte im Schneidweg achten | Unerwartete Bewegung, Sägeblattkontakt mit Versorgungsleitungen |
| Tischsäge | Schiebehölzer für schmale Schnitte verwenden, seitlich vom Sägeblatt stehen | Rückschlag, über das Sägeblatt greifen |

### Schleifersicherheit

Schleifer arbeiten mit extrem hohen Geschwindigkeiten und erfordern besondere Aufmerksamkeit:

* **Richtige Schutzposition** - Positionieren Sie die Schutzvorrichtung immer zwischen Ihnen und der Scheibe
* **Korrekter Scheibentyp** - Verwenden Sie nur Scheiben, die für die Drehzahl Ihres Schleifers zugelassen sind
* **Richtiger Start** - Lassen Sie den Schleifer vor dem Kontakt mit dem Werkstück volle Geschwindigkeit erreichen
* **Schleifposition** - Halten Sie einen Winkel von 15-30 Grad zur Arbeitsfläche
* **Abkühlphase** - Lassen Sie Scheiben natürlich abkühlen, niemals in Wasser abschrecken

## Elektrische Sicherheit

Elektrische Gefahren sind bei allen Elektrowerkzeugen vorhanden. Befolgen Sie diese Richtlinien, um Stromschläge und elektrische Brände zu vermeiden:

### Kabel- und Steckdosensicherheit

1. Überprüfen Sie Kabel vor jedem Gebrauch auf Beschädigungen oder Abnutzung
2. Tragen Sie Werkzeuge niemals an ihren Kabeln und ziehen Sie Kabel nicht aus Steckdosen
3. Halten Sie Kabel von Hitze, Öl und scharfen Kanten fern
4. Verwenden Sie FI-geschützte Steckdosen bei Arbeiten in feuchten Umgebungen
5. Verwenden Sie niemals Werkzeuge mit beschädigten Steckern oder freiliegenden Kabeln

### Batteriesicherheit für kabellose Werkzeuge

* **Richtiges Laden** - Verwenden Sie nur das vom Hersteller empfohlene Ladegerät
* **Extreme Temperaturen vermeiden** - Laden oder lagern Sie Batterien nicht bei sehr heißen oder kalten Bedingungen
* **Kurzschlüsse verhindern** - Halten Sie Batteriekontakte von Metallgegenständen fern
* **Ordnungsgemäße Entsorgung** - Entsorgen Sie Batterien niemals im normalen Müll oder im Feuer
* **Schadensinspektion** - Verwenden Sie keine Batterien, die Anzeichen von Beschädigung oder Auslaufen zeigen

## Notfallverfahren

Wissen Sie, was im Falle eines Unfalls zu tun ist:

### Kleinere Verletzungen

Bei Schnitten, Abschürfungen oder leichten Verbrennungen:

1. Stoppen Sie die Arbeit sofort
2. Reinigen Sie die Wunde mit Seife und Wasser
3. Wenden Sie angemessene Erste Hilfe an
4. Entscheiden Sie, ob professionelle medizinische Hilfe erforderlich ist

### Schwere Verletzungen

Bei starken Blutungen, schweren Verbrennungen oder Stromschlägen:

1. Rufen Sie sofort den Notdienst
2. Wenn ein Stromschlag auftritt, trennen Sie die Stromquelle, wenn dies sicher möglich ist
3. Leisten Sie Erste Hilfe gemäß Ihrer Ausbildung, bis Hilfe eintrifft
4. Bewegen Sie die verletzte Person nicht, es sei denn, es ist unbedingt notwendig

## Schulung und Zertifizierung

Eine ordnungsgemäße Schulung ist für den sicheren Betrieb von Werkzeugen unerlässlich:

* **Handbücher lesen** - Lesen und verstehen Sie immer das Werkzeughandbuch vor dem ersten Gebrauch
* **Anleitung suchen** - Nutzen Sie PowerPros kostenlose Sicherheitsschulungsvideos
* **Üben** - Beginnen Sie mit einfachen Projekten, um Fähigkeiten und Selbstvertrauen aufzubauen
* **Auf dem Laufenden bleiben** - Überprüfen Sie regelmäßig Sicherheitsrichtlinien und neue Empfehlungen
* **Zertifizierungen** - Erwägen Sie eine professionelle Zertifizierung für spezialisierte Werkzeuge

![Sicherheitsschulung](https://picsum.photos/600/1200 "PowerPro Sicherheitsschulungssitzung")

## Fazit

Sicherheit ist keine Option bei der Arbeit mit Elektrowerkzeugen. Durch Befolgen dieser Richtlinien schaffen Sie eine sicherere Arbeitsumgebung und reduzieren das Risiko von Unfällen und Verletzungen. Denken Sie daran, dass die meisten Werkzeugunfälle mit angemessenen Vorsichtsmaßnahmen und Aufmerksamkeit für Sicherheit vermeidbar sind.

Für zusätzliche Sicherheitsinformationen oder um ein Sicherheitsanliegen mit einem PowerPro-Werkzeug zu melden, kontaktieren Sie unsere Sicherheits-Hotline unter safety@powerprotools.com oder rufen Sie 0800-SAFE-TOOL an.`,
            },
        ],
    },
];

export const MOCK_ARTICLE2_PL: Articles.Model.Article[] = [
    {
        id: 'art-003',
        slug: '/pomoc-i-wsparcie/bezpieczenstwo/wytyczne-bezpieczenstwa-narzedzi-powerpro',
        createdAt: '2023-07-15T09:45:00Z',
        updatedAt: '2023-08-25T13:20:00Z',
        title: 'Wytyczne bezpieczeństwa narzędzi PowerPro',
        lead: 'Poznaj niezbędne praktyki bezpieczeństwa, których należy przestrzegać podczas korzystania z narzędzi PowerPro, aby zapobiec wypadkom i zapewnić bezpieczne środowisko pracy.',
        tags: ['bezpieczeństwo', 'narzędzia', 'wytyczne'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: 'Bezpieczeństwo narzędzi',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-safety-thumb.jpg',
            alt: 'Miniatura bezpieczeństwa narzędzi',
        },
        category: {
            id: 'safety',
            title: 'Bezpieczeństwo',
        },
        author: {
            name: 'Michael Johnson',
            position: 'Safety Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-003-1',
                createdAt: '2023-07-15T09:45:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Wprowadzenie do bezpieczeństwa narzędzi',
                content:
                    'Bezpieczeństwo powinno być zawsze najwyższym priorytetem podczas pracy z elektronarzędziami. Ten przewodnik zawiera kompleksowe wytyczne bezpieczeństwa dla wszystkich narzędzi PowerPro, aby pomóc zapobiegać wypadkom i obrażeniom.',
            },
            {
                id: 'sect-003-2',
                createdAt: '2023-07-15T10:30:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/800/500',
                    alt: 'Sprzęt ochronny',
                },
                caption:
                    'Zawsze używaj odpowiedniego sprzętu ochronnego, w tym ochrony oczu, ochrony słuchu i rękawic podczas obsługi narzędzi PowerPro.',
            },
            {
                id: 'sect-003-3',
                createdAt: '2023-07-15T09:45:00Z',
                updatedAt: '2023-08-25T13:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Kompleksowe wytyczne bezpieczeństwa',
                content: `# Wytyczne bezpieczeństwa narzędzi PowerPro

Bezpieczeństwo jest najważniejsze podczas pracy z elektronarzędziami. Ten kompleksowy przewodnik przedstawia niezbędne praktyki bezpieczeństwa przy używaniu narzędzi PowerPro, aby zapobiegać wypadkom i tworzyć bezpieczne środowisko pracy.

## Ogólne zasady bezpieczeństwa

Te podstawowe zasady bezpieczeństwa dotyczą wszystkich narzędzi PowerPro i powinny być przestrzegane przez cały czas:

### Środki ochrony indywidualnej (ŚOI)

Zawsze noś odpowiednie ŚOI podczas obsługi elektronarzędzi:

1. **Ochrona oczu** - Okulary ochronne lub gogle chroniące przed latającymi odłamkami
2. **Ochrona słuchu** - Zatyczki do uszu lub nauszniki ochronne przy głośnych narzędziach
3. **Ochrona dróg oddechowych** - Maski przeciwpyłowe lub respiratory podczas pracy z materiałami wytwarzającymi pył
4. **Ochrona rąk** - Rękawice odpowiednie do zadania (odporne na przecięcia, uderzenia itp.)
5. **Ochrona stóp** - Buty ze stalowymi noskami podczas pracy z ciężkimi materiałami

> **Alert bezpieczeństwa:** Nigdy nie idź na kompromis w kwestii sprzętu ochronnego. Nawet krótka ekspozycja na zagrożenia może spowodować trwałe obrażenia.

### Bezpieczeństwo miejsca pracy

Utrzymuj bezpieczne miejsce pracy, aby zapobiegać wypadkom:

1. Utrzymuj obszary robocze w czystości i dobrze oświetlone
2. Usuwaj bałagan, który mógłby spowodować potknięcia lub upadki
3. Zabezpieczaj luźne materiały i narzędzia, gdy nie są używane
4. Zapewnij odpowiednią wentylację, szczególnie podczas pracy z chemikaliami
5. Miej apteczkę pierwszej pomocy i gaśnicę łatwo dostępne

![Bezpieczna organizacja miejsca pracy](https://picsum.photos/800/400 "Przykład bezpiecznego miejsca pracy")

## Ogólne zasady bezpieczeństwa elektronarzędzi

Przed użyciem jakiegokolwiek elektronarzędzia PowerPro, przestrzegaj tych niezbędnych praktyk bezpieczeństwa:

### Lista kontrolna przed uruchomieniem

<table>
  <thead>
    <tr>
      <th>Punkt kontrolny</th>
      <th>Wymagane działanie</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-highlighted>Stan narzędzia</td>
      <td data-highlighted>Sprawdź pod kątem uszkodzeń, luźnych części lub wad</td>
    </tr>
    <tr>
      <td>Źródło zasilania</td>
      <td>Upewnij się, że przewody są nieuszkodzone, a akumulatory prawidłowo osadzone</td>
    </tr>
    <tr>
      <td>Osłony i funkcje bezpieczeństwa</td>
      <td>Sprawdź, czy wszystkie osłony są na miejscu i działają prawidłowo</td>
    </tr>
    <tr>
      <td>Akcesoria i końcówki</td>
      <td>Potwierdź, że są odpowiednie do zadania i bezpiecznie zamocowane</td>
    </tr>
    <tr>
      <td>Środowisko pracy</td>
      <td>Sprawdź pod kątem zagrożeń, takich jak materiały łatwopalne lub mokre warunki</td>
    </tr>
  </tbody>
</table>

### Bezpieczne praktyki obsługi

* **Utrzymuj właściwą postawę** - Zachowaj równowagę z obiema stopami mocno na podłożu
* **Używaj obu rąk** - Postępuj zgodnie z instrukcjami narzędzia dotyczącymi prawidłowego ułożenia rąk
* **Unikaj rozpraszania uwagi** - Skup się całkowicie na wykonywanym zadaniu
* **Nigdy nie wyłączaj funkcji bezpieczeństwa** - Osłony i wyłączniki bezpieczeństwa służą ochronie
* **Przestrzegaj instrukcji producenta** - Zawsze obsługuj narzędzia zgodnie z przeznaczeniem

## Wytyczne bezpieczeństwa dla konkretnych narzędzi

Różne narzędzia stanowią unikalne wyzwania w zakresie bezpieczeństwa. Przestrzegaj tych konkretnych wytycznych dla popularnych narzędzi PowerPro:

### Bezpieczeństwo wiertarek

![Bezpieczeństwo wiertarki](https://picsum.photos/800/500 "Prawidłowa obsługa wiertarki")

Podczas korzystania z wiertarek PowerPro:

1. Zabezpieczaj obrabiane przedmioty zaciskami lub imadłami, nigdy nie trzymaj ich ręką
2. Używaj odpowiedniego wiertła do wierconego materiału
3. Rozpoczynaj wiercenie z niską prędkością i stopniowo ją zwiększaj
4. Stosuj stały nacisk; nadmierny nacisk może spowodować złamanie wiertła
5. Trzymaj wiertarkę prostopadle do powierzchni roboczej, gdy to możliwe

### Bezpieczeństwo pił

Piły należą do najbardziej niebezpiecznych elektronarzędzi. Przestrzegaj tych kluczowych wytycznych bezpieczeństwa:

| Typ piły | Kluczowe praktyki bezpieczeństwa | Typowe zagrożenia do unikania |
|----------|----------------------------------|-------------------------------|
| Piła tarczowa | Trzymaj obie ręce na wyznaczonych uchwytach, nigdy nie sięgaj pod materiał | Odrzut, zakleszczenie, odsłonięte ostrze |
| Wyrzynarka | Pozwól ostrzu osiągnąć pełną prędkość przed cięciem, utrzymuj płytę podstawy płasko | Złamanie ostrza, niestabilne cięcie |
| Piła szablasta | Dobrze zamocuj obrabiany przedmiot, uważaj na ukryte obiekty na drodze cięcia | Nieoczekiwany ruch, kontakt ostrza z instalacjami |
| Piła stołowa | Używaj popychaczy do wąskich cięć, stój z boku ostrza | Odrzut, sięganie nad ostrzem |

### Bezpieczeństwo szlifierek

Szlifierki pracują z ekstremalnie wysokimi prędkościami i wymagają szczególnej uwagi:

* **Prawidłowa pozycja osłony** - Zawsze ustawiaj osłonę między sobą a tarczą
* **Odpowiedni typ tarczy** - Używaj tylko tarcz przeznaczonych do prędkości obrotowej twojej szlifierki
* **Prawidłowe uruchamianie** - Pozwól szlifierce osiągnąć pełną prędkość przed kontaktem z materiałem
* **Pozycja szlifowania** - Trzymaj pod kątem 15-30 stopni do powierzchni roboczej
* **Okres chłodzenia** - Pozwól tarczom ostygnąć naturalnie, nigdy nie zanurzaj ich w wodzie

## Bezpieczeństwo elektryczne

Zagrożenia elektryczne występują we wszystkich elektronarzędziach. Przestrzegaj tych wytycznych, aby zapobiec porażeniu prądem i pożarom elektrycznym:

### Bezpieczeństwo przewodów i gniazdek

1. Sprawdzaj przewody przed każdym użyciem pod kątem uszkodzeń lub przetarć
2. Nigdy nie przenoś narzędzi za przewody ani nie wyrywaj przewodów z gniazdek
3. Trzymaj przewody z dala od źródeł ciepła, oleju i ostrych krawędzi
4. Używaj gniazdek z zabezpieczeniem różnicowoprądowym podczas pracy w wilgotnych miejscach
5. Nigdy nie używaj narzędzi z uszkodzonymi wtyczkami lub odsłoniętymi przewodami

### Bezpieczeństwo akumulatorów w narzędziach bezprzewodowych

* **Prawidłowe ładowanie** - Używaj tylko ładowarki zalecanej przez producenta
* **Unikaj ekstremalnych temperatur** - Nie ładuj ani nie przechowuj akumulatorów w bardzo gorących lub zimnych warunkach
* **Zapobiegaj zwarciom** - Trzymaj styki akumulatora z dala od metalowych przedmiotów
* **Prawidłowa utylizacja** - Nigdy nie wyrzucaj akumulatorów do zwykłych śmieci ani nie wrzucaj do ognia
* **Kontrola uszkodzeń** - Nie używaj akumulatorów, które wykazują oznaki uszkodzenia lub wycieku

## Procedury awaryjne

Wiedz, co robić w przypadku wypadku:

### Drobne obrażenia

W przypadku skaleczeń, otarć lub lekkich oparzeń:

1. Natychmiast przerwij pracę
2. Oczyść ranę mydłem i wodą
3. Zastosuj odpowiednią pierwszą pomoc
4. Ustal, czy potrzebna jest profesjonalna pomoc medyczna

### Poważne obrażenia

W przypadku silnego krwawienia, poważnych oparzeń lub porażenia prądem:

1. Natychmiast wezwij służby ratunkowe
2. Jeśli doszło do porażenia prądem, odłącz źródło zasilania, jeśli jest to bezpieczne
3. Udziel pierwszej pomocy zgodnie z przeszkoleniem do czasu przybycia pomocy
4. Nie przemieszczaj poszkodowanej osoby, chyba że jest to absolutnie konieczne

## Szkolenia i certyfikacja

Odpowiednie szkolenie jest niezbędne do bezpiecznej obsługi narzędzi:

* **Czytaj instrukcje** - Zawsze przeczytaj i zrozum instrukcję narzędzia przed pierwszym użyciem
* **Szukaj instruktażu** - Korzystaj z bezpłatnych filmów szkoleniowych PowerPro dotyczących bezpieczeństwa
* **Ćwicz** - Zacznij od prostych projektów, aby zbudować umiejętności i pewność siebie
* **Bądź na bieżąco** - Regularnie przeglądaj wytyczne bezpieczeństwa i nowe zalecenia
* **Certyfikaty** - Rozważ profesjonalną certyfikację dla specjalistycznych narzędzi

![Szkolenie bezpieczeństwa](https://picsum.photos/600/1200 "Sesja szkoleniowa PowerPro dotycząca bezpieczeństwa")

## Podsumowanie

Bezpieczeństwo nie jest opcjonalne podczas pracy z elektronarzędziami. Przestrzegając tych wytycznych, stworzysz bezpieczniejsze środowisko pracy i zmniejszysz ryzyko wypadków i obrażeń. Pamiętaj, że większości wypadków z narzędziami można zapobiec dzięki odpowiednim środkom ostrożności i uwadze na bezpieczeństwo.

Aby uzyskać dodatkowe informacje dotyczące bezpieczeństwa lub zgłosić problem z bezpieczeństwem narzędzia PowerPro, skontaktuj się z naszą infolinią bezpieczeństwa pod adresem safety@powerprotools.com lub zadzwoń pod numer 800-SAFE-TOOL.`,
            },
        ],
    },
];
