import { CMS } from '@o2s/framework/modules';

const MOCK_FAQ_LIST_COMPONENT_EN: CMS.Model.FaqComponent.FaqComponent = {
    id: 'faq-1',
    title: 'FAQ',
    items: [
        {
            title: 'How do I manage my HyPro devices?',
            content:
                'You can view and manage all your HyPro devices through our online self-service portal. Navigate to "Device Management" where you will find your devices categorized as purchased devices or fleet service devices. From there, you can request repairs, track repair status, or report lost devices.',
        },
        {
            title: 'How do I report a stolen or lost tool?',
            content: `
### Reporting Stolen or Lost Fleet Devices

If your fleet device has been stolen or lost, follow these steps:
1. Log in to your HyPro account
2. Navigate to "Device Management"
3. Select "Report theft/loss"
4. Complete the form with all relevant information
5. Submit your report

Our team will process your report and contact you with further instructions within 1-2 business days.
`,
        },
        {
            title: 'How can I request a device repair?',
            content: `
## Device Repair Process

To request a repair for your HyPro device:

1. Log in to your HyPro account
2. Go to "Device Management" > "Request Repair"
3. Select the device that needs repair
4. Describe the issue with the device
5. Indicate if you need a replacement device during repair
6. Select delivery address
7. Submit your repair request

You can track the status of your repair by visiting "Track Repairs" in the Device Management section.
`,
        },
        {
            title: 'What mobile applications does HyPro offer?',
            content:
                'HyPro offers several mobile applications to help manage your tools and projects more efficiently. These include the HyPro Service for tool information and service requests, the HyPro Manager for asset management, and various technical applications for specific construction tasks like anchor design and firestop documentation. All applications can be downloaded from the App Store or Google Play Store.',
        },
        {
            title: 'How do I change my fleet service billing location?',
            content:
                'If your company is expanding and you need to change the cost center for your fleet devices, you can easily update this information. Go to "Device Management" section, select "Change cost center location", choose the devices you want to reassign, and select the new cost center. This helps you manage costs across different project sites more effectively.',
        },
        {
            title: 'How can I track my equipment repair status?',
            content:
                'After requesting a repair, you can track its status through our online portal. Go to "Device Management" and select "Track Repair Status". You\'ll see a visual dashboard showing where your device is in the repair process, from pickup to delivery of the repaired tool. This feature allows you to plan your work accordingly while waiting for your tool to be returned.',
        },
    ],
    banner: {
        title: 'Still have questions?',
        description: 'If you have further questions or need assistance, our customer service team is here to help!',
        buttons: [{ label: 'Contact us', url: '/contact' }],
    },
};

