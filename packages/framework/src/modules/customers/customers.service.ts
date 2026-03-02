import { Observable } from 'rxjs';

import * as Customers from './';

/**
 * Abstract customer (address) service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
export abstract class CustomerService {
    protected constructor(..._services: unknown[]) {}

    abstract getAddresses(authorization?: string): Observable<Customers.Model.CustomerAddresses>;

    abstract getAddress(
        params: Customers.Request.GetAddressParams,
        authorization?: string,
    ): Observable<Customers.Model.CustomerAddress | undefined>;

    abstract createAddress(
        data: Customers.Request.CreateAddressBody,
        authorization?: string,
    ): Observable<Customers.Model.CustomerAddress>;

    abstract updateAddress(
        params: Customers.Request.UpdateAddressParams,
        data: Customers.Request.UpdateAddressBody,
        authorization?: string,
    ): Observable<Customers.Model.CustomerAddress>;

    abstract deleteAddress(params: Customers.Request.DeleteAddressParams, authorization?: string): Observable<void>;

    abstract setDefaultAddress(
        params: Customers.Request.SetDefaultAddressParams,
        authorization?: string,
    ): Observable<Customers.Model.CustomerAddress>;
}
