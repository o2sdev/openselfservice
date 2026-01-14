import { Products } from '@o2s/framework/modules';

const MOCK_PRODUCT_1_EN: Products.Model.Product = {
    id: 'PRD-004',
    sku: 'RH-2400X-PRO',
    name: 'ProForce Rotary Hammer RH-2400X',
    description:
        '<p>The <strong>ProForce Rotary Hammer RH-2400X</strong> is a professional heavy-duty hammer drill engineered for demanding concrete and masonry applications. Built with industrial-grade components and featuring advanced vibration reduction technology, this tool delivers exceptional performance and durability for construction professionals.</p><h3>Power and Performance</h3><p>Equipped with a high-torque 1200W motor, the RH-2400X delivers powerful 3.2J impact energy for efficient drilling through the toughest materials including reinforced concrete, natural stone, and brick. The variable speed control (0-1000 RPM) allows for precise operation across different material types, while the three-mode selector (rotary drilling, hammer drilling, and chiseling) provides maximum versatility.</p><p>Key features include:</p><ul><li>3.2J impact energy for fast drilling in concrete</li><li>Variable speed control for precision work</li><li>Anti-Vibration System (AVS) reduces operator fatigue</li><li>Integrated dust extraction system for cleaner work environment</li><li>LED work light illuminates dark work areas</li><li>Safety clutch prevents tool kickback</li></ul><h3>Durability and Reliability</h3><p>Constructed with premium materials and advanced engineering, the RH-2400X is designed to withstand continuous use in challenging construction environments. The robust metal housing protects internal components from dust and debris, while the all-metal gearbox ensures long service life.</p>',
    shortDescription: 'Professional 1200W rotary hammer with 3.2J impact energy for concrete and masonry',
    subtitle: 'Power Tools • Rotary Hammers',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-004_1.jpg',
        width: 800,
        height: 800,
        alt: 'ProForce Rotary Hammer RH-2400X',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-004_1.jpg',
            alt: 'ProForce Rotary Hammer RH-2400X',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 349.99,
        currency: 'USD',
    },
    link: '/products/PRD-004',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professional',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '1200W', icon: 'Zap' },
        { value: '3.2J Impact', icon: 'Hammer' },
        { value: 'AVS', icon: 'Shield' },
    ],
    detailedSpecs: [
        { label: 'Impact Energy', value: '3.2 J' },
        { label: 'Input Power', value: '1200 W' },
        { label: 'No-Load Speed', value: '0-1000 RPM' },
        { label: 'Impact Rate', value: '0-4500 BPM' },
        { label: 'Chuck Type', value: 'SDS-Plus' },
        { label: 'Max Drilling Capacity', value: '32mm (concrete)' },
        { label: 'Weight', value: '4.2 kg' },
        { label: 'Voltage', value: '230V' },
        { label: 'Cable Length', value: '4 m' },
        { label: 'Vibration Level', value: '12 m/s²' },
        { label: 'Noise Level', value: '95 dB(A)' },
        { label: 'Certification', value: 'CE, ETL, ISO 9001' },
    ],
};

const MOCK_PRODUCT_1_PL: Products.Model.Product = {
    id: 'PRD-004',
    sku: 'RH-2400X-PRO',
    name: 'ProForce Młotowiertarka RH-2400X',
    description:
        '<p><strong>ProForce Młotowiertarka RH-2400X</strong> to profesjonalna, ciężka młotowiertarka zaprojektowana do wymagających zastosowań w betonie i murarstwie. Zbudowana z komponentów przemysłowych i wyposażona w zaawansowaną technologię redukcji wibracji, to narzędzie zapewnia wyjątkową wydajność i trwałość dla profesjonalistów budowlanych.</p><h3>Moc i Wydajność</h3><p>Wyposażona w silnik o wysokim momencie obrotowym 1200W, RH-2400X dostarcza potężną energię uderzenia 3,2J do efektywnego wiercenia w najtwardszych materiałach, w tym w zbrojonym betonie, naturalnym kamieniu i cegle. Zmienna kontrola prędkości (0-1000 RPM) umożliwia precyzyjną pracę w różnych typach materiałów, podczas gdy trójpozycyjny przełącznik (wiercenie obrotowe, wiercenie udarowe i dłutowanie) zapewnia maksymalną wszechstronność.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Energia uderzenia 3,2J do szybkiego wiercenia w betonie</li><li>Zmienna kontrola prędkości do precyzyjnej pracy</li><li>System redukcji wibracji (AVS) zmniejsza zmęczenie operatora</li><li>Zintegrowany system odpylania dla czystszego środowiska pracy</li><li>Światło robocze LED oświetla ciemne obszary pracy</li><li>Bezpieczne sprzęgło zapobiega odrzutowi narzędzia</li></ul><h3>Trwałość i Niezawodność</h3><p>Zbudowana z wysokiej jakości materiałów i zaawansowanej inżynierii, RH-2400X jest zaprojektowana do wytrzymania ciągłego użytkowania w wymagających środowiskach budowlanych. Solidna metalowa obudowa chroni wewnętrzne komponenty przed kurzem i zanieczyszczeniami, podczas gdy całkowicie metalowa skrzynia biegów zapewnia długą żywotność.</p>',
    shortDescription: 'Profesjonalna młotowiertarka 1200W z energią uderzenia 3,2J do betonu i murarstwa',
    subtitle: 'Narzędzia Elektryczne • Młotowiertarki',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-004_1.jpg',
        width: 800,
        height: 800,
        alt: 'ProForce Młotowiertarka RH-2400X',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-004_1.jpg',
            alt: 'ProForce Młotowiertarka RH-2400X',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Kabel Zasilający',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 1399.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-004',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Profesjonalne',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '1200W', icon: 'Zap' },
        { value: '3.2J Uderzenie', icon: 'Hammer' },
        { value: 'AVS', icon: 'Shield' },
    ],
    detailedSpecs: [
        { label: 'Energia Uderzenia', value: '3,2 J' },
        { label: 'Moc Wejściowa', value: '1200 W' },
        { label: 'Prędkość Bez Obciążenia', value: '0-1000 RPM' },
        { label: 'Częstotliwość Uderzeń', value: '0-4500 BPM' },
        { label: 'Typ Uchwytu', value: 'SDS-Plus' },
        { label: 'Maksymalna Średnica Wiercenia', value: '32mm (beton)' },
        { label: 'Waga', value: '4,2 kg' },
        { label: 'Napięcie', value: '230V' },
        { label: 'Długość Kabla', value: '4 m' },
        { label: 'Poziom Wibracji', value: '12 m/s²' },
        { label: 'Poziom Hałasu', value: '95 dB(A)' },
        { label: 'Certyfikacja', value: 'CE, ETL, ISO 9001' },
    ],
};

const MOCK_PRODUCT_1_DE: Products.Model.Product = {
    id: 'PRD-004',
    sku: 'RH-2400X-PRO',
    name: 'ProForce Bohrhammer RH-2400X',
    description:
        '<p>Der <strong>ProForce Bohrhammer RH-2400X</strong> ist ein professioneller, schwerer Bohrhammer für anspruchsvolle Beton- und Mauerwerksanwendungen. Mit industrietauglichen Komponenten und fortschrittlicher Vibrationsreduzierungstechnologie liefert dieses Werkzeug außergewöhnliche Leistung und Haltbarkeit für Bauprofis.</p><h3>Leistung und Performance</h3><p>Ausgestattet mit einem Hochdrehmoment-Motor von 1200W liefert der RH-2400X eine kraftvolle Schlagenergie von 3,2J für effizientes Bohren durch die härtesten Materialien, einschließlich Stahlbeton, Naturstein und Ziegel. Die variable Geschwindigkeitskontrolle (0-1000 U/min) ermöglicht präzises Arbeiten bei verschiedenen Materialtypen, während der Drei-Modus-Wähler (Rotationsbohren, Schlagbohren und Meißeln) maximale Vielseitigkeit bietet.</p><p>Wichtige Funktionen:</p><ul><li>3,2J Schlagenergie für schnelles Bohren in Beton</li><li>Variable Geschwindigkeitskontrolle für präzise Arbeit</li><li>Anti-Vibrations-System (AVS) reduziert Ermüdung des Bedieners</li><li>Integriertes Staubabsaugsystem für sauberere Arbeitsumgebung</li><li>LED-Arbeitsleuchte beleuchtet dunkle Arbeitsbereiche</li><li>Sicherheitskupplung verhindert Rückschlag des Werkzeugs</li></ul><h3>Haltbarkeit und Zuverlässigkeit</h3><p>Konstruiert mit hochwertigen Materialien und fortschrittlicher Technik ist der RH-2400X für den kontinuierlichen Einsatz in anspruchsvollen Baustellenumgebungen ausgelegt. Das robuste Metallgehäuse schützt interne Komponenten vor Staub und Schmutz, während das vollständig metallische Getriebe eine lange Lebensdauer gewährleistet.</p>',
    shortDescription: 'Professioneller 1200W Bohrhammer mit 3,2J Schlagenergie für Beton und Mauerwerk',
    subtitle: 'Elektrowerkzeuge • Bohrhammer',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-004_1.jpg',
        width: 800,
        height: 800,
        alt: 'ProForce Bohrhammer RH-2400X',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-004_1.jpg',
            alt: 'ProForce Bohrhammer RH-2400X',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 349.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-004',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professionell',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '1200W', icon: 'Zap' },
        { value: '3.2J Schlag', icon: 'Hammer' },
        { value: 'AVS', icon: 'Shield' },
    ],
    detailedSpecs: [
        { label: 'Schlagenergie', value: '3,2 J' },
        { label: 'Eingangsleistung', value: '1200 W' },
        { label: 'Leerlaufdrehzahl', value: '0-1000 U/min' },
        { label: 'Schlagfrequenz', value: '0-4500 BPM' },
        { label: 'Spannfuttertyp', value: 'SDS-Plus' },
        { label: 'Max. Bohrdurchmesser', value: '32mm (Beton)' },
        { label: 'Gewicht', value: '4,2 kg' },
        { label: 'Spannung', value: '230V' },
        { label: 'Kabellänge', value: '4 m' },
        { label: 'Vibrationspegel', value: '12 m/s²' },
        { label: 'Geräuschpegel', value: '95 dB(A)' },
        { label: 'Zertifizierung', value: 'CE, ETL, ISO 9001' },
    ],
};

const MOCK_PRODUCT_2_EN: Products.Model.Product = {
    id: 'PRD-005',
    sku: 'AG-125BL-22V',
    name: 'MaxCut Cordless Angle Grinder AG-125BL',
    description:
        '<p>The <strong>MaxCut Cordless Angle Grinder AG-125BL</strong> offers professional-grade cutting and grinding performance without the limitations of a power cord. Powered by our advanced 22V lithium-ion battery platform, this tool provides exceptional freedom of movement and convenience for metalwork, fabrication, and construction applications.</p><h3>Advanced Battery Technology</h3><p>Built on our 22V MAX lithium-ion battery platform with 5.0Ah capacity, this angle grinder delivers consistent power output throughout the battery charge cycle. The intelligent battery management system protects against overcharging, overheating, and over-discharge, extending battery life by up to 3x compared to standard batteries. Fast charging technology brings the battery from 0 to 80% in just 30 minutes.</p><p>Key features include:</p><ul><li>22V MAX lithium-ion battery platform (5.0Ah)</li><li>Fast charging technology (30 minutes to 80%)</li><li>LED battery level indicator with 4-stage display</li><li>Compatible with entire 22V MAX tool ecosystem (40+ tools)</li><li>Up to 60 minutes continuous runtime on full charge</li></ul><h3>Performance and Safety</h3><p>With a powerful brushless motor delivering 10,000 RPM no-load speed, the AG-125BL maintains consistent performance under load. The electronic brake stops the disc within 2 seconds of releasing the trigger. Safety features include anti-kickback protection, spindle lock for easy disc changes, and adjustable protective guard.</p>',
    shortDescription: 'Professional 22V cordless angle grinder with brushless motor and 5.0Ah battery',
    subtitle: 'Power Tools • Angle Grinders',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-005_1.jpg',
        width: 800,
        height: 800,
        alt: 'MaxCut Cordless Angle Grinder AG-125BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-005_1.jpg',
            alt: 'MaxCut Cordless Angle Grinder AG-125BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 249.99,
        currency: 'USD',
    },
    link: '/products/PRD-005',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Bestseller',
            variant: 'default',
        },
        {
            label: 'Promo -15%',
            variant: 'destructive',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '10,000 RPM', icon: 'Gauge' },
        { value: 'Brushless', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Disc Size', value: '125mm (5")' },
        { label: 'No-Load Speed', value: '10,000 RPM' },
        { label: 'Battery Voltage', value: '22V MAX' },
        { label: 'Battery Capacity', value: '5.0 Ah' },
        { label: 'Runtime', value: 'Up to 60 min' },
        { label: 'Weight (with battery)', value: '2.8 kg' },
        { label: 'Charging Time', value: '30 min (80%), 45 min (100%)' },
        { label: 'Motor Type', value: 'Brushless' },
        { label: 'Spindle Thread', value: 'M14' },
        { label: 'Electronic Brake', value: 'Yes (2s stop)' },
        { label: 'Vibration Level', value: '3.5 m/s²' },
        { label: 'Certification', value: 'CE, UL, GS' },
    ],
};

const MOCK_PRODUCT_2_PL: Products.Model.Product = {
    id: 'PRD-005',
    sku: 'AG-125BL-22V',
    name: 'MaxCut Szlifierka Kątowa Bezprzewodowa AG-125BL',
    description:
        '<p><strong>MaxCut Szlifierka Kątowa Bezprzewodowa AG-125BL</strong> oferuje profesjonalną wydajność cięcia i szlifowania bez ograniczeń przewodu zasilającego. Zasilana zaawansowaną platformą akumulatorową 22V litowo-jonową, to narzędzie zapewnia wyjątkową swobodę ruchu i wygodę w zastosowaniach metalowych, fabrykacyjnych i budowlanych.</p><h3>Zaawansowana Technologia Akumulatorowa</h3><p>Zbudowana na platformie akumulatorowej 22V MAX litowo-jonowej o pojemności 5,0Ah, ta szlifierka kątowa zapewnia stałą moc wyjściową przez cały cykl ładowania akumulatora. Inteligentny system zarządzania akumulatorem chroni przed przeładowaniem, przegrzaniem i nadmiernym rozładowaniem, wydłużając żywotność akumulatora nawet 3x w porównaniu ze standardowymi akumulatorami. Technologia szybkiego ładowania ładuje akumulator z 0 do 80% w zaledwie 30 minut.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Platforma akumulatorowa 22V MAX litowo-jonowa (5,0Ah)</li><li>Technologia szybkiego ładowania (30 minut do 80%)</li><li>Wskaźnik poziomu akumulatora LED z 4-stopniowym wyświetlaczem</li><li>Kompatybilna z całym ekosystemem narzędzi 22V MAX (40+ narzędzi)</li><li>Do 60 minut ciągłej pracy na pełnym naładowaniu</li></ul><h3>Wydajność i Bezpieczeństwo</h3><p>Z potężnym silnikiem bezszczotkowym dostarczającym 10 000 RPM prędkości bez obciążenia, AG-125BL utrzymuje stałą wydajność pod obciążeniem. Hamulec elektroniczny zatrzymuje tarczę w ciągu 2 sekund po zwolnieniu spustu. Funkcje bezpieczeństwa obejmują ochronę przed odrzutem, blokadę wrzeciona do łatwej wymiany tarczy i regulowaną osłonę ochronną.</p>',
    shortDescription:
        'Profesjonalna szlifierka kątowa bezprzewodowa 22V z silnikiem bezszczotkowym i akumulatorem 5,0Ah',
    subtitle: 'Narzędzia Elektryczne • Szlifierki Kątowe',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-005_1.jpg',
        width: 800,
        height: 800,
        alt: 'MaxCut Szlifierka Kątowa Bezprzewodowa AG-125BL',
    },
    price: {
        value: 999.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-005',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Bestseller',
            variant: 'default',
        },
        {
            label: 'Promo -15%',
            variant: 'destructive',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '10 000 RPM', icon: 'Gauge' },
        { value: 'Bezszczotkowy', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Rozmiar Tarczy', value: '125mm (5")' },
        { label: 'Prędkość Bez Obciążenia', value: '10 000 RPM' },
        { label: 'Napięcie Akumulatora', value: '22V MAX' },
        { label: 'Pojemność Akumulatora', value: '5,0 Ah' },
        { label: 'Czas Pracy', value: 'Do 60 min' },
        { label: 'Waga (z akumulatorem)', value: '2,8 kg' },
        { label: 'Czas Ładowania', value: '30 min (80%), 45 min (100%)' },
        { label: 'Typ Silnika', value: 'Bezszczotkowy' },
        { label: 'Gwint Wrzeciona', value: 'M14' },
        { label: 'Hamulec Elektroniczny', value: 'Tak (zatrzymanie 2s)' },
        { label: 'Poziom Wibracji', value: '3,5 m/s²' },
        { label: 'Certyfikacja', value: 'CE, UL, GS' },
    ],
};

const MOCK_PRODUCT_2_DE: Products.Model.Product = {
    id: 'PRD-005',
    sku: 'AG-125BL-22V',
    name: 'MaxCut Akku-Winkelschleifer AG-125BL',
    description:
        '<p>Der <strong>MaxCut Akku-Winkelschleifer AG-125BL</strong> bietet professionelle Schneid- und Schleifleistung ohne die Einschränkungen eines Netzkabels. Angetrieben von unserer fortschrittlichen 22V Lithium-Ionen-Akkuplattform bietet dieses Werkzeug außergewöhnliche Bewegungsfreiheit und Komfort für Metallbearbeitung, Fertigung und Bauanwendungen.</p><h3>Fortschrittliche Akkutechnologie</h3><p>Aufgebaut auf unserer 22V MAX Lithium-Ionen-Akkuplattform mit 5,0Ah Kapazität liefert dieser Winkelschleifer konsistente Leistung während des gesamten Ladezyklus. Das intelligente Batteriemanagementsystem schützt vor Überladung, Überhitzung und Tiefentladung und verlängert die Akkulebensdauer um bis zu 3x im Vergleich zu Standard-Akkus. Die Schnellladetechnologie bringt den Akku in nur 30 Minuten von 0 auf 80%.</p><p>Wichtige Funktionen:</p><ul><li>22V MAX Lithium-Ionen-Akkuplattform (5,0Ah)</li><li>Schnellladetechnologie (30 Minuten auf 80%)</li><li>LED-Akkuanzeige mit 4-stufiger Anzeige</li><li>Kompatibel mit dem gesamten 22V MAX Werkzeugekosystem (40+ Werkzeuge)</li><li>Bis zu 60 Minuten kontinuierliche Laufzeit bei voller Ladung</li></ul><h3>Leistung und Sicherheit</h3><p>Mit einem leistungsstarken bürstenlosen Motor, der 10.000 U/min Leerlaufdrehzahl liefert, hält der AG-125BL unter Last eine konsistente Leistung. Die elektronische Bremse stoppt die Scheibe innerhalb von 2 Sekunden nach dem Loslassen des Abzugs. Sicherheitsfunktionen umfassen Rückschlagschutz, Spindelverriegelung für einfachen Scheibenwechsel und verstellbaren Schutzschirm.</p>',
    shortDescription: 'Professioneller 22V Akku-Winkelschleifer mit bürstenlosem Motor und 5,0Ah Akku',
    subtitle: 'Elektrowerkzeuge • Winkelschleifer',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-005_1.jpg',
        width: 800,
        height: 800,
        alt: 'MaxCut Akku-Winkelschleifer AG-125BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-005_1.jpg',
            alt: 'MaxCut Akku-Winkelschleifer AG-125BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 249.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-005',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Bestseller',
            variant: 'default',
        },
        {
            label: 'Promo -15%',
            variant: 'destructive',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '10.000 U/min', icon: 'Gauge' },
        { value: 'Bürstenlos', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Scheibengröße', value: '125mm (5")' },
        { label: 'Leerlaufdrehzahl', value: '10.000 U/min' },
        { label: 'Akkuspannung', value: '22V MAX' },
        { label: 'Akkukapazität', value: '5,0 Ah' },
        { label: 'Laufzeit', value: 'Bis zu 60 Min' },
        { label: 'Gewicht (mit Akku)', value: '2,8 kg' },
        { label: 'Ladezeit', value: '30 Min (80%), 45 Min (100%)' },
        { label: 'Motortyp', value: 'Bürstenlos' },
        { label: 'Spindelgewinde', value: 'M14' },
        { label: 'Elektronische Bremse', value: 'Ja (2s Stopp)' },
        { label: 'Vibrationspegel', value: '3,5 m/s²' },
        { label: 'Zertifizierung', value: 'CE, UL, GS' },
    ],
};

const MOCK_PRODUCT_3_EN: Products.Model.Product = {
    id: 'PRD-006',
    sku: 'LDM-100PRO',
    name: 'PrecisionLine Laser Distance Meter LDM-100',
    description:
        '<p>The <strong>PrecisionLine Laser Distance Meter LDM-100</strong> is a professional precision tool designed for accurate distance measurements in construction, surveying, and interior design applications. Utilizing advanced Class 2 laser technology with enhanced optics, it provides instant and reliable measurements with professional-grade accuracy even in bright outdoor conditions.</p><h3>Precision and Accuracy</h3><p>With an extended measurement range of up to 100 meters and exceptional accuracy of ±1.5mm, the LDM-100 ensures reliable results for critical measurements. The device features an automatic leveling sensor and tilt measurement function for advanced applications. The high-visibility laser point is visible even in sunlight, making outdoor measurements easier than ever.</p><p>Key features include:</p><ul><li>Measurement range: 0.05 to 100 meters</li><li>Accuracy: ±1.5mm for maximum precision</li><li>Multiple measurement modes: distance, area, volume, continuous tracking</li><li>Pythagorean calculations for indirect height/width measurements</li><li>Backlit color LCD display for visibility in all conditions</li><li>Automatic end-piece detection for corner measurements</li><li>Memory storage for up to 30 measurements</li></ul><h3>User-Friendly Design</h3><p>The intuitive interface with large, clearly labeled buttons makes the LDM-100 easy to use for both professionals and DIY enthusiasts. The device features IP54 dust and splash protection, making it suitable for construction site use. Bluetooth connectivity allows for data transfer to smartphones and tablets via the companion app.</p>',
    shortDescription: 'Professional laser distance meter with 100m range and ±1.5mm accuracy',
    subtitle: 'Measurement Tools • Laser Distance Meters',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-006_1.jpg',
        width: 800,
        height: 800,
        alt: 'PrecisionLine Laser Distance Meter LDM-100',
    },
    price: {
        value: 179.99,
        currency: 'USD',
    },
    link: '/products/PRD-006',
    type: 'PHYSICAL',
    category: 'MEASUREMENT',
    tags: [
        {
            label: 'Professional',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '100m Range', icon: 'Maximize' },
        { value: '±1.5mm', icon: 'Target' },
        { value: 'IP54', icon: 'Shield' },
    ],
    detailedSpecs: [
        { label: 'Measurement Range', value: '0.05 - 100 m' },
        { label: 'Accuracy', value: '±1.5 mm' },
        { label: 'Laser Class', value: 'Class 2 (<1mW, 635nm)' },
        { label: 'Display', value: 'Backlit Color LCD' },
        { label: 'Measurement Modes', value: 'Distance, Area, Volume, Tracking' },
        { label: 'Tilt Sensor', value: '360° with ±0.2° accuracy' },
        { label: 'Memory', value: '30 measurements' },
        { label: 'Connectivity', value: 'Bluetooth 5.0' },
        { label: 'Protection Rating', value: 'IP54' },
        { label: 'Battery', value: 'Rechargeable Li-ion' },
        { label: 'Battery Life', value: '10,000 measurements' },
        { label: 'Operating Temperature', value: '-10°C to +50°C' },
        { label: 'Certification', value: 'CE, FCC, RoHS' },
    ],
};

