import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/** Parameters for a single user: id. */
export class GetUserParams {
    @ApiProperty({ description: 'User identifier.' })
    id!: string;
}

/** Query for user list: optional username. */
export class GetUsersQuery {
    @ApiPropertyOptional({ description: 'Optional username filter.' })
    username?: string;
}

/** Parameters for a single customer: id. */
export class GetCustomerParams {
    @ApiProperty({ description: 'Customer identifier.' })
    id!: string;
}

/** Body for create/update user: firstName, lastName. */
export class PostUserBody {
    @ApiProperty({ description: 'User first name.' })
    firstName!: string;
    @ApiProperty({ description: 'User last name.' })
    lastName!: string;
}
