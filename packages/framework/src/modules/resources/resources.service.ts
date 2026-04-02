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

/**
 * Abstract resource/service/asset service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
export abstract class ResourceService {
    protected constructor(..._services: unknown[]) {}

    /** Purchase or activate a resource by id. */
    abstract purchaseOrActivateResource(params: GetResourceParams, authorization?: string): Observable<void>;
    /** Purchase or activate a service by id. */
    abstract purchaseOrActivateService(params: GetServiceParams, authorization?: string): Observable<void>;
    /** Service list with pagination and filters. */
    abstract getServiceList(query: GetServiceListQuery, authorization: string): Observable<Services>;
    /** Returns a single service by id. */
    abstract getService(params: GetServiceParams, authorization?: string): Observable<Service>;
    /** Asset list with pagination and filters. */
    abstract getAssetList(query: GetAssetListQuery, authorization: string): Observable<Assets>;
    /** Returns a single asset by id. */
    abstract getAsset(params: GetAssetParams, authorization?: string): Observable<Asset>;
    /** Compatible services for an asset. */
    abstract getCompatibleServiceList(params: GetAssetParams): Observable<Products.Model.Products>;
    /** Featured service list. */
    abstract getFeaturedServiceList(): Observable<Products.Model.Products>;
}