const MOCK_PRODUCT_3_PL: Products.Model.Product = {
    id: 'PRD-006',
    sku: 'LDM-100PRO',
    name: 'PrecisionLine Dalmierz Laserowy LDM-100',
    description:
        '<p><strong>PrecisionLine Dalmierz Laserowy LDM-100</strong> to profesjonalne narzędzie pomiarowe zaprojektowane do precyzyjnych pomiarów odległości w zastosowaniach budowlanych, geodezyjnych i projektowania wnętrz. Wykorzystując zaawansowaną technologię lasera klasy 2 z ulepszoną optyką, zapewnia natychmiastowe i niezawodne pomiary z profesjonalną dokładnością nawet w jasnych warunkach zewnętrznych.</p><h3>Precyzja i Dokładność</h3><p>Z rozszerzonym zakresem pomiarowym do 100 metrów i wyjątkową dokładnością ±1,5mm, LDM-100 zapewnia niezawodne wyniki dla krytycznych pomiarów. Urządzenie posiada automatyczny czujnik poziomowania i funkcję pomiaru nachylenia dla zaawansowanych zastosowań. Wysokiej widoczności punkt laserowy jest widoczny nawet w świetle słonecznym, co ułatwia pomiary zewnętrzne.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Zakres pomiarowy: 0,05 do 100 metrów</li><li>Dokładność: ±1,5mm dla maksymalnej precyzji</li><li>Wiele trybów pomiarowych: odległość, powierzchnia, objętość, ciągłe śledzenie</li><li>Obliczenia pitagorejskie dla pośrednich pomiarów wysokości/szerokości</li><li>Podświetlany kolorowy wyświetlacz LCD dla widoczności we wszystkich warunkach</li><li>Automatyczne wykrywanie końcówki dla pomiarów narożnych</li><li>Pamięć do 30 pomiarów</li></ul><h3>Przyjazny dla Użytkownika Projekt</h3><p>Intuicyjny interfejs z dużymi, wyraźnie oznaczonymi przyciskami sprawia, że LDM-100 jest łatwy w użyciu zarówno dla profesjonalistów, jak i entuzjastów DIY. Urządzenie posiada ochronę IP54 przed kurzem i zachlapaniem, co czyni je odpowiednim do użycia na placu budowy. Łączność Bluetooth umożliwia transfer danych do smartfonów i tabletów za pomocą aplikacji towarzyszącej.</p>',
    shortDescription: 'Profesjonalny dalmierz laserowy z zakresem 100m i dokładnością ±1,5mm',
    subtitle: 'Narzędzia Pomiarowe • Dalmierze Laserowe',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-006_1.jpg',
        width: 800,
        height: 800,
        alt: 'PrecisionLine Dalmierz Laserowy LDM-100',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-006_1.jpg',
            alt: 'PrecisionLine Dalmierz Laserowy LDM-100',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Kabel Zasilający',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 719.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-006',
    type: 'PHYSICAL',
    category: 'MEASUREMENT',
    tags: [
        {
            label: 'Profesjonalne',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: 'Zakres 100m', icon: 'Maximize' },
        { value: '±1,5mm', icon: 'Target' },
        { value: 'IP54', icon: 'Shield' },
    ],
    detailedSpecs: [
        { label: 'Zakres Pomiarowy', value: '0,05 - 100 m' },
        { label: 'Dokładność', value: '±1,5 mm' },
        { label: 'Klasa Lasera', value: 'Klasa 2 (<1mW, 635nm)' },
        { label: 'Wyświetlacz', value: 'Podświetlany Kolorowy LCD' },
        { label: 'Tryby Pomiarowe', value: 'Odległość, Powierzchnia, Objętość, Śledzenie' },
        { label: 'Czujnik Nachylenia', value: '360° z dokładnością ±0,2°' },
        { label: 'Pamięć', value: '30 pomiarów' },
        { label: 'Łączność', value: 'Bluetooth 5.0' },
        { label: 'Stopień Ochrony', value: 'IP54' },
        { label: 'Akumulator', value: 'Litowo-jonowy ładowalny' },
        { label: 'Żywotność Akumulatora', value: '10 000 pomiarów' },
        { label: 'Temperatura Pracy', value: '-10°C do +50°C' },
        { label: 'Certyfikacja', value: 'CE, FCC, RoHS' },
    ],
};

const MOCK_PRODUCT_3_DE: Products.Model.Product = {
    id: 'PRD-006',
    sku: 'LDM-100PRO',
    name: 'PrecisionLine Laserentfernungsmesser LDM-100',
    description:
        '<p>Der <strong>PrecisionLine Laserentfernungsmesser LDM-100</strong> ist ein professionelles Präzisionswerkzeug für genaue Entfernungsmessungen in Bau-, Vermessungs- und Innenarchitekturanwendungen. Mit fortschrittlicher Lasertechnologie der Klasse 2 und verbesserter Optik liefert er sofortige und zuverlässige Messungen mit professioneller Genauigkeit auch bei hellem Tageslicht.</p><h3>Präzision und Genauigkeit</h3><p>Mit einem erweiterten Messbereich von bis zu 100 Metern und außergewöhnlicher Genauigkeit von ±1,5mm gewährleistet der LDM-100 zuverlässige Ergebnisse für kritische Messungen. Das Gerät verfügt über einen automatischen Nivelliersensor und eine Neigungsmessfunktion für fortgeschrittene Anwendungen. Der hochsichtbare Laserpunkt ist auch bei Sonnenlicht sichtbar, was Außenmessungen einfacher macht.</p><p>Wichtige Funktionen:</p><ul><li>Messbereich: 0,05 bis 100 Meter</li><li>Genauigkeit: ±1,5mm für maximale Präzision</li><li>Mehrere Messmodi: Entfernung, Fläche, Volumen, kontinuierliche Verfolgung</li><li>Pythagoras-Berechnungen für indirekte Höhen-/Breitenmessungen</li><li>Hintergrundbeleuchtetes Farb-LCD-Display für Sichtbarkeit unter allen Bedingungen</li><li>Automatische Endstückerkennung für Eckmessungen</li><li>Speicher für bis zu 30 Messungen</li></ul><h3>Benutzerfreundliches Design</h3><p>Die intuitive Benutzeroberfläche mit großen, klar beschrifteten Tasten macht den LDM-100 sowohl für Profis als auch für DIY-Enthusiasten einfach zu bedienen. Das Gerät verfügt über IP54 Staub- und Spritzwasserschutz und ist damit für den Einsatz auf Baustellen geeignet. Bluetooth-Konnektivität ermöglicht die Datenübertragung zu Smartphones und Tablets über die Begleit-App.</p>',
    shortDescription: 'Professioneller Laserentfernungsmesser mit 100m Reichweite und ±1,5mm Genauigkeit',
    subtitle: 'Messwerkzeuge • Laserentfernungsmesser',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-006_1.jpg',
        width: 800,
        height: 800,
        alt: 'PrecisionLine Laserentfernungsmesser LDM-100',
    },
    price: {
        value: 179.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-006',
    type: 'PHYSICAL',
    category: 'MEASUREMENT',
    tags: [
        {
            label: 'Professionell',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '100m Reichweite', icon: 'Maximize' },
        { value: '±1,5mm', icon: 'Target' },
        { value: 'IP54', icon: 'Shield' },
    ],
    detailedSpecs: [
        { label: 'Messbereich', value: '0,05 - 100 m' },
        { label: 'Genauigkeit', value: '±1,5 mm' },
        { label: 'Laserklasse', value: 'Klasse 2 (<1mW, 635nm)' },
        { label: 'Display', value: 'Hintergrundbeleuchtetes Farb-LCD' },
        { label: 'Messmodi', value: 'Entfernung, Fläche, Volumen, Verfolgung' },
        { label: 'Neigungssensor', value: '360° mit ±0,2° Genauigkeit' },
        { label: 'Speicher', value: '30 Messungen' },
        { label: 'Konnektivität', value: 'Bluetooth 5.0' },
        { label: 'Schutzart', value: 'IP54' },
        { label: 'Akku', value: 'Wiederaufladbarer Li-Ion' },
        { label: 'Akkulaufzeit', value: '10.000 Messungen' },
        { label: 'Betriebstemperatur', value: '-10°C bis +50°C' },
        { label: 'Zertifizierung', value: 'CE, FCC, RoHS' },
    ],
};

const MOCK_PRODUCT_4_EN: Products.Model.Product = {
    id: 'PRD-007',
    sku: 'DD-2265BL-22V',
    name: 'PowerDrive Cordless Drill Driver DD-2265BL',
    description:
        '<p>The <strong>PowerDrive Cordless Drill Driver DD-2265BL</strong> is a versatile professional power tool designed for drilling and driving applications in wood, metal, and plastic. Built on our advanced 22V MAX battery platform with a powerful brushless motor, it offers exceptional power, runtime, and reliability for both professional contractors and serious DIY enthusiasts.</p><h3>Power and Versatility</h3><p>Equipped with a high-efficiency brushless motor, this drill driver delivers up to 65 Nm of maximum torque with superior energy efficiency. The two-speed all-metal transmission (0-450 RPM for high-torque applications, 0-1800 RPM for high-speed drilling) allows for optimal performance in both drilling and driving modes. The variable speed trigger with electronic feedback provides precise control, while the 20+1 torque settings enable perfect fastening without over-tightening or damaging materials.</p><p>Key features include:</p><ul><li>22V MAX brushless motor for maximum power and 50% longer runtime</li><li>Two-speed all-metal transmission (0-450/0-1800 RPM)</li><li>20+1 precision torque settings for delicate to heavy-duty applications</li><li>13mm (1/2") auto-lock metal chuck for secure bit retention</li><li>Dual LED work lights for improved visibility in dark areas</li><li>Belt clip and magnetic bit holder for convenience</li><li>Electronic motor brake for increased safety</li></ul><h3>Ergonomics and Durability</h3><p>The compact and lightweight design (only 2.1 kg with battery) reduces operator fatigue during extended use. The ergonomic soft-grip handle provides comfortable grip and precise control. The robust construction with overmold housing protects against drops and jobsite wear.</p>',
    shortDescription: 'Professional 22V cordless drill driver with 65Nm torque and brushless motor',
    subtitle: 'Power Tools • Drill Drivers',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-007_1.jpg',
        width: 800,
        height: 800,
        alt: 'PowerDrive Cordless Drill Driver DD-2265BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-007_1.jpg',
            alt: 'PowerDrive Cordless Drill Driver DD-2265BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_drill.jpg',
            alt: 'Drill Bits and Accessories',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 189.99,
        currency: 'USD',
    },
    link: '/products/PRD-007',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '65 Nm', icon: 'Gauge' },
        { value: 'Brushless', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Chuck Size', value: '13mm (1/2")' },
        { label: 'Chuck Type', value: 'Auto-lock metal' },
        { label: 'Max Torque', value: '65 Nm' },
        { label: 'Speed Range', value: '0-450 / 0-1800 RPM' },
        { label: 'Torque Settings', value: '20+1' },
        { label: 'Battery Voltage', value: '22V MAX' },
        { label: 'Max Drilling (Wood)', value: '38mm' },
        { label: 'Max Drilling (Metal)', value: '13mm' },
        { label: 'Weight (with battery)', value: '2.1 kg' },
        { label: 'Motor Type', value: 'Brushless' },
        { label: 'LED Work Light', value: 'Dual LED' },
        { label: 'Certification', value: 'CE, ETL, UL' },
    ],
};

const MOCK_PRODUCT_4_PL: Products.Model.Product = {
    id: 'PRD-007',
    sku: 'DD-2265BL-22V',
    name: 'PowerDrive Wiertarko-Wkrętarka Bezprzewodowa DD-2265BL',
    description:
        '<p><strong>PowerDrive Wiertarko-Wkrętarka Bezprzewodowa DD-2265BL</strong> to wszechstronne profesjonalne narzędzie elektryczne zaprojektowane do wiercenia i wkręcania w drewnie, metalu i plastiku. Zbudowana na zaawansowanej platformie akumulatorowej 22V MAX z potężnym silnikiem bezszczotkowym, oferuje wyjątkową moc, czas pracy i niezawodność zarówno dla profesjonalnych wykonawców, jak i poważnych entuzjastów DIY.</p><h3>Moc i Wszechstronność</h3><p>Wyposażona w wysokowydajny silnik bezszczotkowy, ta wiertarko-wkrętarka dostarcza do 65 Nm maksymalnego momentu obrotowego z doskonałą efektywnością energetyczną. Dwubiegowa, całkowicie metalowa przekładnia (0-450 RPM dla zastosowań wysokiego momentu, 0-1800 RPM dla szybkiego wiercenia) umożliwia optymalną wydajność zarówno w trybie wiercenia, jak i wkręcania. Zmienny spust z elektronicznym sprzężeniem zwrotnym zapewnia precyzyjną kontrolę, podczas gdy 20+1 ustawień momentu umożliwia idealne dokręcanie bez nadmiernego dokręcania lub uszkadzania materiałów.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Silnik bezszczotkowy 22V MAX dla maksymalnej mocy i 50% dłuższego czasu pracy</li><li>Dwubiegowa całkowicie metalowa przekładnia (0-450/0-1800 RPM)</li><li>20+1 precyzyjnych ustawień momentu dla delikatnych do ciężkich zastosowań</li><li>13mm (1/2") metalowy uchwyt z automatyczną blokadą dla bezpiecznego utrzymania wierteł</li><li>Podwójne światła robocze LED dla lepszej widoczności w ciemnych obszarach</li><li>Klips do paska i magnetyczny uchwyt na wiertła dla wygody</li><li>Elektroniczny hamulec silnika dla zwiększonego bezpieczeństwa</li></ul><h3>Ergonomia i Trwałość</h3><p>Kompaktowy i lekki projekt (tylko 2,1 kg z akumulatorem) zmniejsza zmęczenie operatora podczas długotrwałego użytkowania. Ergonomiczna rękojeść z miękkim uchwytem zapewnia wygodny chwyt i precyzyjną kontrolę. Solidna konstrukcja z obudową z nadmianem chroni przed upadkami i zużyciem na placu budowy.</p>',
    shortDescription: 'Profesjonalna wiertarko-wkrętarka bezprzewodowa 22V z momentem 65Nm i silnikiem bezszczotkowym',
    subtitle: 'Narzędzia Elektryczne • Wiertarko-Wkrętarki',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-007_1.jpg',
        width: 800,
        height: 800,
        alt: 'PowerDrive Wiertarko-Wkrętarka Bezprzewodowa DD-2265BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-007_1.jpg',
            alt: 'PowerDrive Wiertarko-Wkrętarka Bezprzewodowa DD-2265BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_drill.jpg',
            alt: 'Wiertła i Akcesoria',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Kabel Zasilający',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 759.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-007',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '65 Nm', icon: 'Gauge' },
        { value: 'Bezszczotkowy', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Rozmiar Uchwytu', value: '13mm (1/2")' },
        { label: 'Typ Uchwytu', value: 'Metalowy z automatyczną blokadą' },
        { label: 'Maksymalny Moment', value: '65 Nm' },
        { label: 'Zakres Prędkości', value: '0-450 / 0-1800 RPM' },
        { label: 'Ustawienia Momentu', value: '20+1' },
        { label: 'Napięcie Akumulatora', value: '22V MAX' },
        { label: 'Maks. Wiercenie (Drewno)', value: '38mm' },
        { label: 'Maks. Wiercenie (Metal)', value: '13mm' },
        { label: 'Waga (z akumulatorem)', value: '2,1 kg' },
        { label: 'Typ Silnika', value: 'Bezszczotkowy' },
        { label: 'Światło Robocze LED', value: 'Podwójne LED' },
        { label: 'Certyfikacja', value: 'CE, ETL, UL' },
    ],
};

const MOCK_PRODUCT_4_DE: Products.Model.Product = {
    id: 'PRD-007',
    sku: 'DD-2265BL-22V',
    name: 'PowerDrive Akku-Bohrschrauber DD-2265BL',
    description:
        '<p>Der <strong>PowerDrive Akku-Bohrschrauber DD-2265BL</strong> ist ein vielseitiges professionelles Elektrowerkzeug für Bohr- und Schraubanwendungen in Holz, Metall und Kunststoff. Aufgebaut auf unserer fortschrittlichen 22V MAX Akkuplattform mit einem leistungsstarken bürstenlosen Motor bietet er außergewöhnliche Leistung, Laufzeit und Zuverlässigkeit sowohl für professionelle Handwerker als auch für ernsthafte DIY-Enthusiasten.</p><h3>Leistung und Vielseitigkeit</h3><p>Ausgestattet mit einem hocheffizienten bürstenlosen Motor liefert dieser Bohrschrauber bis zu 65 Nm maximales Drehmoment mit überlegener Energieeffizienz. Das Zweigang-Allmetall-Getriebe (0-450 U/min für Hochdrehmomentanwendungen, 0-1800 U/min für Hochgeschwindigkeitsbohren) ermöglicht optimale Leistung sowohl im Bohr- als auch im Schraubmodus. Der variable Geschwindigkeitsabzug mit elektronischem Feedback bietet präzise Kontrolle, während die 20+1 Drehmomenteinstellungen perfektes Befestigen ohne Überanziehen oder Beschädigung von Materialien ermöglichen.</p><p>Wichtige Funktionen:</p><ul><li>22V MAX bürstenloser Motor für maximale Leistung und 50% längere Laufzeit</li><li>Zweigang-Allmetall-Getriebe (0-450/0-1800 U/min)</li><li>20+1 Präzisions-Drehmomenteinstellungen für empfindliche bis schwere Anwendungen</li><li>13mm (1/2") Metallspannfutter mit automatischer Verriegelung für sicheren Bithalt</li><li>Duale LED-Arbeitsleuchten für verbesserte Sichtbarkeit in dunklen Bereichen</li><li>Gürtelclip und magnetischer Bithalter für Komfort</li><li>Elektronische Motorbremse für erhöhte Sicherheit</li></ul><h3>Ergonomie und Haltbarkeit</h3><p>Das kompakte und leichte Design (nur 2,1 kg mit Akku) reduziert die Ermüdung des Bedieners bei längerem Gebrauch. Der ergonomische Soft-Grip-Griff bietet bequemen Halt und präzise Kontrolle. Die robuste Konstruktion mit Overmold-Gehäuse schützt vor Stürzen und Baustellenverschleiß.</p>',
    shortDescription: 'Professioneller 22V Akku-Bohrschrauber mit 65Nm Drehmoment und bürstenlosem Motor',
    subtitle: 'Elektrowerkzeuge • Bohrschrauber',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-007_1.jpg',
        width: 800,
        height: 800,
        alt: 'PowerDrive Akku-Bohrschrauber DD-2265BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-007_1.jpg',
            alt: 'PowerDrive Akku-Bohrschrauber DD-2265BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_drill.jpg',
            alt: 'Bohrer und Zubehör',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 189.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-007',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '65 Nm', icon: 'Gauge' },
        { value: 'Bürstenlos', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Spannfuttergröße', value: '13mm (1/2")' },
        { label: 'Spannfuttertyp', value: 'Metall mit automatischer Verriegelung' },
        { label: 'Max. Drehmoment', value: '65 Nm' },
        { label: 'Geschwindigkeitsbereich', value: '0-450 / 0-1800 U/min' },
        { label: 'Drehmomenteinstellungen', value: '20+1' },
        { label: 'Akkuspannung', value: '22V MAX' },
        { label: 'Max. Bohrdurchmesser (Holz)', value: '38mm' },
        { label: 'Max. Bohrdurchmesser (Metall)', value: '13mm' },
        { label: 'Gewicht (mit Akku)', value: '2,1 kg' },
        { label: 'Motortyp', value: 'Bürstenlos' },
        { label: 'LED-Arbeitsleuchte', value: 'Duale LED' },
        { label: 'Zertifizierung', value: 'CE, ETL, UL' },
    ],
};

const MOCK_PRODUCT_5_EN: Products.Model.Product = {
    id: 'PRD-008',
    sku: 'IHD-2000T-BL',
    name: 'TitanForce Impact Hammer Drill IHD-2000',
    description:
        '<p>The <strong>TitanForce Impact Hammer Drill IHD-2000</strong> is a high-performance corded hammer drill designed for heavy-duty drilling in concrete, brick, stone, and masonry. Featuring a powerful 2000W motor and advanced impact mechanism, this professional-grade tool delivers exceptional drilling performance for the most demanding construction and renovation projects.</p><h3>Extreme Power and Performance</h3><p>Equipped with a robust 2000W industrial motor, the IHD-2000 delivers powerful 5.5J impact energy, making it one of the most powerful hammer drills in its class. The variable speed control (0-1200 RPM) combined with high impact rate (0-5800 BPM) allows for efficient drilling through reinforced concrete and hardened materials. The electronic torque control prevents dangerous kickback and protects the operator.</p><p>Key features include:</p><ul><li>2000W high-performance motor for extreme drilling power</li><li>5.5J impact energy for drilling through toughest materials</li><li>Variable speed and impact rate control</li><li>Three operation modes: drilling, hammer drilling, and chiseling</li><li>360° rotating auxiliary handle for optimal control</li><li>Advanced vibration reduction system (VRS)</li><li>Depth gauge for precise drilling</li><li>Constant electronics maintain speed under load</li></ul><h3>Professional Grade Construction</h3><p>The IHD-2000 features all-metal gearing and housing for maximum durability and long service life. The shock-mounted motor housing reduces vibration transmission to the operator. The tool includes a heavy-duty carrying case and complete accessory set.</p>',
    shortDescription: 'Professional 2000W corded hammer drill with 5.5J impact energy for heavy-duty applications',
    subtitle: 'Power Tools • Hammer Drills',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-008_1.jpg',
        width: 800,
        height: 800,
        alt: 'TitanForce Impact Hammer Drill IHD-2000',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-008_1.jpg',
            alt: 'TitanForce Impact Hammer Drill IHD-2000',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 449.99,
        currency: 'USD',
    },
    link: '/products/PRD-008',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professional',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '2000W', icon: 'Zap' },
        { value: '5.5J Impact', icon: 'Hammer' },
        { value: 'VRS', icon: 'Shield' },
    ],
    detailedSpecs: [
        { label: 'Input Power', value: '2000 W' },
        { label: 'Impact Energy', value: '5.5 J' },
        { label: 'No-Load Speed', value: '0-1200 RPM' },
        { label: 'Impact Rate', value: '0-5800 BPM' },
        { label: 'Chuck Type', value: 'SDS-Max' },
        { label: 'Max Drilling (Concrete)', value: '68mm' },
        { label: 'Max Drilling (Steel)', value: '30mm' },
        { label: 'Weight', value: '11.5 kg' },
        { label: 'Voltage', value: '230V' },
        { label: 'Cable Length', value: '5 m' },
        { label: 'Vibration Level', value: '15 m/s²' },
        { label: 'Noise Level', value: '102 dB(A)' },
        { label: 'Certification', value: 'CE, GS, ETL' },
    ],
};

const MOCK_PRODUCT_5_PL: Products.Model.Product = {
    id: 'PRD-008',
    sku: 'IHD-2000T-BL',
    name: 'TitanForce Młotowiertarka Udarowa IHD-2000',
    description:
        '<p><strong>TitanForce Młotowiertarka Udarowa IHD-2000</strong> to wysokowydajna młotowiertarka sieciowa zaprojektowana do ciężkich zastosowań wiercenia w betonie, cegle, kamieniu i murarstwie. Wyposażona w potężny silnik 2000W i zaawansowany mechanizm udarowy, to profesjonalne narzędzie zapewnia wyjątkową wydajność wiercenia dla najbardziej wymagających projektów budowlanych i remontowych.</p><h3>Ekstremalna Moc i Wydajność</h3><p>Wyposażona w solidny silnik przemysłowy 2000W, IHD-2000 dostarcza potężną energię uderzenia 5,5J, co czyni ją jedną z najpotężniejszych młotowiertarek w swojej klasie. Zmienna kontrola prędkości (0-1200 RPM) w połączeniu z wysoką częstotliwością uderzeń (0-5800 BPM) umożliwia efektywne wiercenie przez zbrojony beton i utwardzone materiały. Elektroniczna kontrola momentu obrotowego zapobiega niebezpiecznemu odrzutowi i chroni operatora.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Silnik wysokowydajny 2000W dla ekstremalnej mocy wiercenia</li><li>Energia uderzenia 5,5J do wiercenia w najtwardszych materiałach</li><li>Zmienna kontrola prędkości i częstotliwości uderzeń</li><li>Trzy tryby pracy: wiercenie, wiercenie udarowe i dłutowanie</li><li>360° obrotowa rękojeść pomocnicza dla optymalnej kontroli</li><li>Zaawansowany system redukcji wibracji (VRS)</li><li>Głębokościomierz do precyzyjnego wiercenia</li><li>Stała elektronika utrzymuje prędkość pod obciążeniem</li></ul><h3>Konstrukcja Profesjonalna</h3><p>IHD-2000 posiada całkowicie metalowe przekładnie i obudowę dla maksymalnej trwałości i długiej żywotności. Wstrząsoodporna obudowa silnika zmniejsza przenoszenie wibracji na operatora. Narzędzie zawiera solidną walizkę transportową i kompletny zestaw akcesoriów.</p>',
    shortDescription: 'Profesjonalna młotowiertarka sieciowa 2000W z energią uderzenia 5,5J do ciężkich zastosowań',
    subtitle: 'Narzędzia Elektryczne • Młotowiertarki',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-008_1.jpg',
        width: 800,
        height: 800,
        alt: 'TitanForce Młotowiertarka Udarowa IHD-2000',
    },
    price: {
        value: 1799.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-008',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Profesjonalne',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '2000W', icon: 'Zap' },
        { value: '5,5J Uderzenie', icon: 'Hammer' },
        { value: 'VRS', icon: 'Shield' },
    ],
    detailedSpecs: [
        { label: 'Moc Wejściowa', value: '2000 W' },
        { label: 'Energia Uderzenia', value: '5,5 J' },
        { label: 'Prędkość Bez Obciążenia', value: '0-1200 RPM' },
        { label: 'Częstotliwość Uderzeń', value: '0-5800 BPM' },
        { label: 'Typ Uchwytu', value: 'SDS-Max' },
        { label: 'Maks. Wiercenie (Beton)', value: '68mm' },
        { label: 'Maks. Wiercenie (Stal)', value: '30mm' },
        { label: 'Waga', value: '11,5 kg' },
        { label: 'Napięcie', value: '230V' },
        { label: 'Długość Kabla', value: '5 m' },
        { label: 'Poziom Wibracji', value: '15 m/s²' },
        { label: 'Poziom Hałasu', value: '102 dB(A)' },
        { label: 'Certyfikacja', value: 'CE, GS, ETL' },
    ],
};