const MOCK_FAQ_LIST_COMPONENT_DE: CMS.Model.FaqComponent.FaqComponent = {
    id: 'faq-1',
    title: 'FAQ',
    items: [
        {
            title: 'Wie verwalte ich meine HyPro-Geräte?',
            content:
                'Sie können alle Ihre HyPro-Geräte über unser Online-Selbstbedienungsportal einsehen und verwalten. Navigieren Sie zu "Geräteverwaltung", wo Sie Ihre Geräte kategorisiert als gekaufte Geräte oder Flottendienstgeräte finden. Von dort aus können Sie Reparaturen anfordern, den Reparaturstatus verfolgen oder verlorene Geräte melden.',
        },
        {
            title: 'Wie melde ich ein gestohlenes oder verlorenes Werkzeug?',
            content: `
### Meldung gestohlener oder verlorener Flottengeräte

Wenn Ihr Flottengerät gestohlen wurde oder verloren gegangen ist, folgen Sie diesen Schritten:
1. Melden Sie sich bei Ihrem HyPro-Konto an
2. Navigieren Sie zu "Geräteverwaltung"
3. Wählen Sie "Diebstahl/Verlust melden"
4. Füllen Sie das Formular mit allen relevanten Informationen aus
5. Reichen Sie Ihren Bericht ein

Unser Team wird Ihren Bericht bearbeiten und Sie innerhalb von 1-2 Werktagen mit weiteren Anweisungen kontaktieren.
`,
        },
        {
            title: 'Wie kann ich eine Gerätereparatur anfordern?',
            content: `
## Gerätereparaturprozess

Um eine Reparatur für Ihr HyPro-Gerät anzufordern:

1. Melden Sie sich bei Ihrem HyPro-Konto an
2. Gehen Sie zu "Geräteverwaltung" > "Reparatur anfordern"
3. Wählen Sie das Gerät aus, das repariert werden muss
4. Beschreiben Sie das Problem mit dem Gerät
5. Geben Sie an, ob Sie während der Reparatur ein Ersatzgerät benötigen
6. Wählen Sie die Lieferadresse
7. Reichen Sie Ihre Reparaturanfrage ein

Sie können den Status Ihrer Reparatur verfolgen, indem Sie "Reparaturen verfolgen" im Bereich Geräteverwaltung besuchen.
`,
        },
        {
            title: 'Welche mobilen Anwendungen bietet HyPro an?',
            content:
                'HyPro bietet mehrere mobile Anwendungen, um Ihre Werkzeuge und Projekte effizienter zu verwalten. Dazu gehören der HyPro Service für Werkzeuginformationen und Serviceanfragen, der HyPro Manager für die Anlagenverwaltung und verschiedene technische Anwendungen für spezifische Bauaufgaben wie Ankerdesign und Brandschutzdokumentation. Alle Anwendungen können aus dem App Store oder Google Play Store heruntergeladen werden.',
        },
        {
            title: 'Wie ändere ich meinen Flottendienst-Abrechnungsstandort?',
            content:
                'Wenn Ihr Unternehmen expandiert und Sie die Kostenstelle für Ihre Flottengeräte ändern müssen, können Sie diese Informationen einfach aktualisieren. Gehen Sie zum Bereich "Geräteverwaltung", wählen Sie "Kostenstellenstandort ändern", wählen Sie die Geräte aus, die Sie neu zuordnen möchten, und wählen Sie die neue Kostenstelle. Dies hilft Ihnen, Kosten über verschiedene Projektstandorte hinweg effektiver zu verwalten.',
        },
        {
            title: 'Wie kann ich den Reparaturstatus meiner Ausrüstung verfolgen?',
            content:
                'Nach der Anforderung einer Reparatur können Sie deren Status über unser Online-Portal verfolgen. Gehen Sie zu "Geräteverwaltung" und wählen Sie "Reparaturstatus verfolgen". Sie sehen ein visuelles Dashboard, das zeigt, wo sich Ihr Gerät im Reparaturprozess befindet, von der Abholung bis zur Lieferung des reparierten Werkzeugs. Diese Funktion ermöglicht es Ihnen, Ihre Arbeit entsprechend zu planen, während Sie auf die Rückgabe Ihres Werkzeugs warten.',
        },
    ],
    banner: {
        title: 'Noch Fragen?',
        description:
            'Wenn Sie weitere Fragen haben oder Hilfe benötigen, steht Ihnen unser Kundenservice-Team zur Verfügung!',
        buttons: [{ label: 'Kontaktieren Sie uns', url: '/contact' }],
    },
};

