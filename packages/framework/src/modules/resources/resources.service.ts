import { Observable } from 'rxjs';

import { Products } from '@o2s/framework/modules';

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

    abstract purchaseOrActivateService(params: GetServiceParams): Observable<void>;

    abstract getServiceList(query: GetServiceListQuery, authorization: string): Observable<Services>;
    abstract getService(params: GetServiceParams): Observable<Service>;

    abstract getAssetList(query: GetAssetListQuery, authorization: string): Observable<Assets>;
    abstract getAsset(params: GetAssetParams): Observable<Asset>;

    abstract getCompatibleServiceList(params: GetAssetParams): Observable<Products.Model.Products>;
}
