'use client';

import dynamic from 'next/dynamic';

// an intermediary component is required for the dynamic import to work propertly with server components
// @see https://github.com/vercel/next.js/issues/61066
export const TicketListDynamic = dynamic(() => import('./TicketList.client').then((module) => module.TicketListPure));
