import { Articles } from '@o2s/framework/modules';

export const MOCK_ARTICLE1_EN: Articles.Model.Article[] = [
    {
        id: 'art-002',
        slug: '/help-and-support/maintenance/powerpro-tool-maintenance-guide',
        roles: [],
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'PowerPro Tool Maintenance Guide',
        lead: 'Learn how to properly maintain your PowerPro tools to ensure optimal performance and longevity.',
        tags: ['maintenance', 'tools', 'guide'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            width: 640,
            height: 427,
            alt: 'Tool maintenance',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            alt: 'Tool maintenance thumbnail',
        },
        category: {
            id: 'maintenance',
            title: 'Maintenance',
        },
        author: {
            name: 'Jane Doe',
            position: 'Technical Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-002-1',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Introduction to Tool Maintenance',
                content:
                    'Regular maintenance is essential for keeping your PowerPro tools in optimal condition. This guide will walk you through the best practices for maintaining different types of tools.',
            },
            {
                id: 'sect-002-2',
                createdAt: '2023-06-10T11:00:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintanance.jpg',
                    alt: 'Tool maintenance kit',
                },
                caption:
                    'A comprehensive PowerPro maintenance kit contains everything you need to keep your tools in top condition.',
            },
            {
                id: 'sect-002-3',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Detailed Maintenance Guide',
                content: `# PowerPro Tool Maintenance Guide

Welcome to our comprehensive guide on maintaining your PowerPro tools. Proper maintenance not only extends the life of your tools but also ensures they perform at their best when you need them most.

## Basic Maintenance Principles

Regardless of the specific tool, there are some universal maintenance principles that apply to all PowerPro equipment:

### Regular Cleaning

Keeping your tools clean is the foundation of good maintenance:

1. After each use, wipe down the exterior with a clean cloth
2. Remove any dust, debris, or moisture
3. Pay special attention to vents and moving parts
4. Use compressed air to clean hard-to-reach areas

> **Pro Tip:** Never use water directly on electrical components. Instead, use a slightly damp cloth or specialized electronic cleaning solutions.

### Proper Storage

How you store your tools significantly impacts their longevity:

1. Store tools in a dry, clean environment
2. Use the original cases when possible
3. Keep batteries separate from tools during long-term storage
4. Hang tools when appropriate to prevent damage

![Proper Tool Storage](https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-storage.jpg "Proper Tool Storage Example")

## Power Drill Maintenance

Power drills require specific maintenance to ensure smooth operation and longevity.

### Chuck Maintenance

The chuck is a critical component that needs regular attention:

1. Open the chuck fully and remove any debris
2. Apply a small amount of lubricant to the moving parts
3. Open and close the chuck several times to distribute the lubricant
4. Wipe away any excess

### Battery Care

For cordless drills, battery maintenance is essential:

* **Regular Charging** - Don't let batteries sit unused for months
* **Avoid Extreme Temperatures** - Store between 40°F and 80°F
* **Prevent Complete Discharge** - Recharge when you notice power decreasing
* **Clean Contacts** - Keep battery contacts clean with alcohol wipes

## Saw Maintenance

Saws have unique maintenance requirements due to their cutting mechanisms.

### Blade Care and Replacement

| Saw Type | Blade Inspection Frequency | Signs of Wear | Replacement Interval |
|----------|----------------------------|---------------|----------------------|
| Circular Saw | After every 8-10 hours of use | Chipped teeth, burning smell | 25-50 hours of use |
| Jigsaw | After every 5 hours of use | Bent blade, rough cuts | 15-20 hours of use |
| Reciprocating Saw | After every job | Discoloration, slow cutting | As needed |

### Guide Maintenance

<table>
  <thead>
    <tr>
      <th>Step</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-highlighted>1</td>
      <td data-highlighted>Check guide alignment with a square tool</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Clean guide rails with a soft brush</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Apply appropriate lubricant to moving parts</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Test movement for smoothness</td>
    </tr>
  </tbody>
</table>

## Sanders and Grinders Maintenance

These tools generate significant dust and require special attention.

### Dust Collection System

Maintaining the dust collection system is crucial:

1. Empty dust collection bags or containers after each use
2. Clean filters regularly with compressed air
3. Check for tears or holes in collection bags
4. Ensure proper sealing between components

### Pad and Disc Maintenance

* **Inspect Regularly** - Look for tears, uneven wear, or hardening
* **Clean Between Grits** - When changing sandpaper grits, clean the pad thoroughly
* **Replace When Worn** - A worn pad can affect sanding quality and tool balance
* **Use Appropriate Pressure** - Excessive pressure wears pads faster

## Seasonal Maintenance Checklist

For tools that aren't used year-round, follow this seasonal maintenance checklist:

1. **Beginning of Season**
   * Check all moving parts for smooth operation
   * Inspect cords and plugs for damage
   * Test batteries and chargers
   * Verify all safety features are working

2. **End of Season**
   * Deep clean all tools
   * Apply rust preventative to metal parts
   * Fully charge batteries before storage
   * Store in a climate-controlled environment

## Troubleshooting Common Issues

### Motor Problems

If your tool's motor is running hot or making unusual noises:

* Clean all vents and airways
* Check for binding in moving parts
* Inspect brushes for wear (if applicable)
* Ensure proper lubrication

### Power Issues

For tools with inconsistent power:

* Check power source and connections
* Inspect cords for damage
* Test batteries in another tool
* Clean battery contacts

## Professional Maintenance Services

Some maintenance tasks are best left to professionals:

* **Annual Inspection** - Have your most-used tools professionally inspected yearly
* **Motor Rebuilding** - When performance decreases significantly
* **Precision Calibration** - For tools requiring exact measurements
* **Electrical Safety Testing** - Especially for older tools

## Conclusion

Consistent maintenance of your PowerPro tools is an investment that pays dividends in performance and longevity. By following this guide, you'll ensure your tools are always ready when you need them and operating at peak efficiency.

For additional assistance with tool maintenance, contact our customer support team at support@powerprotools.com or call 1-800-POWERTOOLS.`,
            },
        ],
    },
];

