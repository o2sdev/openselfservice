export class GetUserParams {
    id!: string;
}

export class GetCustomerParams {
    id!: string;
}

export class PatchUserBody {
    firstName!: string;
    lastName!: string;
}

export class PostUserBody {
    firstName!: string;
    lastName!: string;
    position!: string;
    email!: string;
    phone!: string;
    clientId!: string;
}

export class ResetPasswordBody {
    username!: string;
}

export class SetNewPasswordBody {
    password!: string;
}
