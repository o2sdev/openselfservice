import { Address } from '@/utils/models';

export class GetAddressParams {
    id!: string;
}

export class CreateAddressBody {
    label?: string;
    isDefault?: boolean;
    address!: Address.Address;
}

export class UpdateAddressParams {
    id!: string;
}

export class UpdateAddressBody {
    label?: string;
    isDefault?: boolean;
    address?: Address.Address;
}

export class DeleteAddressParams {
    id!: string;
}

export class SetDefaultAddressParams {
    id!: string;
}
