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

    describe('getBlockConfig - HeroSectionBlock', () => {
        it('should return hero section block', async () => {
            const result = await firstValueFrom(
                service.getBlockConfig({ id: 'hero-section-1', locale: 'en', blockType: 'HeroSectionBlock' }),
            );

            expect(result).toBeDefined();
            expect((result as Record<string, unknown>).id).toBe('hero-section-1');
        });
    });

    describe('getBlockConfig - FaqBlock', () => {
        it('should return FAQ block', async () => {
            const result = await firstValueFrom(
                service.getBlockConfig({ id: 'faq', locale: 'en', blockType: 'FaqBlock' }),
            );

            expect(result).toBeDefined();
        });
    });

    describe('getBlockConfig - BentoGridBlock', () => {
        it('should return bento grid block', async () => {
            const result = await firstValueFrom(
                service.getBlockConfig({ id: 'bento-grid-1', locale: 'en', blockType: 'BentoGridBlock' }),
            );

            expect(result).toBeDefined();
            expect((result as Record<string, unknown>).id).toBe('bento-grid-1');
        });
    });

    describe('getBlockConfig - FeatureSectionBlock', () => {
        it('should return feature section block', async () => {
            const result = await firstValueFrom(
                service.getBlockConfig({ id: 'feature-section-1', locale: 'en', blockType: 'FeatureSectionBlock' }),
            );

            expect(result).toBeDefined();
            expect((result as Record<string, unknown>).id).toBe('feature-section-1');
        });
    });

    describe('getBlockConfig - CtaSectionBlock', () => {
        it('should return CTA section block', async () => {
            const result = await firstValueFrom(
                service.getBlockConfig({ id: 'cta-section-1', locale: 'en', blockType: 'CtaSectionBlock' }),
            );

            expect(result).toBeDefined();
            expect((result as Record<string, unknown>).id).toBe('cta-section-1');
        });
    });

    describe('getBlockConfig - MediaSectionBlock', () => {
        it('should return media section block', async () => {
            const result = await firstValueFrom(
                service.getBlockConfig({ id: 'media-section-1', locale: 'en', blockType: 'MediaSectionBlock' }),
            );

            expect(result).toBeDefined();
            expect((result as Record<string, unknown>).id).toBe('media-section-1');
        });
    });

    describe('getBlockConfig - PricingSectionBlock', () => {
        it('should return pricing section block', async () => {
            const result = await firstValueFrom(
                service.getBlockConfig({ id: 'pricing-section-1', locale: 'en', blockType: 'PricingSectionBlock' }),
            );

            expect(result).toBeDefined();
            expect((result as Record<string, unknown>).id).toBe('pricing-section-1');
        });
    });

    describe('getBlockConfig - QuickLinksBlock', () => {
        it('should return quick links block', async () => {
            const result = await firstValueFrom(
                service.getBlockConfig({ id: 'quick-links-1', locale: 'en', blockType: 'QuickLinksBlock' }),
            );

            expect(result).toBeDefined();
            expect((result as Record<string, unknown>).id).toBe('quick-links-1');
        });
    });

    describe('getBlockConfig - FeatureSectionGridBlock', () => {
        it('should return feature section grid block', async () => {
            const result = await firstValueFrom(
                service.getBlockConfig({
                    id: 'feature-section-grid-1',
                    locale: 'en',
                    blockType: 'FeatureSectionGridBlock',
                }),
            );

            expect(result).toBeDefined();
            expect((result as Record<string, unknown>).id).toBe('feature-section-grid-1');
        });
    });
});
