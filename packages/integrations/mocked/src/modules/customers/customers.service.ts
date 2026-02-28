import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';

import { Auth, Customers } from '@o2s/framework/modules';

import {
    createCustomerAddress,
    mapCustomerAddress,
    mapCustomerAddresses,
    updateCustomerAddress,
} from './customers.mapper';
import { getMockAddresses } from './mocks/addresses.mock';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class CustomersService extends Customers.Service {
    private addresses: Customers.Model.CustomerAddress[] = [...getMockAddresses()];

    constructor(private readonly authService: Auth.Service) {
        super();
    }

    getAddresses(authorization: string | undefined): Observable<Customers.Model.CustomerAddresses> {
        if (!authorization) {
            throw new UnauthorizedException('Authentication required');
        }

        const customerId = this.authService.getCustomerId(authorization);
        const customerAddresses = this.addresses.filter((addr) => addr.customerId === customerId);

        return of(mapCustomerAddresses(customerAddresses)).pipe(responseDelay());
    }

    getAddress(
        params: Customers.Request.GetAddressParams,
        authorization: string | undefined,
    ): Observable<Customers.Model.CustomerAddress | undefined> {
        if (!authorization) {
            throw new UnauthorizedException('Authentication required');
        }

        const customerId = this.authService.getCustomerId(authorization);
        const address = this.addresses.find((addr) => addr.id === params.id && addr.customerId === customerId);

        if (!address) {
            return of(undefined).pipe(responseDelay());
        }

        return of(mapCustomerAddress(address)).pipe(responseDelay());
    }

    createAddress(
        data: Customers.Request.CreateAddressBody,
        authorization: string | undefined,
    ): Observable<Customers.Model.CustomerAddress> {
        if (!authorization) {
            throw new UnauthorizedException('Authentication required');
        }

        const customerId = this.authService.getCustomerId(authorization);
        if (!customerId) {
            throw new UnauthorizedException('Invalid authentication');
        }

        // If this is set as default, unset other defaults
        if (data.isDefault) {
            this.addresses = this.addresses.map((addr) =>
                addr.customerId === customerId ? { ...addr, isDefault: false } : addr,
            );
        }

        const newAddress = createCustomerAddress(data, customerId);
        this.addresses.push(newAddress);

        return of(newAddress).pipe(responseDelay());
    }

    updateAddress(
        params: Customers.Request.UpdateAddressParams,
        data: Customers.Request.UpdateAddressBody,
        authorization: string | undefined,
    ): Observable<Customers.Model.CustomerAddress> {
        if (!authorization) {
            throw new UnauthorizedException('Authentication required');
        }

        const customerId = this.authService.getCustomerId(authorization);
        if (!customerId) {
            throw new UnauthorizedException('Invalid authentication');
        }
        const index = this.addresses.findIndex((addr) => addr.id === params.id && addr.customerId === customerId);

        if (index === -1) {
            return throwError(() => new NotFoundException(`Address with ID ${params.id} not found`));
        }

        const existingAddress = this.addresses[index];
        if (!existingAddress) {
            return throwError(() => new NotFoundException(`Address with ID ${params.id} not found`));
        }

        // If setting as default, unset other defaults
        if (data.isDefault) {
            this.addresses = this.addresses.map((addr) =>
                addr.customerId === customerId && addr.id !== params.id ? { ...addr, isDefault: false } : addr,
            );
        }

        const updatedAddress = updateCustomerAddress(existingAddress, data);
        this.addresses[index] = updatedAddress;

        return of(updatedAddress).pipe(responseDelay());
    }

    deleteAddress(params: Customers.Request.DeleteAddressParams, authorization: string | undefined): Observable<void> {
        if (!authorization) {
            throw new UnauthorizedException('Authentication required');
        }

        const customerId = this.authService.getCustomerId(authorization);
        const index = this.addresses.findIndex((addr) => addr.id === params.id && addr.customerId === customerId);

        if (index === -1) {
            return throwError(() => new NotFoundException(`Address with ID ${params.id} not found`));
        }

        this.addresses.splice(index, 1);

        return of(undefined).pipe(responseDelay());
    }

    setDefaultAddress(
        params: Customers.Request.SetDefaultAddressParams,
        authorization: string | undefined,
    ): Observable<Customers.Model.CustomerAddress> {
        if (!authorization) {
            throw new UnauthorizedException('Authentication required');
        }

        const customerId = this.authService.getCustomerId(authorization);
        if (!customerId) {
            throw new UnauthorizedException('Invalid authentication');
        }
        const index = this.addresses.findIndex((addr) => addr.id === params.id && addr.customerId === customerId);

        if (index === -1) {
            return throwError(() => new NotFoundException(`Address with ID ${params.id} not found`));
        }

        const existingAddress = this.addresses[index];
        if (!existingAddress) {
            return throwError(() => new NotFoundException(`Address with ID ${params.id} not found`));
        }

        // Unset other defaults for this customer
        this.addresses = this.addresses.map((addr) =>
            addr.customerId === customerId && addr.id !== params.id ? { ...addr, isDefault: false } : addr,
        );

        // Set this address as default
        const updatedAddress: Customers.Model.CustomerAddress = { ...existingAddress, isDefault: true };
        this.addresses[index] = updatedAddress;

        return of(updatedAddress).pipe(responseDelay());
    }
}
