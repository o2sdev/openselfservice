import { Notifications } from '@o2s/framework/modules';

import * as CustomNotifications from './notifications.model';

const dateToday = new Date();
const dateYesterday = new Date();
dateYesterday.setDate(dateYesterday.getDate() - 1);

const MOCK_NOTIFICATION_1_EN: CustomNotifications.Notification = {
    id: 'NOT-123-456',
    title: 'TE 70-ATC Tool Repair Completed',
    content:
        'Your TE 70-ATC/AVR device has been repaired and is ready for pickup. Please visit <a href="/cases/EL-465-920-678">ticket details</a> to see more information.',
    type: 'TICKET_UPDATE',
    priority: 'HIGH',
    status: 'UNVIEWED',
    createdAt: dateToday.toISOString(),
    updatedAt: dateToday.toISOString(),
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_2_EN: CustomNotifications.Notification = {
    id: 'NOT-123-457',
    title: 'Scheduled Fleet Equipment Exchange',
    content:
        'Your fleet exchange has been successfully completed. All 5 tools have been replaced with newer models. Visit <a href="/cases/EL-465-920-677">ticket details</a> for the exchange documentation.',
    type: 'GENERAL_NOTIFICATION',
    priority: 'MEDIUM',
    status: 'UNVIEWED',
    createdAt: dateYesterday.toISOString(),
    updatedAt: dateYesterday.toISOString(),
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_3_EN: CustomNotifications.Notification = {
    id: 'NOT-123-458',
    title: 'PD-S Laser Measurement Calibration Update',
    content:
        'Your calibration request for PD-S laser measurement device is in progress. Estimated completion: December 16th. Check <a href="/cases/EL-465-920-676">ticket details</a> for more information.',
    type: 'GENERAL_NOTIFICATION',
    priority: 'LOW',
    status: 'READ',
    createdAt: '2024-03-17T15:30:00Z',
    updatedAt: '2024-03-17T15:30:00Z',
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_4_EN: CustomNotifications.Notification = {
    id: 'NOT-123-459',
    title: 'Fleet Tool Theft Report Received',
    content:
        'We have received your theft report for the SFC 22-A device. The case is being processed. Visit <a href="/cases/EL-465-920-675">ticket details</a> for case updates.',
    type: 'GENERAL_NOTIFICATION',
    priority: 'CRITICAL',
    status: 'UNVIEWED',
    createdAt: '2024-03-16T10:00:00Z',
    updatedAt: '2024-03-16T10:00:00Z',
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_5_EN: CustomNotifications.Notification = {
    id: 'NOT-123-460',
    title: 'PROFIS License Issue Resolution',
    content:
        'We\'ve identified the issue with your PROFIS Engineering Suite license. Please follow the steps provided in <a href="/cases/EL-465-920-674">ticket details</a> to resolve the license activation problem.',
    type: 'GENERAL_NOTIFICATION',
    priority: 'HIGH',
    status: 'READ',
    createdAt: '2024-03-15T08:30:00Z',
    updatedAt: '2024-03-15T14:20:00Z',
    someNewField: 'someNewField',
};

const enNotificationTypes = [
    {
        title: `Fleet Recycling Report for Q${Math.floor(Math.random() * 4) + 1}`,
        content:
            'Your fleet recycling report is now available. See how you and PowerPro are contributing to environmental sustainability.',
    },
    {
        title: 'New Fleet Labels Available',
        content: 'Your ordered additional fleet labels are now available for pickup at your PowerPro Store.',
    },
    {
        title: 'Software Update Available',
        content:
            'A new version of PROFIS Engineering Suite is now available. Update to access new features and improvements.',
    },
    {
        title: 'Cost Center Change Confirmation',
        content: 'We confirm the cost center change for your fleet devices as per your request.',
    },
    {
        title: 'Regular Equipment Maintenance Due',
        content:
            'The regular maintenance deadline for your equipment is approaching. Schedule a service visit to maintain warranty coverage.',
    },
    {
        title: 'Rental Period Ending Soon',
        content: 'Reminder: your DD 250 rental period ends in 5 days. Extend your rental or schedule a return.',
    },
    {
        title: 'New Service Available',
        content:
            'We have introduced a new diamond drill bit regeneration and extension service. Check our website for details.',
    },
];

const MOCK_NOTIFICATION_1_PL: CustomNotifications.Notification = {
    id: 'NOT-123-456',
    title: 'Naprawa narzędzia TE 70-ATC zakończona',
    content:
        'Twoje urządzenie TE 70-ATC/AVR zostało naprawione i jest gotowe do odbioru. Odwiedź <a href="/zgloszenia/EL-465-920-678">szczegóły zgłoszenia</a>, aby uzyskać więcej informacji.',
    type: 'TICKET_UPDATE',
    priority: 'HIGH',
    status: 'UNVIEWED',
    createdAt: dateToday.toISOString(),
    updatedAt: dateToday.toISOString(),
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_2_PL: CustomNotifications.Notification = {
    id: 'NOT-123-457',
    title: 'Zaplanowana wymiana sprzętu flotowego',
    content:
        'Wymiana floty została pomyślnie zakończona. Wszystkie 5 narzędzi zostało zastąpionych nowszymi modelami. Odwiedź <a href="/zgloszenia/EL-465-920-677">szczegóły zgłoszenia</a>, aby zobaczyć dokumentację wymiany.',
    type: 'GENERAL_NOTIFICATION',
    priority: 'MEDIUM',
    status: 'UNVIEWED',
    createdAt: dateYesterday.toISOString(),
    updatedAt: dateYesterday.toISOString(),
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_3_PL: CustomNotifications.Notification = {
    id: 'NOT-123-458',
    title: 'Aktualizacja kalibracji lasera pomiarowego PD-S',
    content:
        'Twoje żądanie kalibracji urządzenia pomiarowego PD-S jest w trakcie realizacji. Szacowany czas zakończenia: 16 grudnia. Sprawdź <a href="/zgloszenia/EL-465-920-676">szczegóły zgłoszenia</a>, aby uzyskać więcej informacji.',
    type: 'GENERAL_NOTIFICATION',
    priority: 'LOW',
    status: 'READ',
    createdAt: '2024-03-17T15:30:00Z',
    updatedAt: '2024-03-17T15:30:00Z',
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_4_PL: CustomNotifications.Notification = {
    id: 'NOT-123-459',
    title: 'Zgłoszenie kradzieży narzędzia flotowego przyjęte',
    content:
        'Otrzymaliśmy Twoje zgłoszenie kradzieży urządzenia SFC 22-A. Sprawa jest w trakcie przetwarzania. Odwiedź <a href="/zgloszenia/EL-465-920-675">szczegóły zgłoszenia</a>, aby sprawdzić aktualizacje sprawy.',
    type: 'GENERAL_NOTIFICATION',
    priority: 'CRITICAL',
    status: 'UNVIEWED',
    createdAt: '2024-03-16T10:00:00Z',
    updatedAt: '2024-03-16T10:00:00Z',
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_5_PL: CustomNotifications.Notification = {
    id: 'NOT-123-460',
    title: 'Rozwiązanie problemu z licencją PROFIS',
    content:
        'Zidentyfikowaliśmy problem z Twoją licencją PROFIS Engineering Suite. Wykonaj kroki opisane w <a href="/zgloszenia/EL-465-920-674">szczegółach zgłoszenia</a>, aby rozwiązać problem z aktywacją licencji.',
    type: 'GENERAL_NOTIFICATION',
    priority: 'HIGH',
    status: 'READ',
    createdAt: '2024-03-15T08:30:00Z',
    updatedAt: '2024-03-15T14:20:00Z',
    someNewField: 'someNewField',
};

const plNotificationTypes = [
    {
        title: `Raport recyklingu floty za Q${Math.floor(Math.random() * 4) + 1}`,
        content:
            'Twój raport recyklingu floty jest już dostępny. Zobacz, jak Ty i PowerPro przyczyniacie się do zrównoważonego rozwoju środowiska.',
    },
    {
        title: 'Nowe etykiety floty dostępne',
        content: 'Zamówione dodatkowe etykiety floty są teraz dostępne do odbioru w Twoim sklepie PowerPro.',
    },
    {
        title: 'Dostępna aktualizacja oprogramowania',
        content:
            'Nowa wersja PROFIS Engineering Suite jest już dostępna. Zaktualizuj, aby uzyskać dostęp do nowych funkcji i ulepszeń.',
    },
    {
        title: 'Potwierdzenie zmiany centrum kosztów',
        content: 'Potwierdzamy zmianę centrum kosztów dla urządzeń flotowych zgodnie z Twoim żądaniem.',
    },
    {
        title: 'Termin regularnej konserwacji sprzętu',
        content:
            'Zbliża się termin regularnej konserwacji Twojego sprzętu. Zaplanuj wizytę serwisową, aby zachować gwarancję.',
    },
    {
        title: 'Okres wynajmu wkrótce się kończy',
        content: 'Przypomnienie: Twój okres wynajmu DD 250 kończy się za 5 dni. Przedłuż wynajem lub zaplanuj zwrot.',
    },
    {
        title: 'Nowa usługa dostępna',
        content:
            'Wprowadziliśmy nową usługę regeneracji i przedłużania wierteł diamentowych. Sprawdź naszą stronę internetową, aby uzyskać szczegóły.',
    },
];

const MOCK_NOTIFICATION_1_DE: CustomNotifications.Notification = {
    id: 'NOT-123-456',
    title: 'TE 70-ATC Werkzeugreparatur abgeschlossen',
    content:
        'Ihr TE 70-ATC/AVR Gerät wurde repariert und ist zur Abholung bereit. Besuchen Sie <a href="/faelle/EL-465-920-678">Ticket-Details</a> für weitere Informationen.',
    type: 'TICKET_UPDATE',
    priority: 'HIGH',
    status: 'UNVIEWED',
    createdAt: dateToday.toISOString(),
    updatedAt: dateToday.toISOString(),
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_2_DE: CustomNotifications.Notification = {
    id: 'NOT-123-457',
    title: 'Geplanter Flottengeräteaustausch',
    content:
        'Ihr Flottenaustausch wurde erfolgreich abgeschlossen. Alle 5 Werkzeuge wurden durch neuere Modelle ersetzt. Besuchen Sie <a href="/faelle/EL-465-920-677">Ticket-Details</a> für die Austauschdokumentation.',
    type: 'GENERAL_NOTIFICATION',
    priority: 'MEDIUM',
    status: 'UNVIEWED',
    createdAt: dateYesterday.toISOString(),
    updatedAt: dateYesterday.toISOString(),
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_3_DE: CustomNotifications.Notification = {
    id: 'NOT-123-458',
    title: 'PD-S Lasermessgerät-Kalibrierungsupdate',
    content:
        'Ihre Kalibrierungsanfrage für das PD-S Lasermessgerät ist in Bearbeitung. Voraussichtliche Fertigstellung: 16. Dezember. Überprüfen Sie <a href="/faelle/EL-465-920-676">Ticket-Details</a> für weitere Informationen.',
    type: 'GENERAL_NOTIFICATION',
    priority: 'LOW',
    status: 'READ',
    createdAt: '2024-03-17T15:30:00Z',
    updatedAt: '2024-03-17T15:30:00Z',
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_4_DE: CustomNotifications.Notification = {
    id: 'NOT-123-459',
    title: 'Flottenwerkzeug-Diebstahlmeldung eingegangen',
    content:
        'Wir haben Ihre Diebstahlmeldung für das SFC 22-A Gerät erhalten. Der Fall wird bearbeitet. Besuchen Sie <a href="/faelle/EL-465-920-675">Ticket-Details</a> für Fallaktualisierungen.',
    type: 'GENERAL_NOTIFICATION',
    priority: 'CRITICAL',
    status: 'UNVIEWED',
    createdAt: '2024-03-16T10:00:00Z',
    updatedAt: '2024-03-16T10:00:00Z',
    someNewField: 'someNewField',
};

const MOCK_NOTIFICATION_5_DE: CustomNotifications.Notification = {
    id: 'NOT-123-460',
    title: 'PROFIS Lizenzproblem-Lösung',
    content:
        'Wir haben das Problem mit Ihrer PROFIS Engineering Suite Lizenz identifiziert. Bitte folgen Sie den Schritten in <a href="/faelle/EL-465-920-674">Ticket-Details</a>, um das Lizenzaktivierungsproblem zu lösen.',
    type: 'GENERAL_NOTIFICATION',
    priority: 'HIGH',
    status: 'READ',
    createdAt: '2024-03-15T08:30:00Z',
    updatedAt: '2024-03-15T14:20:00Z',
    someNewField: 'someNewField',
};

const deNotificationTypes = [
    {
        title: `Flottenrecycling-Bericht für Q${Math.floor(Math.random() * 4) + 1}`,
        content:
            'Ihr Flottenrecycling-Bericht ist jetzt verfügbar. Sehen Sie, wie Sie und PowerPro zur Umweltnachhaltigkeit beitragen.',
    },
    {
        title: 'Neue Flottenetiketten verfügbar',
        content:
            'Ihre bestellten zusätzlichen Flottenetiketten sind jetzt zur Abholung in Ihrem PowerPro-Shop verfügbar.',
    },
    {
        title: 'Software-Update verfügbar',
        content:
            'Eine neue Version von PROFIS Engineering Suite ist jetzt verfügbar. Aktualisieren Sie, um Zugriff auf neue Funktionen und Verbesserungen zu erhalten.',
    },
    {
        title: 'Bestätigung der Kostenstellenänderung',
        content: 'Wir bestätigen die Änderung der Kostenstelle für Ihre Flottengeräte gemäß Ihrer Anfrage.',
    },
    {
        title: 'Regelmäßige Gerätewartung fällig',
        content:
            'Der Termin für die regelmäßige Wartung Ihrer Geräte nähert sich. Planen Sie einen Servicebesuch, um den Garantieschutz aufrechtzuerhalten.',
    },
    {
        title: 'Mietzeit endet bald',
        content:
            'Erinnerung: Ihre DD 250 Mietzeit endet in 5 Tagen. Verlängern Sie Ihre Miete oder planen Sie eine Rückgabe.',
    },
    {
        title: 'Neuer Service verfügbar',
        content:
            'Wir haben einen neuen Diamantbohrer-Regenerations- und Verlängerungsservice eingeführt. Besuchen Sie unsere Website für Details.',
    },
];

const RANDOM_MOCK_NOTIFICATIONS_EN: CustomNotifications.Notification[] = Array.from({ length: 100 }, (_, index) => {
    const randomType = enNotificationTypes[Math.floor(Math.random() * enNotificationTypes.length)];

    return {
        id: `NOT-123-${469 + index}`,
        title: randomType?.title || 'Default Notification Title',
        content: randomType?.content || 'Default notification content message.',
        type: `TYPE_${Math.floor(Math.random() * 1) + 1}`,
        priority: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'][
            Math.floor(Math.random() * 4)
        ] as Notifications.Model.NotificationPriority,
        status: ['UNVIEWED', 'VIEWED', 'READ'][Math.floor(Math.random() * 3)] as Notifications.Model.NotificationStatus,
        createdAt: new Date(2024, 2, Math.floor(Math.random() * 31) + 1).toISOString(),
        updatedAt: new Date(2024, 2, Math.floor(Math.random() * 31) + 1).toISOString(),
        someNewField: 'someNewField',
    };
});

const RANDOM_MOCK_NOTIFICATIONS_PL: CustomNotifications.Notification[] = Array.from({ length: 100 }, (_, index) => {
    const randomType = plNotificationTypes[Math.floor(Math.random() * plNotificationTypes.length)];

    return {
        id: `NOT-123-${469 + index}`,
        title: randomType?.title || 'Domyślny tytuł powiadomienia',
        content: randomType?.content || 'Domyślna treść powiadomienia.',
        type: `TYPE_${Math.floor(Math.random() * 1) + 1}`,
        priority: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'][
            Math.floor(Math.random() * 4)
        ] as Notifications.Model.NotificationPriority,
        status: ['UNVIEWED', 'VIEWED', 'READ'][Math.floor(Math.random() * 3)] as Notifications.Model.NotificationStatus,
        createdAt: new Date(2024, 2, Math.floor(Math.random() * 31) + 1).toISOString(),
        updatedAt: new Date(2024, 2, Math.floor(Math.random() * 31) + 1).toISOString(),
        someNewField: 'someNewField',
    };
});

const RANDOM_MOCK_NOTIFICATIONS_DE: CustomNotifications.Notification[] = Array.from({ length: 100 }, (_, index) => {
    const randomType = deNotificationTypes[Math.floor(Math.random() * deNotificationTypes.length)];

    return {
        id: `NOT-123-${469 + index}`,
        title: randomType?.title || 'Standard-Benachrichtigungstitel',
        content: randomType?.content || 'Standard-Benachrichtigungsinhalt.',
        type: `TYPE_${Math.floor(Math.random() * 1) + 1}`,
        priority: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'][
            Math.floor(Math.random() * 4)
        ] as Notifications.Model.NotificationPriority,
        status: ['UNVIEWED', 'VIEWED', 'READ'][Math.floor(Math.random() * 3)] as Notifications.Model.NotificationStatus,
        createdAt: new Date(2024, 2, Math.floor(Math.random() * 31) + 1).toISOString(),
        updatedAt: new Date(2024, 2, Math.floor(Math.random() * 31) + 1).toISOString(),
        someNewField: 'someNewField',
    };
});

export const MOCK_NOTIFICATIONS_EN = [
    MOCK_NOTIFICATION_1_EN,
    MOCK_NOTIFICATION_2_EN,
    MOCK_NOTIFICATION_3_EN,
    MOCK_NOTIFICATION_4_EN,
    MOCK_NOTIFICATION_5_EN,
    ...RANDOM_MOCK_NOTIFICATIONS_EN,
];

export const MOCK_NOTIFICATIONS_PL = [
    MOCK_NOTIFICATION_1_PL,
    MOCK_NOTIFICATION_2_PL,
    MOCK_NOTIFICATION_3_PL,
    MOCK_NOTIFICATION_4_PL,
    MOCK_NOTIFICATION_5_PL,
    ...RANDOM_MOCK_NOTIFICATIONS_PL,
];

export const MOCK_NOTIFICATIONS_DE = [
    MOCK_NOTIFICATION_1_DE,
    MOCK_NOTIFICATION_2_DE,
    MOCK_NOTIFICATION_3_DE,
    MOCK_NOTIFICATION_4_DE,
    MOCK_NOTIFICATION_5_DE,
    ...RANDOM_MOCK_NOTIFICATIONS_DE,
];
