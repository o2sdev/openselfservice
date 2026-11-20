/**
 * Shared Live Preview constants. Kept dependency-free (no stega, no React) so it can be
 * imported by both the API Harmonization service and the client-side affordance.
 */

/** Strapi collection type that owns block content (the `component` collection). */
export const COMPONENT_UID = 'api::component.component';

/**
 * Content Manager preview URL for a single component entry in the Strapi admin.
 * Opening it puts that component in the side editor, where its fields are inline-editable.
 */
export const getComponentPreviewUrl = (cmsUrl: string, documentId: string, locale?: string): string => {
    const localeQuery = locale ? `?plugins[i18n][locale]=${encodeURIComponent(locale)}` : '';
    return `${cmsUrl}/admin/content-manager/collection-types/${COMPONENT_UID}/${documentId}/preview${localeQuery}`;
};
