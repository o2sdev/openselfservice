import { Link } from '@/utils/models';

export type ActionLink = Link.Link & {
    inProgress?: boolean;
};
