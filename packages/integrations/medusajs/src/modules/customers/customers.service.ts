import Medusa from '@medusajs/js-sdk';
import { HttpTypes } from '@medusajs/types';
import {
    Inject,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { Observable, catchError, from, map, of, switchMap, throwError } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Auth, Customers } from '@o2s/framework/modules';

import { Service as MedusaJsService } from '@/modules/medusajs';

import { handleHttpError } from '../../utils/handle-http-error';

import { mapAddressToMedusa, mapCustomerAddress, mapCustomerAddresses } from './customers.mapper';

/**
 * Medusa.js implementation of the Customers service.
 *
 * Uses Medusa Store API for all customer address operations.
 * Requires a custom Medusa auth plugin to validate SSO tokens passed via the authorization header.
 */
@Injectable()
export class CustomersService extends Customers.Service {
    private readonly sdk: Medusa;

    constructor(
        @Inject(LoggerService) protected readonly logger: LoggerService,
        private readonly medusaJsService: MedusaJsService,
        private readonly authService: Auth.Service,
    ) {
        super();
        this.sdk = this.medusaJsService.getSdk();
    }

    getAddresses(authorization: string | undefined): Observable<Customers.Model.CustomerAddresses> {
        if (!authorization) {
            return throwError(() => new UnauthorizedException('Authentication required'));
        }

        const customerId = this.authService.getCustomerId(authorization);
        if (!customerId) {
            return throwError(() => new UnauthorizedException('Invalid authentication'));
        }

        return from(
            this.sdk.store.customer.listAddress({}, this.medusaJsService.getStoreApiHeaders(authorization)),
        ).pipe(
            map((response: HttpTypes.StoreCustomerAddressListResponse) => {
                const addresses = response.addresses || [];
                return mapCustomerAddresses(addresses, customerId);
            }),
            catchError((error) => {
                if (error.response?.status === 401 || error.response?.status === 403) {
                    return throwError(() => new UnauthorizedException('Unauthorized to access addresses'));
                }
                return handleHttpError(error);
            }),
        );
    }

