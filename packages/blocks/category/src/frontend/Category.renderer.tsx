import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { Category } from './Category.server';
import { CategoryRendererProps } from './Category.types';

export const CategoryRenderer = ({
    slug,
    id,
    accessToken,
    routing,
    renderBlocks,
    hasPriority,
}: CategoryRendererProps) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full">
                        <Loading bars={0} />
                    </div>
                    <Container variant="narrow">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            <li>
                                <Loading bars={12} />
                            </li>
                            <li>
                                <Loading bars={12} />
                            </li>
                        </ul>
                    </Container>
                </div>
            }
        >
            <Category
                id={id}
                slug={slug}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                renderBlocks={renderBlocks}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};

export { CategoryRenderer as Renderer };
