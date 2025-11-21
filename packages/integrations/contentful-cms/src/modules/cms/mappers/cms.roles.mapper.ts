import { Auth } from '@o2s/framework/modules';

export const mapRoles = (roles?: string[]): Auth.Constants.Roles[] => {
    if (!roles?.length) return [];

    return roles.reduce<Auth.Constants.Roles[]>((prev, role) => {
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
