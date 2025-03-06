import { Address } from './address';

export abstract class Party {
    id!: string;
    name!: string;
    address?: Address;
}