const MOCK_PRODUCT_5_DE: Products.Model.Product = {
    id: 'PRD-008',
    sku: 'IHD-2000T-BL',
    name: 'TitanForce Schlagbohrmaschine IHD-2000',
    description:
        '<p>Die <strong>TitanForce Schlagbohrmaschine IHD-2000</strong> ist eine leistungsstarke Netz-Schlagbohrmaschine für schweres Bohren in Beton, Ziegel, Stein und Mauerwerk. Mit einem leistungsstarken 2000W-Motor und fortschrittlichem Schlagmechanismus liefert dieses professionelle Werkzeug außergewöhnliche Bohrleistung für die anspruchsvollsten Bau- und Renovierungsprojekte.</p><h3>Extreme Leistung und Performance</h3><p>Ausgestattet mit einem robusten 2000W-Industriemotor liefert die IHD-2000 eine kraftvolle Schlagenergie von 5,5J und ist damit eine der leistungsstärksten Schlagbohrmaschinen ihrer Klasse. Die variable Geschwindigkeitskontrolle (0-1200 U/min) kombiniert mit hoher Schlagfrequenz (0-5800 BPM) ermöglicht effizientes Bohren durch Stahlbeton und gehärtete Materialien. Die elektronische Drehmomentkontrolle verhindert gefährliche Rückschläge und schützt den Bediener.</p><p>Wichtige Funktionen:</p><ul><li>2000W Hochleistungsmotor für extreme Bohrkraft</li><li>5,5J Schlagenergie zum Bohren durch härteste Materialien</li><li>Variable Geschwindigkeits- und Schlagfrequenzkontrolle</li><li>Drei Betriebsmodi: Bohren, Schlagbohren und Meißeln</li><li>360° drehbarer Zusatzgriff für optimale Kontrolle</li><li>Fortschrittliches Vibrationsreduktionssystem (VRS)</li><li>Tiefenmesser für präzises Bohren</li><li>Konstante Elektronik hält Geschwindigkeit unter Last</li></ul><h3>Professionelle Konstruktion</h3><p>Die IHD-2000 verfügt über vollständig metallische Getriebe und Gehäuse für maximale Haltbarkeit und lange Lebensdauer. Das schwingungsgedämpfte Motorgehäuse reduziert die Vibrationsübertragung auf den Bediener. Das Werkzeug enthält eine robuste Transporttasche und ein komplettes Zubehörset.</p>',
    shortDescription: 'Professionelle 2000W Netz-Schlagbohrmaschine mit 5,5J Schlagenergie für schwere Anwendungen',
    subtitle: 'Elektrowerkzeuge • Schlagbohrmaschinen',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-008_1.jpg',
        width: 800,
        height: 800,
        alt: 'TitanForce Schlagbohrmaschine IHD-2000',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-008_1.jpg',
            alt: 'TitanForce Schlagbohrmaschine IHD-2000',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 449.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-008',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professionell',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '2000W', icon: 'Zap' },
        { value: '5,5J Schlag', icon: 'Hammer' },
        { value: 'VRS', icon: 'Shield' },
    ],
    detailedSpecs: [
        { label: 'Eingangsleistung', value: '2000 W' },
        { label: 'Schlagenergie', value: '5,5 J' },
        { label: 'Leerlaufdrehzahl', value: '0-1200 U/min' },
        { label: 'Schlagfrequenz', value: '0-5800 BPM' },
        { label: 'Spannfuttertyp', value: 'SDS-Max' },
        { label: 'Max. Bohrdurchmesser (Beton)', value: '68mm' },
        { label: 'Max. Bohrdurchmesser (Stahl)', value: '30mm' },
        { label: 'Gewicht', value: '11,5 kg' },
        { label: 'Spannung', value: '230V' },
        { label: 'Kabellänge', value: '5 m' },
        { label: 'Vibrationspegel', value: '15 m/s²' },
        { label: 'Geräuschpegel', value: '102 dB(A)' },
        { label: 'Zertifizierung', value: 'CE, GS, ETL' },
    ],
};

const MOCK_PRODUCT_6_EN: Products.Model.Product = {
    id: 'PRD-009',
    sku: 'CS-2400PRO',
    name: 'ProCut Circular Saw CS-2400PRO',
    description:
        '<p>The <strong>ProCut Circular Saw CS-2400PRO</strong> is a professional-grade circular saw designed for precision cutting in wood, plywood, OSB, and composite materials. Featuring a powerful 2400W motor and advanced laser guide system, this saw delivers exceptional cutting performance for framing, roofing, and general construction applications.</p><h3>Precision Cutting Technology</h3><p>Equipped with a robust 2400W motor, the CS-2400PRO delivers consistent cutting power even in thick hardwoods and engineered lumber. The laser guide system with dual LED work lights ensures accurate cuts in all lighting conditions. The electronic brake stops the blade within 2 seconds for enhanced safety and productivity.</p><p>Key features include:</p><ul><li>2400W high-performance motor for smooth cutting</li><li>235mm (9-1/4") carbide-tipped blade included</li><li>Laser guide system for precise cutting lines</li><li>Dual LED work lights illuminate cutting area</li><li>Depth adjustment: 0-85mm with positive stops at 45° and 90°</li><li>Bevel capacity: 0-56° with detents at common angles</li><li>Integrated dust extraction port</li><li>Anti-kickback system for operator safety</li><li>Spindle lock for easy blade changes</li></ul><h3>Durable Construction</h3><p>The CS-2400PRO features an aluminum base plate for accurate, stable cuts and reduced weight. The ergonomic design with soft-grip handle reduces operator fatigue during extended use. The saw includes a rip fence, blade wrench, and durable carrying case.</p>',
    shortDescription: 'Professional 2400W circular saw with 235mm blade and laser guide system',
    subtitle: 'Power Tools • Circular Saws',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-009_1.jpg',
        width: 800,
        height: 800,
        alt: 'ProCut Circular Saw CS-2400PRO',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-009_1.jpg',
            alt: 'ProCut Circular Saw CS-2400PRO',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_saw.jpg',
            alt: 'Saw Blades and Accessories',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 299.99,
        currency: 'USD',
    },
    link: '/products/PRD-009',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professional',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '2400W', icon: 'Zap' },
        { value: '235mm Blade', icon: 'Disc' },
        { value: 'Laser Guide', icon: 'Target' },
    ],
    detailedSpecs: [
        { label: 'Input Power', value: '2400 W' },
        { label: 'Blade Diameter', value: '235mm (9-1/4")' },
        { label: 'Blade Bore', value: '30mm' },
        { label: 'No-Load Speed', value: '5500 RPM' },
        { label: 'Max Cutting Depth (90°)', value: '85mm' },
        { label: 'Max Cutting Depth (45°)', value: '62mm' },
        { label: 'Bevel Capacity', value: '0-56°' },
        { label: 'Base Plate', value: 'Aluminum' },
        { label: 'Weight', value: '6.8 kg' },
        { label: 'Voltage', value: '230V' },
        { label: 'Cable Length', value: '3.5 m' },
        { label: 'Dust Extraction', value: 'Integrated port' },
        { label: 'Certification', value: 'CE, GS, UL' },
    ],
};

const MOCK_PRODUCT_6_PL: Products.Model.Product = {
    id: 'PRD-009',
    sku: 'CS-2400PRO',
    name: 'ProCut Piła Tarczowa CS-2400PRO',
    description:
        '<p><strong>ProCut Piła Tarczowa CS-2400PRO</strong> to profesjonalna piła tarczowa zaprojektowana do precyzyjnego cięcia w drewnie, sklejce, OSB i materiałach kompozytowych. Wyposażona w potężny silnik 2400W i zaawansowany system prowadnicy laserowej, ta piła zapewnia wyjątkową wydajność cięcia dla zastosowań ramowych, dachowych i ogólnych budowlanych.</p><h3>Technologia Precyzyjnego Cięcia</h3><p>Wyposażona w solidny silnik 2400W, CS-2400PRO zapewnia stałą moc cięcia nawet w grubym twardym drewnie i drewnie inżynieryjnym. System prowadnicy laserowej z podwójnymi światłami roboczymi LED zapewnia dokładne cięcia we wszystkich warunkach oświetleniowych. Hamulec elektroniczny zatrzymuje tarczę w ciągu 2 sekund dla zwiększonego bezpieczeństwa i produktywności.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Silnik wysokowydajny 2400W do płynnego cięcia</li><li>Tarcza 235mm (9-1/4") z węglikiem w zestawie</li><li>System prowadnicy laserowej do precyzyjnych linii cięcia</li><li>Podwójne światła robocze LED oświetlają obszar cięcia</li><li>Regulacja głębokości: 0-85mm z pozytywnymi zatrzymaniami przy 45° i 90°</li><li>Możliwość cięcia pod kątem: 0-56° z zatrzymaniami przy typowych kątach</li><li>Zintegrowany port odpylania</li><li>System przeciw odrzutowi dla bezpieczeństwa operatora</li><li>Blokada wrzeciona do łatwej wymiany tarczy</li></ul><h3>Trwała Konstrukcja</h3><p>CS-2400PRO posiada aluminiową płytę bazową dla dokładnych, stabilnych cięć i zmniejszonej wagi. Ergonomiczny projekt z rękojeścią z miękkim uchwytem zmniejsza zmęczenie operatora podczas długotrwałego użytkowania. Piła zawiera prowadnicę do cięcia wzdłużnego, klucz do tarczy i solidną walizkę transportową.</p>',
    shortDescription: 'Profesjonalna piła tarczowa 2400W z tarczą 235mm i systemem prowadnicy laserowej',
    subtitle: 'Narzędzia Elektryczne • Piły Tarczowe',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-009_1.jpg',
        width: 800,
        height: 800,
        alt: 'ProCut Piła Tarczowa CS-2400PRO',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-009_1.jpg',
            alt: 'ProCut Piła Tarczowa CS-2400PRO',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_saw.jpg',
            alt: 'Tarcze i Akcesoria',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Kabel Zasilający',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 1199.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-009',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Profesjonalne',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '2400W', icon: 'Zap' },
        { value: 'Tarcza 235mm', icon: 'Disc' },
        { value: 'Prowadnica Laserowa', icon: 'Target' },
    ],
    detailedSpecs: [
        { label: 'Moc Wejściowa', value: '2400 W' },
        { label: 'Średnica Tarczy', value: '235mm (9-1/4")' },
        { label: 'Otwór Tarczy', value: '30mm' },
        { label: 'Prędkość Bez Obciążenia', value: '5500 RPM' },
        { label: 'Maks. Głębokość Cięcia (90°)', value: '85mm' },
        { label: 'Maks. Głębokość Cięcia (45°)', value: '62mm' },
        { label: 'Możliwość Cięcia Pod Kątem', value: '0-56°' },
        { label: 'Płyta Bazowa', value: 'Aluminium' },
        { label: 'Waga', value: '6,8 kg' },
        { label: 'Napięcie', value: '230V' },
        { label: 'Długość Kabla', value: '3,5 m' },
        { label: 'Odpylanie', value: 'Zintegrowany port' },
        { label: 'Certyfikacja', value: 'CE, GS, UL' },
    ],
};

const MOCK_PRODUCT_6_DE: Products.Model.Product = {
    id: 'PRD-009',
    sku: 'CS-2400PRO',
    name: 'ProCut Kreissäge CS-2400PRO',
    description:
        '<p>Die <strong>ProCut Kreissäge CS-2400PRO</strong> ist eine professionelle Kreissäge für präzises Schneiden in Holz, Sperrholz, OSB und Verbundwerkstoffen. Mit einem leistungsstarken 2400W-Motor und fortschrittlichem Laserführsystem liefert diese Säge außergewöhnliche Schneidleistung für Rahmen-, Dach- und allgemeine Bauanwendungen.</p><h3>Präzisionstechnologie</h3><p>Ausgestattet mit einem robusten 2400W-Motor liefert die CS-2400PRO konsistente Schneidleistung auch in dicken Harthölzern und Ingenieurholz. Das Laserführsystem mit dualen LED-Arbeitsleuchten gewährleistet genaue Schnitte unter allen Lichtverhältnissen. Die elektronische Bremse stoppt das Sägeblatt innerhalb von 2 Sekunden für erhöhte Sicherheit und Produktivität.</p><p>Wichtige Funktionen:</p><ul><li>2400W Hochleistungsmotor für glattes Schneiden</li><li>235mm (9-1/4") Hartmetall-Sägeblatt enthalten</li><li>Laserführsystem für präzise Schnittlinien</li><li>Duale LED-Arbeitsleuchten beleuchten Schneidbereich</li><li>Tiefeneinstellung: 0-85mm mit positiven Anschlägen bei 45° und 90°</li><li>Schrägschnittkapazität: 0-56° mit Rasten bei gängigen Winkeln</li><li>Integrierter Staubabsauganschluss</li><li>Rückschlagschutzsystem für Bedienersicherheit</li><li>Spindelverriegelung für einfachen Sägeblattwechsel</li></ul><h3>Robuste Konstruktion</h3><p>Die CS-2400PRO verfügt über eine Aluminium-Grundplatte für genaue, stabile Schnitte und reduziertes Gewicht. Das ergonomische Design mit Soft-Grip-Griff reduziert die Ermüdung des Bedieners bei längerem Gebrauch. Die Säge enthält eine Parallelanschlag, Sägeblattschlüssel und robuste Transporttasche.</p>',
    shortDescription: 'Professionelle 2400W Kreissäge mit 235mm Sägeblatt und Laserführsystem',
    subtitle: 'Elektrowerkzeuge • Kreissägen',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-009_1.jpg',
        width: 800,
        height: 800,
        alt: 'ProCut Kreissäge CS-2400PRO',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-009_1.jpg',
            alt: 'ProCut Kreissäge CS-2400PRO',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_saw.jpg',
            alt: 'Sägeblätter und Zubehör',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 299.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-009',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professionell',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '2400W', icon: 'Zap' },
        { value: '235mm Sägeblatt', icon: 'Disc' },
        { value: 'Laserführung', icon: 'Target' },
    ],
    detailedSpecs: [
        { label: 'Eingangsleistung', value: '2400 W' },
        { label: 'Sägeblattdurchmesser', value: '235mm (9-1/4")' },
        { label: 'Sägeblattbohrung', value: '30mm' },
        { label: 'Leerlaufdrehzahl', value: '5500 U/min' },
        { label: 'Max. Schnitttiefe (90°)', value: '85mm' },
        { label: 'Max. Schnitttiefe (45°)', value: '62mm' },
        { label: 'Schrägschnittkapazität', value: '0-56°' },
        { label: 'Grundplatte', value: 'Aluminium' },
        { label: 'Gewicht', value: '6,8 kg' },
        { label: 'Spannung', value: '230V' },
        { label: 'Kabellänge', value: '3,5 m' },
        { label: 'Staubabsaugung', value: 'Integrierter Anschluss' },
        { label: 'Zertifizierung', value: 'CE, GS, UL' },
    ],
};

const MOCK_PRODUCT_7_EN: Products.Model.Product = {
    id: 'PRD-010',
    sku: 'JS-800BL-22V',
    name: 'EdgePro Cordless Jigsaw JS-800BL',
    description:
        '<p>The <strong>EdgePro Cordless Jigsaw JS-800BL</strong> is a precision cutting tool designed for intricate curved and straight cuts in wood, metal, plastic, and laminate materials. Built on the 22V MAX battery platform with a powerful brushless motor, this professional-grade jigsaw delivers exceptional cutting performance and control for woodworking, cabinetry, and construction applications.</p><h3>Precision Cutting Performance</h3><p>Equipped with a high-efficiency brushless motor, the JS-800BL delivers variable speed control from 800 to 3000 strokes per minute (SPM), allowing you to match the cutting speed to the material. The 4-position orbital action provides aggressive cutting in soft materials or smooth cuts in hard materials. The tool-free blade change system accepts both T-shank and U-shank blades for maximum versatility.</p><p>Key features include:</p><ul><li>22V MAX brushless motor for extended runtime</li><li>Variable speed: 800-3000 SPM for optimal cutting control</li><li>4-position orbital action for different materials</li><li>Tool-free blade change system (T-shank & U-shank compatible)</li><li>45° bevel cutting capacity (left and right)</li><li>LED work light with dust blower keeps cut line visible</li><li>Anti-splinter insert for clean cuts</li><li>Low vibration design for fatigue-free operation</li></ul><h3>Professional Features</h3><p>The JS-800BL features a die-cast aluminum base plate for durability and accuracy. The ergonomic soft-grip handle with integrated trigger lock provides comfortable control during extended use. Includes carrying case, blade set, and anti-splinter insert.</p>',
    shortDescription: 'Professional 22V cordless jigsaw with brushless motor and orbital action',
    subtitle: 'Power Tools • Jigsaws',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-010_1.jpg',
        width: 800,
        height: 800,
        alt: 'EdgePro Cordless Jigsaw JS-800BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-010_1.jpg',
            alt: 'EdgePro Cordless Jigsaw JS-800BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_saw.jpg',
            alt: 'Jigsaw Blades and Accessories',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 219.99,
        currency: 'USD',
    },
    link: '/products/PRD-010',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Promo -20%',
            variant: 'destructive',
        },
        {
            label: 'Professional',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '3000 SPM', icon: 'Gauge' },
        { value: 'Brushless', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Battery Voltage', value: '22V MAX' },
        { label: 'Stroke Rate', value: '800-3000 SPM' },
        { label: 'Stroke Length', value: '26mm' },
        { label: 'Orbital Action', value: '4 positions' },
        { label: 'Max Cutting (Wood)', value: '135mm' },
        { label: 'Max Cutting (Aluminum)', value: '20mm' },
        { label: 'Max Cutting (Steel)', value: '10mm' },
        { label: 'Bevel Capacity', value: '0-45° (left & right)' },
        { label: 'Blade Type', value: 'T-shank & U-shank' },
        { label: 'Weight (with battery)', value: '2.6 kg' },
        { label: 'Motor Type', value: 'Brushless' },
        { label: 'LED Work Light', value: 'Yes' },
        { label: 'Certification', value: 'CE, UL, GS' },
    ],
};

const MOCK_PRODUCT_7_PL: Products.Model.Product = {
    id: 'PRD-010',
    sku: 'JS-800BL-22V',
    name: 'EdgePro Pilarka Wyrzynarkowa Bezprzewodowa JS-800BL',
    description:
        '<p><strong>EdgePro Pilarka Wyrzynarkowa Bezprzewodowa JS-800BL</strong> to precyzyjne narzędzie do cięcia zaprojektowane do skomplikowanych cięć krzywych i prostych w drewnie, metalu, plastiku i materiałach laminowanych. Zbudowana na platformie akumulatorowej 22V MAX z potężnym silnikiem bezszczotkowym, ta profesjonalna wyrzynarka zapewnia wyjątkową wydajność cięcia i kontrolę dla zastosowań stolarskich, meblarskich i budowlanych.</p><h3>Precyzyjna Wydajność Cięcia</h3><p>Wyposażona w wysokowydajny silnik bezszczotkowy, JS-800BL zapewnia zmienną kontrolę prędkości od 800 do 3000 uderzeń na minutę (SPM), umożliwiając dopasowanie prędkości cięcia do materiału. 4-pozycyjne działanie orbitalne zapewnia agresywne cięcie w miękkich materiałach lub gładkie cięcia w twardych materiałach. System wymiany ostrzy bez użycia narzędzi akceptuje zarówno ostrza T-shank, jak i U-shank dla maksymalnej wszechstronności.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Silnik bezszczotkowy 22V MAX dla wydłużonego czasu pracy</li><li>Zmienna prędkość: 800-3000 SPM dla optymalnej kontroli cięcia</li><li>4-pozycyjne działanie orbitalne dla różnych materiałów</li><li>System wymiany ostrzy bez użycia narzędzi (kompatybilny z T-shank i U-shank)</li><li>Możliwość cięcia pod kątem 45° (w lewo i w prawo)</li><li>Światło robocze LED z dmuchawą pyłu utrzymuje linię cięcia widoczną</li><li>Wkładka przeciw odpryskom dla czystych cięć</li><li>Projekt o niskich wibracjach dla bezmęczącej pracy</li></ul><h3>Funkcje Profesjonalne</h3><p>JS-800BL posiada odlewaną aluminiową płytę bazową dla trwałości i dokładności. Ergonomiczna rękojeść z miękkim uchwytem ze zintegrowaną blokadą spustu zapewnia wygodną kontrolę podczas długotrwałego użytkowania. Zawiera walizkę transportową, zestaw ostrzy i wkładkę przeciw odpryskom.</p>',
    shortDescription: 'Profesjonalna wyrzynarka bezprzewodowa 22V z silnikiem bezszczotkowym i działaniem orbitalnym',
    subtitle: 'Narzędzia Elektryczne • Wyrzynarki',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-010_1.jpg',
        width: 800,
        height: 800,
        alt: 'EdgePro Pilarka Wyrzynarkowa Bezprzewodowa JS-800BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-010_1.jpg',
            alt: 'EdgePro Pilarka Wyrzynarkowa Bezprzewodowa JS-800BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_saw.jpg',
            alt: 'Ostrza i Akcesoria do Wyrzynarki',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Kabel Zasilający',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 879.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-010',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Promo -20%',
            variant: 'destructive',
        },
        {
            label: 'Profesjonalne',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '3000 SPM', icon: 'Gauge' },
        { value: 'Bezszczotkowy', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Napięcie Akumulatora', value: '22V MAX' },
        { label: 'Częstotliwość Uderzeń', value: '800-3000 SPM' },
        { label: 'Długość Uderzenia', value: '26mm' },
        { label: 'Działanie Orbitalne', value: '4 pozycje' },
        { label: 'Maks. Cięcie (Drewno)', value: '135mm' },
        { label: 'Maks. Cięcie (Aluminium)', value: '20mm' },
        { label: 'Maks. Cięcie (Stal)', value: '10mm' },
        { label: 'Możliwość Cięcia Pod Kątem', value: '0-45° (w lewo i w prawo)' },
        { label: 'Typ Ostrza', value: 'T-shank i U-shank' },
        { label: 'Waga (z akumulatorem)', value: '2,6 kg' },
        { label: 'Typ Silnika', value: 'Bezszczotkowy' },
        { label: 'Światło Robocze LED', value: 'Tak' },
        { label: 'Certyfikacja', value: 'CE, UL, GS' },
    ],
};

