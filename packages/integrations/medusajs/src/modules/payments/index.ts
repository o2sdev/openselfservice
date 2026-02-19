import { Payments } from '@o2s/framework/modules';

export { PaymentsService as Service } from './payments.service';
export * as Mapper from './payments.mapper';

export import Request = Payments.Request;
export import Model = Payments.Model;
