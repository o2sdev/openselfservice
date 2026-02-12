import { Customers } from '@o2s/framework/modules';

export { CustomersService as Service } from './customers.service';
export * as Mapper from './customers.mapper';

export import Request = Customers.Request;
export import Model = Customers.Model;
