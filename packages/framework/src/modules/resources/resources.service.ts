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

    abstract purchaseOrActivateResource(params: GetResourceParams, authorization?: string): Observable<void>;

    abstract purchaseOrActivateService(params: GetServiceParams, authorization?: string): Observable<void>;

    abstract getServiceList(query: GetServiceListQuery, authorization: string): Observable<Services>;
    abstract getService(params: GetServiceParams, authorization?: string): Observable<Service>;

    abstract getAssetList(query: GetAssetListQuery, authorization: string): Observable<Assets>;
    abstract getAsset(params: GetAssetParams, authorization?: string): Observable<Asset>;

    abstract getCompatibleServiceList(params: GetAssetParams): Observable<Products.Model.Products>;
    abstract getFeaturedServiceList(): Observable<Products.Model.Products>;
}
