import { Auth } from '@o2s/framework/modules';

import { RolesFragment } from '@/generated/strapi';

export const mapRoles = (data?: RolesFragment): Auth.Model.Role[] => {
    if (!data?.roles?.length) return [];

    // TODO: think if it could be possible to translate CMS role name into the real role name (e.g. from IAM),
    //  taking into the account that roles can be created/deleted at runtime
    // return (data.roles as string[]).reduce<Auth.Model.Role[]>((prev, role) => {
    //     switch (role) {
    //         case 'prospect':
    //             return [...prev, Auth.Model.Roles.PROSPECT];
    //         case 'user':
    //             return [...prev, Auth.Model.Roles.ORG_USER];
    //         case 'admin':
    //             return [...prev, Auth.Model.Roles.ORG_ADMIN];
    //     }
    //
    //     return prev;
    // }, []);

    return data.roles;
};
