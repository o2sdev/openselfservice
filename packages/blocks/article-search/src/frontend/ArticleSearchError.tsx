import React from 'react';

import { Container } from '@o2s/ui/components/Container';

import { Typography } from '@o2s/ui/elements/typography';

// comment: simple inline error component for article-search block when backend is unavailable
export const ArticleSearchError: React.FC = () => {
    return (
        <Container variant="narrow">
            <div className="w-full flex flex-col gap-2 py-4">
                <Typography variant="h2" asChild>
                    <h2>Unable to connect to the backend</h2>
                </Typography>
                <Typography variant="body">
                    Make sure that the api-harmonization service is running and then refresh Storybook.
                </Typography>
            </div>
        </Container>
    );
};
