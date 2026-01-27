import { Auth } from '@o2s/framework/modules';

export const mapRoles = (roles?: string[]): Auth.Model.Role[] => {
    if (!roles?.length) return [];

    // TODO: think if it could be possible to translate CMS role name into the real role name (e.g. from IAM),
    //  taking into the account that roles can be created/deleted at runtime
    // return roles.reduce<Auth.Model.Role[]>((prev, role) => {
    //     switch (role) {
    //         case 'prospect':
    //             return [...prev, Auth.Model.Role.PROSPECT];
    //         case 'user':
    //             return [...prev, Auth.Model.Role.ORG_USER];
    //         case 'admin':
    //             return [...prev, Auth.Model.Role.ORG_ADMIN];
    //     }
    //
    //     return prev;
    // }, []);

    return roles;
};
