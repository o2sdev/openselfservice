import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Customer } from '@/utils/models/customer';
import { Paginated } from '@/utils/models/pagination';

/** User profile returned by user endpoints. */
export class User {
    @ApiProperty({ description: 'Unique user identifier' })
    id!: string;

    @ApiProperty({ description: 'Username for login' })
    username!: string;

    @ApiProperty({ description: 'User email address' })
    email!: string;

    @ApiPropertyOptional({ description: 'User first name' })
    firstName?: string;

    @ApiPropertyOptional({ description: 'User last name' })
    lastName?: string;

    @ApiPropertyOptional({ description: 'Customers associated with this user', type: () => [Customer] })
    customers?: Customer[];
}

/** Paginated user list for OpenAPI schema. */
export class PaginatedUsers extends Paginated<User> {
    @ApiProperty({ description: 'Array of users', type: () => [User] })
    declare data: User[];

    @ApiProperty({ description: 'Total number of users matching the query' })
    declare total: number;
}

/** @deprecated Use PaginatedUsers class for OpenAPI compatibility. */
export type Users = Paginated<User>;
