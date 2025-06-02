import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Products, Resources } from '@o2s/framework/modules';

import { responseDelay } from '@/utils/delay';

import {
    mapAsset,
    mapAssets,
    mapCompatibleServices,
    mapFeaturedServices,
    mapService,
    mapServices,
} from './resources.mapper';

@Injectable()
export class ResourcesService implements Resources.Service {
    purchaseOrActivateService(_params: Resources.Request.GetServiceParams): Observable<void> {
        throw new Error('Method not implemented.');
    }

    purchaseOrActivateResource(_params: Resources.Request.GetResourceParams): Observable<void> {
        throw new Error('Method not implemented');
    }

    getServiceList(
        query: Resources.Request.GetServiceListQuery,
        authorization: string,
    ): Observable<Resources.Model.Services> {
        return of(mapServices(query, authorization)).pipe(responseDelay());
    }

    getService(params: Resources.Request.GetServiceParams): Observable<Resources.Model.Service> {
        return of(mapService(params.id)).pipe(responseDelay());
    }

    getAssetList(query: Resources.Request.GetAssetListQuery): Observable<Resources.Model.Assets> {
        return of(mapAssets(query)).pipe(responseDelay());
    }

    getAsset(params: Resources.Request.GetAssetParams): Observable<Resources.Model.Asset> {
        return of(mapAsset(params.id)).pipe(responseDelay());
    }

    getCompatibleServiceList(params: Resources.Request.GetAssetParams): Observable<Products.Model.Products> {
        return of(mapCompatibleServices(params)).pipe(responseDelay());
    }

    getFeaturedServiceList(): Observable<Products.Model.Products> {
        return of(mapFeaturedServices()).pipe(responseDelay());
    }
}
