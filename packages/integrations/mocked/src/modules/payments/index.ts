import { Payments } from '@o2s/framework/modules';

export { PaymentsService as Service } from './payments.service';
export * as Mapper from './payments.mapper';
export * as Mocks from './mocks/providers.mock';

export import Request = Payments.Request;
export import Model = Payments.Model;
