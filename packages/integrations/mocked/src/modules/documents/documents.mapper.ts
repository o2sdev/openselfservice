import * as Model from './documents.model';

const MOCK_DOCUMENTS: Model.Document[] = [
    {
        id: 'DOC-001',
        title: 'Service Agreement 2024',
        type: 'CONTRACT',
        status: 'ACTIVE',
        createdDate: new Date(2024, 0, 15).toISOString(),
        updatedDate: new Date(2024, 5, 1).toISOString(),
        description: 'Annual service agreement for enterprise support.',
        fileUrl: '/files/doc-001.pdf',
    },
    {
        id: 'DOC-002',
        title: 'Q2 Performance Report',
        type: 'REPORT',
        status: 'ACTIVE',
        createdDate: new Date(2024, 6, 1).toISOString(),
        updatedDate: new Date(2024, 6, 1).toISOString(),
        description: 'Quarterly performance and usage report.',
    },
    {
        id: 'DOC-003',
        title: 'Data Processing Policy',
        type: 'POLICY',
        status: 'ACTIVE',
        createdDate: new Date(2024, 2, 10).toISOString(),
        updatedDate: new Date(2024, 4, 20).toISOString(),
        description: 'Data processing and privacy policy document.',
        fileUrl: '/files/doc-003.pdf',
    },
    {
        id: 'DOC-004',
        title: 'Monthly Statement - June 2024',
        type: 'STATEMENT',
        status: 'ARCHIVED',
        createdDate: new Date(2024, 5, 30).toISOString(),
        updatedDate: new Date(2024, 5, 30).toISOString(),
        description: 'Account statement for June 2024.',
    },
    {
        id: 'DOC-005',
        title: 'Legacy Support Agreement',
        type: 'CONTRACT',
        status: 'EXPIRED',
        createdDate: new Date(2023, 0, 1).toISOString(),
        updatedDate: new Date(2023, 11, 31).toISOString(),
        description: 'Expired support agreement from previous year.',
        fileUrl: '/files/doc-005.pdf',
    },
];

export const mapDocument = (id: string): Model.Document => {
    const document = MOCK_DOCUMENTS.find((doc) => doc.id === id);
    if (!document) {
        throw new Error(`Document with id ${id} not found`);
    }
    return document;
};

export const mapDocuments = (query: Model.GetDocumentListQuery): Model.Documents => {
    const { offset = 0, limit = 10 } = query;

    const filtered = MOCK_DOCUMENTS.filter((doc) => {
        if (query.search) {
            const searchLower = query.search.toLowerCase();
            if (
                !doc.title.toLowerCase().includes(searchLower) &&
                !doc.description.toLowerCase().includes(searchLower)
            ) {
                return false;
            }
        }
        if (query.type && doc.type !== query.type) return false;
        if (query.status && doc.status !== query.status) return false;
        return true;
    });

    return {
        data: filtered.slice(offset, Number(offset) + Number(limit)),
        total: filtered.length,
    };
};