export const MOCK_ARTICLE1_DE: Articles.Model.Article[] = [
    {
        id: 'art-002',
        slug: '/hilfe-und-support/wartung/powerpro-werkzeug-wartungsanleitung',
        roles: [],
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'PowerPro-Werkzeug-Wartungsanleitung',
        lead: 'Erfahren Sie, wie Sie Ihre PowerPro-Werkzeuge richtig warten, um optimale Leistung und Langlebigkeit zu gewährleisten.',
        tags: ['wartung', 'werkzeuge', 'anleitung'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            width: 640,
            height: 427,
            alt: 'Werkzeugwartung',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            alt: 'Werkzeugwartung-Thumbnail',
        },
        category: {
            id: 'maintenance',
            title: 'Wartung',
        },
        author: {
            name: 'Jane Doe',
            position: 'Technical Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-002-1',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Einführung in die Werkzeugwartung',
                content:
                    'Regelmäßige Wartung ist unerlässlich, um Ihre PowerPro-Werkzeuge in optimalem Zustand zu halten. Diese Anleitung führt Sie durch die besten Praktiken zur Wartung verschiedener Werkzeugtypen.',
            },
            {
                id: 'sect-002-2',
                createdAt: '2023-06-10T11:00:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintanance.jpg',
                    alt: 'Werkzeugwartungsset',
                },
                caption:
                    'Ein umfassendes PowerPro-Wartungsset enthält alles, was Sie benötigen, um Ihre Werkzeuge in Top-Zustand zu halten.',
            },
            {
                id: 'sect-002-3',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Detaillierte Wartungsanleitung',
                content: `# PowerPro-Werkzeug-Wartungsanleitung

Willkommen zu unserem umfassenden Leitfaden zur Wartung Ihrer PowerPro-Werkzeuge. Richtige Wartung verlängert nicht nur die Lebensdauer Ihrer Werkzeuge, sondern stellt auch sicher, dass sie ihre beste Leistung erbringen, wenn Sie sie am meisten brauchen.

## Grundlegende Wartungsprinzipien

Unabhängig vom spezifischen Werkzeug gibt es einige universelle Wartungsprinzipien, die für alle PowerPro-Geräte gelten:

### Regelmäßige Reinigung

Die Sauberkeit Ihrer Werkzeuge ist die Grundlage guter Wartung:

1. Wischen Sie nach jedem Gebrauch das Äußere mit einem sauberen Tuch ab
2. Entfernen Sie Staub, Schmutz oder Feuchtigkeit
3. Achten Sie besonders auf Lüftungsöffnungen und bewegliche Teile
4. Verwenden Sie Druckluft, um schwer zugängliche Bereiche zu reinigen

> **Profi-Tipp:** Verwenden Sie niemals Wasser direkt auf elektrischen Komponenten. Verwenden Sie stattdessen ein leicht feuchtes Tuch oder spezielle elektronische Reinigungslösungen.

### Richtige Lagerung

Wie Sie Ihre Werkzeuge lagern, beeinflusst maßgeblich ihre Langlebigkeit:

1. Lagern Sie Werkzeuge in einer trockenen, sauberen Umgebung
2. Verwenden Sie wenn möglich die Originalkoffer
3. Bewahren Sie Batterien bei längerer Lagerung getrennt von den Werkzeugen auf
4. Hängen Sie Werkzeuge auf, wenn es angebracht ist, um Beschädigungen zu vermeiden

![Richtige Werkzeuglagerung](https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-storage.jpg "Beispiel für richtige Werkzeuglagerung")

## Wartung von Elektrobohrern

Elektrobohrer erfordern spezifische Wartung, um einen reibungslosen Betrieb und Langlebigkeit zu gewährleisten.

### Wartung des Bohrfutters

Das Bohrfutter ist eine kritische Komponente, die regelmäßige Aufmerksamkeit benötigt:

1. Öffnen Sie das Bohrfutter vollständig und entfernen Sie Schmutz
2. Tragen Sie eine kleine Menge Schmiermittel auf die beweglichen Teile auf
3. Öffnen und schließen Sie das Bohrfutter mehrmals, um das Schmiermittel zu verteilen
4. Wischen Sie überschüssiges Schmiermittel ab

### Akku-Pflege

Für Akku-Bohrer ist die Akku-Wartung unerlässlich:

* **Regelmäßiges Laden** - Lassen Sie Akkus nicht monatelang unbenutzt liegen
* **Extreme Temperaturen vermeiden** - Lagern Sie zwischen 4°C und 27°C
* **Vollständige Entladung verhindern** - Laden Sie auf, wenn Sie bemerken, dass die Leistung nachlässt
* **Kontakte reinigen** - Halten Sie Akkukontakte mit Alkoholtüchern sauber

## Sägen-Wartung

Sägen haben aufgrund ihrer Schneidmechanismen besondere Wartungsanforderungen.

### Sägeblatt-Pflege und -Austausch

| Sägentyp | Häufigkeit der Blattinspektion | Anzeichen von Verschleiß | Austauschintervall |
|----------|--------------------------------|-------------------------|-------------------|
| Kreissäge | Nach jeweils 8-10 Betriebsstunden | Abgesplitterte Zähne, Brandgeruch | 25-50 Betriebsstunden |
| Stichsäge | Nach jeweils 5 Betriebsstunden | Verbogenes Blatt, raue Schnitte | 15-20 Betriebsstunden |
| Säbelsäge | Nach jedem Einsatz | Verfärbung, langsames Schneiden | Nach Bedarf |

### Führungswartung

<table>
  <thead>
    <tr>
      <th>Schritt</th>
      <th>Aktion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-highlighted>1</td>
      <td data-highlighted>Überprüfen Sie die Führungsausrichtung mit einem Winkelwerkzeug</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Reinigen Sie Führungsschienen mit einer weichen Bürste</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Tragen Sie geeignetes Schmiermittel auf bewegliche Teile auf</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Testen Sie die Bewegung auf Geschmeidigkeit</td>
    </tr>
  </tbody>
</table>

## Wartung von Schleifern und Schleifmaschinen

Diese Werkzeuge erzeugen erheblichen Staub und erfordern besondere Aufmerksamkeit.

### Staubsammelsystem

Die Wartung des Staubsammelsystems ist entscheidend:

1. Leeren Sie Staubsammelbeutel oder -behälter nach jedem Gebrauch
2. Reinigen Sie Filter regelmäßig mit Druckluft
3. Prüfen Sie auf Risse oder Löcher in Sammelbeuteln
4. Stellen Sie eine ordnungsgemäße Abdichtung zwischen den Komponenten sicher

### Pad- und Scheibenwartung

* **Regelmäßig überprüfen** - Achten Sie auf Risse, ungleichmäßigen Verschleiß oder Verhärtung
* **Zwischen Körnungen reinigen** - Beim Wechsel der Schleifpapierkörnung das Pad gründlich reinigen
* **Bei Verschleiß austauschen** - Ein abgenutztes Pad kann die Schleifqualität und die Werkzeugbalance beeinträchtigen
* **Angemessenen Druck ausüben** - Übermäßiger Druck nutzt Pads schneller ab

## Saisonale Wartungscheckliste

Für Werkzeuge, die nicht ganzjährig verwendet werden, befolgen Sie diese saisonale Wartungscheckliste:

1. **Zu Beginn der Saison**
   * Überprüfen Sie alle beweglichen Teile auf reibungslose Funktion
   * Inspizieren Sie Kabel und Stecker auf Beschädigungen
   * Testen Sie Akkus und Ladegeräte
   * Überprüfen Sie, ob alle Sicherheitsfunktionen funktionieren

2. **Am Ende der Saison**
   * Reinigen Sie alle Werkzeuge gründlich
   * Tragen Sie Rostschutzmittel auf Metallteile auf
   * Laden Sie Akkus vor der Lagerung vollständig auf
   * Lagern Sie in einer klimakontrollierten Umgebung

## Fehlerbehebung bei häufigen Problemen

### Motorprobleme

Wenn der Motor Ihres Werkzeugs heiß läuft oder ungewöhnliche Geräusche macht:

* Reinigen Sie alle Lüftungsöffnungen und Luftwege
* Prüfen Sie auf Blockierungen in beweglichen Teilen
* Überprüfen Sie die Bürsten auf Verschleiß (falls zutreffend)
* Stellen Sie eine ordnungsgemäße Schmierung sicher

### Stromprobleme

Bei Werkzeugen mit unbeständiger Leistung:

* Überprüfen Sie Stromquelle und Anschlüsse
* Inspizieren Sie Kabel auf Beschädigungen
* Testen Sie Akkus in einem anderen Werkzeug
* Reinigen Sie Akkukontakte

## Professionelle Wartungsdienste

Einige Wartungsaufgaben sollten Fachleuten überlassen werden:

* **Jährliche Inspektion** - Lassen Sie Ihre meistgenutzten Werkzeuge jährlich professionell überprüfen
* **Motorüberholung** - Wenn die Leistung deutlich nachlässt
* **Präzisionskalibrierung** - Für Werkzeuge, die exakte Messungen erfordern
* **Elektrische Sicherheitsprüfung** - Besonders bei älteren Werkzeugen

## Fazit

Konsequente Wartung Ihrer PowerPro-Werkzeuge ist eine Investition, die sich in Leistung und Langlebigkeit auszahlt. Wenn Sie diesem Leitfaden folgen, stellen Sie sicher, dass Ihre Werkzeuge immer einsatzbereit sind und mit maximaler Effizienz arbeiten.

Für zusätzliche Unterstützung bei der Werkzeugwartung kontaktieren Sie unser Kundenservice-Team unter support@powerprotools.com oder rufen Sie 0800-POWERTOOLS an.`,
            },
        ],
    },
];

