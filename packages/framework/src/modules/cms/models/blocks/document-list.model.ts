import { Block, Document } from '@/utils/models';

/** CMS block configuration for list of downloadable documents. */
export class DocumentListBlock extends Block.Block {
    title?: string;
    description?: string;
    documents?: Document.Document[];
}
