import { Tickets } from '@o2s/framework/modules';

const dateToday = new Date();
dateToday.setHours(dateToday.getHours() - 1);
const dateYesterday = new Date();
dateYesterday.setDate(dateYesterday.getDate() - 1);

const MOCK_TICKET_1_EN: Tickets.Model.Ticket = {
    id: 'EL-465-920-678',
    createdAt: dateToday.toISOString(),
    updatedAt: dateToday.toISOString(),
    topic: 'TOOL_REPAIR',
    type: 'URGENT',
    status: 'OPEN',
    attachments: [
        {
            name: 'Repair_Assessment.pdf',
            url: 'https://example.com/attachment.pdf',
            size: 1024,
            author: {
                name: 'Technical Support',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            ariaLabel: 'Download Repair_Assessment.pdf',
        },
    ],
    properties: [
        {
            id: 'description',
            value: `
<p>
Tool repair request for TE 70-ATC/AVR hammer drill. The device is not functioning properly - it stops during operation with Error E12 displayed.
</p>
<p>
Tool serial number: 3456789. Purchase date: 06/15/2023. Under Fleet Management program.
</p>
            `,
        },
        {
            id: 'address',
            value: '123 Construction Site, Building A, Floor 3',
        },
        {
            id: 'contact',
            value: 'John Contractor, +1 555-123-4567',
        },
    ],
    comments: [
        {
            author: {
                name: 'Technical Support',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
Initial assessment indicates possible motor control issue. Repair estimated to take 3-5 business days.
`,
        },
    ],
};

const MOCK_TICKET_2_EN: Tickets.Model.Ticket = {
    id: 'EL-465-920-677',
    createdAt: dateYesterday.toISOString(),
    updatedAt: dateYesterday.toISOString(),
    topic: 'FLEET_EXCHANGE',
    type: 'STANDARD',
    status: 'CLOSED',
    properties: [
        {
            id: 'description',
            value: `<p>Request for scheduled fleet exchange of 5 devices that have reached end of contract term.</p>`,
        },
        {
            id: 'address',
            value: 'Main Project Office, 456 Enterprise Way',
        },
        {
            id: 'contact',
            value: 'Sarah Manager, sarah.m@construction.com',
        },
    ],
    comments: [
        {
            author: {
                name: 'Fleet Manager',
                email: 'fleet@support.com',
            },
            date: dateToday.toISOString(),
            content: `<p>Fleet exchange has been completed successfully. All 5 tools have been replaced with newer models as per the contract agreement.</p><p><a href="/invoices">View invoice</a></p>`,
        },
        {
            author: {
                name: 'Technical Support',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
Dear Mr. Robert Johnson,

We have scheduled your fleet exchange for December 15th between 9:00 AM and 12:00 PM. Please ensure all 5 tools are available for collection:

1. TE 60-A36 Hammer Drill (S/N: 456789)
2. AG 125-A22 Angle Grinder (S/N: 567890)
3. SFC 22-A Cordless Drill Driver (S/N: 678901)
4. WSR 22-A Reciprocating Saw (S/N: 789012)
5. SID 4-A22 Impact Driver (S/N: 890123)

New replacement tools will be delivered at the same time. Please have a company representative available to sign off on the exchange.

Kind regards,
Fleet Management Team
`,
        },
    ],
};

const MOCK_TICKET_3_EN: Tickets.Model.Ticket = {
    id: 'EL-465-920-676',
    createdAt: '2024-12-12T10:00:00',
    updatedAt: '2024-12-14T16:00:00',
    topic: 'CALIBRATION',
    type: 'STANDARD',
    status: 'IN_PROGRESS',
    properties: [
        {
            id: 'description',
            value: `
<p>
Calibration request for PD-S laser measurement device. Annual calibration required for compliance with project quality standards.
</p>
<p>
Device details: PD-S, Serial Number: 234567
<a href="/cases">View calibration requirements</a>
</p>
            `,
        },
        {
            id: 'address',
            value: '789 Construction Avenue, Suite 300',
        },
        {
            id: 'contact',
            value: 'Michael Quality, m.quality@construction.com',
        },
    ],
    comments: [
        {
            author: {
                name: 'Calibration Specialist',
                email: 'calibration@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
<p>
Calibration in progress. Initial testing shows device is measuring with 2mm deviation over 20m distance. Will adjust and recalibrate.
</p>
<p>
Estimated completion: December 16th, 2024.
<a href="/cases">View calibration standards</a>
</p>
`,
        },
        {
            author: {
                name: 'Technical Support',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
<p>
Calibration request received. Your PD-S device has been added to the calibration schedule for December 14th. Please deliver the device to our Calibration Center by December 13th.
</p>
<p>
Would you like a temporary replacement device during the calibration period?
</p>
`,
        },
    ],
};

const MOCK_TICKET_4_EN: Tickets.Model.Ticket = {
    id: 'EL-465-920-675',
    createdAt: '2024-12-10T10:00:00',
    updatedAt: '2024-12-12T16:00:00',
    topic: 'THEFT_REPORT',
    type: 'URGENT',
    status: 'OPEN',
    properties: [
        {
            id: 'description',
            value: `
<p>
Theft report for SFC 22-A Cordless Drill Driver. Tool was stolen from secured job site on December 9th, 2024. Police report has been filed.
</p>
<p>
Tool Details: SFC 22-A, Serial Number: 678901, Fleet Management Contract: FM-2023-4567
<a href="/cases">View insurance claim process</a>
</p>
            `,
        },
        {
            id: 'address',
            value: '321 Project Site, Building C',
        },
        {
            id: 'contact',
            value: 'David Site, d.site@construction.com',
        },
    ],
};

const MOCK_TICKET_5_EN: Tickets.Model.Ticket = {
    id: 'EL-465-920-674',
    createdAt: '2024-12-10T10:00:00',
    updatedAt: '2024-12-12T16:00:00',
    topic: 'SOFTWARE_SUPPORT',
    type: 'STANDARD',
    status: 'OPEN',
    properties: [
        {
            id: 'description',
            value: `
PROFIS Engineering Suite license activation issue. After recent update to version 5.2, software shows "License Expired" even though subscription is current through June 2025.

Steps to reproduce:
1. Launch PROFIS Engineering Suite v5.2
2. Click on Anchor Design module
3. Error message appears: "License expired or not found"

Subscription ID: PRO-SUB-789012
            `,
        },
        {
            id: 'address',
            value: '567 Engineering Office, Suite 400',
        },
        {
            id: 'contact',
            value: 'Emily Engineer, e.engineer@design.com',
        },
    ],
    comments: [
        {
            author: {
                name: 'Software Support',
                email: 'software@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
We've identified the issue with your PROFIS Engineering Suite license. There appears to be a mismatch between your hardware ID and the license activation server after the recent update.

Please follow these steps to resolve:
1. Open PROFIS License Manager
2. Select "Repair License"
3. Enter your Subscription ID: PRO-SUB-789012
4. Restart the application

Let us know if you need further assistance.
`,
        },
    ],
    attachments: [
        {
            name: 'Error_Screenshot.pdf',
            url: 'https://example.com/attachment.pdf',
            size: 1024,
            author: {
                name: 'Emily Engineer',
                email: 'e.engineer@design.com',
            },
            date: '2024-12-12T12:00:00',
            ariaLabel: 'Download Error_Screenshot.pdf',
        },
    ],
};

const MOCK_TICKET_1_PL: Tickets.Model.Ticket = {
    id: 'EL-465-920-678',
    createdAt: dateToday.toISOString(),
    updatedAt: dateToday.toISOString(),
    topic: 'TOOL_REPAIR',
    type: 'URGENT',
    status: 'OPEN',
    attachments: [
        {
            name: 'Ocena_Naprawy.pdf',
            url: 'https://example.com/attachment.pdf',
            size: 1024,
            author: {
                name: 'Wsparcie Techniczne',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            ariaLabel: 'Pobierz Ocena_Naprawy.pdf',
        },
    ],
    properties: [
        {
            id: 'description',
            value: `
<p>
Zgłoszenie naprawy młotowiertarki TE 70-ATC/AVR. Urządzenie nie działa prawidłowo - zatrzymuje się podczas pracy z wyświetlonym błędem E12.
</p>
<p>
Numer seryjny narzędzia: 3456789. Data zakupu: 15.06.2023. W ramach programu Fleet Management.
</p>
            `,
        },
        {
            id: 'address',
            value: '123 Plac Budowy, Budynek A, Piętro 3',
        },
        {
            id: 'contact',
            value: 'Jan Kowalski, +1 555-123-4567',
        },
    ],
    comments: [
        {
            author: {
                name: 'Wsparcie Techniczne',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
Wstępna ocena wskazuje na możliwy problem z kontrolą silnika. Szacowany czas naprawy wynosi 3-5 dni roboczych.
`,
        },
    ],
};

const MOCK_TICKET_2_PL: Tickets.Model.Ticket = {
    id: 'EL-465-920-677',
    createdAt: dateYesterday.toISOString(),
    updatedAt: dateYesterday.toISOString(),
    topic: 'FLEET_EXCHANGE',
    type: 'STANDARD',
    status: 'CLOSED',
    properties: [
        {
            id: 'description',
            value: `<p>Prośba o zaplanowaną wymianę floty 5 urządzeń, które osiągnęły koniec terminu umowy.</p>`,
        },
        {
            id: 'address',
            value: 'Główne Biuro Projektu, 456 Aleja Przedsiębiorców',
        },
        {
            id: 'contact',
            value: 'Sara Menedżer, sara.m@construction.com',
        },
    ],
    comments: [
        {
            author: {
                name: 'Menedżer Floty',
                email: 'fleet@support.com',
            },
            date: dateToday.toISOString(),
            content: `
<p>
Wymiana floty została pomyślnie zakończona. Wszystkie 5 narzędzi zostało zastąpionych nowszymi modelami zgodnie z umową.
</p>
<p>
<a href="/invoices">Zobacz fakturę</a>
</p>
`,
        },
        {
            author: {
                name: 'Wsparcie Techniczne',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
Szanowny Panie Robercie Kowalski,

Zaplanowaliśmy wymianę floty na 15 grudnia między 9:00 a 12:00. Prosimy o zapewnienie dostępności wszystkich 5 narzędzi do odbioru:

1. TE 60-A36 Młotowiertarka (S/N: 456789)
2. AG 125-A22 Szlifierka kątowa (S/N: 567890)
3. SFC 22-A Wiertarko-wkrętarka (S/N: 678901)
4. WSR 22-A Piła szablasta (S/N: 789012)
5. SID 4-A22 Wkrętarka udarowa (S/N: 890123)

Nowe narzędzia zastępcze zostaną dostarczone w tym samym czasie. Prosimy o obecność przedstawiciela firmy w celu potwierdzenia wymiany.

Z poważaniem,
Zespół Zarządzania Flotą
`,
        },
    ],
};

const MOCK_TICKET_3_PL: Tickets.Model.Ticket = {
    id: 'EL-465-920-676',
    createdAt: '2024-12-12T10:00:00',
    updatedAt: '2024-12-14T16:00:00',
    topic: 'CALIBRATION',
    type: 'STANDARD',
    status: 'IN_PROGRESS',
    properties: [
        {
            id: 'description',
            value: `
<p>
Prośba o kalibrację urządzenia pomiarowego PD-S. Wymagana roczna kalibracja dla zgodności ze standardami jakości projektu.
</p>
<p>
Szczegóły urządzenia: PD-S, Numer seryjny: 234567
<a href="/cases">Zobacz wymagania kalibracji</a>
</p>
            `,
        },
        {
            id: 'address',
            value: '789 Aleja Budowlana, Apartament 300',
        },
        {
            id: 'contact',
            value: 'Michał Jakość, m.jakosc@construction.com',
        },
    ],
    comments: [
        {
            author: {
                name: 'Specjalista ds. Kalibracji',
                email: 'calibration@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
<p>
Kalibracja w toku. Wstępne testy wykazują, że urządzenie mierzy z odchyleniem 2mm na dystansie 20m. Dostosujemy i przeprowadzimy ponowną kalibrację.
</p>
<p>
Szacowana data ukończenia: 16 grudnia 2024.
<a href="/cases">Zobacz standardy kalibracji</a>
</p>
`,
        },
        {
            author: {
                name: 'Wsparcie Techniczne',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
<p>
Otrzymano prośbę o kalibrację. Twoje urządzenie PD-S zostało dodane do harmonogramu kalibracji na 14 grudnia. Prosimy o dostarczenie urządzenia do naszego Centrum Kalibracji do 13 grudnia.
</p>
<p>
Czy chciałbyś tymczasowe urządzenie zastępcze na czas kalibracji?
</p>
`,
        },
    ],
};

const MOCK_TICKET_4_PL: Tickets.Model.Ticket = {
    id: 'EL-465-920-675',
    createdAt: '2024-12-10T10:00:00',
    updatedAt: '2024-12-12T16:00:00',
    topic: 'THEFT_REPORT',
    type: 'URGENT',
    status: 'OPEN',
    properties: [
        {
            id: 'description',
            value: `
<p>
Zgłoszenie kradzieży wiertarko-wkrętarki SFC 22-A. Narzędzie zostało skradzione z zabezpieczonego placu budowy 9 grudnia 2024 r. Złożono raport policyjny.
</p>
<p>
Szczegóły narzędzia: SFC 22-A, Numer seryjny: 678901, Umowa Fleet Management: FM-2023-4567
<a href="/cases">Zobacz proces zgłaszania ubezpieczenia</a>
</p>
            `,
        },
        {
            id: 'address',
            value: '321 Teren Projektu, Budynek C',
        },
        {
            id: 'contact',
            value: 'Dawid Terenowy, d.terenowy@construction.com',
        },
    ],
};

const MOCK_TICKET_5_PL: Tickets.Model.Ticket = {
    id: 'EL-465-920-674',
    createdAt: '2024-12-10T10:00:00',
    updatedAt: '2024-12-12T16:00:00',
    topic: 'SOFTWARE_SUPPORT',
    type: 'STANDARD',
    status: 'OPEN',
    properties: [
        {
            id: 'description',
            value: `
Problem z aktywacją licencji pakietu PROFIS Engineering Suite. Po ostatniej aktualizacji do wersji 5.2, oprogramowanie pokazuje "Licencja wygasła", mimo że subskrypcja jest aktualna do czerwca 2025.

Kroki do odtworzenia:
1. Uruchom PROFIS Engineering Suite v5.2
2. Kliknij na moduł Anchor Design
3. Fehlermeldung erscheint: "Licencja wygasła oder nicht gefunden"

ID subskrypcji: PRO-SUB-789012
            `,
        },
        {
            id: 'address',
            value: '567 Biuro Inżynieryjne, Apartament 400',
        },
        {
            id: 'contact',
            value: 'Emilia Inżynier, e.inzynier@design.com',
        },
    ],
    comments: [
        {
            author: {
                name: 'Wsparcie Oprogramowania',
                email: 'software@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
Zidentyfikowaliśmy problem z licencją PROFIS Engineering Suite. Wydaje się, że po ostatniej aktualizacji wystąpiła niezgodność między identyfikatorem sprzętu a serwerem aktywacji licencji.

Proszę wykonać następujące kroki, aby rozwiązać problem:
1. Otwórz PROFIS License Manager
2. Wählen Sie "Lizenz reparieren"
3. Geben Sie Ihre Abonnement-ID ein: PRO-SUB-789012
4. Starten Sie die Anwendung neu

Lassen Sie uns wissen, wenn Sie weitere Unterstützung benötigen.
`,
        },
    ],
    attachments: [
        {
            name: 'Zrzut_Ekranu_Bledu.pdf',
            url: 'https://example.com/attachment.pdf',
            size: 1024,
            author: {
                name: 'Emilia Inżynier',
                email: 'e.inzynier@design.com',
            },
            date: '2024-12-12T12:00:00',
            ariaLabel: 'Pobierz Zrzut_Ekranu_Bledu.pdf',
        },
    ],
};

const MOCK_TICKET_1_DE: Tickets.Model.Ticket = {
    id: 'EL-465-920-678',
    createdAt: dateToday.toISOString(),
    updatedAt: dateToday.toISOString(),
    topic: 'TOOL_REPAIR',
    type: 'URGENT',
    status: 'OPEN',
    attachments: [
        {
            name: 'Reparaturbewertung.pdf',
            url: 'https://example.com/attachment.pdf',
            size: 1024,
            author: {
                name: 'Technischer Support',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            ariaLabel: 'Reparaturbewertung.pdf herunterladen',
        },
    ],
    properties: [
        {
            id: 'description',
            value: `
<p>
Reparaturanfrage für TE 70-ATC/AVR Bohrhammer. Das Gerät funktioniert nicht ordnungsgemäß - es stoppt während des Betriebs mit angezeigtem Fehler E12.
</p>
<p>
Geräteseriennummer: 3456789. Kaufdatum: 15.06.2023. Im Rahmen des Fleet Management Programms.
</p>
            `,
        },
        {
            id: 'address',
            value: '123 Baustelle, Gebäude A, 3. Stock',
        },
        {
            id: 'contact',
            value: 'Johannes Unternehmer, +1 555-123-4567',
        },
    ],
    comments: [
        {
            author: {
                name: 'Technischer Support',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
Erste Beurteilung deutet auf ein mögliches Problem mit der Motorsteuerung hin. Reparatur wird voraussichtlich 3-5 Werktage dauern.
`,
        },
    ],
};

const MOCK_TICKET_2_DE: Tickets.Model.Ticket = {
    id: 'EL-465-920-677',
    createdAt: dateYesterday.toISOString(),
    updatedAt: dateYesterday.toISOString(),
    topic: 'FLEET_EXCHANGE',
    type: 'STANDARD',
    status: 'CLOSED',
    properties: [
        {
            id: 'description',
            value: `<p>Anfrage für geplanten Flottenaustausch von 5 Geräten, die das Ende der Vertragslaufzeit erreicht haben.</p>`,
        },
        {
            id: 'address',
            value: 'Hauptprojektbüro, 456 Unternehmensweg',
        },
        {
            id: 'contact',
            value: 'Sarah Manager, sarah.m@construction.com',
        },
    ],
    comments: [
        {
            author: {
                name: 'Flottenmanager',
                email: 'fleet@support.com',
            },
            date: dateToday.toISOString(),
            content: `
<p>
Flottenaustausch wurde erfolgreich abgeschlossen. Alle 5 Werkzeuge wurden gemäß der Vertragsvereinbarung durch neuere Modelle ersetzt.
</p>
<p>
<a href="/invoices">Rechnung ansehen</a>
</p>
`,
        },
        {
            author: {
                name: 'Technischer Support',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
Sehr geehrter Herr Robert Schmidt,

Wir haben Ihren Flottenaustausch für den 15. Dezember zwischen 9:00 und 12:00 Uhr geplant. Bitte stellen Sie sicher, dass alle 5 Werkzeuge zur Abholung bereitstehen:

1. TE 60-A36 Bohrhammer (S/N: 456789)
2. AG 125-A22 Winkelschleifer (S/N: 567890)
3. SFC 22-A Akku-Bohrschrauber (S/N: 678901)
4. WSR 22-A Säbelsäge (S/N: 789012)
5. SID 4-A22 Schlagschrauber (S/N: 890123)

Neue Ersatzwerkzeuge werden zur gleichen Zeit geliefert. Bitte stellen Sie sicher, dass ein Unternehmensvertreter anwesend ist, um den Austausch zu bestätigen.

Mit freundlichen Grüßen,
Fleet Management Team
`,
        },
    ],
};

const MOCK_TICKET_3_DE: Tickets.Model.Ticket = {
    id: 'EL-465-920-676',
    createdAt: '2024-12-12T10:00:00',
    updatedAt: '2024-12-14T16:00:00',
    topic: 'CALIBRATION',
    type: 'STANDARD',
    status: 'IN_PROGRESS',
    properties: [
        {
            id: 'description',
            value: `
<p>
Kalibrierungsanfrage für PD-S Laser-Messgerät. Jährliche Kalibrierung erforderlich für die Einhaltung der Projektqualitätsstandards.
</p>
<p>
Gerätedetails: PD-S, Seriennummer: 234567
<a href="/cases">Kalibrierungsanforderungen ansehen</a>
</p>
            `,
        },
        {
            id: 'address',
            value: '789 Bauallee, Suite 300',
        },
        {
            id: 'contact',
            value: 'Michael Qualität, m.qualitaet@construction.com',
        },
    ],
    comments: [
        {
            author: {
                name: 'Kalibrierungsspezialist',
                email: 'calibration@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
<p>
Kalibrierung im Gange. Erste Tests zeigen, dass das Gerät mit einer Abweichung von 2 mm über eine Entfernung von 20 m misst. Wir werden anpassen und neu kalibrieren.
</p>
<p>
Voraussichtlicher Abschluss: 16. Dezember 2024.
<a href="/cases">Kalibrierungsstandards ansehen</a>
</p>
`,
        },
        {
            author: {
                name: 'Technischer Support',
                email: 'technical@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
<p>
Kalibrierungsanfrage erhalten. Ihr PD-S Gerät wurde für den 14. Dezember in den Kalibrierungsplan aufgenommen. Bitte liefern Sie das Gerät bis zum 13. Dezember an unser Kalibrierungszentrum.
</p>
<p>
Möchten Sie während der Kalibrierungszeit ein vorübergehendes Ersatzgerät?
</p>
`,
        },
    ],
};

const MOCK_TICKET_4_DE: Tickets.Model.Ticket = {
    id: 'EL-465-920-675',
    createdAt: '2024-12-10T10:00:00',
    updatedAt: '2024-12-12T16:00:00',
    topic: 'THEFT_REPORT',
    type: 'URGENT',
    status: 'OPEN',
    properties: [
        {
            id: 'description',
            value: `
<p>
Diebstahlmeldung für SFC 22-A Akku-Bohrschrauber. Das Werkzeug wurde am 9. Dezember 2024 von einer gesicherten Baustelle gestohlen. Polizeibericht wurde erstattet.
</p>
<p>
Werkzeugdetails: SFC 22-A, Seriennummer: 678901, Fleet Management Vertrag: FM-2023-4567
<a href="/cases">Versicherungsanspruchsprozess ansehen</a>
</p>
            `,
        },
        {
            id: 'address',
            value: '321 Projektstandort, Gebäude C',
        },
        {
            id: 'contact',
            value: 'David Site, d.site@construction.com',
        },
    ],
};

const MOCK_TICKET_5_DE: Tickets.Model.Ticket = {
    id: 'EL-465-920-674',
    createdAt: '2024-12-10T10:00:00',
    updatedAt: '2024-12-12T16:00:00',
    topic: 'SOFTWARE_SUPPORT',
    type: 'STANDARD',
    status: 'OPEN',
    properties: [
        {
            id: 'description',
            value: `
Problem mit der Lizenzaktivierung von PROFIS Engineering Suite. Nach dem kürzlichen Update auf Version 5.2 zeigt die Software "Lizenz abgelaufen" an, obwohl das Abonnement bis Juni 2025 gültig ist.

Schritte zur Reproduktion:
1. Starten Sie PROFIS Engineering Suite v5.2
2. Klicken Sie auf das Modul Ankerdesign
3. Fehlermeldung erscheint: "Lizenz abgelaufen oder nicht gefunden"

Abonnement-ID: PRO-SUB-789012
            `,
        },
        {
            id: 'address',
            value: '567 Ingenieurbüro, Suite 400',
        },
        {
            id: 'contact',
            value: 'Emily Ingenieur, e.ingenieur@design.com',
        },
    ],
    comments: [
        {
            author: {
                name: 'Software-Support',
                email: 'software@support.com',
            },
            date: '2024-12-12T12:00:00',
            content: `
Wir haben das Problem mit Ihrer PROFIS Engineering Suite-Lizenz identifiziert. Es scheint eine Diskrepanz zwischen Ihrer Hardware-ID und dem Lizenzaktivierungsserver nach dem kürzlichen Update zu geben.

Bitte führen Sie die folgenden Schritte aus, um das Problem zu beheben:
1. Öffnen Sie den PROFIS License Manager
2. Wählen Sie "Lizenz reparieren"
3. Geben Sie Ihre Abonnement-ID ein: PRO-SUB-789012
4. Starten Sie die Anwendung neu

Lassen Sie uns wissen, wenn Sie weitere Unterstützung benötigen.
`,
        },
    ],
    attachments: [
        {
            name: 'Fehler_Screenshot.pdf',
            url: 'https://example.com/attachment.pdf',
            size: 1024,
            author: {
                name: 'Emily Ingenieur',
                email: 'e.ingenieur@design.com',
            },
            date: '2024-12-12T12:00:00',
            ariaLabel: 'Fehler_Screenshot.pdf herunterladen',
        },
    ],
};

const generateRandomTicketsPL = (): Tickets.Model.Ticket[] => {
    return Array.from({ length: 100 }, (_, index) => {
        const ticketType = ['URGENT', 'STANDARD', 'LOW_PRIORITY'][Math.floor(Math.random() * 3)] as string;
        const status = ['OPEN', 'CLOSED', 'IN_PROGRESS'][Math.floor(Math.random() * 3)] as Tickets.Model.TicketStatus;
        const topic = [
            'TOOL_REPAIR',
            'FLEET_EXCHANGE',
            'CALIBRATION',
            'THEFT_REPORT',
            'SOFTWARE_SUPPORT',
            'RENTAL_REQUEST',
            'TRAINING_REQUEST',
        ][Math.floor(Math.random() * 7)] as string;

        return {
            id: `EL-465-920-${573 - index}`,
            createdAt: new Date(2024, 11, Math.floor(Math.random() * 31) + 1).toISOString(),
            updatedAt: new Date(2024, 11, Math.floor(Math.random() * 31) + 1).toISOString(),
            topic,
            type: ticketType,
            status,
            properties: [
                {
                    id: 'description',
                    value: `<p>${
                        [
                            'Naprawa narzędzia',
                            'Zarządzanie flotą',
                            'Kalibracja',
                            'Zgłoszenie kradzieży',
                            'Problem z oprogramowaniem',
                            'Prośba o wynajem',
                            'Prośba o szkolenie',
                        ][Math.floor(Math.random() * 7)]
                    }</p>`,
                },
                {
                    id: 'address',
                    value: `${Math.floor(Math.random() * 1000)} Plac Budowy`,
                },
                {
                    id: 'contact',
                    value: 'Jan Kowalski, 555-123-4567',
                },
            ],
            comments:
                Math.random() > 0.5
                    ? [
                          {
                              author: {
                                  name: 'Agent Wsparcia',
                                  email: 'wsparcie@example.com',
                              },
                              date: new Date().toISOString(),
                              content: 'Przykładowy komentarz',
                          },
                      ]
                    : [],
            attachments:
                Math.random() > 0.7
                    ? [
                          {
                              name: 'dokument.pdf',
                              url: 'https://example.com/doc.pdf',
                              size: 1024,
                              author: {
                                  name: 'Użytkownik',
                                  email: 'uzytkownik@example.com',
                              },
                              date: new Date().toISOString(),
                              ariaLabel: 'Pobierz dokument',
                          },
                      ]
                    : [],
        };
    });
};

const generateRandomTicketsDE = (): Tickets.Model.Ticket[] => {
    return Array.from({ length: 100 }, (_, index) => {
        const ticketType = ['URGENT', 'STANDARD', 'LOW_PRIORITY'][Math.floor(Math.random() * 3)] as string;
        const status = ['OPEN', 'CLOSED', 'IN_PROGRESS'][Math.floor(Math.random() * 3)] as Tickets.Model.TicketStatus;
        const topic = [
            'TOOL_REPAIR',
            'FLEET_EXCHANGE',
            'CALIBRATION',
            'THEFT_REPORT',
            'SOFTWARE_SUPPORT',
            'RENTAL_REQUEST',
            'TRAINING_REQUEST',
        ][Math.floor(Math.random() * 7)] as string;

        return {
            id: `EL-465-920-${573 - index}`,
            createdAt: new Date(2024, 11, Math.floor(Math.random() * 31) + 1).toISOString(),
            updatedAt: new Date(2024, 11, Math.floor(Math.random() * 31) + 1).toISOString(),
            topic,
            type: ticketType,
            status,
            properties: [
                {
                    id: 'description',
                    value: `<p>${
                        [
                            'Werkzeugreparatur',
                            'Flottenmanagement',
                            'Kalibrierung',
                            'Diebstahlbericht',
                            'Softwareproblem',
                            'Mietanfrage',
                            'Schulungsanfrage',
                        ][Math.floor(Math.random() * 7)]
                    }</p>`,
                },
                {
                    id: 'address',
                    value: `${Math.floor(Math.random() * 1000)} Baustelle`,
                },
                {
                    id: 'contact',
                    value: 'Johannes Schmidt, 555-123-4567',
                },
            ],
            comments:
                Math.random() > 0.5
                    ? [
                          {
                              author: {
                                  name: 'Support-Mitarbeiter',
                                  email: 'support@example.com',
                              },
                              date: new Date().toISOString(),
                              content: 'Beispielkommentar',
                          },
                      ]
                    : [],
            attachments:
                Math.random() > 0.7
                    ? [
                          {
                              name: 'dokument.pdf',
                              url: 'https://example.com/doc.pdf',
                              size: 1024,
                              author: {
                                  name: 'Benutzer',
                                  email: 'benutzer@example.com',
                              },
                              date: new Date().toISOString(),
                              ariaLabel: 'Dokument herunterladen',
                          },
                      ]
                    : [],
        };
    });
};

const generateRandomTicketsEN = (): Tickets.Model.Ticket[] => {
    return Array.from({ length: 100 }, (_, index) => {
        const ticketType = ['URGENT', 'STANDARD', 'LOW_PRIORITY'][Math.floor(Math.random() * 3)] as string;
        const status = ['OPEN', 'CLOSED', 'IN_PROGRESS'][Math.floor(Math.random() * 3)] as Tickets.Model.TicketStatus;
        const topic = [
            'TOOL_REPAIR',
            'FLEET_EXCHANGE',
            'CALIBRATION',
            'THEFT_REPORT',
            'SOFTWARE_SUPPORT',
            'RENTAL_REQUEST',
            'TRAINING_REQUEST',
        ][Math.floor(Math.random() * 7)] as string;

        return {
            id: `EL-465-920-${573 - index}`,
            createdAt: new Date(2024, 11, Math.floor(Math.random() * 31) + 1).toISOString(),
            updatedAt: new Date(2024, 11, Math.floor(Math.random() * 31) + 1).toISOString(),
            topic,
            type: ticketType,
            status,
            properties: [
                {
                    id: 'description',
                    value: `<p>${
                        [
                            'Tool repair',
                            'Fleet management',
                            'Calibration',
                            'Theft report',
                            'Software issue',
                            'Rental request',
                            'Training',
                        ][Math.floor(Math.random() * 7)]
                    }</p>`,
                },
                {
                    id: 'address',
                    value: `${Math.floor(Math.random() * 1000)} Construction Site`,
                },
                {
                    id: 'contact',
                    value: 'John Doe, 555-123-4567',
                },
            ],
            comments:
                Math.random() > 0.5
                    ? [
                          {
                              author: {
                                  name: 'Support Agent',
                                  email: 'support@example.com',
                              },
                              date: new Date().toISOString(),
                              content: 'Sample comment',
                          },
                      ]
                    : [],
            attachments:
                Math.random() > 0.7
                    ? [
                          {
                              name: 'document.pdf',
                              url: 'https://example.com/doc.pdf',
                              size: 1024,
                              author: {
                                  name: 'User',
                                  email: 'user@example.com',
                              },
                              date: new Date().toISOString(),
                              ariaLabel: 'Download document',
                          },
                      ]
                    : [],
        };
    });
};

const CUSTOM_TICKETS_EN = [MOCK_TICKET_1_EN, MOCK_TICKET_2_EN, MOCK_TICKET_3_EN, MOCK_TICKET_4_EN, MOCK_TICKET_5_EN];
const CUSTOM_TICKETS_PL = [MOCK_TICKET_1_PL, MOCK_TICKET_2_PL, MOCK_TICKET_3_PL, MOCK_TICKET_4_PL, MOCK_TICKET_5_PL];
const CUSTOM_TICKETS_DE = [MOCK_TICKET_1_DE, MOCK_TICKET_2_DE, MOCK_TICKET_3_DE, MOCK_TICKET_4_DE, MOCK_TICKET_5_DE];

const RANDOM_TICKETS_PL = generateRandomTicketsPL();
const RANDOM_TICKETS_DE = generateRandomTicketsDE();
const RANDOM_TICKETS_EN = generateRandomTicketsEN();

export const MOCK_TICKETS_PL = [...CUSTOM_TICKETS_PL, ...RANDOM_TICKETS_PL];
export const MOCK_TICKETS_DE = [...CUSTOM_TICKETS_DE, ...RANDOM_TICKETS_DE];
export const MOCK_TICKETS_EN = [...CUSTOM_TICKETS_EN, ...RANDOM_TICKETS_EN];
