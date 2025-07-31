import { CircleAlert } from 'lucide-react';
import React from 'react';

import { RichText } from '@o2s/ui/components/RichText';

import { Typography } from '@o2s/ui/elements/typography';

import { NoResultsProps } from './NoResults.types';

export const NoResults: React.FC<NoResultsProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="p-3 border rounded-lg border-gray-200">
                <CircleAlert className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-2  items-center">
                <Typography variant="subtitle" asChild>
                    <h4>{title}</h4>
                </Typography>
                {description && <RichText content={description} className="text-muted-foreground" />}
            </div>
        </div>
    );
};
