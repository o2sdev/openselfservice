'use client';

import dynamic from 'next/dynamic';

// an intermediary component is required for the dynamic import to work propertly with server components
// @see https://github.com/vercel/next.js/issues/61066
export const FaqDynamic = dynamic(() => import('./Faq.client').then((module) => module.FaqPure));
