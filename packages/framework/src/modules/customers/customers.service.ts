import { Observable } from 'rxjs';

import * as Customers from './';

/**
 * Abstract customer (address) service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
export abstract class CustomerService {
    protected constructor(..._services: unknown[]) {}

    /** Returns all addresses for the current customer. */
    abstract getAddresses(authorization?: string): Observable<Customers.Model.CustomerAddresses>;

    /** Returns a single address by id. Returns undefined if not found. */
    abstract getAddress(
        params: Customers.Request.GetAddressParams,
        authorization?: string,
    ): Observable<Customers.Model.CustomerAddress | undefined>;

    /** Creates a new address. */
    abstract createAddress(
        data: Customers.Request.CreateAddressBody,
        authorization?: string,
    ): Observable<Customers.Model.CustomerAddress>;

    /** Updates an existing address. */
    abstract updateAddress(
        params: Customers.Request.UpdateAddressParams,
        data: Customers.Request.UpdateAddressBody,
        authorization?: string,
    ): Observable<Customers.Model.CustomerAddress>;

    /** Deletes an address. */
    abstract deleteAddress(params: Customers.Request.DeleteAddressParams, authorization?: string): Observable<void>;

    /** Sets an address as the default (shipping/billing). */
    abstract setDefaultAddress(
        params: Customers.Request.SetDefaultAddressParams,
        authorization?: string,
    ): Observable<Customers.Model.CustomerAddress>;
}
