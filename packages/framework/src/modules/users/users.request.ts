/** Parameters for a single user: id. */
export class GetUserParams {
    id!: string;
}

/** Query for user list: optional username. */
export class GetUsersQuery {
    username?: string;
}

/** Parameters for a single customer: id. */
export class GetCustomerParams {
    id!: string;
}

/** Body for create/update user: firstName, lastName. */
export class PostUserBody {
    firstName!: string;
    lastName!: string;
}