const MOCK_PRODUCT_7_DE: Products.Model.Product = {
    id: 'PRD-010',
    sku: 'JS-800BL-22V',
    name: 'EdgePro Akku-Stichsäge JS-800BL',
    description:
        '<p>Die <strong>EdgePro Akku-Stichsäge JS-800BL</strong> ist ein Präzisionsschneidwerkzeug für komplizierte kurvige und gerade Schnitte in Holz, Metall, Kunststoff und Laminatmaterialien. Aufgebaut auf der 22V MAX Akkuplattform mit einem leistungsstarken bürstenlosen Motor liefert diese professionelle Stichsäge außergewöhnliche Schneidleistung und Kontrolle für Holzbearbeitung, Möbelbau und Bauanwendungen.</p><h3>Präzise Schneidleistung</h3><p>Ausgestattet mit einem hocheffizienten bürstenlosen Motor liefert die JS-800BL variable Geschwindigkeitskontrolle von 800 bis 3000 Hüben pro Minute (SPM), sodass Sie die Schnittgeschwindigkeit an das Material anpassen können. Die 4-Position-Orbitalaktion sorgt für aggressives Schneiden in weichen Materialien oder glatte Schnitte in harten Materialien. Das werkzeuglose Sägeblattwechselsystem akzeptiert sowohl T-Schaft- als auch U-Schaft-Sägeblätter für maximale Vielseitigkeit.</p><p>Wichtige Funktionen:</p><ul><li>22V MAX bürstenloser Motor für verlängerte Laufzeit</li><li>Variable Geschwindigkeit: 800-3000 SPM für optimale Schnittkontrolle</li><li>4-Position-Orbitalaktion für verschiedene Materialien</li><li>Werkzeugloses Sägeblattwechselsystem (T-Schaft & U-Schaft kompatibel)</li><li>45° Schrägschnittkapazität (links und rechts)</li><li>LED-Arbeitsleuchte mit Staubbläser hält Schnittlinie sichtbar</li><li>Splitterfrei-Einsatz für saubere Schnitte</li><li>Niedrigvibrationsdesign für ermüdungsfreien Betrieb</li></ul><h3>Professionelle Funktionen</h3><p>Die JS-800BL verfügt über eine Druckguss-Aluminium-Grundplatte für Haltbarkeit und Genauigkeit. Der ergonomische Soft-Grip-Griff mit integriertem Abzugssperre bietet komfortable Kontrolle bei längerem Gebrauch. Enthält Transporttasche, Sägeblattset und Splitterfrei-Einsatz.</p>',
    shortDescription: 'Professionelle 22V Akku-Stichsäge mit bürstenlosem Motor und Orbitalaktion',
    subtitle: 'Elektrowerkzeuge • Stichsägen',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-010_1.jpg',
        width: 800,
        height: 800,
        alt: 'EdgePro Akku-Stichsäge JS-800BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-010_1.jpg',
            alt: 'EdgePro Akku-Stichsäge JS-800BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_saw.jpg',
            alt: 'Stichsägeblätter und Zubehör',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 219.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-010',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Promo -20%',
            variant: 'destructive',
        },
        {
            label: 'Professionell',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '3000 SPM', icon: 'Gauge' },
        { value: 'Bürstenlos', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Akkuspannung', value: '22V MAX' },
        { label: 'Hubfrequenz', value: '800-3000 SPM' },
        { label: 'Hublänge', value: '26mm' },
        { label: 'Orbitalaktion', value: '4 Positionen' },
        { label: 'Max. Schnitt (Holz)', value: '135mm' },
        { label: 'Max. Schnitt (Aluminium)', value: '20mm' },
        { label: 'Max. Schnitt (Stahl)', value: '10mm' },
        { label: 'Schrägschnittkapazität', value: '0-45° (links & rechts)' },
        { label: 'Sägeblatttyp', value: 'T-Schaft & U-Schaft' },
        { label: 'Gewicht (mit Akku)', value: '2,6 kg' },
        { label: 'Motortyp', value: 'Bürstenlos' },
        { label: 'LED-Arbeitsleuchte', value: 'Ja' },
        { label: 'Zertifizierung', value: 'CE, UL, GS' },
    ],
};

const MOCK_PRODUCT_8_EN: Products.Model.Product = {
    id: 'PRD-011',
    sku: 'OHS-1800BL',
    name: 'PowerMax Orbital Sander OHS-1800',
    description:
        '<p>The <strong>PowerMax Orbital Sander OHS-1800</strong> is a professional random orbital sander designed for smooth finishing on wood, metal, plastic, and painted surfaces. Featuring a powerful 1800W motor with advanced vibration control and efficient dust extraction, this tool delivers exceptional sanding performance for woodworking, automotive refinishing, and general surface preparation.</p><h3>Superior Sanding Performance</h3><p>Equipped with a robust 1800W motor, the OHS-1800 delivers consistent sanding power with variable speed control (7000-12000 OPM) to match different materials and applications. The random orbital action with 5mm orbit ensures swirl-free finishes, while the counterbalanced design minimizes vibration for fatigue-free operation during extended use.</p><p>Key features include:</p><ul><li>1800W high-performance motor for aggressive material removal</li><li>Variable speed control: 7000-12000 OPM for versatile applications</li><li>5mm orbit for fast material removal and smooth finishing</li><li>Advanced vibration control system reduces operator fatigue</li><li>Hook-and-loop quick-change sanding pad (150mm/6")</li><li>High-efficiency dust extraction system (99% dust capture)</li><li>Electronic speed control maintains RPM under load</li><li>Soft-start feature for smooth operation</li></ul><h3>Professional Quality Construction</h3><p>The OHS-1800 features a die-cast aluminum motor housing for durability and effective heat dissipation. The ergonomic design with soft-grip handle and perfectly balanced weight distribution ensures comfortable extended use. Includes dust collection bag, 150mm sanding pad, and assorted sandpaper set.</p>',
    shortDescription: 'Professional 1800W random orbital sander with variable speed and dust extraction',
    subtitle: 'Power Tools • Sanders',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-011_1.jpg',
        width: 800,
        height: 800,
        alt: 'PowerMax Orbital Sander OHS-1800',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-011_1.jpg',
            alt: 'PowerMax Orbital Sander OHS-1800',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 169.99,
        currency: 'EUR',
    },
    link: '/products/PRD-011',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Promo -25%',
            variant: 'destructive',
        },
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '1800W', icon: 'Zap' },
        { value: '12000 OPM', icon: 'Gauge' },
        { value: '99% Dust', icon: 'Filter' },
    ],
    detailedSpecs: [
        { label: 'Input Power', value: '1800 W' },
        { label: 'Orbit Rate', value: '7000-12000 OPM' },
        { label: 'Orbit Diameter', value: '5mm' },
        { label: 'Sanding Pad Size', value: '150mm (6")' },
        { label: 'Pad Attachment', value: 'Hook-and-loop' },
        { label: 'Dust Extraction', value: '99% efficiency' },
        { label: 'Dust Port Diameter', value: '35mm' },
        { label: 'Weight', value: '2.9 kg' },
        { label: 'Voltage', value: '230V' },
        { label: 'Cable Length', value: '3 m' },
        { label: 'Vibration Level', value: '4.5 m/s²' },
        { label: 'Noise Level', value: '82 dB(A)' },
        { label: 'Certification', value: 'CE, GS, ETL' },
    ],
};

const MOCK_PRODUCT_8_PL: Products.Model.Product = {
    id: 'PRD-011',
    sku: 'OHS-1800BL',
    name: 'PowerMax Szlifierka Orbitalna OHS-1800',
    description:
        '<p><strong>PowerMax Szlifierka Orbitalna OHS-1800</strong> to profesjonalna szlifierka orbitalna zaprojektowana do gładkiego wykończenia na drewnie, metalu, plastiku i powierzchniach malowanych. Wyposażona w potężny silnik 1800W z zaawansowaną kontrolą wibracji i efektywnym odpylaniem, to narzędzie zapewnia wyjątkową wydajność szlifowania dla stolarstwa, renowacji samochodowej i ogólnego przygotowania powierzchni.</p><h3>Najwyższa Wydajność Szlifowania</h3><p>Wyposażona w solidny silnik 1800W, OHS-1800 zapewnia stałą moc szlifowania ze zmienną kontrolą prędkości (7000-12000 OPM), aby dopasować się do różnych materiałów i zastosowań. Działanie orbitalne z orbitą 5mm zapewnia wykończenia bez zawirowań, podczas gdy projekt z przeciwwagą minimalizuje wibracje dla bezmęczącej pracy podczas długotrwałego użytkowania.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Silnik wysokowydajny 1800W do agresywnego usuwania materiału</li><li>Zmienna kontrola prędkości: 7000-12000 OPM dla wszechstronnych zastosowań</li><li>Orbita 5mm do szybkiego usuwania materiału i gładkiego wykończenia</li><li>Zaawansowany system kontroli wibracji zmniejsza zmęczenie operatora</li><li>Szybka wymiana podkładki szlifierskiej na rzep (150mm/6")</li><li>Wysokowydajny system odpylania (99% wychwytu pyłu)</li><li>Elektroniczna kontrola prędkości utrzymuje RPM pod obciążeniem</li><li>Funkcja miękkiego startu dla płynnej pracy</li></ul><h3>Konstrukcja Profesjonalnej Jakości</h3><p>OHS-1800 posiada obudowę silnika z odlewanego aluminium dla trwałości i efektywnego rozpraszania ciepła. Ergonomiczny projekt z rękojeścią z miękkim uchwytem i idealnie zrównoważonym rozkładem wagi zapewnia wygodne długotrwałe użytkowanie. Zawiera worek do zbierania pyłu, podkładkę szlifierską 150mm i zestaw papierów ściernych.</p>',
    shortDescription: 'Profesjonalna szlifierka orbitalna 1800W ze zmienną prędkością i odpylaniem',
    subtitle: 'Narzędzia Elektryczne • Szlifierki',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-011_1.jpg',
        width: 800,
        height: 800,
        alt: 'PowerMax Szlifierka Orbitalna OHS-1800',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-011_1.jpg',
            alt: 'PowerMax Szlifierka Orbitalna OHS-1800',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Kabel Zasilający',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 679.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-011',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Promo -25%',
            variant: 'destructive',
        },
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '1800W', icon: 'Zap' },
        { value: '12000 OPM', icon: 'Gauge' },
        { value: '99% Pyłu', icon: 'Filter' },
    ],
    detailedSpecs: [
        { label: 'Moc Wejściowa', value: '1800 W' },
        { label: 'Częstotliwość Orbity', value: '7000-12000 OPM' },
        { label: 'Średnica Orbity', value: '5mm' },
        { label: 'Rozmiar Podkładki Szlifierskiej', value: '150mm (6")' },
        { label: 'Zamocowanie Podkładki', value: 'Rzep' },
        { label: 'Odpylanie', value: '99% efektywności' },
        { label: 'Średnica Portu Odpylania', value: '35mm' },
        { label: 'Waga', value: '2,9 kg' },
        { label: 'Napięcie', value: '230V' },
        { label: 'Długość Kabla', value: '3 m' },
        { label: 'Poziom Wibracji', value: '4,5 m/s²' },
        { label: 'Poziom Hałasu', value: '82 dB(A)' },
        { label: 'Certyfikacja', value: 'CE, GS, ETL' },
    ],
};

const MOCK_PRODUCT_8_DE: Products.Model.Product = {
    id: 'PRD-011',
    sku: 'OHS-1800BL',
    name: 'PowerMax Exzenterschleifer OHS-1800',
    description:
        '<p>Der <strong>PowerMax Exzenterschleifer OHS-1800</strong> ist ein professioneller Exzenterschleifer für glattes Finish auf Holz, Metall, Kunststoff und lackierten Oberflächen. Mit einem leistungsstarken 1800W-Motor, fortschrittlicher Vibrationskontrolle und effizienter Staubabsaugung liefert dieses Werkzeug außergewöhnliche Schleifleistung für Holzbearbeitung, Automobilrestaurierung und allgemeine Oberflächenvorbereitung.</p><h3>Überlegene Schleifleistung</h3><p>Ausgestattet mit einem robusten 1800W-Motor liefert der OHS-1800 konsistente Schleifleistung mit variabler Geschwindigkeitskontrolle (7000-12000 OPM), um sich an verschiedene Materialien und Anwendungen anzupassen. Die Exzentrierbewegung mit 5mm Orbit sorgt für wirbelfreie Oberflächen, während das ausgewogene Design Vibrationen minimiert für ermüdungsfreien Betrieb bei längerem Gebrauch.</p><p>Wichtige Funktionen:</p><ul><li>1800W Hochleistungsmotor für aggressives Materialabtrag</li><li>Variable Geschwindigkeitskontrolle: 7000-12000 OPM für vielseitige Anwendungen</li><li>5mm Orbit für schnellen Materialabtrag und glattes Finish</li><li>Fortschrittliches Vibrationskontrollsystem reduziert Bedienermüdung</li><li>Klett-Schnellwechsel-Schleifpad (150mm/6")</li><li>Hocheffizientes Staubabsaugsystem (99% Staubaufnahme)</li><li>Elektronische Geschwindigkeitskontrolle hält U/min unter Last</li><li>Sanftanlauf-Funktion für sanften Betrieb</li></ul><h3>Professionelle Qualitätskonstruktion</h3><p>Der OHS-1800 verfügt über ein Druckguss-Aluminium-Motorgehäuse für Haltbarkeit und effektive Wärmeableitung. Das ergonomische Design mit Soft-Grip-Griff und perfekt ausgewogener Gewichtsverteilung gewährleistet komfortablen längerem Gebrauch. Enthält Staubsammelbeutel, 150mm Schleifpad und gemischtes Schleifpapier-Set.</p>',
    shortDescription: 'Professioneller 1800W Exzenterschleifer mit variabler Geschwindigkeit und Staubabsaugung',
    subtitle: 'Elektrowerkzeuge • Schleifer',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-011_1.jpg',
        width: 800,
        height: 800,
        alt: 'PowerMax Exzenterschleifer OHS-1800',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-011_1.jpg',
            alt: 'PowerMax Exzenterschleifer OHS-1800',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 169.99,
        currency: 'EUR',
    },
    link: '/produkte/PRD-011',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Promo -25%',
            variant: 'destructive',
        },
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '1800W', icon: 'Zap' },
        { value: '12000 OPM', icon: 'Gauge' },
        { value: '99% Staub', icon: 'Filter' },
    ],
    detailedSpecs: [
        { label: 'Eingangsleistung', value: '1800 W' },
        { label: 'Orbitfrequenz', value: '7000-12000 OPM' },
        { label: 'Orbitdurchmesser', value: '5mm' },
        { label: 'Schleifpadgröße', value: '150mm (6")' },
        { label: 'Pad-Befestigung', value: 'Klettverschluss' },
        { label: 'Staubabsaugung', value: '99% Effizienz' },
        { label: 'Staubanschlussdurchmesser', value: '35mm' },
        { label: 'Gewicht', value: '2,9 kg' },
        { label: 'Spannung', value: '230V' },
        { label: 'Kabellänge', value: '3 m' },
        { label: 'Vibrationspegel', value: '4,5 m/s²' },
        { label: 'Geräuschpegel', value: '82 dB(A)' },
        { label: 'Zertifizierung', value: 'CE, GS, ETL' },
    ],
};

const MOCK_PRODUCT_9_EN: Products.Model.Product = {
    id: 'PRD-012',
    sku: 'MTS-300BL-22V',
    name: 'MultiMaster Oscillating Multi-Tool MTS-300BL',
    description:
        '<p>The <strong>MultiMaster Oscillating Multi-Tool MTS-300BL</strong> is a versatile cordless power tool designed for cutting, sanding, scraping, and grinding applications. Built on the 22V MAX battery platform with a powerful brushless motor, this professional-grade multi-tool delivers exceptional performance for remodeling, renovation, and precision work where other tools cannot reach.</p><h3>Ultimate Versatility</h3><p>Equipped with a high-efficiency brushless motor delivering 22,000 oscillations per minute (OPM), the MTS-300BL handles a wide range of materials including wood, metal, plastic, drywall, and tile. The tool-free accessory change system with universal fit accepts virtually all oscillating tool accessories on the market. Variable speed control allows precise matching of speed to material and application.</p><p>Key features include:</p><ul><li>22V MAX brushless motor for extended runtime and power</li><li>Variable speed: 8,000-22,000 OPM for optimal control</li><li>Tool-free quick-change accessory system (universal fit)</li><li>3.2° oscillation angle for aggressive cutting</li><li>LED work light illuminates work area</li><li>Ambidextrous on/off switch for easy control</li><li>Soft-grip overmold for comfortable handling</li><li>Electronic brake stops blade immediately</li></ul><h3>Professional Accessory Kit</h3><p>The MTS-300BL includes a comprehensive 15-piece accessory kit with cutting blades, sanding pads, scraper blades, and adapter for universal compatibility. The durable carrying case keeps all accessories organized and protected.</p>',
    shortDescription:
        'Professional 22V cordless oscillating multi-tool with variable speed and universal accessory fit',
    subtitle: 'Power Tools • Multi-Tools',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-012_1.jpg',
        width: 800,
        height: 800,
        alt: 'MultiMaster Oscillating Multi-Tool MTS-300BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-012_1.jpg',
            alt: 'MultiMaster Oscillating Multi-Tool MTS-300BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 199.99,
        currency: 'USD',
    },
    link: '/products/PRD-012',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '22,000 OPM', icon: 'Gauge' },
        { value: 'Universal Fit', icon: 'Wrench' },
    ],
    detailedSpecs: [
        { label: 'Battery Voltage', value: '22V MAX' },
        { label: 'Oscillation Rate', value: '8,000-22,000 OPM' },
        { label: 'Oscillation Angle', value: '3.2°' },
        { label: 'Accessory System', value: 'Universal quick-change' },
        { label: 'Motor Type', value: 'Brushless' },
        { label: 'Weight (with battery)', value: '1.8 kg' },
        { label: 'LED Work Light', value: 'Yes' },
        { label: 'Runtime', value: 'Up to 45 min' },
        { label: 'Vibration Level', value: '6.5 m/s²' },
        { label: 'Noise Level', value: '79 dB(A)' },
        { label: 'Accessories Included', value: '15-piece kit' },
        { label: 'Carrying Case', value: 'Heavy-duty case included' },
        { label: 'Certification', value: 'CE, UL, GS' },
    ],
};

const MOCK_PRODUCT_9_PL: Products.Model.Product = {
    id: 'PRD-012',
    sku: 'MTS-300BL-22V',
    name: 'MultiMaster Narzędzie Wielofunkcyjne Oscylacyjne MTS-300BL',
    description:
        '<p><strong>MultiMaster Narzędzie Wielofunkcyjne Oscylacyjne MTS-300BL</strong> to wszechstronne bezprzewodowe narzędzie elektryczne zaprojektowane do cięcia, szlifowania, skrobania i polerowania. Zbudowane na platformie akumulatorowej 22V MAX z potężnym silnikiem bezszczotkowym, to profesjonalne narzędzie wielofunkcyjne zapewnia wyjątkową wydajność dla remontów, renowacji i precyzyjnej pracy tam, gdzie inne narzędzia nie mogą dotrzeć.</p><h3>Maksymalna Wszechstronność</h3><p>Wyposażone w wysokowydajny silnik bezszczotkowy dostarczający 22 000 oscylacji na minutę (OPM), MTS-300BL obsługuje szeroki zakres materiałów, w tym drewno, metal, plastik, płyty gipsowe i płytki. System wymiany akcesoriów bez użycia narzędzi z uniwersalnym dopasowaniem akceptuje praktycznie wszystkie akcesoria narzędzi oscylacyjnych dostępne na rynku. Zmienna kontrola prędkości umożliwia precyzyjne dopasowanie prędkości do materiału i zastosowania.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Silnik bezszczotkowy 22V MAX dla wydłużonego czasu pracy i mocy</li><li>Zmienna prędkość: 8 000-22 000 OPM dla optymalnej kontroli</li><li>System szybkiej wymiany akcesoriów bez użycia narzędzi (uniwersalne dopasowanie)</li><li>Kąt oscylacji 3,2° dla agresywnego cięcia</li><li>Światło robocze LED oświetla obszar pracy</li><li>Dwustronny przełącznik włącz/wyłącz dla łatwej kontroli</li><li>Miękki uchwyt z nadmianem dla wygodnego trzymania</li><li>Hamulec elektroniczny zatrzymuje ostrze natychmiast</li></ul><h3>Profesjonalny Zestaw Akcesoriów</h3><p>MTS-300BL zawiera kompleksowy 15-częściowy zestaw akcesoriów z ostrzami tnącymi, podkładkami szlifierskimi, ostrzami do skrobania i adapterem dla uniwersalnej kompatybilności. Solidna walizka transportowa utrzymuje wszystkie akcesoria uporządkowane i chronione.</p>',
    shortDescription:
        'Profesjonalne narzędzie wielofunkcyjne oscylacyjne bezprzewodowe 22V ze zmienną prędkością i uniwersalnym dopasowaniem akcesoriów',
    subtitle: 'Narzędzia Elektryczne • Narzędzia Wielofunkcyjne',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-012_1.jpg',
        width: 800,
        height: 800,
        alt: 'MultiMaster Narzędzie Wielofunkcyjne Oscylacyjne MTS-300BL',
    },
    price: {
        value: 799.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-012',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '22 000 OPM', icon: 'Gauge' },
        { value: 'Uniwersalne', icon: 'Wrench' },
    ],
    detailedSpecs: [
        { label: 'Napięcie Akumulatora', value: '22V MAX' },
        { label: 'Częstotliwość Oscylacji', value: '8 000-22 000 OPM' },
        { label: 'Kąt Oscylacji', value: '3,2°' },
        { label: 'System Akcesoriów', value: 'Uniwersalna szybka wymiana' },
        { label: 'Typ Silnika', value: 'Bezszczotkowy' },
        { label: 'Waga (z akumulatorem)', value: '1,8 kg' },
        { label: 'Światło Robocze LED', value: 'Tak' },
        { label: 'Czas Pracy', value: 'Do 45 min' },
        { label: 'Poziom Wibracji', value: '6,5 m/s²' },
        { label: 'Poziom Hałasu', value: '79 dB(A)' },
        { label: 'Akcesoria W Zestawie', value: 'Zestaw 15-częściowy' },
        { label: 'Walizka Transportowa', value: 'Solidna walizka w zestawie' },
        { label: 'Certyfikacja', value: 'CE, UL, GS' },
    ],
};

const MOCK_PRODUCT_9_DE: Products.Model.Product = {
    id: 'PRD-012',
    sku: 'MTS-300BL-22V',
    name: 'MultiMaster Schwing-Multitool MTS-300BL',
    description:
        '<p>Das <strong>MultiMaster Schwing-Multitool MTS-300BL</strong> ist ein vielseitiges Akku-Elektrowerkzeug für Schneid-, Schleif-, Schab- und Polieranwendungen. Aufgebaut auf der 22V MAX Akkuplattform mit einem leistungsstarken bürstenlosen Motor liefert dieses professionelle Multitool außergewöhnliche Leistung für Renovierungen, Sanierungen und Präzisionsarbeiten, wo andere Werkzeuge nicht hinkommen.</p><h3>Ultimative Vielseitigkeit</h3><p>Ausgestattet mit einem hocheffizienten bürstenlosen Motor, der 22.000 Schwingungen pro Minute (OPM) liefert, bewältigt das MTS-300BL eine breite Palette von Materialien, einschließlich Holz, Metall, Kunststoff, Trockenbauwänden und Fliesen. Das werkzeuglose Zubehörwechselsystem mit universeller Passform akzeptiert praktisch alle Schwingwerkzeug-Zubehörteile auf dem Markt. Variable Geschwindigkeitskontrolle ermöglicht präzises Anpassen der Geschwindigkeit an Material und Anwendung.</p><p>Wichtige Funktionen:</p><ul><li>22V MAX bürstenloser Motor für verlängerte Laufzeit und Leistung</li><li>Variable Geschwindigkeit: 8.000-22.000 OPM für optimale Kontrolle</li><li>Werkzeugloses Schnellwechselsystem für Zubehör (universelle Passform)</li><li>3,2° Schwingwinkel für aggressives Schneiden</li><li>LED-Arbeitsleuchte beleuchtet Arbeitsbereich</li><li>Beidhändiger Ein/Aus-Schalter für einfache Kontrolle</li><li>Soft-Grip-Overmold für bequemes Handling</li><li>Elektronische Bremse stoppt Klinge sofort</li></ul><h3>Professionelles Zubehörset</h3><p>Das MTS-300BL enthält ein umfassendes 15-teiliges Zubehörset mit Schneidklingen, Schleifpads, Schabklingen und Adapter für universelle Kompatibilität. Die robuste Transporttasche hält alle Zubehörteile organisiert und geschützt.</p>',
    shortDescription:
        'Professionelles 22V Akku-Schwing-Multitool mit variabler Geschwindigkeit und universeller Zubehörpassform',
    subtitle: 'Elektrowerkzeuge • Multitools',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-012_1.jpg',
        width: 800,
        height: 800,
        alt: 'MultiMaster Schwing-Multitool MTS-300BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-012_1.jpg',
            alt: 'MultiMaster Schwing-Multitool MTS-300BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 199.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-012',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '22.000 OPM', icon: 'Gauge' },
        { value: 'Universell', icon: 'Wrench' },
    ],
    detailedSpecs: [
        { label: 'Akkuspannung', value: '22V MAX' },
        { label: 'Schwingfrequenz', value: '8.000-22.000 OPM' },
        { label: 'Schwingwinkel', value: '3,2°' },
        { label: 'Zubehörsystem', value: 'Universelle Schnellwechsel' },
        { label: 'Motortyp', value: 'Bürstenlos' },
        { label: 'Gewicht (mit Akku)', value: '1,8 kg' },
        { label: 'LED-Arbeitsleuchte', value: 'Ja' },
        { label: 'Laufzeit', value: 'Bis zu 45 Min' },
        { label: 'Vibrationspegel', value: '6,5 m/s²' },
        { label: 'Geräuschpegel', value: '79 dB(A)' },
        { label: 'Zubehör enthalten', value: '15-teiliges Set' },
        { label: 'Transporttasche', value: 'Robuste Tasche enthalten' },
        { label: 'Zertifizierung', value: 'CE, UL, GS' },
    ],
};

