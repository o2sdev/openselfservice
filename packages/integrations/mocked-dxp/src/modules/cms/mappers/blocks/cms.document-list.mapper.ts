import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

const MOCK_DOCUMENT_LIST_BLOCK_EN: CMS.Model.DocumentListBlock.DocumentListBlock = {
    id: 'document-list-1',
    title: 'Documents',
    description:
        'A list of documents that can be downloaded and reviewed. The content of the documents is exemplary and is not related to actual agreements made with the client.',
    documents: [
        {
            title: "Regulations for opening and maintaining bank accounts for individuals within the bank's retail banking",
            file: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/docs/example.pdf',
                alt: 'Sample document',
            },
            icon: 'FileText',
        },
        {
            title: 'Statement of acceptance of the principles collected by the insurer for the benefit of the fund',
            file: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/docs/example.pdf',
                alt: 'Sample document',
            },
            icon: 'FileText',
        },
        {
            title: 'Regulations for accepting and handling complaints',
            file: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/docs/example.pdf',
                alt: 'Sample document',
            },
            icon: 'FileText',
        },
        {
            title: 'For which period, with an interest rate of 0%, i.e., a zero rate, was the interest rate volatility adjustment made?',
            file: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/docs/example.pdf',
                alt: 'Sample document',
            },
            icon: 'FileText',
        },
    ],
};

const MOCK_DOCUMENT_LIST_BLOCK_DE: CMS.Model.DocumentListBlock.DocumentListBlock = {
    id: 'document-list-1',
    title: 'Dokumente',
    description:
        'Eine Liste von Dokumenten, die heruntergeladen und überprüft werden können. Der Inhalt der Dokumente ist beispielhaft und steht nicht im Zusammenhang mit tatsächlichen Vereinbarungen mit dem Kunden.',
    documents: [
        {
            title: 'Vorschriften für die Eröffnung und Führung von Bankkonten für Privatpersonen im Rahmen des Retail-Bankings der Bank',
            file: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/docs/example.pdf',
                alt: 'Beispieldokument',
            },
            icon: 'FileText',
        },
        {
            title: 'Erklärung zur Annahme der vom Versicherer zugunsten des Fonds erhobenen Grundsätze',
            file: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/docs/example.pdf',
                alt: 'Beispieldokument',
            },
            icon: 'FileText',
        },
        {
            title: 'Vorschriften für die Annahme und Bearbeitung von Beschwerden',
            file: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/docs/example.pdf',
                alt: 'Beispieldokument',
            },
            icon: 'FileText',
        },
        {
            title: 'Für welchen Zeitraum wurde bei einem Zinssatz von 0%, also einem Nullsatz, die Zinsvolatilitätsanpassung vorgenommen?',
            file: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/docs/example.pdf',
                alt: 'Beispieldokument',
            },
            icon: 'FileText',
        },
    ],
};

const MOCK_DOCUMENT_LIST_BLOCK_PL: CMS.Model.DocumentListBlock.DocumentListBlock = {
    id: 'document-list-1',
    title: 'Dokumenty',
    description:
        'Lista dokumentów, które można pobrać i zapoznać się z nimi. Treść dokumentów jest przykładowa i nie ma związku z rzeczywistymi umowami zawartymi z klientem.',
    documents: [
        {
            title: 'Regulamin otwierania i prowadzenia bankowych rachunków dla osób fizycznych w ramach bankowości detalicznej Banku',
            file: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/docs/example.pdf',
                alt: 'Dokument przykładowy',
            },
            icon: 'FileText',
        },
        {
            title: 'Oświadczenie o przyjęciu zasad, które pobiera ubezpieczyciel na rzecz funduszu',
            file: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/docs/example.pdf',
                alt: 'Dokument przykładowy',
            },
            icon: 'FileText',
        },
        {
            title: 'Regulamin przyjmowania i rozpatrywania reklamacji',
            file: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/docs/example.pdf',
                alt: 'Dokument przykładowy',
            },
            icon: 'FileText',
        },
        {
            title: 'Którego okresu, przy stopie procentowej wynoszącej 0% czyli przyzerowa stawka, dokonano korekty stopy procentowej wyrażającej zmienność?',
            file: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/docs/example.pdf',
                alt: 'Dokument przykładowy',
            },
            icon: 'FileText',
        },
    ],
};

export const mapDocumentListBlock = (locale: string): CMS.Model.DocumentListBlock.DocumentListBlock => {
    switch (locale) {
        case 'de':
            return MOCK_DOCUMENT_LIST_BLOCK_DE;
        case 'pl':
            return MOCK_DOCUMENT_LIST_BLOCK_PL;
        case 'en':
            return MOCK_DOCUMENT_LIST_BLOCK_EN;
        default:
            throw new NotFoundException();
    }
};
