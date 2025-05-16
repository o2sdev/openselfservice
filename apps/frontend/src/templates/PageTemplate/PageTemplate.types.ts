import { Modules } from '@o2s/api-harmonization';
import { Session } from 'next-auth';

export interface PageTemplateProps {
    slug: string[];
    data: Modules.Page.Model.PageData;
    session: Session | null;
}
