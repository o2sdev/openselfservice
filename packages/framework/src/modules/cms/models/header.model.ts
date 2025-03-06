import { Media } from '@/utils/models';
import { NavigationGroup, NavigationItem } from '@/utils/models/navigation';

export class Header {
    id!: string;
    title?: string;
    logo?: Media.Media;
    notification?: {
        url: string;
        label: string;
    };
    languageSwitcherLabel!: string;
    contextSwitcher?: ContextSwitcher;
    items!: (NavigationGroup | NavigationItem)[];
    userInfo?: {
        url: string;
        label: string;
    };
}

export class ContextSwitcher {
    label!: string;
    clear!: string;
    apply!: string;
}
