import { Models } from '@o2s/framework/modules';

export type DocumentType = 'CONTRACT' | 'REPORT' | 'POLICY' | 'STATEMENT';

export type DocumentStatus = 'DRAFT' | 'ACTIVE' | 'ARCHIVED' | 'EXPIRED';

export class Document {
    id!: string;
    title!: string;
    type!: DocumentType;
    status!: DocumentStatus;
    createdDate!: string;
    updatedDate!: string;
    description!: string;
    fileUrl?: string;
}

export type Documents = Models.Pagination.Paginated<Document>;

export class GetDocumentListQuery {
    offset?: number;
    limit?: number;
    type?: DocumentType;
    status?: DocumentStatus;
    search?: string;
}

export class GetDocumentParams {
    id!: string;
}
