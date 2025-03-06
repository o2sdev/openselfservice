import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Resources } from '@o2s/framework/modules';

import { mapResource, mapResources } from './resources.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class ResourcesService implements Resources.Service {
    getResourceList(query: Resources.Request.GetResourceListQuery): Observable<Resources.Model.Resources> {
        return of(mapResources(query)).pipe(responseDelay());
    }

    getResource(params: Resources.Request.GetResourceParams): Observable<Resources.Model.Resource> {
        return of(mapResource(params.id)).pipe(responseDelay());
    }

    purchaseOrActivateResource(_params: Resources.Request.GetResourceParams): Observable<void> {
        throw new Error('Method not implemented');
    }
}
