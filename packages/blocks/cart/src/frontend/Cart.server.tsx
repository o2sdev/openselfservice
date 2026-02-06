import React from 'react';

import { CartClient } from './Cart.client';
import { CartProps } from './Cart.types';

/**
 * CartServer
 *
 * Server-side entry for the cart block.
 * Currently it only forwards props to the client component.
 * TODO: When a real cart API is available, fetch the initial cart state here and
 *       pass it down as part of the block props.
 */
export const CartServer: React.FC<CartProps> = async (props) => {
    return <CartClient {...props} />;
};
