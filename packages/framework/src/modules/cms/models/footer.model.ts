import { Media } from '@/utils/models';
import { NavigationGroup, NavigationItem } from '@/utils/models/navigation';

export class Footer {
    id!: string;
    title!: string;
    copyright!: string;
    items!: (NavigationGroup | NavigationItem)[];
    logo?: Media.Media;
}
