import { Users } from '@o2s/framework/modules';

export class RegisterUserBody implements Users.Request.PostUserBody {
    firstName!: string;
    lastName!: string;
    position!: string;
    email!: string;
    phone!: string;
    clientId!: string;
}

export class ResetPasswordBody implements Users.Request.ResetPasswordBody {
    username!: string;
}

export class SetNewPasswordBody implements Users.Request.SetNewPasswordBody {
    password!: string;
}
