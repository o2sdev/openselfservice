import { Observable } from 'rxjs';

import { Asset, Assets, Service, Services } from './resources.model';
import {
    GetAssetListQuery,
    GetAssetParams,
    GetResourceParams,
    GetServiceListQuery,
    GetServiceParams,
} from './resources.request';

export abstract class ResourceService {
    protected constructor(..._services: unknown[]) {}

    abstract purchaseOrActivateResource(params: GetResourceParams): Observable<void>;

    abstract getServiceList(query: GetServiceListQuery, authorization: string): Observable<Services>;
    abstract getService(params: GetServiceParams): Observable<Service>;

    abstract getAssetList(query: GetAssetListQuery): Observable<Assets>;
    abstract getAsset(params: GetAssetParams): Observable<Asset>;
}