    getAddress(
        params: Customers.Request.GetAddressParams,
        authorization: string | undefined,
    ): Observable<Customers.Model.CustomerAddress | undefined> {
        if (!authorization) {
            throw new UnauthorizedException('Authentication required');
        }

        const customerId = this.authService.getCustomerId(authorization);
        if (!customerId) {
            throw new UnauthorizedException('Invalid authentication');
        }

        return from(
            this.sdk.store.customer.retrieveAddress(
                params.id,
                {},
                this.medusaJsService.getStoreApiHeaders(authorization),
            ),
        ).pipe(
            map((response: HttpTypes.StoreCustomerAddressResponse) => {
                return mapCustomerAddress(response.address, customerId);
            }),
            catchError((error) => {
                if (error.response?.status === 404) {
                    return of(undefined);
                }
                if (error.response?.status === 401 || error.response?.status === 403) {
                    return throwError(() => new UnauthorizedException('Unauthorized to access address'));
                }
                return handleHttpError(error);
            }),
        );
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

        const medusaAddress = mapAddressToMedusa(data.address);

        return from(
            this.sdk.store.customer.createAddress(
                medusaAddress,
                {},
                this.medusaJsService.getStoreApiHeaders(authorization),
            ),
        ).pipe(
            switchMap((response: HttpTypes.StoreCustomerResponse) => {
                const customer = response.customer;
                const addresses = customer.addresses || [];

                // Find the created address by comparing fields with what we sent
                const createdAddress = addresses.find((addr) => {
                    return (
                        addr.first_name === medusaAddress.first_name &&
                        addr.last_name === medusaAddress.last_name &&
                        addr.address_1 === medusaAddress.address_1 &&
                        addr.city === medusaAddress.city &&
                        addr.postal_code === medusaAddress.postal_code &&
                        addr.country_code === medusaAddress.country_code &&
                        (addr.address_2 || '') === (medusaAddress.address_2 || '') &&
                        (addr.province || '') === (medusaAddress.province || '') &&
                        (addr.phone || '') === (medusaAddress.phone || '')
                    );
                });

                if (!createdAddress) {
                    return throwError(
                        () =>
                            new InternalServerErrorException(
                                'Failed to create address or find created address in response',
                            ),
                    );
                }

                const address = mapCustomerAddress(createdAddress, customerId);

                // If this should be default, set it as default
                if (data.isDefault) {
                    return this.setDefaultAddress({ id: address.id }, authorization);
                }

                return of(address);
            }),
            catchError((error) => {
                if (error.response?.status === 401 || error.response?.status === 403) {
                    return throwError(() => new UnauthorizedException('Unauthorized to create address'));
                }
                return handleHttpError(error);
            }),
        );
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

        const updateData = data.address ? mapAddressToMedusa(data.address) : {};

        return from(
            this.sdk.store.customer.updateAddress(
                params.id,
                updateData,
                {},
                this.medusaJsService.getStoreApiHeaders(authorization),
            ),
        ).pipe(
            switchMap((response: HttpTypes.StoreCustomerResponse) => {
                const customer = response.customer;
                const addresses = customer.addresses || [];
                const updatedAddress = addresses.find((a) => a.id === params.id);
                if (!updatedAddress) {
                    return throwError(() => new NotFoundException(`Address with ID ${params.id} not found`));
                }

                const address = mapCustomerAddress(updatedAddress, customerId);

                // If setting as default, update that
                if (data.isDefault !== undefined && data.isDefault) {
                    return this.setDefaultAddress({ id: address.id }, authorization);
                }

                return of(address);
            }),
            catchError((error) => {
                if (error.response?.status === 404) {
                    return throwError(() => new NotFoundException(`Address with ID ${params.id} not found`));
                }
                if (error.response?.status === 401 || error.response?.status === 403) {
                    return throwError(() => new UnauthorizedException('Unauthorized to update address'));
                }
                return handleHttpError(error);
            }),
        );
    }

    deleteAddress(params: Customers.Request.DeleteAddressParams, authorization: string | undefined): Observable<void> {
        if (!authorization) {
            throw new UnauthorizedException('Authentication required');
        }

        const customerId = this.authService.getCustomerId(authorization);
        if (!customerId) {
            throw new UnauthorizedException('Invalid authentication');
        }

        return from(
            this.sdk.store.customer.deleteAddress(params.id, this.medusaJsService.getStoreApiHeaders(authorization)),
        ).pipe(
            map((_response: HttpTypes.StoreCustomerAddressDeleteResponse) => undefined),
            catchError((error) => {
                if (error.response?.status === 404) {
                    return throwError(() => new NotFoundException(`Address with ID ${params.id} not found`));
                }
                if (error.response?.status === 401 || error.response?.status === 403) {
                    return throwError(() => new UnauthorizedException('Unauthorized to delete address'));
                }
                return handleHttpError(error);
            }),
        );
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

        return from(
            this.sdk.store.customer.updateAddress(
                params.id,
                {
                    is_default_shipping: true,
                    is_default_billing: true,
                } as Partial<HttpTypes.StoreUpdateCustomerAddress>,
                {},
                this.medusaJsService.getStoreApiHeaders(authorization),
            ),
        ).pipe(
            map((response: HttpTypes.StoreCustomerResponse) => {
                const customer = response.customer;
                const addresses = customer.addresses || [];
                const updatedAddress = addresses.find((a) => a.id === params.id);
                if (!updatedAddress) {
                    throw new NotFoundException(`Address with ID ${params.id} not found`);
                }
                return mapCustomerAddress(updatedAddress, customerId);
            }),
            catchError((error) => {
                if (error.response?.status === 404) {
                    return throwError(() => new NotFoundException(`Address with ID ${params.id} not found`));
                }
                if (error.response?.status === 401 || error.response?.status === 403) {
                    return throwError(() => new UnauthorizedException('Unauthorized to set default address'));
                }
                return handleHttpError(error);
            }),
        );
    }
}