const MOCK_PRODUCT_10_EN: Products.Model.Product = {
    id: 'PRD-013',
    sku: 'AC-8500-50L',
    name: 'AirMaster Industrial Air Compressor AC-8500',
    description:
        '<p>The <strong>AirMaster Industrial Air Compressor AC-8500</strong> is a professional-grade vertical air compressor designed for demanding workshop and industrial applications. Featuring a powerful 8.5 HP motor, 50-liter tank capacity, and advanced pressure control, this compressor delivers reliable compressed air for pneumatic tools, spray painting, sandblasting, and manufacturing processes.</p><h3>High Performance and Reliability</h3><p>Equipped with a robust 8.5 HP (6.3 kW) induction motor and dual-piston pump design, the AC-8500 delivers consistent air pressure with rapid tank refill times. The large 50-liter vertical tank provides ample air storage for continuous operation of multiple pneumatic tools. The advanced thermal protection system prevents motor overheating during extended use.</p><p>Key features include:</p><ul><li>8.5 HP (6.3 kW) industrial-grade induction motor</li><li>50-liter vertical tank for space-efficient storage</li><li>Dual-piston pump delivers 420 L/min at 8 bar</li><li>Maximum pressure: 10 bar (145 PSI)</li><li>Automatic pressure switch with adjustable cut-in/cut-out</li><li>Dual pressure gauges (tank and regulated output)</li><li>Two quick-connect air outlets for multi-tool operation</li><li>Built-in pressure regulator with moisture trap</li><li>Safety valve and thermal overload protection</li></ul><h3>Professional Grade Construction</h3><p>The AC-8500 features an industrial-grade steel tank with anti-corrosion coating for long service life. The low-vibration design with rubber feet ensures stable operation. Easy-access oil fill and drain ports simplify maintenance. Includes 3-meter air hose with quick connectors.</p>',
    shortDescription: 'Professional 8.5HP industrial air compressor with 50L tank and dual-piston pump',
    subtitle: 'Compressed Air • Air Compressors',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-013_1.jpg',
        width: 800,
        height: 800,
        alt: 'AirMaster Industrial Air Compressor AC-8500',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-013_1.jpg',
            alt: 'AirMaster Industrial Air Compressor AC-8500',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 899.99,
        currency: 'USD',
    },
    link: '/products/PRD-013',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professional',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '8.5 HP', icon: 'Zap' },
        { value: '50L Tank', icon: 'Package' },
        { value: '10 Bar', icon: 'Gauge' },
    ],
    detailedSpecs: [
        { label: 'Motor Power', value: '8.5 HP (6.3 kW)' },
        { label: 'Tank Capacity', value: '50 liters' },
        { label: 'Max Pressure', value: '10 bar (145 PSI)' },
        { label: 'Air Delivery', value: '420 L/min @ 8 bar' },
        { label: 'Pump Type', value: 'Dual-piston, oil-lubricated' },
        { label: 'Tank Configuration', value: 'Vertical' },
        { label: 'Number of Outlets', value: '2 quick-connect' },
        { label: 'Pressure Regulation', value: 'Adjustable 0-10 bar' },
        { label: 'Voltage', value: '230V / 400V' },
        { label: 'Weight', value: '85 kg' },
        { label: 'Dimensions', value: '650 x 650 x 1420 mm' },
        { label: 'Noise Level', value: '82 dB(A)' },
        { label: 'Certification', value: 'CE, ISO 9001' },
    ],
};

const MOCK_PRODUCT_10_PL: Products.Model.Product = {
    id: 'PRD-013',
    sku: 'AC-8500-50L',
    name: 'AirMaster Przemysłowa Sprężarka Powietrza AC-8500',
    description:
        '<p><strong>AirMaster Przemysłowa Sprężarka Powietrza AC-8500</strong> to profesjonalna pionowa sprężarka powietrza zaprojektowana do wymagających zastosowań warsztatowych i przemysłowych. Wyposażona w potężny silnik 8,5 KM, pojemność zbiornika 50 litrów i zaawansowaną kontrolę ciśnienia, ta sprężarka zapewnia niezawodne sprężone powietrze dla narzędzi pneumatycznych, malowania natryskowego, piaskowania i procesów produkcyjnych.</p><h3>Wysoka Wydajność i Niezawodność</h3><p>Wyposażona w solidny silnik indukcyjny 8,5 KM (6,3 kW) i konstrukcję pompy dwutłokowej, AC-8500 zapewnia stałe ciśnienie powietrza z szybkimi czasami napełniania zbiornika. Duży pionowy zbiornik 50-litrowy zapewnia wystarczającą ilość powietrza do ciągłej pracy wielu narzędzi pneumatycznych. Zaawansowany system ochrony termicznej zapobiega przegrzaniu silnika podczas długotrwałego użytkowania.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Silnik indukcyjny przemysłowy 8,5 KM (6,3 kW)</li><li>Pionowy zbiornik 50-litrowy dla efektywnego wykorzystania przestrzeni</li><li>Pompa dwutłokowa dostarcza 420 L/min przy 8 bar</li><li>Maksymalne ciśnienie: 10 bar (145 PSI)</li><li>Automatyczny przełącznik ciśnienia z regulowanym włączeniem/wyłączeniem</li><li>Podwójne manometry (zbiornik i regulowane wyjście)</li><li>Dwa szybkozłącza powietrza do pracy z wieloma narzędziami</li><li>Wbudowany regulator ciśnienia z osuszaczem</li><li>Zawór bezpieczeństwa i ochrona przed przeciążeniem termicznym</li></ul><h3>Konstrukcja Profesjonalna</h3><p>AC-8500 posiada zbiornik stalowy przemysłowy z powłoką antykorozyjną dla długiej żywotności. Projekt o niskich wibracjach z gumowymi stopkami zapewnia stabilną pracę. Łatwy dostęp do portów napełniania i opróżniania oleju upraszcza konserwację. Zawiera wąż powietrzny 3-metrowy z szybkozłączami.</p>',
    shortDescription: 'Profesjonalna sprężarka powietrza przemysłowa 8,5KM ze zbiornikiem 50L i pompą dwutłokową',
    subtitle: 'Sprężone Powietrze • Sprężarki Powietrza',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-013_1.jpg',
        width: 800,
        height: 800,
        alt: 'AirMaster Przemysłowa Sprężarka Powietrza AC-8500',
    },
    price: {
        value: 3599.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-013',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Profesjonalne',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '8,5 KM', icon: 'Zap' },
        { value: 'Zbiornik 50L', icon: 'Package' },
        { value: '10 Bar', icon: 'Gauge' },
    ],
    detailedSpecs: [
        { label: 'Moc Silnika', value: '8,5 KM (6,3 kW)' },
        { label: 'Pojemność Zbiornika', value: '50 litrów' },
        { label: 'Maksymalne Ciśnienie', value: '10 bar (145 PSI)' },
        { label: 'Dostawa Powietrza', value: '420 L/min @ 8 bar' },
        { label: 'Typ Pompy', value: 'Dwutłokowa, smarowana olejem' },
        { label: 'Konfiguracja Zbiornika', value: 'Pionowa' },
        { label: 'Liczba Wyjść', value: '2 szybkozłącza' },
        { label: 'Regulacja Ciśnienia', value: 'Regulowana 0-10 bar' },
        { label: 'Napięcie', value: '230V / 400V' },
        { label: 'Waga', value: '85 kg' },
        { label: 'Wymiary', value: '650 x 650 x 1420 mm' },
        { label: 'Poziom Hałasu', value: '82 dB(A)' },
        { label: 'Certyfikacja', value: 'CE, ISO 9001' },
    ],
};

const MOCK_PRODUCT_10_DE: Products.Model.Product = {
    id: 'PRD-013',
    sku: 'AC-8500-50L',
    name: 'AirMaster Industrie-Kompressor AC-8500',
    description:
        '<p>Der <strong>AirMaster Industrie-Kompressor AC-8500</strong> ist ein professioneller vertikaler Luftkompressor für anspruchsvolle Werkstatt- und Industrieanwendungen. Mit einem leistungsstarken 8,5 PS Motor, 50-Liter-Tankkapazität und fortschrittlicher Druckkontrolle liefert dieser Kompressor zuverlässige Druckluft für pneumatische Werkzeuge, Spritzlackierung, Sandstrahlen und Fertigungsprozesse.</p><h3>Hohe Leistung und Zuverlässigkeit</h3><p>Ausgestattet mit einem robusten 8,5 PS (6,3 kW) Induktionsmotor und Zweikolbenpumpen-Design liefert der AC-8500 konsistenten Luftdruck mit schnellen Tankauffüllzeiten. Der große 50-Liter-Vertikaltank bietet ausreichend Luftspeicher für den kontinuierlichen Betrieb mehrerer pneumatischer Werkzeuge. Das fortschrittliche Thermoschutzsystem verhindert Motortiberhitzung bei längerem Gebrauch.</p><p>Wichtige Funktionen:</p><ul><li>8,5 PS (6,3 kW) Industrie-Induktionsmotor</li><li>50-Liter-Vertikaltank für platzsparende Lagerung</li><li>Zweikolbenpumpe liefert 420 L/min bei 8 bar</li><li>Maximaldruck: 10 bar (145 PSI)</li><li>Automatischer Druckschalter mit einstellbarem Ein-/Ausschalten</li><li>Duale Manometer (Tank und geregelter Ausgang)</li><li>Zwei Schnellkupplungs-Luftauslässe für Multi-Werkzeug-Betrieb</li><li>Eingebauter Druckregler mit Feuchtigkeitsabscheider</li><li>Sicherheitsventil und Thermoschutz</li></ul><h3>Professionelle Konstruktion</h3><p>Der AC-8500 verfügt über einen industriegefertigten Stahltank mit Korrosionsschutzbeschichtung für lange Lebensdauer. Das Niedrigvibrations-Design mit Gummifüßen gewährleistet stabilen Betrieb. Einfach zugängliche Ölfüll- und Entleerungsanschlüsse vereinfachen die Wartung. Enthält 3-Meter-Lufschlauch mit Schnellkupplungen.</p>',
    shortDescription: 'Professioneller 8,5PS Industrie-Luftkompressor mit 50L Tank und Zweikolbenpumpe',
    subtitle: 'Druckluft • Luftkompressoren',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-013_1.jpg',
        width: 800,
        height: 800,
        alt: 'AirMaster Industrie-Kompressor AC-8500',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-013_1.jpg',
            alt: 'AirMaster Industrie-Kompressor AC-8500',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 899.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-013',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professionell',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '8,5 PS', icon: 'Zap' },
        { value: '50L Tank', icon: 'Package' },
        { value: '10 Bar', icon: 'Gauge' },
    ],
    detailedSpecs: [
        { label: 'Motorleistung', value: '8,5 PS (6,3 kW)' },
        { label: 'Tankkapazität', value: '50 Liter' },
        { label: 'Maximaldruck', value: '10 bar (145 PSI)' },
        { label: 'Luftlieferung', value: '420 L/min @ 8 bar' },
        { label: 'Pumpentyp', value: 'Zweikolben, ölgeschmiert' },
        { label: 'Tankkonfiguration', value: 'Vertikal' },
        { label: 'Anzahl Auslässe', value: '2 Schnellkupplung' },
        { label: 'Druckregulierung', value: 'Einstellbar 0-10 bar' },
        { label: 'Spannung', value: '230V / 400V' },
        { label: 'Gewicht', value: '85 kg' },
        { label: 'Abmessungen', value: '650 x 650 x 1420 mm' },
        { label: 'Geräuschpegel', value: '82 dB(A)' },
        { label: 'Zertifizierung', value: 'CE, ISO 9001' },
    ],
};

const MOCK_PRODUCT_11_EN: Products.Model.Product = {
    id: 'PRD-014',
    sku: 'IWR-650BL-22V',
    name: 'TorquePro Cordless Impact Wrench IWR-650',
    description:
        '<p>The <strong>TorquePro Cordless Impact Wrench IWR-650</strong> is a high-torque professional impact wrench designed for automotive repair, heavy equipment maintenance, and construction applications. Built on the 22V MAX battery platform with a powerful brushless motor, this tool delivers exceptional fastening and loosening power for the toughest bolts and nuts.</p><h3>Maximum Torque Performance</h3><p>Equipped with a high-efficiency brushless motor and advanced impact mechanism, the IWR-650 delivers up to 650 Nm of maximum fastening torque and 850 Nm of breakaway torque. The three-speed selector allows you to match power to the application: precision mode (200 Nm) for delicate work, medium mode (400 Nm) for general fastening, and maximum mode (650 Nm) for heavy-duty applications.</p><p>Key features include:</p><ul><li>22V MAX brushless motor for maximum power</li><li>650 Nm max fastening torque / 850 Nm breakaway torque</li><li>Three-speed power selector for application control</li><li>Variable speed trigger for precise control</li><li>1/2" square drive with friction ring for quick socket changes</li><li>Dual LED work lights illuminate fasteners</li><li>Electronic brake stops anvil immediately</li><li>Compact design for access in tight spaces</li><li>Battery fuel gauge shows remaining charge</li></ul><h3>Professional Durability</h3><p>The IWR-650 features a die-cast aluminum housing for maximum durability and heat dissipation. The ergonomic soft-grip handle reduces operator fatigue during extended use. Includes carrying case, belt clip, and socket adapter set.</p>',
    shortDescription: 'Professional 22V cordless impact wrench with 650Nm torque and brushless motor',
    subtitle: 'Power Tools • Impact Wrenches',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-014_1.jpg',
        width: 800,
        height: 800,
        alt: 'TorquePro Cordless Impact Wrench IWR-650',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-014_1.jpg',
            alt: 'TorquePro Cordless Impact Wrench IWR-650',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 329.99,
        currency: 'EUR',
    },
    link: '/products/PRD-014',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professional',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '650 Nm', icon: 'Gauge' },
        { value: 'Brushless', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Battery Voltage', value: '22V MAX' },
        { label: 'Max Fastening Torque', value: '650 Nm' },
        { label: 'Max Breakaway Torque', value: '850 Nm' },
        { label: 'Speed Settings', value: '3-speed selector' },
        { label: 'No-Load Speed', value: '0-2800 RPM' },
        { label: 'Impact Rate', value: '0-3600 IPM' },
        { label: 'Drive Size', value: '1/2" square' },
        { label: 'Socket Retention', value: 'Friction ring' },
        { label: 'Weight (with battery)', value: '2.4 kg' },
        { label: 'Motor Type', value: 'Brushless' },
        { label: 'LED Work Light', value: 'Dual LED' },
        { label: 'Battery Indicator', value: 'Fuel gauge' },
        { label: 'Certification', value: 'CE, GS, UL' },
    ],
};

const MOCK_PRODUCT_11_PL: Products.Model.Product = {
    id: 'PRD-014',
    sku: 'IWR-650BL-22V',
    name: 'TorquePro Klucz Udarowy Bezprzewodowy IWR-650',
    description:
        '<p><strong>TorquePro Klucz Udarowy Bezprzewodowy IWR-650</strong> to profesjonalny klucz udarowy o wysokim momencie obrotowym zaprojektowany do napraw samochodowych, konserwacji ciężkiego sprzętu i zastosowań budowlanych. Zbudowany na platformie akumulatorowej 22V MAX z potężnym silnikiem bezszczotkowym, to narzędzie zapewnia wyjątkową moc dokręcania i luzowania dla najtwardszych śrub i nakrętek.</p><h3>Maksymalna Wydajność Momentu Obrotowego</h3><p>Wyposażony w wysokowydajny silnik bezszczotkowy i zaawansowany mechanizm udarowy, IWR-650 dostarcza do 650 Nm maksymalnego momentu dokręcania i 850 Nm momentu zerwania. Trójpoziomowy selektor pozwala dopasować moc do zastosowania: tryb precyzyjny (200 Nm) do delikatnej pracy, tryb średni (400 Nm) do ogólnego dokręcania i tryb maksymalny (650 Nm) do ciężkich zastosowań.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Silnik bezszczotkowy 22V MAX dla maksymalnej mocy</li><li>650 Nm maksymalny moment dokręcania / 850 Nm moment zerwania</li><li>Trójpoziomowy selektor mocy dla kontroli zastosowania</li><li>Zmienny spust dla precyzyjnej kontroli</li><li>Kwadratowy napęd 1/2" z pierścieniem ciernym do szybkiej wymiany nasadek</li><li>Podwójne światła robocze LED oświetlają elementy złączne</li><li>Hamulec elektroniczny zatrzymuje kowadło natychmiast</li><li>Kompaktowy projekt dla dostępu w ciasnych przestrzeniach</li><li>Wskaźnik paliwa akumulatora pokazuje pozostały ładunek</li></ul><h3>Profesjonalna Trwałość</h3><p>IWR-650 posiada obudowę z odlewanego aluminium dla maksymalnej trwałości i rozpraszania ciepła. Ergonomiczna rękojeść z miękkim uchwytem zmniejsza zmęczenie operatora podczas długotrwałego użytkowania. Zawiera walizkę transportową, klips do paska i zestaw adapterów nasadek.</p>',
    shortDescription: 'Profesjonalny klucz udarowy bezprzewodowy 22V z momentem 650Nm i silnikiem bezszczotkowym',
    subtitle: 'Narzędzia Elektryczne • Klucze Udarowe',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-014_1.jpg',
        width: 800,
        height: 800,
        alt: 'TorquePro Klucz Udarowy Bezprzewodowy IWR-650',
    },
    price: {
        value: 1319.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-014',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Profesjonalne',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '650 Nm', icon: 'Gauge' },
        { value: 'Bezszczotkowy', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Napięcie Akumulatora', value: '22V MAX' },
        { label: 'Maksymalny Moment Dokręcania', value: '650 Nm' },
        { label: 'Maksymalny Moment Zerwania', value: '850 Nm' },
        { label: 'Ustawienia Prędkości', value: 'Trójpoziomowy selektor' },
        { label: 'Prędkość Bez Obciążenia', value: '0-2800 RPM' },
        { label: 'Częstotliwość Uderzeń', value: '0-3600 IPM' },
        { label: 'Rozmiar Napędu', value: '1/2" kwadratowy' },
        { label: 'Utrzymanie Nasadki', value: 'Pierścień cierny' },
        { label: 'Waga (z akumulatorem)', value: '2,4 kg' },
        { label: 'Typ Silnika', value: 'Bezszczotkowy' },
        { label: 'Światło Robocze LED', value: 'Podwójne LED' },
        { label: 'Wskaźnik Akumulatora', value: 'Wskaźnik paliwa' },
        { label: 'Certyfikacja', value: 'CE, GS, UL' },
    ],
};

const MOCK_PRODUCT_11_DE: Products.Model.Product = {
    id: 'PRD-014',
    sku: 'IWR-650BL-22V',
    name: 'TorquePro Akku-Schlagschrauber IWR-650',
    description:
        '<p>Der <strong>TorquePro Akku-Schlagschrauber IWR-650</strong> ist ein Hochdrehmoment-Professioneller Schlagschrauber für Automobilreparaturen, Wartung von Schwermaschinen und Bauanwendungen. Aufgebaut auf der 22V MAX Akkuplattform mit einem leistungsstarken bürstenlosen Motor liefert dieses Werkzeug außergewöhnliche Befestigungs- und Lösungsleistung für die härtesten Schrauben und Muttern.</p><h3>Maximale Drehmomentleistung</h3><p>Ausgestattet mit einem hocheffizienten bürstenlosen Motor und fortschrittlichem Schlagmechanismus liefert der IWR-650 bis zu 650 Nm maximales Anzugsdrehmoment und 850 Nm Losbrechdrehmoment. Der Drei-Gang-Wähler ermöglicht es Ihnen, die Leistung an die Anwendung anzupassen: Präzisionsmodus (200 Nm) für empfindliche Arbeit, Mittelmodus (400 Nm) für allgemeine Befestigung und Maximalmodus (650 Nm) für schwere Anwendungen.</p><p>Wichtige Funktionen:</p><ul><li>22V MAX bürstenloser Motor für maximale Leistung</li><li>650 Nm max. Anzugsdrehmoment / 850 Nm Losbrechdrehmoment</li><li>Drei-Gang-Leistungswähler für Anwendungskontrolle</li><li>Variabler Geschwindigkeitsabzug für präzise Kontrolle</li><li>1/2" Vierkantantrieb mit Reibungsring für schnellen Stecknusswechsel</li><li>Duale LED-Arbeitsleuchten beleuchten Befestigungselemente</li><li>Elektronische Bremse stoppt Amboss sofort</li><li>Kompaktes Design für Zugang in engen Räumen</li><li>Akku-Kraftstoffanzeige zeigt verbleibende Ladung</li></ul><h3>Professionelle Haltbarkeit</h3><p>Der IWR-650 verfügt über ein Druckguss-Aluminiumgehäuse für maximale Haltbarkeit und Wärmeableitung. Der ergonomische Soft-Grip-Griff reduziert die Ermüdung des Bedieners bei längerem Gebrauch. Enthält Transporttasche, Gürtelclip und Stecknuss-Adapter-Set.</p>',
    shortDescription: 'Professioneller 22V Akku-Schlagschrauber mit 650Nm Drehmoment und bürstenlosem Motor',
    subtitle: 'Elektrowerkzeuge • Schlagschrauber',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-014_1.jpg',
        width: 800,
        height: 800,
        alt: 'TorquePro Akku-Schlagschrauber IWR-650',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-014_1.jpg',
            alt: 'TorquePro Akku-Schlagschrauber IWR-650',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 329.99,
        currency: 'EUR',
    },
    link: '/produkte/PRD-014',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professionell',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '650 Nm', icon: 'Gauge' },
        { value: 'Bürstenlos', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Akkuspannung', value: '22V MAX' },
        { label: 'Max. Anzugsdrehmoment', value: '650 Nm' },
        { label: 'Max. Losbrechdrehmoment', value: '850 Nm' },
        { label: 'Geschwindigkeitseinstellungen', value: 'Drei-Gang-Wähler' },
        { label: 'Leerlaufdrehzahl', value: '0-2800 U/min' },
        { label: 'Schlagfrequenz', value: '0-3600 IPM' },
        { label: 'Antriebsgröße', value: '1/2" Vierkant' },
        { label: 'Stecknusshaltung', value: 'Reibungsring' },
        { label: 'Gewicht (mit Akku)', value: '2,4 kg' },
        { label: 'Motortyp', value: 'Bürstenlos' },
        { label: 'LED-Arbeitsleuchte', value: 'Duale LED' },
        { label: 'Akku-Anzeige', value: 'Kraftstoffanzeige' },
        { label: 'Zertifizierung', value: 'CE, GS, UL' },
    ],
};

