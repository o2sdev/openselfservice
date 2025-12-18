import { Models } from '@o2s/utils.frontend';

import { DynamicIconProps } from '@o2s/ui/components/DynamicIcon';

export interface InformativeCardMeta {
    __id: string;
    title?: string;
    description?: string;
    url?: string;
    icon?: string;
}

export interface InformativeCardProps {
    href?: string;
    icon?: Icon;
    title?: string;
    description?: string;
    lineClamp?: number;
    LinkComponent: Models.Link.LinkComponent;
    meta?: InformativeCardMeta;
}

interface Icon {
    name: DynamicIconProps['name'];
    size?: DynamicIconProps['size'];
    className?: DynamicIconProps['className'];
    strokeWidth?: DynamicIconProps['strokeWidth'];
}
