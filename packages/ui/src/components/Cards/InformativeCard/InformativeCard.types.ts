import { Models } from '@o2s/utils.frontend';

import { DynamicIconProps } from '../../DynamicIcon';

export interface InformativeCardProps {
    href?: string;
    icon?: DynamicIconProps['name'];
    iconSize?: number;
    title?: string;
    description?: string;
    lineClamp?: number;
    LinkComponent: Models.Link.LinkComponent;
}