const MOCK_PRODUCT_12_EN: Products.Model.Product = {
    id: 'PRD-015',
    sku: 'CNC-XL2000-PRO',
    name: 'ProMill CNC Milling Machine XL-2000',
    description:
        '<p>The <strong>ProMill CNC Milling Machine XL-2000</strong> is a state-of-the-art industrial CNC machining center designed for precision manufacturing and production. With advanced automation features, high-speed spindle, and rigid construction, this machine delivers exceptional accuracy and productivity for aerospace, automotive, and general manufacturing applications.</p><h3>Advanced CNC Control System</h3><p>The XL-2000 features a fully integrated Siemens 840D CNC control system with 19" color touchscreen and intelligent programming interface. The system provides real-time monitoring of all critical parameters including spindle load, axis positions, and tool wear. The advanced conversational programming mode allows operators to create programs directly at the machine without CAM software.</p><p>Key features include:</p><ul><li>Siemens 840D CNC control with 19" touchscreen</li><li>3-axis simultaneous machining (X: 1000mm, Y: 600mm, Z: 600mm)</li><li>High-speed spindle: 24,000 RPM with HSK-63A tool holder</li><li>Automatic tool changer with 24-position magazine</li><li>Programmable coolant system with through-spindle delivery</li><li>Automatic work-piece measurement probe</li><li>Remote monitoring via ethernet connectivity</li><li>Predictive maintenance alerts and diagnostic system</li></ul><h3>Precision Engineering</h3><p>With a positioning accuracy of ±0.005mm and repeatability of ±0.003mm, the XL-2000 delivers exceptional precision for demanding applications. The machine features precision linear guides on all axes, ball screws with preload compensation, and a thermally-stable cast iron base for vibration dampening. The enclosed working area with safety interlocks ensures operator protection.</p>',
    shortDescription: 'Professional 3-axis CNC milling machine with 24,000 RPM spindle and Siemens control',
    subtitle: 'Machine Tools • CNC Milling Machines',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-015_1.jpg',
        width: 1200,
        height: 800,
        alt: 'ProMill CNC Milling Machine XL-2000',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            alt: 'CNC Milling Machine Front View',
            width: 1200,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            alt: 'CNC Machine Working Area',
            width: 1200,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            alt: 'CNC Control Panel Detail',
            width: 1200,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 125000,
        currency: 'USD',
    },
    link: '/products/PRD-015',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professional',
            variant: 'default',
        },
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '3-Axis CNC', icon: 'Settings' },
        { value: '24,000 RPM', icon: 'Gauge' },
        { value: 'Siemens', icon: 'Cpu' },
    ],
    detailedSpecs: [
        { label: 'Control System', value: 'Siemens 840D CNC' },
        { label: 'Number of Axes', value: '3-axis simultaneous' },
        { label: 'Travel X/Y/Z', value: '1000 / 600 / 600 mm' },
        { label: 'Spindle Speed', value: '100-24,000 RPM' },
        { label: 'Spindle Power', value: '18.5 kW' },
        { label: 'Tool Holder', value: 'HSK-63A' },
        { label: 'Tool Magazine', value: '24 positions ATC' },
        { label: 'Tool Change Time', value: '4.5 seconds' },
        { label: 'Positioning Accuracy', value: '±0.005 mm' },
        { label: 'Repeatability', value: '±0.003 mm' },
        { label: 'Table Size', value: '1100 x 600 mm' },
        { label: 'Max Table Load', value: '800 kg' },
        { label: 'Rapid Traverse', value: '48 m/min' },
        { label: 'Feed Rate', value: '1-15,000 mm/min' },
        { label: 'Machine Weight', value: '5200 kg' },
        { label: 'Power Requirement', value: '400V, 3-phase, 50/60Hz' },
        { label: 'Dimensions', value: '2800 x 2400 x 2600 mm' },
        { label: 'Coolant System', value: 'Programmable, through-spindle' },
        { label: 'Protection Rating', value: 'IP54' },
        { label: 'Certification', value: 'CE, ISO 9001, CSA' },
    ],
};

const MOCK_PRODUCT_12_PL: Products.Model.Product = {
    id: 'PRD-015',
    sku: 'CNC-XL2000-PRO',
    name: 'ProMill Frezarka CNC XL-2000',
    description:
        '<p><strong>ProMill Frezarka CNC XL-2000</strong> to zaawansowane przemysłowe centrum obróbcze CNC zaprojektowane do precyzyjnej produkcji i wytwarzania. Z zaawansowanymi funkcjami automatyzacji, szybką wrzecionem i sztywną konstrukcją, ta maszyna zapewnia wyjątkową dokładność i produktywność dla zastosowań lotniczych, motoryzacyjnych i ogólnej produkcji.</p><h3>Zaawansowany System Sterowania CNC</h3><p>XL-2000 posiada w pełni zintegrowany system sterowania CNC Siemens 840D z 19-calowym kolorowym ekranem dotykowym i inteligentnym interfejsem programowania. System zapewnia monitorowanie w czasie rzeczywistym wszystkich krytycznych parametrów, w tym obciążenia wrzeciona, pozycji osi i zużycia narzędzi. Zaawansowany tryb programowania konwersacyjnego umożliwia operatorom tworzenie programów bezpośrednio przy maszynie bez oprogramowania CAM.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Sterowanie CNC Siemens 840D z 19-calowym ekranem dotykowym</li><li>3-osiowa jednoczesna obróbka (X: 1000mm, Y: 600mm, Z: 600mm)</li><li>Szybkie wrzeciono: 24 000 RPM z uchwytem narzędzia HSK-63A</li><li>Automatyczna wymiana narzędzi z magazynem 24-pozycyjnym</li><li>Programowalny system chłodzenia z dostawą przez wrzeciono</li><li>Automatyczna sonda pomiarowa przedmiotu obrabianego</li><li>Zdalne monitorowanie przez łączność ethernet</li><li>Alerty predykcyjnej konserwacji i system diagnostyczny</li></ul><h3>Precyzyjna Inżynieria</h3><p>Z dokładnością pozycjonowania ±0,005mm i powtarzalnością ±0,003mm, XL-2000 zapewnia wyjątkową precyzję dla wymagających zastosowań. Maszyna posiada precyzyjne prowadnice liniowe na wszystkich osiach, śruby kulowe z kompensacją wstępnego obciążenia i termicznie stabilną bazę z żeliwa do tłumienia wibracji. Zamknięty obszar roboczy z blokadami bezpieczeństwa zapewnia ochronę operatora.</p>',
    shortDescription: 'Profesjonalna frezarka CNC 3-osiowa z wrzecionem 24 000 RPM i sterowaniem Siemens',
    subtitle: 'Maszyny Obróbcze • Frezarki CNC',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-015_1.jpg',
        width: 1200,
        height: 800,
        alt: 'ProMill Frezarka CNC XL-2000',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            alt: 'Frezarka CNC Widok Z Przodu',
            width: 1200,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            alt: 'Obszar Roboczy Maszyny CNC',
            width: 1200,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            alt: 'Szczegół Panelu Sterowania CNC',
            width: 1200,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Kabel Zasilający',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 500000,
        currency: 'PLN',
    },
    link: '/produkty/PRD-015',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Profesjonalne',
            variant: 'default',
        },
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '3-Osiowa CNC', icon: 'Settings' },
        { value: '24 000 RPM', icon: 'Gauge' },
        { value: 'Siemens', icon: 'Cpu' },
    ],
    detailedSpecs: [
        { label: 'System Sterowania', value: 'Siemens 840D CNC' },
        { label: 'Liczba Osi', value: '3-osiowa jednoczesna' },
        { label: 'Przebieg X/Y/Z', value: '1000 / 600 / 600 mm' },
        { label: 'Prędkość Wrzeciona', value: '100-24 000 RPM' },
        { label: 'Moc Wrzeciona', value: '18,5 kW' },
        { label: 'Uchwyt Narzędzia', value: 'HSK-63A' },
        { label: 'Magazyn Narzędzi', value: '24 pozycje ATC' },
        { label: 'Czas Wymiany Narzędzia', value: '4,5 sekundy' },
        { label: 'Dokładność Pozycjonowania', value: '±0,005 mm' },
        { label: 'Powtarzalność', value: '±0,003 mm' },
        { label: 'Rozmiar Stołu', value: '1100 x 600 mm' },
        { label: 'Maksymalne Obciążenie Stołu', value: '800 kg' },
        { label: 'Szybki Posuw', value: '48 m/min' },
        { label: 'Prędkość Posuwu', value: '1-15 000 mm/min' },
        { label: 'Waga Maszyny', value: '5200 kg' },
        { label: 'Wymagania Zasilania', value: '400V, 3-fazowe, 50/60Hz' },
        { label: 'Wymiary', value: '2800 x 2400 x 2600 mm' },
        { label: 'System Chłodzenia', value: 'Programowalny, przez wrzeciono' },
        { label: 'Stopień Ochrony', value: 'IP54' },
        { label: 'Certyfikacja', value: 'CE, ISO 9001, CSA' },
    ],
};

const MOCK_PRODUCT_12_DE: Products.Model.Product = {
    id: 'PRD-015',
    sku: 'CNC-XL2000-PRO',
    name: 'ProMill CNC-Fräsmaschine XL-2000',
    description:
        '<p>Die <strong>ProMill CNC-Fräsmaschine XL-2000</strong> ist ein hochmodernes industrielles CNC-Bearbeitungszentrum für Präzisionsfertigung und Produktion. Mit fortschrittlichen Automatisierungsfunktionen, Hochgeschwindigkeitsspindel und starrer Konstruktion liefert diese Maschine außergewöhnliche Genauigkeit und Produktivität für Luft- und Raumfahrt-, Automobil- und allgemeine Fertigungsanwendungen.</p><h3>Fortschrittliches CNC-Steuerungssystem</h3><p>Die XL-2000 verfügt über ein vollständig integriertes Siemens 840D CNC-Steuerungssystem mit 19" Farb-Touchscreen und intelligentem Programmierinterface. Das System bietet Echtzeitüberwachung aller kritischen Parameter einschließlich Spindellast, Achspositionen und Werkzeugverschleiß. Der fortschrittliche konversationelle Programmiermodus ermöglicht es Bedienern, Programme direkt an der Maschine ohne CAM-Software zu erstellen.</p><p>Wichtige Funktionen:</p><ul><li>Siemens 840D CNC-Steuerung mit 19" Touchscreen</li><li>3-Achsen-Simultanbearbeitung (X: 1000mm, Y: 600mm, Z: 600mm)</li><li>Hochgeschwindigkeitsspindel: 24.000 U/min mit HSK-63A Werkzeughalter</li><li>Automatischer Werkzeugwechsler mit 24-Positionen-Magazin</li><li>Programmierbares Kühlsystem mit Durchspindelzuführung</li><li>Automatische Werkstückmesssonde</li><li>Fernüberwachung über Ethernet-Konnektivität</li><li>Prädiktive Wartungsalarme und Diagnosesystem</li></ul><h3>Präzisionskonstruktion</h3><p>Mit einer Positioniergenauigkeit von ±0,005mm und Wiederholgenauigkeit von ±0,003mm liefert die XL-2000 außergewöhnliche Präzision für anspruchsvolle Anwendungen. Die Maschine verfügt über Präzisions-Linearführungen auf allen Achsen, Kugelgewindespindeln mit Vorspannkompensation und eine thermisch stabile Gusseisenbasis zur Vibrationsdämpfung. Der geschlossene Arbeitsbereich mit Sicherheitsverriegelungen gewährleistet Bedienerschutz.</p>',
    shortDescription: 'Professionelle 3-Achsen-CNC-Fräsmaschine mit 24.000 U/min Spindel und Siemens-Steuerung',
    subtitle: 'Werkzeugmaschinen • CNC-Fräsmaschinen',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-015_1.jpg',
        width: 1200,
        height: 800,
        alt: 'ProMill CNC-Fräsmaschine XL-2000',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            alt: 'CNC-Fräsmaschine Vorderansicht',
            width: 1200,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            alt: 'CNC-Maschine Arbeitsbereich',
            width: 1200,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            alt: 'CNC-Steuerpult Detail',
            width: 1200,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 125000,
        currency: 'USD',
    },
    link: '/produkte/PRD-015',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professionell',
            variant: 'default',
        },
        {
            label: 'Bestseller',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '3-Achsen-CNC', icon: 'Settings' },
        { value: '24.000 U/min', icon: 'Gauge' },
        { value: 'Siemens', icon: 'Cpu' },
    ],
    detailedSpecs: [
        { label: 'Steuerungssystem', value: 'Siemens 840D CNC' },
        { label: 'Anzahl der Achsen', value: '3-Achsen-Simultan' },
        { label: 'Verfahrweg X/Y/Z', value: '1000 / 600 / 600 mm' },
        { label: 'Spindeldrehzahl', value: '100-24.000 U/min' },
        { label: 'Spindleistung', value: '18,5 kW' },
        { label: 'Werkzeughalter', value: 'HSK-63A' },
        { label: 'Werkzeugmagazin', value: '24 Positionen ATC' },
        { label: 'Werkzeugwechselzeit', value: '4,5 Sekunden' },
        { label: 'Positioniergenauigkeit', value: '±0,005 mm' },
        { label: 'Wiederholgenauigkeit', value: '±0,003 mm' },
        { label: 'Tischgröße', value: '1100 x 600 mm' },
        { label: 'Max. Tischlast', value: '800 kg' },
        { label: 'Eilgang', value: '48 m/min' },
        { label: 'Vorschubgeschwindigkeit', value: '1-15.000 mm/min' },
        { label: 'Maschinengewicht', value: '5200 kg' },
        { label: 'Stromversorgung', value: '400V, 3-phasig, 50/60Hz' },
        { label: 'Abmessungen', value: '2800 x 2400 x 2600 mm' },
        { label: 'Kühlsystem', value: 'Programmierbar, durch Spindel' },
        { label: 'Schutzart', value: 'IP54' },
        { label: 'Zertifizierung', value: 'CE, ISO 9001, CSA' },
    ],
};

// Product 13 (PRD-016): Router
const MOCK_PRODUCT_13_EN: Products.Model.Product = {
    id: 'PRD-016',
    sku: 'RT-2100BL-22V',
    name: 'PrecisionCut Cordless Router RT-2100BL',
    description:
        '<p>The <strong>PrecisionCut Cordless Router RT-2100BL</strong> is a professional-grade palm router designed for precision edge profiling, dado cutting, and decorative routing in wood, plastic, and composite materials. Built on the 22V MAX battery platform with a powerful brushless motor, this compact router delivers exceptional control and versatility for woodworking professionals and serious DIY enthusiasts.</p><h3>Precision and Control</h3><p>Equipped with a high-efficiency brushless motor, the RT-2100BL delivers variable speed control from 16,000 to 25,000 RPM, allowing you to match the speed to the material and bit size. The electronic speed control maintains consistent RPM under load, ensuring clean cuts and preventing bit damage. The tool-free depth adjustment system with micro-adjustment provides precise depth control for accurate routing operations.</p><p>Key features include:</p><ul><li>22V MAX brushless motor for extended runtime and power</li><li>Variable speed: 16,000-25,000 RPM for optimal control</li><li>Tool-free depth adjustment with micro-fine tuning</li><li>Dual LED work lights illuminate the work area</li><li>Soft-start feature prevents workpiece damage</li><li>Compatible with 1/4" and 1/2" collets</li><li>Ergonomic design reduces operator fatigue</li></ul><h3>Versatility and Ease of Use</h3><p>The compact design and lightweight construction (1.8 kg with battery) make the RT-2100BL ideal for overhead work and extended use. The clear base plate provides excellent visibility, while the dust extraction port keeps the work area clean. The tool accepts standard router bits and accessories, making it compatible with existing router bit collections.</p>',
    shortDescription: 'Professional 22V cordless palm router with variable speed and brushless motor',
    subtitle: 'Power Tools • Routers',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-016_1.jpg',
        width: 800,
        height: 800,
        alt: 'PrecisionCut Cordless Router RT-2100BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-016_1.jpg',
            alt: 'PrecisionCut Cordless Router RT-2100BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 229.99,
        currency: 'USD',
    },
    link: '/products/PRD-016',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professional',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '16-25K RPM', icon: 'Gauge' },
        { value: 'Brushless', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Motor Type', value: 'Brushless' },
        { label: 'Speed Range', value: '16,000-25,000 RPM' },
        { label: 'Collet Sizes', value: '1/4", 1/2"' },
        { label: 'Max Depth of Cut', value: '50mm' },
        { label: 'Base Plate Diameter', value: '100mm' },
        { label: 'Battery Voltage', value: '22V MAX' },
        { label: 'Weight (with battery)', value: '1.8 kg' },
        { label: 'LED Work Light', value: 'Dual LED' },
        { label: 'Dust Extraction', value: 'Yes (35mm port)' },
        { label: 'Soft Start', value: 'Yes' },
        { label: 'Electronic Speed Control', value: 'Yes' },
        { label: 'Certification', value: 'CE, ETL, UL' },
    ],
};

const MOCK_PRODUCT_13_PL: Products.Model.Product = {
    id: 'PRD-016',
    sku: 'RT-2100BL-22V',
    name: 'PrecisionCut Frezarka Górnowrzecionowa Bezprzewodowa RT-2100BL',
    description:
        '<p><strong>PrecisionCut Frezarka Górnowrzecionowa Bezprzewodowa RT-2100BL</strong> to profesjonalna frezarka dłoniowa zaprojektowana do precyzyjnego profilowania krawędzi, cięcia rowków i dekoracyjnego frezowania w drewnie, plastiku i materiałach kompozytowych. Zbudowana na platformie akumulatorowej 22V MAX z potężnym silnikiem bezszczotkowym, ta kompaktowa frezarka zapewnia wyjątkową kontrolę i wszechstronność dla profesjonalistów stolarskich i poważnych entuzjastów DIY.</p><h3>Precyzja i Kontrola</h3><p>Wyposażona w wysokowydajny silnik bezszczotkowy, RT-2100BL zapewnia zmienną kontrolę prędkości od 16 000 do 25 000 RPM, umożliwiając dopasowanie prędkości do materiału i rozmiaru frezu. Elektroniczna kontrola prędkości utrzymuje stałe RPM pod obciążeniem, zapewniając czyste cięcia i zapobiegając uszkodzeniu frezu. System regulacji głębokości bez użycia narzędzi z mikrodopasowaniem zapewnia precyzyjną kontrolę głębokości dla dokładnych operacji frezowania.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Silnik bezszczotkowy 22V MAX dla wydłużonego czasu pracy i mocy</li><li>Zmienna prędkość: 16 000-25 000 RPM dla optymalnej kontroli</li><li>Regulacja głębokości bez użycia narzędzi z mikrodopasowaniem</li><li>Podwójne światła robocze LED oświetlają obszar pracy</li><li>Funkcja miękkiego startu zapobiega uszkodzeniu przedmiotu obrabianego</li><li>Kompatybilna z tulejami 1/4" i 1/2"</li><li>Ergonomiczny projekt zmniejsza zmęczenie operatora</li></ul><h3>Wszechstronność i Łatwość Użycia</h3><p>Kompaktowy projekt i lekka konstrukcja (1,8 kg z akumulatorem) sprawiają, że RT-2100BL jest idealna do pracy nad głową i długotrwałego użytkowania. Przezroczysta płyta podstawowa zapewnia doskonałą widoczność, podczas gdy port odpylania utrzymuje obszar pracy w czystości. Narzędzie akceptuje standardowe frezy i akcesoria, co czyni je kompatybilnym z istniejącymi kolekcjami frezów.</p>',
    shortDescription:
        'Profesjonalna frezarka dłoniowa bezprzewodowa 22V ze zmienną prędkością i silnikiem bezszczotkowym',
    subtitle: 'Narzędzia Elektryczne • Frezarki',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-016_1.jpg',
        width: 800,
        height: 800,
        alt: 'PrecisionCut Frezarka Górnowrzecionowa Bezprzewodowa RT-2100BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-016_1.jpg',
            alt: 'PrecisionCut Frezarka Górnowrzecionowa Bezprzewodowa RT-2100BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Kabel Zasilający',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 919.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-016',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Profesjonalne',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '16-25K RPM', icon: 'Gauge' },
        { value: 'Bezszczotkowy', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Typ Silnika', value: 'Bezszczotkowy' },
        { label: 'Zakres Prędkości', value: '16 000-25 000 RPM' },
        { label: 'Rozmiary Tulei', value: '1/4", 1/2"' },
        { label: 'Maksymalna Głębokość Cięcia', value: '50mm' },
        { label: 'Średnica Płyty Podstawowej', value: '100mm' },
        { label: 'Napięcie Akumulatora', value: '22V MAX' },
        { label: 'Waga (z akumulatorem)', value: '1,8 kg' },
        { label: 'Światło Robocze LED', value: 'Podwójne LED' },
        { label: 'Odpylanie', value: 'Tak (port 35mm)' },
        { label: 'Miękki Start', value: 'Tak' },
        { label: 'Elektroniczna Kontrola Prędkości', value: 'Tak' },
        { label: 'Certyfikacja', value: 'CE, ETL, UL' },
    ],
};

const MOCK_PRODUCT_13_DE: Products.Model.Product = {
    id: 'PRD-016',
    sku: 'RT-2100BL-22V',
    name: 'PrecisionCut Akku-Oberfräse RT-2100BL',
    description:
        '<p>Die <strong>PrecisionCut Akku-Oberfräse RT-2100BL</strong> ist eine professionelle Handoberfräse für präzises Kantenprofilieren, Nutenfräsen und dekoratives Fräsen in Holz, Kunststoff und Verbundwerkstoffen. Aufgebaut auf der 22V MAX Akkuplattform mit einem leistungsstarken bürstenlosen Motor liefert diese kompakte Oberfräse außergewöhnliche Kontrolle und Vielseitigkeit für Holzbearbeitungsprofis und ernsthafte DIY-Enthusiasten.</p><h3>Präzision und Kontrolle</h3><p>Ausgestattet mit einem hocheffizienten bürstenlosen Motor liefert die RT-2100BL variable Geschwindigkeitskontrolle von 16.000 bis 25.000 U/min, sodass Sie die Geschwindigkeit an das Material und die Fräsergröße anpassen können. Die elektronische Geschwindigkeitskontrolle hält die Drehzahl unter Last konstant und gewährleistet saubere Schnitte und verhindert Fräserschäden. Das werkzeuglose Tiefeneinstellungssystem mit Mikroeinstellung bietet präzise Tiefenkontrolle für genaue Fräsarbeiten.</p><p>Wichtige Funktionen:</p><ul><li>22V MAX bürstenloser Motor für verlängerte Laufzeit und Leistung</li><li>Variable Geschwindigkeit: 16.000-25.000 U/min für optimale Kontrolle</li><li>Werkzeuglose Tiefeneinstellung mit Mikrofeinabstimmung</li><li>Duale LED-Arbeitsleuchten beleuchten den Arbeitsbereich</li><li>Sanftstart-Funktion verhindert Werkstückschäden</li><li>Kompatibel mit 1/4" und 1/2" Spannzangen</li><li>Ergonomisches Design reduziert Bedienerermüdung</li></ul><h3>Vielseitigkeit und Benutzerfreundlichkeit</h3><p>Das kompakte Design und die leichte Konstruktion (1,8 kg mit Akku) machen die RT-2100BL ideal für Überkopfarbeiten und längeren Gebrauch. Die klare Grundplatte bietet ausgezeichnete Sichtbarkeit, während der Staubabsauganschluss den Arbeitsbereich sauber hält. Das Werkzeug akzeptiert Standard-Fräser und Zubehör und ist damit kompatibel mit bestehenden Fräserkollektionen.</p>',
    shortDescription: 'Professionelle 22V Akku-Handoberfräse mit variabler Geschwindigkeit und bürstenlosem Motor',
    subtitle: 'Elektrowerkzeuge • Oberfräsen',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-016_1.jpg',
        width: 800,
        height: 800,
        alt: 'PrecisionCut Akku-Oberfräse RT-2100BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-016_1.jpg',
            alt: 'PrecisionCut Akku-Oberfräse RT-2100BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 229.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-016',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professionell',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '16-25K RPM', icon: 'Gauge' },
        { value: 'Bürstenlos', icon: 'Zap' },
    ],
    detailedSpecs: [
        { label: 'Motortyp', value: 'Bürstenlos' },
        { label: 'Geschwindigkeitsbereich', value: '16.000-25.000 U/min' },
        { label: 'Spannzangengrößen', value: '1/4", 1/2"' },
        { label: 'Max. Schnitttiefe', value: '50mm' },
        { label: 'Grundplattendurchmesser', value: '100mm' },
        { label: 'Akku-Spannung', value: '22V MAX' },
        { label: 'Gewicht (mit Akku)', value: '1,8 kg' },
        { label: 'LED-Arbeitsleuchte', value: 'Duale LED' },
        { label: 'Staubabsaugung', value: 'Ja (35mm Anschluss)' },
        { label: 'Sanftstart', value: 'Ja' },
        { label: 'Elektronische Geschwindigkeitskontrolle', value: 'Ja' },
        { label: 'Zertifizierung', value: 'CE, ETL, UL' },
    ],
};

