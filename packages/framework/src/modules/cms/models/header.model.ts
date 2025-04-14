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
    mobileMenuLabel!: {
        open: string;
        close: string;
    };
    contextSwitcher!: ContextSwitcher;
    items!: (NavigationGroup | NavigationItem)[];
    userInfo?: {
        url: string;
        label: string;
    };
}

export class ContextSwitcher {
    closeLabel!: string;
    showContextSwitcher!: boolean;
}
