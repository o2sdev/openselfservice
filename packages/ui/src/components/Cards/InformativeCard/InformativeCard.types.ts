import { Models } from '@o2s/utils.frontend';

import { DynamicIconProps } from '../../DynamicIcon';

export interface InformativeCardProps {
    href?: string;
    icon?: Icon;
    title?: string;
    description?: string;
    lineClamp?: number;
    LinkComponent: Models.Link.LinkComponent;
}

interface Icon {
    name: DynamicIconProps['name'];
    size?: DynamicIconProps['size'];
    className?: DynamicIconProps['className'];
    strokeWidth?: DynamicIconProps['strokeWidth'];
}
