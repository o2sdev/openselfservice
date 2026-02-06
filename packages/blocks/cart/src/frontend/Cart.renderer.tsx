import React from 'react';

import { CartClient } from './Cart.client';
import { CartRendererProps } from './Cart.types';

/**
 * CartRenderer
 *
 * Renderer used by the page/block rendering pipeline.
 * For now it simply forwards props (without `slug`) to the `CartClient`.
 * TODO: Integrate with the standard renderBlocks pipeline when cart becomes
 *       a first-class block type in the CMS.
 */
export const CartRenderer: React.FC<CartRendererProps> = ({ slug, ...props }) => {
    return <CartClient {...props} />;
};
