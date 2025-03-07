import { Media } from './media';

export class Seo {
    title!: string;
    noIndex!: boolean;
    noFollow!: boolean;
    description!: string;
    keywords!: string[] | [];
    image?: Media;
}