const MOCK_FAQ_LIST_COMPONENT_PL: CMS.Model.FaqComponent.FaqComponent = {
    id: 'faq-1',
    title: 'FAQ',
    items: [
        {
            title: 'Jak zarządzać moimi urządzeniami HyPro?',
            content:
                'Możesz przeglądać i zarządzać wszystkimi swoimi urządzeniami HyPro za pośrednictwem naszego portalu samoobsługowego online. Przejdź do "Zarządzania urządzeniami", gdzie znajdziesz swoje urządzenia skategoryzowane jako zakupione urządzenia lub urządzenia flotowe. Stamtąd możesz zlecić naprawy, śledzić status naprawy lub zgłosić zgubione urządzenia.',
        },
        {
            title: 'Jak zgłosić kradzież lub zgubienie narzędzia?',
            content: `
### Zgłaszanie skradzionych lub zgubionych urządzeń flotowych

Jeśli Twoje urządzenie flotowe zostało skradzione lub zgubione, wykonaj następujące kroki:
1. Zaloguj się na swoje konto HyPro
2. Przejdź do "Zarządzania urządzeniami"
3. Wybierz "Zgłoś kradzież/zgubienie"
4. Wypełnij formularz ze wszystkimi istotnymi informacjami
5. Prześlij swoje zgłoszenie

Nasz zespół przetworzy Twoje zgłoszenie i skontaktuje się z Tobą z dalszymi instrukcjami w ciągu 1-2 dni roboczych.
`,
        },
        {
            title: 'Jak mogę zlecić naprawę urządzenia?',
            content: `
## Proces naprawy urządzenia

Aby zlecić naprawę swojego urządzenia HyPro:

1. Zaloguj się na swoje konto HyPro
2. Przejdź do "Zarządzanie urządzeniami" > "Zlecenie naprawy"
3. Wybierz urządzenie wymagające naprawy
4. Opisz problem z urządzeniem
5. Wskaż, czy potrzebujesz urządzenia zastępczego na czas naprawy
6. Wybierz adres dostawy
7. Prześlij swoje zlecenie naprawy

Możesz śledzić status swojej naprawy, odwiedzając "Śledź naprawy" w sekcji Zarządzanie urządzeniami.
`,
        },
        {
            title: 'Jakie aplikacje mobilne oferuje HyPro?',
            content:
                'HyPro oferuje kilka aplikacji mobilnych, które pomagają efektywniej zarządzać narzędziami i projektami. Obejmują one HyPro Service do informacji o narzędziach i zgłoszeń serwisowych, HyPro Manager do zarządzania zasobami oraz różne aplikacje techniczne do konkretnych zadań budowlanych, takich jak projektowanie kotew i dokumentacja przeciwpożarowa. Wszystkie aplikacje można pobrać z App Store lub Google Play Store.',
        },
        {
            title: 'Jak zmienić lokalizację rozliczeniową usługi flotowej?',
            content:
                'Jeśli Twoja firma się rozwija i musisz zmienić centrum kosztów dla swoich urządzeń flotowych, możesz łatwo zaktualizować te informacje. Przejdź do sekcji "Zarządzanie urządzeniami", wybierz "Zmień lokalizację centrum kosztów", wybierz urządzenia, które chcesz przypisać na nowo, i wybierz nowe centrum kosztów. Pomaga to skuteczniej zarządzać kosztami w różnych lokalizacjach projektów.',
        },
        {
            title: 'Jak mogę śledzić status naprawy mojego sprzętu?',
            content:
                'Po zleceniu naprawy możesz śledzić jej status za pośrednictwem naszego portalu online. Przejdź do "Zarządzanie urządzeniami" i wybierz "Śledź status naprawy". Zobaczysz wizualny pulpit pokazujący, gdzie znajduje się Twoje urządzenie w procesie naprawy, od odbioru do dostawy naprawionego narzędzia. Ta funkcja pozwala odpowiednio planować pracę podczas oczekiwania na zwrot narzędzia.',
        },
    ],
    banner: {
        title: 'Masz jeszcze pytania?',
        description:
            'Jeśli masz dodatkowe pytania lub potrzebujesz pomocy, nasz zespół obsługi klienta jest tutaj, aby pomóc!',
        buttons: [{ label: 'Skontaktuj się z nami', url: '/contact' }],
    },
};

export const mapFaqComponent = (locale: string): CMS.Model.FaqComponent.FaqComponent => {
    switch (locale) {
        case 'de':
            return MOCK_FAQ_LIST_COMPONENT_DE;
        case 'pl':
            return MOCK_FAQ_LIST_COMPONENT_PL;
        default:
            return MOCK_FAQ_LIST_COMPONENT_EN;
    }
};
