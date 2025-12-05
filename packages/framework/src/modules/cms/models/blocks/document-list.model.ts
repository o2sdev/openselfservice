import { Block, Document } from '@/utils/models';

export class DocumentListBlock extends Block.Block {
    title?: string;
    description?: string;
    documents?: Document.Document[];
}
