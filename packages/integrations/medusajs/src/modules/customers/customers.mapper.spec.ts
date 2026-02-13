import { HttpTypes } from '@medusajs/types';
import { describe, expect, it } from 'vitest';

import { mapAddressToMedusa, mapCustomerAddress, mapCustomerAddresses } from './customers.mapper';

function minimalMedusaAddress(overrides: Record<string, unknown> = {}): HttpTypes.StoreCustomerAddress {
    return {
        id: 'addr_1',
        first_name: 'John',
        last_name: 'Doe',
        country_code: 'pl',
        address_1: 'Street',
        address_2: '1',
        city: 'Warsaw',
        postal_code: '00-001',
        province: 'Mazovia',
        phone: '+48',
        is_default_shipping: true,
        is_default_billing: false,
        created_at: new Date('2024-01-01'),
        updated_at: new Date('2024-01-02'),
        ...overrides,
    } as unknown as HttpTypes.StoreCustomerAddress;
}

describe('customers.mapper', () => {
    describe('mapCustomerAddress', () => {
        it('should map id, customerId, label, isDefault and address fields', () => {
            const medusa = minimalMedusaAddress();
            const result = mapCustomerAddress(medusa, 'cust_1');
            expect(result.id).toBe('addr_1');
            expect(result.customerId).toBe('cust_1');
            expect(result.label).toBe('John Doe');
            expect(result.isDefault).toBe(true);
            expect(result.address.firstName).toBe('John');
            expect(result.address.lastName).toBe('Doe');
            expect(result.address.country).toBe('pl');
            expect(result.address.streetName).toBe('Street');
            expect(result.address.streetNumber).toBe('1');
            expect(result.address.city).toBe('Warsaw');
            expect(result.address.postalCode).toBe('00-001');
            expect(result.address.region).toBe('Mazovia');
            expect(result.address.phone).toBe('+48');
            expect(result.createdAt).toBeDefined();
            expect(result.updatedAt).toBeDefined();
            expect(String(result.createdAt)).toContain('2024');
            expect(String(result.updatedAt)).toContain('2024');
        });

        it('should set label undefined when first_name is empty', () => {
            const medusa = minimalMedusaAddress({ first_name: '', last_name: '' });
            const result = mapCustomerAddress(medusa, 'cust_1');
            expect(result.label).toBeUndefined();
        });
    });

    describe('mapCustomerAddresses', () => {
        it('should paginate with offset and limit and return total', () => {
            const addresses = [
                minimalMedusaAddress({ id: 'addr_1' }),
                minimalMedusaAddress({ id: 'addr_2' }),
                minimalMedusaAddress({ id: 'addr_3' }),
            ];
            const result = mapCustomerAddresses(addresses, 'cust_1', 2, 1);
            expect(result.data).toHaveLength(2);
            expect(result.total).toBe(3);
            expect(result.data[0]?.id).toBe('addr_2');
            expect(result.data[1]?.id).toBe('addr_3');
        });
    });

    describe('mapAddressToMedusa', () => {
        it('should map O2S address to StoreCreateCustomerAddress with country_code lowercase', () => {
            const address = {
                firstName: 'Jane',
                lastName: 'Doe',
                country: 'PL',
                streetName: 'Main St',
                streetNumber: '10',
                apartment: '',
                city: 'Krakow',
                postalCode: '30-001',
                region: 'Lesser Poland',
                phone: '+48123456789',
            };
            const result = mapAddressToMedusa(address as never);
            expect(result.first_name).toBe('Jane');
            expect(result.last_name).toBe('Doe');
            expect(result.country_code).toBe('pl');
            expect(result.address_1).toBe('Main St');
            expect(result.address_2).toBe('10'); // streetNumber takes precedence over apartment
            expect(result.city).toBe('Krakow');
            expect(result.postal_code).toBe('30-001');
            expect(result.province).toBe('Lesser Poland');
            expect(result.phone).toBe('+48123456789');
        });

        it('should use apartment when streetNumber is empty for address_2', () => {
            const address = {
                firstName: 'J',
                lastName: 'D',
                country: 'pl',
                streetName: 'S',
                streetNumber: '',
                apartment: 'Apt 2',
                city: 'C',
                postalCode: '',
                region: undefined,
                phone: undefined,
            };
            const result = mapAddressToMedusa(address as never);
            expect(result.address_2).toBe('Apt 2');
        });
    });
});
