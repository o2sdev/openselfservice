import { Session } from 'next-auth';

export interface UserInfoProps {
    user: Session['user'];
    userInfo: {
        url: string;
        label: string;
    };
}
