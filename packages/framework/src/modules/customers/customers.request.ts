import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Address } from '@/utils/models';

/** Route params for fetching a single customer address. */
export class GetAddressParams {
    /** Customer address identifier. */
    @ApiProperty({ description: 'Customer address identifier.' })
    id!: string;
}

/** Request body for creating a customer address. */
export class CreateAddressBody {
    /** Optional address label shown in UI (e.g. "Home", "Office"). */
    @ApiPropertyOptional({ description: 'Optional address label visible in UI (for example `Home`, `Office`).' })
    label?: string;
    /** Sets the new address as default when true. */
    @ApiPropertyOptional({ description: 'When true, sets the new address as default.' })
    isDefault?: boolean;
    /** Full address payload. */
    @ApiProperty({ description: 'Full address payload.' })
    address!: Address.Address;
}

/** Route params for updating a single customer address. */
export class UpdateAddressParams {
    /** Customer address identifier. */
    @ApiProperty({ description: 'Customer address identifier.' })
    id!: string;
}

/** Request body for updating a customer address. */
export class UpdateAddressBody {
    /** Optional address label shown in UI. */
    @ApiPropertyOptional({ description: 'Optional address label visible in UI.' })
    label?: string;
    /** Sets the updated address as default when true. */
    @ApiPropertyOptional({ description: 'When true, sets the updated address as default.' })
    isDefault?: boolean;
    /** Updated full address payload. */
    @ApiPropertyOptional({ description: 'Updated full address payload.' })
    address?: Address.Address;
}

/** Route params for deleting a single customer address. */
export class DeleteAddressParams {
    /** Customer address identifier. */
    @ApiProperty({ description: 'Customer address identifier.' })
    id!: string;
}

/** Route params for setting a default customer address. */
export class SetDefaultAddressParams {
    /** Customer address identifier. */
    @ApiProperty({ description: 'Customer address identifier.' })
    id!: string;
}
