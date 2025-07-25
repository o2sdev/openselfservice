import { Auth } from '@o2s/framework/modules';

import { RolesFragment } from '@/generated/strapi';

export const mapRoles = (data?: RolesFragment): Auth.Constants.Roles[] => {
    if (!data?.roles?.length) return [];

    return (data.roles as string[]).reduce<Auth.Constants.Roles[]>((prev, role) => {
        switch (role) {
            case 'prospect':
                return [...prev, Auth.Constants.Roles.PROSPECT];
            case 'user':
                return [...prev, Auth.Constants.Roles.ORG_USER];
            case 'admin':
                return [...prev, Auth.Constants.Roles.ORG_ADMIN];
        }

        return prev;
    }, []);
};