// Product 14 (PRD-017): Planer
const MOCK_PRODUCT_14_EN: Products.Model.Product = {
    id: 'PRD-017',
    sku: 'PL-1900BL-22V',
    name: 'SmoothPro Cordless Planer PL-1900BL',
    description:
        '<p>The <strong>SmoothPro Cordless Planer PL-1900BL</strong> is a professional-grade cordless planer designed for smooth surface finishing, edge planing, and material removal in wood, composite materials, and soft metals. Built on the 22V MAX battery platform with a powerful brushless motor, this planer delivers exceptional performance and precision for woodworking and construction applications.</p><h3>Powerful Performance</h3><p>Equipped with a high-efficiency brushless motor, the PL-1900BL delivers up to 19,000 RPM for fast material removal and smooth finishes. The dual-blade cutter head with reversible HSS blades provides long-lasting sharpness and consistent results. The variable speed control (10,000-19,000 RPM) allows you to match the speed to the material and application for optimal results.</p><p>Key features include:</p><ul><li>22V MAX brushless motor for maximum power and runtime</li><li>Variable speed: 10,000-19,000 RPM</li><li>Dual reversible HSS blades for extended life</li><li>Max cutting depth: 3.2mm per pass</li><li>82mm cutting width for efficient material removal</li><li>Dust extraction port for cleaner work environment</li><li>LED work light for improved visibility</li><li>Ergonomic design reduces operator fatigue</li></ul><h3>Precision and Control</h3><p>The tool-free depth adjustment system with scale provides precise control over material removal. The front and rear shoes are adjustable for bevel planing up to 45 degrees. The chip ejection system directs chips away from the operator, while the dust extraction port keeps the work area clean.</p>',
    shortDescription: 'Professional 22V cordless planer with variable speed and dual-blade system',
    subtitle: 'Power Tools • Planers',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-017_1.jpg',
        width: 800,
        height: 800,
        alt: 'SmoothPro Cordless Planer PL-1900BL',
    },
    price: {
        value: 199.99,
        currency: 'USD',
    },
    link: '/products/PRD-017',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professional',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '19K RPM', icon: 'Gauge' },
        { value: '3.2mm', icon: 'Maximize' },
    ],
    detailedSpecs: [
        { label: 'Motor Type', value: 'Brushless' },
        { label: 'Speed Range', value: '10,000-19,000 RPM' },
        { label: 'Cutting Width', value: '82mm' },
        { label: 'Max Depth per Pass', value: '3.2mm' },
        { label: 'Blade Type', value: 'Dual HSS reversible' },
        { label: 'Bevel Capacity', value: '0-45°' },
        { label: 'Battery Voltage', value: '22V MAX' },
        { label: 'Weight (with battery)', value: '2.5 kg' },
        { label: 'Dust Extraction', value: 'Yes (35mm port)' },
        { label: 'LED Work Light', value: 'Yes' },
        { label: 'Chip Ejection', value: 'Side ejection' },
        { label: 'Certification', value: 'CE, ETL, UL' },
    ],
};

const MOCK_PRODUCT_14_PL: Products.Model.Product = {
    id: 'PRD-017',
    sku: 'PL-1900BL-22V',
    name: 'SmoothPro Strugarka Bezprzewodowa PL-1900BL',
    description:
        '<p><strong>SmoothPro Strugarka Bezprzewodowa PL-1900BL</strong> to profesjonalna strugarka bezprzewodowa zaprojektowana do gładkiego wykończenia powierzchni, strugania krawędzi i usuwania materiału w drewnie, materiałach kompozytowych i miękkich metalach. Zbudowana na platformie akumulatorowej 22V MAX z potężnym silnikiem bezszczotkowym, ta strugarka zapewnia wyjątkową wydajność i precyzję dla zastosowań stolarskich i budowlanych.</p><h3>Potężna Wydajność</h3><p>Wyposażona w wysokowydajny silnik bezszczotkowy, PL-1900BL dostarcza do 19 000 RPM dla szybkiego usuwania materiału i gładkich wykończeń. Głowica nożowa z podwójnymi odwracalnymi ostrzami HSS zapewnia długotrwałą ostrość i spójne wyniki. Zmienna kontrola prędkości (10 000-19 000 RPM) umożliwia dopasowanie prędkości do materiału i zastosowania dla optymalnych wyników.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Silnik bezszczotkowy 22V MAX dla maksymalnej mocy i czasu pracy</li><li>Zmienna prędkość: 10 000-19 000 RPM</li><li>Podwójne odwracalne ostrza HSS dla wydłużonej żywotności</li><li>Maksymalna głębokość cięcia: 3,2mm na przejście</li><li>Szerokość cięcia 82mm dla efektywnego usuwania materiału</li><li>Port odpylania dla czystszego środowiska pracy</li><li>Światło robocze LED dla lepszej widoczności</li><li>Ergonomiczny projekt zmniejsza zmęczenie operatora</li></ul><h3>Precyzja i Kontrola</h3><p>System regulacji głębokości bez użycia narzędzi ze skalą zapewnia precyzyjną kontrolę nad usuwaniem materiału. Przednie i tylne płozy są regulowane do strugania pod kątem do 45 stopni. System wyrzucania wiórów kieruje wióry z dala od operatora, podczas gdy port odpylania utrzymuje obszar pracy w czystości.</p>',
    shortDescription: 'Profesjonalna strugarka bezprzewodowa 22V ze zmienną prędkością i systemem podwójnych ostrzy',
    subtitle: 'Narzędzia Elektryczne • Strugarki',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-017_1.jpg',
        width: 800,
        height: 800,
        alt: 'SmoothPro Strugarka Bezprzewodowa PL-1900BL',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-017_1.jpg',
            alt: 'SmoothPro Strugarka Bezprzewodowa PL-1900BL',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Kabel Zasilający',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 799.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-017',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Profesjonalne',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '19K RPM', icon: 'Gauge' },
        { value: '3,2mm', icon: 'Maximize' },
    ],
    detailedSpecs: [
        { label: 'Typ Silnika', value: 'Bezszczotkowy' },
        { label: 'Zakres Prędkości', value: '10 000-19 000 RPM' },
        { label: 'Szerokość Cięcia', value: '82mm' },
        { label: 'Maksymalna Głębokość na Przejście', value: '3,2mm' },
        { label: 'Typ Ostrzy', value: 'Podwójne HSS odwracalne' },
        { label: 'Pojemność Kątowa', value: '0-45°' },
        { label: 'Napięcie Akumulatora', value: '22V MAX' },
        { label: 'Waga (z akumulatorem)', value: '2,5 kg' },
        { label: 'Odpylanie', value: 'Tak (port 35mm)' },
        { label: 'Światło Robocze LED', value: 'Tak' },
        { label: 'Wyrzucanie Wiórów', value: 'Boczne wyrzucanie' },
        { label: 'Certyfikacja', value: 'CE, ETL, UL' },
    ],
};

const MOCK_PRODUCT_14_DE: Products.Model.Product = {
    id: 'PRD-017',
    sku: 'PL-1900BL-22V',
    name: 'SmoothPro Akku-Hobel PL-1900BL',
    description:
        '<p>Der <strong>SmoothPro Akku-Hobel PL-1900BL</strong> ist ein professioneller Akku-Hobel für glattes Oberflächenfinish, Kantenhobeln und Materialabtrag in Holz, Verbundwerkstoffen und weichen Metallen. Aufgebaut auf der 22V MAX Akkuplattform mit einem leistungsstarken bürstenlosen Motor liefert dieser Hobel außergewöhnliche Leistung und Präzision für Holzbearbeitungs- und Bauanwendungen.</p><h3>Leistungsstarke Performance</h3><p>Ausgestattet mit einem hocheffizienten bürstenlosen Motor liefert der PL-1900BL bis zu 19.000 U/min für schnellen Materialabtrag und glatte Oberflächen. Der Zweimesser-Fräskopf mit umkehrbaren HSS-Messern bietet langanhaltende Schärfe und konsistente Ergebnisse. Die variable Geschwindigkeitskontrolle (10.000-19.000 U/min) ermöglicht es Ihnen, die Geschwindigkeit an das Material und die Anwendung für optimale Ergebnisse anzupassen.</p><p>Wichtige Funktionen:</p><ul><li>22V MAX bürstenloser Motor für maximale Leistung und Laufzeit</li><li>Variable Geschwindigkeit: 10.000-19.000 U/min</li><li>Doppelte umkehrbare HSS-Messer für verlängerte Lebensdauer</li><li>Max. Schnitttiefe: 3,2mm pro Durchgang</li><li>82mm Schnittbreite für effizienten Materialabtrag</li><li>Staubabsauganschluss für sauberere Arbeitsumgebung</li><li>LED-Arbeitsleuchte für verbesserte Sichtbarkeit</li><li>Ergonomisches Design reduziert Bedienerermüdung</li></ul><h3>Präzision und Kontrolle</h3><p>Das werkzeuglose Tiefeneinstellungssystem mit Skala bietet präzise Kontrolle über den Materialabtrag. Die vorderen und hinteren Sohlen sind für Schräghobeln bis zu 45 Grad einstellbar. Das Späneauswurfsystem leitet Späne vom Bediener weg, während der Staubabsauganschluss den Arbeitsbereich sauber hält.</p>',
    shortDescription: 'Professioneller 22V Akku-Hobel mit variabler Geschwindigkeit und Zweimesser-System',
    subtitle: 'Elektrowerkzeuge • Hobel',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-017_1.jpg',
        width: 800,
        height: 800,
        alt: 'SmoothPro Akku-Hobel PL-1900BL',
    },
    price: {
        value: 199.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-017',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professionell',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '22V MAX', icon: 'Battery' },
        { value: '19K RPM', icon: 'Gauge' },
        { value: '3,2mm', icon: 'Maximize' },
    ],
    detailedSpecs: [
        { label: 'Motortyp', value: 'Bürstenlos' },
        { label: 'Geschwindigkeitsbereich', value: '10.000-19.000 U/min' },
        { label: 'Schnittbreite', value: '82mm' },
        { label: 'Max. Tiefe pro Durchgang', value: '3,2mm' },
        { label: 'Messertyp', value: 'Doppelte HSS umkehrbar' },
        { label: 'Schrägkapazität', value: '0-45°' },
        { label: 'Akku-Spannung', value: '22V MAX' },
        { label: 'Gewicht (mit Akku)', value: '2,5 kg' },
        { label: 'Staubabsaugung', value: 'Ja (35mm Anschluss)' },
        { label: 'LED-Arbeitsleuchte', value: 'Ja' },
        { label: 'Späneauswurf', value: 'Seitlicher Auswurf' },
        { label: 'Zertifizierung', value: 'CE, ETL, UL' },
    ],
};

// Product 15 (PRD-018): Table Saw
const MOCK_PRODUCT_15_EN: Products.Model.Product = {
    id: 'PRD-018',
    sku: 'TS-3150PRO',
    name: 'ProCut Professional Table Saw TS-3150',
    description:
        '<p>The <strong>ProCut Professional Table Saw TS-3150</strong> is a heavy-duty contractor-grade table saw designed for precision cutting in wood, plywood, and composite materials. Featuring a powerful 3.15 HP motor, large cutting capacity, and advanced safety features, this saw delivers exceptional performance for professional woodworking and construction applications.</p><h3>Power and Precision</h3><p>Equipped with a robust 3.15 HP (2350W) induction motor, the TS-3150 delivers consistent power for cutting through thick hardwoods and engineered lumber. The 315mm (12-1/2") blade provides excellent cutting capacity, while the precision fence system ensures accurate cuts up to 830mm (32-5/8") wide. The bevel capacity of 0-45 degrees allows for angled cuts and beveled edges.</p><p>Key features include:</p><ul><li>3.15 HP (2350W) induction motor for powerful cutting</li><li>315mm (12-1/2") blade capacity</li><li>Rip capacity: 830mm (32-5/8") to the right of blade</li><li>Bevel capacity: 0-45 degrees</li><li>Precision fence system with micro-adjustment</li><li>Dust collection port (100mm) for cleaner workspace</li><li>Safety features: blade guard, riving knife, anti-kickback pawls</li><li>Heavy-duty steel construction for stability</li></ul><h3>Safety and Convenience</h3><p>The TS-3150 features comprehensive safety systems including a transparent blade guard, riving knife to prevent kickback, and anti-kickback pawls. The tool-free blade change system makes maintenance quick and easy. The large cast iron table provides stable support for large workpieces, while the folding stand (optional) allows for easy transport and storage.</p>',
    shortDescription: 'Professional 3.15HP table saw with 315mm blade and precision fence system',
    subtitle: 'Power Tools • Table Saws',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-018_1.jpg',
        width: 800,
        height: 800,
        alt: 'ProCut Professional Table Saw TS-3150',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-018_1.jpg',
            alt: 'ProCut Professional Table Saw TS-3150',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_saw.jpg',
            alt: 'Table Saw Blades and Accessories',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 899.99,
        currency: 'USD',
    },
    link: '/products/PRD-018',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professional',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '3.15 HP', icon: 'Zap' },
        { value: '315mm', icon: 'Maximize' },
        { value: '830mm', icon: 'Gauge' },
    ],
    detailedSpecs: [
        { label: 'Motor Power', value: '3.15 HP (2350W)' },
        { label: 'Blade Size', value: '315mm (12-1/2")' },
        { label: 'Max Rip Capacity', value: '830mm (32-5/8")' },
        { label: 'Bevel Capacity', value: '0-45°' },
        { label: 'Max Depth at 90°', value: '90mm' },
        { label: 'Max Depth at 45°', value: '65mm' },
        { label: 'Table Size', value: '965 x 635mm' },
        { label: 'Dust Collection', value: '100mm port' },
        { label: 'Fence System', value: 'Precision with micro-adjust' },
        { label: 'Safety Features', value: 'Blade guard, riving knife, anti-kickback' },
        { label: 'Voltage', value: '230V, 50/60Hz' },
        { label: 'Certification', value: 'CE, ETL, UL' },
    ],
};

const MOCK_PRODUCT_15_PL: Products.Model.Product = {
    id: 'PRD-018',
    sku: 'TS-3150PRO',
    name: 'ProCut Profesjonalna Piła Stołowa TS-3150',
    description:
        '<p><strong>ProCut Profesjonalna Piła Stołowa TS-3150</strong> to ciężka piła stołowa klasy wykonawczej zaprojektowana do precyzyjnego cięcia w drewnie, sklejce i materiałach kompozytowych. Wyposażona w potężny silnik 3,15 KM, dużą pojemność cięcia i zaawansowane funkcje bezpieczeństwa, ta piła zapewnia wyjątkową wydajność dla profesjonalnych zastosowań stolarskich i budowlanych.</p><h3>Moc i Precyzja</h3><p>Wyposażona w solidny silnik indukcyjny 3,15 KM (2350W), TS-3150 zapewnia stałą moc do cięcia przez grube twarde drewno i drewno inżynieryjne. Tarcza 315mm (12-1/2") zapewnia doskonałą pojemność cięcia, podczas gdy precyzyjny system prowadnicy zapewnia dokładne cięcia do 830mm (32-5/8") szerokości. Pojemność kątowa 0-45 stopni umożliwia cięcia pod kątem i fazowane krawędzie.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Silnik indukcyjny 3,15 KM (2350W) dla potężnego cięcia</li><li>Pojemność tarczy 315mm (12-1/2")</li><li>Pojemność wzdłużna: 830mm (32-5/8") na prawo od tarczy</li><li>Pojemność kątowa: 0-45 stopni</li><li>Precyzyjny system prowadnicy z mikrodopasowaniem</li><li>Port zbierania pyłu (100mm) dla czystszego miejsca pracy</li><li>Funkcje bezpieczeństwa: osłona tarczy, nóż rozszczepiający, pazury przeciwodrzutowe</li><li>Części stalowe dla stabilności</li></ul><h3>Bezpieczeństwo i Wygoda</h3><p>TS-3150 posiada kompleksowe systemy bezpieczeństwa, w tym przezroczystą osłonę tarczy, nóż rozszczepiający zapobiegający odrzutowi i pazury przeciwodrzutowe. System wymiany tarczy bez użycia narzędzi sprawia, że konserwacja jest szybka i łatwa. Duży stół żeliwny zapewnia stabilne wsparcie dla dużych przedmiotów obrabianych, podczas gdy składane stojaki (opcjonalne) umożliwiają łatwy transport i przechowywanie.</p>',
    shortDescription: 'Profesjonalna piła stołowa 3,15KM z tarczą 315mm i precyzyjnym systemem prowadnicy',
    subtitle: 'Narzędzia Elektryczne • Piły Stołowe',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-018_1.jpg',
        width: 800,
        height: 800,
        alt: 'ProCut Profesjonalna Piła Stołowa TS-3150',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-018_1.jpg',
            alt: 'ProCut Profesjonalna Piła Stołowa TS-3150',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_saw.jpg',
            alt: 'Tarcze i Akcesoria do Piły Stołowej',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Kabel Zasilający',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 3599.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-018',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Profesjonalne',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '3,15 KM', icon: 'Zap' },
        { value: '315mm', icon: 'Maximize' },
        { value: '830mm', icon: 'Gauge' },
    ],
    detailedSpecs: [
        { label: 'Moc Silnika', value: '3,15 KM (2350W)' },
        { label: 'Rozmiar Tarczy', value: '315mm (12-1/2")' },
        { label: 'Maksymalna Pojemność Wzdłużna', value: '830mm (32-5/8")' },
        { label: 'Pojemność Kątowa', value: '0-45°' },
        { label: 'Maksymalna Głębokość przy 90°', value: '90mm' },
        { label: 'Maksymalna Głębokość przy 45°', value: '65mm' },
        { label: 'Rozmiar Stołu', value: '965 x 635mm' },
        { label: 'Zbieranie Pyłu', value: 'Port 100mm' },
        { label: 'System Prowadnicy', value: 'Precyzyjny z mikrodopasowaniem' },
        { label: 'Funkcje Bezpieczeństwa', value: 'Osłona tarczy, nóż rozszczepiający, przeciwodrzut' },
        { label: 'Napięcie', value: '230V, 50/60Hz' },
        { label: 'Certyfikacja', value: 'CE, ETL, UL' },
    ],
};

const MOCK_PRODUCT_15_DE: Products.Model.Product = {
    id: 'PRD-018',
    sku: 'TS-3150PRO',
    name: 'ProCut Professionelle Tischkreissäge TS-3150',
    description:
        '<p>Die <strong>ProCut Professionelle Tischkreissäge TS-3150</strong> ist eine schwere Tischkreissäge der Bauklasse für präzises Schneiden in Holz, Sperrholz und Verbundwerkstoffen. Mit einem leistungsstarken 3,15 PS Motor, großer Schnittkapazität und fortschrittlichen Sicherheitsfunktionen liefert diese Säge außergewöhnliche Leistung für professionelle Holzbearbeitungs- und Bauanwendungen.</p><h3>Leistung und Präzision</h3><p>Ausgestattet mit einem robusten 3,15 PS (2350W) Induktionsmotor liefert die TS-3150 konsistente Leistung zum Schneiden durch dicke Harthölzer und Ingenieurholz. Das 315mm (12-1/2") Sägeblatt bietet ausgezeichnete Schnittkapazität, während das Präzisionsführsystem präzise Schnitte bis zu 830mm (32-5/8") Breite gewährleistet. Die Schrägkapazität von 0-45 Grad ermöglicht Winkelschnitte und abgeschrägte Kanten.</p><p>Wichtige Funktionen:</p><ul><li>3,15 PS (2350W) Induktionsmotor für kraftvolles Schneiden</li><li>315mm (12-1/2") Sägeblattkapazität</li><li>Längsschnittkapazität: 830mm (32-5/8") rechts vom Sägeblatt</li><li>Schrägkapazität: 0-45 Grad</li><li>Präzisionsführsystem mit Mikroeinstellung</li><li>Staubabsauganschluss (100mm) für saubereren Arbeitsplatz</li><li>Sicherheitsfunktionen: Sägeblattschutz, Spaltkeil, Rückschlagklauen</li><li>Schwere Stahlkonstruktion für Stabilität</li></ul><h3>Sicherheit und Komfort</h3><p>Die TS-3150 verfügt über umfassende Sicherheitssysteme, einschließlich eines transparenten Sägeblattschutzes, Spaltkeil zur Verhinderung von Rückschlägen und Rückschlagklauen. Das werkzeuglose Sägeblattwechselsystem macht die Wartung schnell und einfach. Der große Gusseisentisch bietet stabilen Halt für große Werkstücke, während der Faltständer (optional) einfachen Transport und Lagerung ermöglicht.</p>',
    shortDescription: 'Professionelle 3,15PS Tischkreissäge mit 315mm Sägeblatt und Präzisionsführsystem',
    subtitle: 'Elektrowerkzeuge • Tischkreissägen',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-018_1.jpg',
        width: 800,
        height: 800,
        alt: 'ProCut Professionelle Tischkreissäge TS-3150',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-018_1.jpg',
            alt: 'ProCut Professionelle Tischkreissäge TS-3150',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_saw.jpg',
            alt: 'Tischkreissägeblätter und Zubehör',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 899.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-018',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professionell',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '3,15 PS', icon: 'Zap' },
        { value: '315mm', icon: 'Maximize' },
        { value: '830mm', icon: 'Gauge' },
    ],
    detailedSpecs: [
        { label: 'Motorleistung', value: '3,15 PS (2350W)' },
        { label: 'Sägeblattgröße', value: '315mm (12-1/2")' },
        { label: 'Max. Längsschnittkapazität', value: '830mm (32-5/8")' },
        { label: 'Schrägkapazität', value: '0-45°' },
        { label: 'Max. Tiefe bei 90°', value: '90mm' },
        { label: 'Max. Tiefe bei 45°', value: '65mm' },
        { label: 'Tischgröße', value: '965 x 635mm' },
        { label: 'Staubabsaugung', value: '100mm Anschluss' },
        { label: 'Führungssystem', value: 'Präzision mit Mikroeinstellung' },
        { label: 'Sicherheitsfunktionen', value: 'Sägeblattschutz, Spaltkeil, Rückschlagschutz' },
        { label: 'Spannung', value: '230V, 50/60Hz' },
        { label: 'Zertifizierung', value: 'CE, ETL, UL' },
    ],
};

// Product 16 (PRD-019): Welder
const MOCK_PRODUCT_16_EN: Products.Model.Product = {
    id: 'PRD-019',
    sku: 'MW-200PRO',
    name: 'ArcMaster Professional MIG Welder MW-200',
    description:
        '<p>The <strong>ArcMaster Professional MIG Welder MW-200</strong> is a versatile multi-process welding machine designed for MIG, flux-cored, and stick welding applications. Featuring advanced inverter technology and digital controls, this welder delivers exceptional performance for automotive repair, fabrication, construction, and general metalworking.</p><h3>Advanced Welding Technology</h3><p>Equipped with advanced inverter technology, the MW-200 provides stable arc characteristics and excellent weld quality across a wide range of materials including mild steel, stainless steel, and aluminum. The digital display shows voltage, amperage, and wire feed speed for precise control. The multi-process capability allows you to switch between MIG, flux-cored, and stick welding without additional equipment.</p><p>Key features include:</p><ul><li>200A output for welding up to 8mm (5/16") mild steel</li><li>Multi-process: MIG, flux-cored, and stick welding</li><li>Digital display for voltage, amperage, and wire speed</li><li>Infinite voltage and wire speed adjustment</li><li>Thermal overload protection</li><li>Gas solenoid valve for MIG welding</li><li>Compatible with 0.6mm, 0.8mm, and 1.0mm wire</li><li>Duty cycle: 60% at 200A, 100% at 160A</li></ul><h3>Versatility and Control</h3><p>The MW-200 features infinite adjustment controls for both voltage and wire feed speed, allowing precise matching to material thickness and welding position. The thermal overload protection automatically shuts down the welder if it overheats, protecting both the machine and the operator. The included MIG gun and ground clamp are designed for professional use and durability.</p>',
    shortDescription: 'Professional 200A multi-process MIG welder with digital controls',
    subtitle: 'Welding Equipment • MIG Welders',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-019_1.jpg',
        width: 800,
        height: 800,
        alt: 'ArcMaster Professional MIG Welder MW-200',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-019_1.jpg',
            alt: 'ArcMaster Professional MIG Welder MW-200',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 649.99,
        currency: 'USD',
    },
    link: '/products/PRD-019',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professional',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '200A', icon: 'Zap' },
        { value: 'Multi-Process', icon: 'Settings' },
        { value: '60% Duty', icon: 'Gauge' },
    ],
    detailedSpecs: [
        { label: 'Output Current', value: '200A max' },
        { label: 'Welding Processes', value: 'MIG, Flux-Cored, Stick' },
        { label: 'Max Material Thickness', value: '8mm (mild steel)' },
        { label: 'Wire Sizes', value: '0.6mm, 0.8mm, 1.0mm' },
        { label: 'Duty Cycle', value: '60% @ 200A, 100% @ 160A' },
        { label: 'Input Voltage', value: '230V, 50/60Hz' },
        { label: 'Input Power', value: '6.5 kVA' },
        { label: 'Wire Feed Speed', value: '1-15 m/min' },
        { label: 'Voltage Range', value: '14-26V' },
        { label: 'Thermal Protection', value: 'Yes' },
        { label: 'Gas Solenoid', value: 'Yes' },
        { label: 'Certification', value: 'CE, ETL, CSA' },
    ],
};

