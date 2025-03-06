import { Observable } from 'rxjs';

import { Resource, Resources } from './resources.model';
import { GetResourceListQuery, GetResourceParams } from './resources.request';

export abstract class ResourceService {
    protected constructor(..._services: unknown[]) {}

    abstract getResourceList(query: GetResourceListQuery): Observable<Resources>;
    abstract getResource(params: GetResourceParams): Observable<Resource>;
    abstract purchaseOrActivateResource(params: GetResourceParams): Observable<void>;
}
