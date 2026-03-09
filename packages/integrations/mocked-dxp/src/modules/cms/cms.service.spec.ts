import { firstValueFrom } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { CmsService } from './cms.service';

vi.mock('@/utils/delay', () => ({
    responseDelay: () => (source: unknown) => source,
}));

describe('CmsService', () => {
    let service: CmsService;

    beforeEach(() => {
        service = new CmsService();
    });

    describe('getEntry', () => {
        it('should return empty object', async () => {
            const result = await firstValueFrom(service.getEntry({ id: 'test', locale: 'en' }));
            expect(result).toEqual({});
        });
    });

    describe('getEntries', () => {
        it('should return empty object', async () => {
            const result = await firstValueFrom(service.getEntries({ locale: 'en', type: 'test' }));
            expect(result).toEqual({});
        });
    });

    describe('getAppConfig', () => {
        it('should return app config for English locale', async () => {
            const result = await firstValueFrom(service.getAppConfig({ locale: 'en', referrer: '/' }));

            expect(result).toBeDefined();
            expect(result).toHaveProperty('header');
            expect(result).toHaveProperty('footer');
        });
    });

    describe('getPage', () => {
        it('should return a page for a valid slug', async () => {
            const result = await firstValueFrom(service.getPage({ slug: '/', locale: 'en' }));

            expect(result).toBeDefined();
            expect(result?.slug).toBe('/');
        });

        it('should return undefined for an unknown slug', async () => {
            const result = await firstValueFrom(service.getPage({ slug: '/non-existent-page-xyz', locale: 'en' }));

            expect(result).toBeUndefined();
        });
    });

    describe('getPages', () => {
        it('should return all pages for English locale', async () => {
            const result = await firstValueFrom(service.getPages({ locale: 'en' }));

            expect(Array.isArray(result)).toBe(true);
            expect(result.length).toBeGreaterThan(0);
        });
    });

    describe('getLoginPage', () => {
        it('should return login page', async () => {
            const result = await firstValueFrom(service.getLoginPage({ locale: 'en' }));

            expect(result).toBeDefined();
        });
    });

    describe('getNotFoundPage', () => {
        it('should return not found page', async () => {
            const result = await firstValueFrom(service.getNotFoundPage({ locale: 'en' }));

            expect(result).toBeDefined();
        });
    });

    describe('getHeader', () => {
        it('should return header for English locale', async () => {
            const result = await firstValueFrom(service.getHeader({ id: 'header', locale: 'en' }));

            expect(result).toBeDefined();
            expect(result).toHaveProperty('logo');
        });
    });

    describe('getFooter', () => {
        it('should return footer for English locale', async () => {
            const result = await firstValueFrom(service.getFooter({ id: 'footer', locale: 'en' }));

            expect(result).toBeDefined();
        });
    });

    describe('getHeroSectionBlock', () => {
        it('should return hero section block', async () => {
            const result = await firstValueFrom(service.getHeroSectionBlock({ id: 'hero-section-1', locale: 'en' }));

            expect(result).toBeDefined();
            expect(result.id).toBe('hero-section-1');
        });
    });

    describe('getFaqBlock', () => {
        it('should return FAQ block', async () => {
            const result = await firstValueFrom(service.getFaqBlock({ id: 'faq', locale: 'en' }));

            expect(result).toBeDefined();
        });
    });

    describe('getBentoGridBlock', () => {
        it('should return bento grid block', async () => {
            const result = await firstValueFrom(service.getBentoGridBlock({ id: 'bento-grid-1', locale: 'en' }));

            expect(result).toBeDefined();
            expect(result.id).toBe('bento-grid-1');
        });
    });

    describe('getFeatureSectionBlock', () => {
        it('should return feature section block', async () => {
            const result = await firstValueFrom(
                service.getFeatureSectionBlock({ id: 'feature-section-1', locale: 'en' }),
            );

            expect(result).toBeDefined();
            expect(result.id).toBe('feature-section-1');
        });
    });

    describe('getCtaSectionBlock', () => {
        it('should return CTA section block', async () => {
            const result = await firstValueFrom(service.getCtaSectionBlock({ id: 'cta-section-1', locale: 'en' }));

            expect(result).toBeDefined();
            expect(result.id).toBe('cta-section-1');
        });
    });

    describe('getMediaSectionBlock', () => {
        it('should return media section block', async () => {
            const result = await firstValueFrom(service.getMediaSectionBlock({ id: 'media-section-1', locale: 'en' }));

            expect(result).toBeDefined();
            expect(result.id).toBe('media-section-1');
        });
    });

    describe('getPricingSectionBlock', () => {
        it('should return pricing section block', async () => {
            const result = await firstValueFrom(
                service.getPricingSectionBlock({ id: 'pricing-section-1', locale: 'en' }),
            );

            expect(result).toBeDefined();
            expect(result.id).toBe('pricing-section-1');
        });
    });

    describe('getQuickLinksBlock', () => {
        it('should return quick links block', async () => {
            const result = await firstValueFrom(service.getQuickLinksBlock({ id: 'quick-links-1', locale: 'en' }));

            expect(result).toBeDefined();
            expect(result.id).toBe('quick-links-1');
        });
    });

    describe('getFeatureSectionGridBlock', () => {
        it('should return feature section grid block', async () => {
            const result = await firstValueFrom(
                service.getFeatureSectionGridBlock({ id: 'feature-section-grid-1', locale: 'en' }),
            );

            expect(result).toBeDefined();
            expect(result.id).toBe('feature-section-grid-1');
        });
    });
});