const MOCK_PRODUCT_16_PL: Products.Model.Product = {
    id: 'PRD-019',
    sku: 'MW-200PRO',
    name: 'ArcMaster Profesjonalna Spawarka MIG MW-200',
    description:
        '<p><strong>ArcMaster Profesjonalna Spawarka MIG MW-200</strong> to wszechstronna maszyna spawalnicza wieloprocesowa zaprojektowana do zastosowań spawania MIG, z drutem rdzeniowym i elektrodą otuloną. Wyposażona w zaawansowaną technologię inwerterową i sterowanie cyfrowe, ta spawarka zapewnia wyjątkową wydajność dla napraw samochodowych, fabrykacji, budownictwa i ogólnej obróbki metali.</p><h3>Zaawansowana Technologia Spawania</h3><p>Wyposażona w zaawansowaną technologię inwerterową, MW-200 zapewnia stabilne charakterystyki łuku i doskonałą jakość spawania w szerokim zakresie materiałów, w tym stali miękkiej, stali nierdzewnej i aluminium. Wyświetlacz cyfrowy pokazuje napięcie, natężenie i prędkość podawania drutu dla precyzyjnej kontroli. Możliwość wieloprocesowa umożliwia przełączanie między spawaniem MIG, z drutem rdzeniowym i elektrodą otuloną bez dodatkowego sprzętu.</p><p>Kluczowe funkcje obejmują:</p><ul><li>Wyjście 200A do spawania do 8mm (5/16") stali miękkiej</li><li>Wieloprocesowe: spawanie MIG, z drutem rdzeniowym i elektrodą otuloną</li><li>Wyświetlacz cyfrowy dla napięcia, natężenia i prędkości drutu</li><li>Nieskończona regulacja napięcia i prędkości drutu</li><li>Ochrona przed przeciążeniem termicznym</li><li>Zawór elektromagnetyczny gazu do spawania MIG</li><li>Kompatybilna z drutem 0,6mm, 0,8mm i 1,0mm</li><li>Cykl pracy: 60% przy 200A, 100% przy 160A</li></ul><h3>Wszechstronność i Kontrola</h3><p>MW-200 posiada nieskończone regulatory kontroli zarówno dla napięcia, jak i prędkości podawania drutu, umożliwiając precyzyjne dopasowanie do grubości materiału i pozycji spawania. Ochrona przed przeciążeniem termicznym automatycznie wyłącza spawarkę, jeśli się przegrzeje, chroniąc zarówno maszynę, jak i operatora. Dołączona pistolet MIG i zacisk masy są zaprojektowane do profesjonalnego użytku i trwałości.</p>',
    shortDescription: 'Profesjonalna spawarka MIG wieloprocesowa 200A ze sterowaniem cyfrowym',
    subtitle: 'Sprzęt Spawalniczy • Spawarki MIG',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-019_1.jpg',
        width: 800,
        height: 800,
        alt: 'ArcMaster Profesjonalna Spawarka MIG MW-200',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-019_1.jpg',
            alt: 'ArcMaster Profesjonalna Spawarka MIG MW-200',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Kabel Zasilający',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 2599.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-019',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Profesjonalne',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '200A', icon: 'Zap' },
        { value: 'Wieloprocesowa', icon: 'Settings' },
        { value: '60% Cykl', icon: 'Gauge' },
    ],
    detailedSpecs: [
        { label: 'Prąd Wyjściowy', value: '200A max' },
        { label: 'Procesy Spawania', value: 'MIG, Z Drutem Rdzeniowym, Elektroda Otulona' },
        { label: 'Maksymalna Grubość Materiału', value: '8mm (stal miękka)' },
        { label: 'Rozmiary Drutu', value: '0,6mm, 0,8mm, 1,0mm' },
        { label: 'Cykl Pracy', value: '60% @ 200A, 100% @ 160A' },
        { label: 'Napięcie Wejściowe', value: '230V, 50/60Hz' },
        { label: 'Moc Wejściowa', value: '6,5 kVA' },
        { label: 'Prędkość Podawania Drutu', value: '1-15 m/min' },
        { label: 'Zakres Napięcia', value: '14-26V' },
        { label: 'Ochrona Termiczna', value: 'Tak' },
        { label: 'Zawór Elektromagnetyczny Gazu', value: 'Tak' },
        { label: 'Certyfikacja', value: 'CE, ETL, CSA' },
    ],
};

const MOCK_PRODUCT_16_DE: Products.Model.Product = {
    id: 'PRD-019',
    sku: 'MW-200PRO',
    name: 'ArcMaster Professionelles MIG-Schweißgerät MW-200',
    description:
        '<p>Das <strong>ArcMaster Professionelles MIG-Schweißgerät MW-200</strong> ist ein vielseitiges Mehrprozess-Schweißgerät für MIG-, Fülldraht- und Elektrodenschweißanwendungen. Mit fortschrittlicher Invertertechnologie und digitaler Steuerung liefert dieses Schweißgerät außergewöhnliche Leistung für Automobilreparaturen, Fertigung, Bauwesen und allgemeine Metallbearbeitung.</p><h3>Fortschrittliche Schweißtechnologie</h3><p>Ausgestattet mit fortschrittlicher Invertertechnologie bietet das MW-200 stabile Lichtbogeneigenschaften und ausgezeichnete Schweißqualität über eine breite Palette von Materialien, einschließlich Baustahl, Edelstahl und Aluminium. Die digitale Anzeige zeigt Spannung, Stromstärke und Drahtvorschubgeschwindigkeit für präzise Kontrolle. Die Mehrprozessfähigkeit ermöglicht es Ihnen, zwischen MIG-, Fülldraht- und Elektrodenschweißen ohne zusätzliche Ausrüstung zu wechseln.</p><p>Wichtige Funktionen:</p><ul><li>200A Ausgang zum Schweißen von bis zu 8mm (5/16") Baustahl</li><li>Mehrprozess: MIG-, Fülldraht- und Elektrodenschweißen</li><li>Digitale Anzeige für Spannung, Stromstärke und Drahtgeschwindigkeit</li><li>Unendliche Spannungs- und Drahtgeschwindigkeitseinstellung</li><li>Thermische Überlastschutz</li><li>Gas-Solenoidventil für MIG-Schweißen</li><li>Kompatibel mit 0,6mm, 0,8mm und 1,0mm Draht</li><li>Einschaltdauer: 60% bei 200A, 100% bei 160A</li></ul><h3>Vielseitigkeit und Kontrolle</h3><p>Das MW-200 verfügt über unendliche Einstellungssteuerungen sowohl für Spannung als auch für Drahtvorschubgeschwindigkeit, sodass präzises Anpassen an Materialdicke und Schweißposition möglich ist. Der thermische Überlastschutz schaltet das Schweißgerät automatisch ab, wenn es überhitzt, und schützt sowohl die Maschine als auch den Bediener. Die enthaltene MIG-Pistole und Masseklemme sind für professionelle Nutzung und Haltbarkeit ausgelegt.</p>',
    shortDescription: 'Professionelles 200A Mehrprozess-MIG-Schweißgerät mit digitaler Steuerung',
    subtitle: 'Schweißausrüstung • MIG-Schweißgeräte',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-019_1.jpg',
        width: 800,
        height: 800,
        alt: 'ArcMaster Professionelles MIG-Schweißgerät MW-200',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-019_1.jpg',
            alt: 'ArcMaster Professionelles MIG-Schweißgerät MW-200',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 649.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-019',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professionell',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '200A', icon: 'Zap' },
        { value: 'Mehrprozess', icon: 'Settings' },
        { value: '60% ED', icon: 'Gauge' },
    ],
    detailedSpecs: [
        { label: 'Ausgangsstrom', value: '200A max' },
        { label: 'Schweißprozesse', value: 'MIG, Fülldraht, Elektrode' },
        { label: 'Max. Materialdicke', value: '8mm (Baustahl)' },
        { label: 'Drahtgrößen', value: '0,6mm, 0,8mm, 1,0mm' },
        { label: 'Einschaltdauer', value: '60% @ 200A, 100% @ 160A' },
        { label: 'Eingangsspannung', value: '230V, 50/60Hz' },
        { label: 'Eingangsleistung', value: '6,5 kVA' },
        { label: 'Drahtvorschubgeschwindigkeit', value: '1-15 m/min' },
        { label: 'Spannungsbereich', value: '14-26V' },
        { label: 'Thermischer Schutz', value: 'Ja' },
        { label: 'Gas-Solenoid', value: 'Ja' },
        { label: 'Zertifizierung', value: 'CE, ETL, CSA' },
    ],
};

// Product 17 (PRD-020): Generator
const MOCK_PRODUCT_17_EN: Products.Model.Product = {
    id: 'PRD-020',
    sku: 'GN-5500PRO',
    name: 'PowerGen Professional Generator GN-5500',
    description:
        '<p>The <strong>PowerGen Professional Generator GN-5500</strong> is a heavy-duty portable generator designed for construction sites, outdoor events, emergency backup power, and remote work locations. Featuring a powerful 420cc engine, electric start, and advanced inverter technology, this generator delivers clean, stable power for sensitive electronics and power tools.</p><h3>Power and Reliability</h3><p>Equipped with a robust 420cc 4-stroke OHV engine, the GN-5500 delivers 5500W running power and 6000W surge power, making it suitable for powering multiple tools, appliances, and equipment simultaneously. The advanced inverter technology provides clean sine wave output (THD <3%), safe for computers, TVs, and other sensitive electronics. The large 25-liter fuel tank provides up to 10 hours of runtime at 50% load.</p><p>Key features include:</p><ul><li>5500W running power / 6000W surge power</li><li>420cc 4-stroke OHV engine for reliability</li><li>Electric start with recoil backup</li><li>Inverter technology for clean power (THD <3%)</li><li>25-liter fuel tank for extended runtime</li><li>Dual 120V outlets and one 240V outlet</li><li>12V DC outlet for battery charging</li><li>Low oil shutdown protection</li><li>Digital display shows voltage, frequency, and runtime</li></ul><h3>Convenience and Safety</h3><p>The GN-5500 features an electric start system with battery included, plus a recoil backup for manual starting. The automatic voltage regulation (AVR) maintains stable output under varying loads. The low oil shutdown system automatically stops the engine if oil level is too low, protecting the engine from damage. The compact design with wheels and handle makes it easy to transport to job sites.</p>',
    shortDescription: 'Professional 5500W inverter generator with electric start and clean power output',
    subtitle: 'Power Equipment • Generators',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-020_1.jpg',
        width: 800,
        height: 800,
        alt: 'PowerGen Professional Generator GN-5500',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-020_1.jpg',
            alt: 'PowerGen Professional Generator GN-5500',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Power Cable',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 1299.99,
        currency: 'USD',
    },
    link: '/products/PRD-020',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professional',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '5500W', icon: 'Zap' },
        { value: '6000W Surge', icon: 'Gauge' },
        { value: '10h Runtime', icon: 'Battery' },
    ],
    detailedSpecs: [
        { label: 'Running Power', value: '5500W' },
        { label: 'Surge Power', value: '6000W' },
        { label: 'Engine', value: '420cc 4-stroke OHV' },
        { label: 'Fuel Tank', value: '25 liters' },
        { label: 'Runtime @ 50% Load', value: 'Up to 10 hours' },
        { label: 'AC Outlets', value: '2x 120V, 1x 240V' },
        { label: 'DC Outlet', value: '12V' },
        { label: 'THD', value: '<3%' },
        { label: 'Start System', value: 'Electric + Recoil' },
        { label: 'Noise Level', value: '68 dB(A) @ 7m' },
        { label: 'Weight', value: '78 kg' },
        { label: 'Certification', value: 'CE, EPA, CARB' },
    ],
};

const MOCK_PRODUCT_17_PL: Products.Model.Product = {
    id: 'PRD-020',
    sku: 'GN-5500PRO',
    name: 'PowerGen Profesjonalny Generator GN-5500',
    description:
        '<p><strong>PowerGen Profesjonalny Generator GN-5500</strong> to ciężki przenośny generator zaprojektowany dla placów budowy, wydarzeń na świeżym powietrzu, awaryjnego zasilania zapasowego i odległych miejsc pracy. Wyposażony w potężny silnik 420cc, rozrusznik elektryczny i zaawansowaną technologię inwerterową, ten generator zapewnia czystą, stabilną moc dla wrażliwej elektroniki i narzędzi elektrycznych.</p><h3>Moc i Niezawodność</h3><p>Wyposażony w solidny silnik 420cc 4-suwowy OHV, GN-5500 dostarcza 5500W mocy ciągłej i 6000W mocy szczytowej, co czyni go odpowiednim do zasilania wielu narzędzi, urządzeń i sprzętu jednocześnie. Zaawansowana technologia inwerterowa zapewnia czyste wyjście sinusoidalne (THD <3%), bezpieczne dla komputerów, telewizorów i innych wrażliwych urządzeń elektronicznych. Duży zbiornik paliwa 25-litrowy zapewnia do 10 godzin pracy przy 50% obciążeniu.</p><p>Kluczowe funkcje obejmują:</p><ul><li>5500W moc ciągła / 6000W moc szczytowa</li><li>Silnik 420cc 4-suwowy OHV dla niezawodności</li><li>Rozrusznik elektryczny z zapasowym rozruchem ręcznym</li><li>Technologia inwerterowa dla czystej mocy (THD <3%)</li><li>Zbiornik paliwa 25-litrowy dla wydłużonego czasu pracy</li><li>Podwójne gniazda 120V i jedno gniazdo 240V</li><li>Gniazdo 12V DC do ładowania akumulatorów</li><li>Ochrona przed wyłączeniem przy niskim poziomie oleju</li><li>Wyświetlacz cyfrowy pokazuje napięcie, częstotliwość i czas pracy</li></ul><h3>Wygoda i Bezpieczeństwo</h3><p>GN-5500 posiada system rozruchu elektrycznego z dołączonym akumulatorem, plus zapasowy rozruch ręczny. Automatyczna regulacja napięcia (AVR) utrzymuje stabilne wyjście przy zmiennych obciążeniach. System wyłączenia przy niskim poziomie oleju automatycznie zatrzymuje silnik, jeśli poziom oleju jest zbyt niski, chroniąc silnik przed uszkodzeniem. Kompaktowy projekt z kółkami i uchwytem ułatwia transport na place budowy.</p>',
    shortDescription: 'Profesjonalny generator inwerterowy 5500W z rozrusznikiem elektrycznym i czystym wyjściem mocy',
    subtitle: 'Sprzęt Zasilający • Generatory',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-020_1.jpg',
        width: 800,
        height: 800,
        alt: 'PowerGen Profesjonalny Generator GN-5500',
    },
    price: {
        value: 5199.99,
        currency: 'PLN',
    },
    link: '/produkty/PRD-020',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Profesjonalne',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '5500W', icon: 'Zap' },
        { value: '6000W Szczyt', icon: 'Gauge' },
        { value: '10h Czas', icon: 'Battery' },
    ],
    detailedSpecs: [
        { label: 'Moc Ciągła', value: '5500W' },
        { label: 'Moc Szczytowa', value: '6000W' },
        { label: 'Silnik', value: '420cc 4-suwowy OHV' },
        { label: 'Zbiornik Paliwa', value: '25 litrów' },
        { label: 'Czas Pracy @ 50% Obciążenia', value: 'Do 10 godzin' },
        { label: 'Gniazda AC', value: '2x 120V, 1x 240V' },
        { label: 'Gniazdo DC', value: '12V' },
        { label: 'THD', value: '<3%' },
        { label: 'System Rozruchu', value: 'Elektryczny + Ręczny' },
        { label: 'Poziom Hałasu', value: '68 dB(A) @ 7m' },
        { label: 'Waga', value: '78 kg' },
        { label: 'Certyfikacja', value: 'CE, EPA, CARB' },
    ],
};

const MOCK_PRODUCT_17_DE: Products.Model.Product = {
    id: 'PRD-020',
    sku: 'GN-5500PRO',
    name: 'PowerGen Professioneller Generator GN-5500',
    description:
        '<p>Der <strong>PowerGen Professioneller Generator GN-5500</strong> ist ein schwerer tragbarer Generator für Baustellen, Outdoor-Veranstaltungen, Notstromversorgung und abgelegene Arbeitsplätze. Mit einem leistungsstarken 420cc Motor, elektrischem Start und fortschrittlicher Invertertechnologie liefert dieser Generator saubere, stabile Energie für empfindliche Elektronik und Elektrowerkzeuge.</p><h3>Leistung und Zuverlässigkeit</h3><p>Ausgestattet mit einem robusten 420cc 4-Takt-OHV-Motor liefert der GN-5500 5500W Dauerleistung und 6000W Spitzenleistung und eignet sich damit zum gleichzeitigen Betreiben mehrerer Werkzeuge, Geräte und Ausrüstungen. Die fortschrittliche Invertertechnologie bietet saubere Sinuswellenausgabe (THD <3%), sicher für Computer, Fernseher und andere empfindliche Elektronik. Der große 25-Liter-Kraftstofftank bietet bis zu 10 Stunden Laufzeit bei 50% Last.</p><p>Wichtige Funktionen:</p><ul><li>5500W Dauerleistung / 6000W Spitzenleistung</li><li>420cc 4-Takt-OHV-Motor für Zuverlässigkeit</li><li>Elektrischer Start mit Rückzugssicherung</li><li>Invertertechnologie für saubere Energie (THD <3%)</li><li>25-Liter-Kraftstofftank für verlängerte Laufzeit</li><li>Duale 120V-Anschlüsse und ein 240V-Anschluss</li><li>12V DC-Anschluss zum Laden von Batterien</li><li>Niedrigöl-Abschaltung</li><li>Digitale Anzeige zeigt Spannung, Frequenz und Laufzeit</li></ul><h3>Komfort und Sicherheit</h3><p>Der GN-5500 verfügt über ein elektrisches Startsystem mit enthaltenem Akku sowie eine Rückzugssicherung für manuellen Start. Die automatische Spannungsregelung (AVR) hält die Ausgabe unter wechselnden Lasten stabil. Das Niedrigöl-Abschaltsystem stoppt den Motor automatisch, wenn der Ölstand zu niedrig ist, und schützt den Motor vor Schäden. Das kompakte Design mit Rädern und Griff erleichtert den Transport zu Baustellen.</p>',
    shortDescription: 'Professioneller 5500W Inverter-Generator mit elektrischem Start und sauberer Energieausgabe',
    subtitle: 'Stromversorgung • Generatoren',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-020_1.jpg',
        width: 800,
        height: 800,
        alt: 'PowerGen Professioneller Generator GN-5500',
    },
    images: [
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/prd-020_1.jpg',
            alt: 'PowerGen Professioneller Generator GN-5500',
            width: 800,
            height: 800,
        },
        {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/accesories_cable.jpg',
            alt: 'Netzkabel',
            width: 800,
            height: 800,
        },
    ],
    price: {
        value: 1299.99,
        currency: 'USD',
    },
    link: '/produkte/PRD-020',
    type: 'PHYSICAL',
    category: 'TOOLS',
    tags: [
        {
            label: 'Professionell',
            variant: 'default',
        },
    ],
    keySpecs: [
        { value: '5500W', icon: 'Zap' },
        { value: '6000W Spitze', icon: 'Gauge' },
        { value: '10h Laufzeit', icon: 'Battery' },
    ],
    detailedSpecs: [
        { label: 'Dauerleistung', value: '5500W' },
        { label: 'Spitzenleistung', value: '6000W' },
        { label: 'Motor', value: '420cc 4-Takt OHV' },
        { label: 'Kraftstofftank', value: '25 Liter' },
        { label: 'Laufzeit @ 50% Last', value: 'Bis zu 10 Stunden' },
        { label: 'AC-Anschlüsse', value: '2x 120V, 1x 240V' },
        { label: 'DC-Anschluss', value: '12V' },
        { label: 'THD', value: '<3%' },
        { label: 'Startsystem', value: 'Elektrisch + Rückzug' },
        { label: 'Geräuschpegel', value: '68 dB(A) @ 7m' },
        { label: 'Gewicht', value: '78 kg' },
        { label: 'Zertifizierung', value: 'CE, EPA, CARB' },
    ],
};

// Export localized product arrays
export const MOCK_PRODUCTS_EN: Products.Model.Product[] = [
    MOCK_PRODUCT_1_EN,
    MOCK_PRODUCT_2_EN,
    MOCK_PRODUCT_3_EN,
    MOCK_PRODUCT_4_EN,
    MOCK_PRODUCT_5_EN,
    MOCK_PRODUCT_6_EN,
    MOCK_PRODUCT_7_EN,
    MOCK_PRODUCT_8_EN,
    MOCK_PRODUCT_9_EN,
    MOCK_PRODUCT_10_EN,
    MOCK_PRODUCT_11_EN,
    MOCK_PRODUCT_12_EN,
    MOCK_PRODUCT_13_EN,
    MOCK_PRODUCT_14_EN,
    MOCK_PRODUCT_15_EN,
    MOCK_PRODUCT_16_EN,
    MOCK_PRODUCT_17_EN,
];

export const MOCK_PRODUCTS_PL: Products.Model.Product[] = [
    MOCK_PRODUCT_1_PL,
    MOCK_PRODUCT_2_PL,
    MOCK_PRODUCT_3_PL,
    MOCK_PRODUCT_4_PL,
    MOCK_PRODUCT_5_PL,
    MOCK_PRODUCT_6_PL,
    MOCK_PRODUCT_7_PL,
    MOCK_PRODUCT_8_PL,
    MOCK_PRODUCT_9_PL,
    MOCK_PRODUCT_10_PL,
    MOCK_PRODUCT_11_PL,
    MOCK_PRODUCT_12_PL,
    MOCK_PRODUCT_13_PL,
    MOCK_PRODUCT_14_PL,
    MOCK_PRODUCT_15_PL,
    MOCK_PRODUCT_16_PL,
    MOCK_PRODUCT_17_PL,
];

export const MOCK_PRODUCTS_DE: Products.Model.Product[] = [
    MOCK_PRODUCT_1_DE,
    MOCK_PRODUCT_2_DE,
    MOCK_PRODUCT_3_DE,
    MOCK_PRODUCT_4_DE,
    MOCK_PRODUCT_5_DE,
    MOCK_PRODUCT_6_DE,
    MOCK_PRODUCT_7_DE,
    MOCK_PRODUCT_8_DE,
    MOCK_PRODUCT_9_DE,
    MOCK_PRODUCT_10_DE,
    MOCK_PRODUCT_11_DE,
    MOCK_PRODUCT_12_DE,
    MOCK_PRODUCT_13_DE,
    MOCK_PRODUCT_14_DE,
    MOCK_PRODUCT_15_DE,
    MOCK_PRODUCT_16_DE,
    MOCK_PRODUCT_17_DE,
];

// Default export for backward compatibility (not used, but kept for reference)
export const MOCK_PRODUCTS = MOCK_PRODUCTS_EN;