export const MOCK_ARTICLE1_PL: Articles.Model.Article[] = [
    {
        id: 'art-002',
        slug: '/pomoc-i-wsparcie/konserwacja/przewodnik-konserwacji-narzedzi-powerpro',
        roles: [],
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Przewodnik konserwacji narzędzi PowerPro',
        lead: 'Dowiedz się, jak prawidłowo konserwować narzędzia PowerPro, aby zapewnić optymalną wydajność i trwałość.',
        tags: ['konserwacja', 'narzędzia', 'przewodnik'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            width: 640,
            height: 427,
            alt: 'Konserwacja narzędzi',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            alt: 'Miniatura konserwacji narzędzi',
        },
        category: {
            id: 'maintenance',
            title: 'Konserwacja',
        },
        author: {
            name: 'Jane Doe',
            position: 'Technical Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-002-1',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Wprowadzenie do konserwacji narzędzi',
                content:
                    'Regularna konserwacja jest niezbędna do utrzymania narzędzi PowerPro w optymalnym stanie. Ten przewodnik przeprowadzi Cię przez najlepsze praktyki konserwacji różnych typów narzędzi.',
            },
            {
                id: 'sect-002-2',
                createdAt: '2023-06-10T11:00:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintanance.jpg',
                    alt: 'Zestaw do konserwacji narzędzi',
                },
                caption:
                    'Kompleksowy zestaw do konserwacji PowerPro zawiera wszystko, czego potrzebujesz, aby utrzymać narzędzia w najlepszym stanie.',
            },
            {
                id: 'sect-002-3',
                createdAt: '2023-06-10T10:15:00Z',
                updatedAt: '2023-07-20T16:30:00Z',
                __typename: 'ArticleSectionText',
                title: 'Szczegółowy przewodnik konserwacji',
                content: `# Przewodnik konserwacji narzędzi PowerPro

Witamy w naszym kompleksowym przewodniku dotyczącym konserwacji narzędzi PowerPro. Właściwa konserwacja nie tylko wydłuża żywotność narzędzi, ale także zapewnia ich najlepszą wydajność, gdy najbardziej ich potrzebujesz.

## Podstawowe zasady konserwacji

Niezależnie od konkretnego narzędzia, istnieją uniwersalne zasady konserwacji, które mają zastosowanie do wszystkich urządzeń PowerPro:

### Regularne czyszczenie

Utrzymanie narzędzi w czystości jest podstawą dobrej konserwacji:

1. Po każdym użyciu przetrzyj zewnętrzną powierzchnię czystą szmatką
2. Usuń kurz, zanieczyszczenia lub wilgoć
3. Zwróć szczególną uwagę na otwory wentylacyjne i ruchome części
4. Użyj sprężonego powietrza do czyszczenia trudno dostępnych miejsc

> **Wskazówka eksperta:** Nigdy nie używaj wody bezpośrednio na elementach elektrycznych. Zamiast tego użyj lekko wilgotnej szmatki lub specjalistycznych środków do czyszczenia elektroniki.

### Prawidłowe przechowywanie

Sposób przechowywania narzędzi znacząco wpływa na ich żywotność:

1. Przechowuj narzędzia w suchym, czystym środowisku
2. Używaj oryginalnych walizek, gdy to możliwe
3. Przechowuj baterie oddzielnie od narzędzi podczas długotrwałego przechowywania
4. Wieszaj narzędzia, gdy jest to wskazane, aby zapobiec uszkodzeniom

![Prawidłowe przechowywanie narzędzi](https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-storage.jpg "Przykład prawidłowego przechowywania narzędzi")

## Konserwacja wiertarek elektrycznych

Wiertarki elektryczne wymagają specyficznej konserwacji, aby zapewnić płynne działanie i długą żywotność.

### Konserwacja uchwytu wiertarskiego

Uchwyt wiertarski to kluczowy element, który wymaga regularnej uwagi:

1. Otwórz uchwyt całkowicie i usuń wszelkie zanieczyszczenia
2. Nałóż niewielką ilość smaru na ruchome części
3. Otwórz i zamknij uchwyt kilkakrotnie, aby rozprowadzić smar
4. Wytrzyj nadmiar smaru

### Dbałość o akumulator

W przypadku wiertarek bezprzewodowych, konserwacja akumulatora jest niezbędna:

* **Regularne ładowanie** - Nie pozwól, aby akumulatory leżały nieużywane przez miesiące
* **Unikaj ekstremalnych temperatur** - Przechowuj w temperaturze od 4°C do 27°C
* **Zapobiegaj całkowitemu rozładowaniu** - Ładuj, gdy zauważysz spadek mocy
* **Czyść styki** - Utrzymuj styki akumulatora w czystości za pomocą chusteczek nasączonych alkoholem

## Konserwacja pił

Piły mają unikalne wymagania konserwacyjne ze względu na ich mechanizmy tnące.

### Dbałość o ostrze i wymiana

| Typ piły | Częstotliwość kontroli ostrza | Oznaki zużycia | Częstotliwość wymiany |
|----------|------------------------------|---------------|----------------------|
| Piła tarczowa | Po każdych 8-10 godzinach użytkowania | Wyszczerbione zęby, zapach spalenizny | 25-50 godzin użytkowania |
| Wyrzynarka | Po każdych 5 godzinach użytkowania | Wygięte ostrze, nierówne cięcia | 15-20 godzin użytkowania |
| Piła szablasta | Po każdym zadaniu | Przebarwienia, wolne cięcie | W razie potrzeby |

### Konserwacja prowadnic

<table>
  <thead>
    <tr>
      <th>Krok</th>
      <th>Działanie</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-highlighted>1</td>
      <td data-highlighted>Sprawdź wyrównanie prowadnicy za pomocą kątownika</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Wyczyść szyny prowadzące miękką szczotką</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Nałóż odpowiedni smar na ruchome części</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Przetestuj płynność ruchu</td>
    </tr>
  </tbody>
</table>

## Konserwacja szlifierek

Te narzędzia generują znaczną ilość pyłu i wymagają szczególnej uwagi.

### System zbierania pyłu

Konserwacja systemu zbierania pyłu jest kluczowa:

1. Opróżniaj worki lub pojemniki na pył po każdym użyciu
2. Regularnie czyść filtry sprężonym powietrzem
3. Sprawdzaj, czy w workach nie ma rozdarć lub dziur
4. Zapewnij prawidłowe uszczelnienie między komponentami

### Konserwacja padów i tarcz

* **Regularna kontrola** - Szukaj rozdarć, nierównomiernego zużycia lub stwardnienia
* **Czyszczenie między zmianami ziarnistości** - Przy zmianie ziarnistości papieru ściernego dokładnie wyczyść pad
* **Wymiana przy zużyciu** - Zużyty pad może wpłynąć na jakość szlifowania i wyważenie narzędzia
* **Stosuj odpowiedni nacisk** - Nadmierny nacisk powoduje szybsze zużycie padów

## Sezonowa lista kontrolna konserwacji

W przypadku narzędzi, które nie są używane przez cały rok, postępuj zgodnie z tą sezonową listą kontrolną:

1. **Początek sezonu**
   * Sprawdź wszystkie ruchome części pod kątem płynności działania
   * Sprawdź przewody i wtyczki pod kątem uszkodzeń
   * Przetestuj akumulatory i ładowarki
   * Sprawdź, czy wszystkie funkcje bezpieczeństwa działają

2. **Koniec sezonu**
   * Dokładnie wyczyść wszystkie narzędzia
   * Nałóż środek zapobiegający rdzewieniu na metalowe części
   * Naładuj akumulatory do pełna przed przechowywaniem
   * Przechowuj w środowisku o kontrolowanej temperaturze

## Rozwiązywanie typowych problemów

### Problemy z silnikiem

Jeśli silnik narzędzia przegrzewa się lub wydaje nietypowe dźwięki:

* Wyczyść wszystkie otwory wentylacyjne i kanały powietrzne
* Sprawdź, czy ruchome części nie są zablokowane
* Sprawdź szczotki pod kątem zużycia (jeśli dotyczy)
* Zapewnij prawidłowe smarowanie

### Problemy z zasilaniem

W przypadku narzędzi o niestabilnej mocy:

* Sprawdź źródło zasilania i połączenia
* Sprawdź przewody pod kątem uszkodzeń
* Przetestuj akumulatory w innym narzędziu
* Wyczyść styki akumulatora

## Profesjonalne usługi konserwacyjne

Niektóre zadania konserwacyjne najlepiej pozostawić profesjonalistom:

* **Coroczna inspekcja** - Zlecaj profesjonalną kontrolę najczęściej używanych narzędzi raz w roku
* **Regeneracja silnika** - Gdy wydajność znacznie spada
* **Precyzyjna kalibracja** - Dla narzędzi wymagających dokładnych pomiarów
* **Testy bezpieczeństwa elektrycznego** - Szczególnie w przypadku starszych narzędzi

## Podsumowanie

Konsekwentna konserwacja narzędzi PowerPro to inwestycja, która przynosi korzyści w postaci wydajności i trwałości. Postępując zgodnie z tym przewodnikiem, zapewnisz, że Twoje narzędzia będą zawsze gotowe do użycia i będą działać z maksymalną wydajnością.

Aby uzyskać dodatkową pomoc w zakresie konserwacji narzędzi, skontaktuj się z naszym zespołem obsługi klienta pod adresem support@powerprotools.com lub zadzwoń pod numer 800-POWERTOOLS.`,
            },
        ],
    },
];
