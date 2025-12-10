import { Test, TestingModule } from '@nestjs/testing';
import { Articles, CMS } from '@o2s/configs.integrations';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ArticleListService } from './article-list.service';

describe('ArticleListService', () => {
    let service: ArticleListService;
    let cmsService: CMS.Service;
    let articlesService: Articles.Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ArticleListService,
                {
                    provide: CMS.Service,
                    useValue: {
                        getArticleListBlock: vi.fn().mockReturnValue(
                            of({
                                articlesToShow: 4,
                                articleIds: [],
                                categoryId: undefined,
                            }),
                        ),
                    },
                },
                {
                    provide: Articles.Service,
                    useValue: {
                        getArticleList: vi.fn().mockReturnValue(of({ items: [], totalCount: 0 })),
                        getCategory: vi.fn().mockReturnValue(of(undefined)),
                    },
                },
            ],
        }).compile();

        service = module.get<ArticleListService>(ArticleListService);
        cmsService = module.get<CMS.Service>(CMS.Service);
        articlesService = module.get<Articles.Service>(Articles.Service);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should have cmsService injected', () => {
        expect(cmsService).toBeDefined();
    });

    it('should have articlesService injected', () => {
        expect(articlesService).toBeDefined();
    });
});
