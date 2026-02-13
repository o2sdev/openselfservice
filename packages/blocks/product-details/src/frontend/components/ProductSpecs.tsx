import React from 'react';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { RichText } from '@o2s/ui/components/RichText';

import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

interface ProductSpecsProps {
    keySpecs?: { value?: string; icon?: string }[];
    detailedSpecs?: { label: string; value: string; category?: string }[];
    labels: {
        specifications: string;
        description: string;
    };
    description?: string;
    sku?: string;
    location?: string;
    offer: string;
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({
    keySpecs,
    detailedSpecs,
    labels,
    description,
    sku,
    location,
    offer,
}) => {
    return (
        <>
            {keySpecs && keySpecs.length > 0 && (
                <>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 list-none">
                        {keySpecs.map((spec, index) => (
                            <li key={index} className="flex flex-col items-center gap-2 p-4 bg-muted/50 rounded-lg">
                                {spec.icon && <DynamicIcon name={spec.icon} size={32} className="text-primary" />}
                                {spec.value && (
                                    <Typography className="text-center font-medium">{spec.value}</Typography>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Separator />
                </>
            )}

            {description && (
                <div className="flex flex-col gap-4">
                    <Typography variant="h2" asChild>
                        <h2>{labels.description}</h2>
                    </Typography>
                    <RichText content={description} />
                </div>
            )}

            <Separator />

            {detailedSpecs && detailedSpecs.length > 0 && (
                <div className="flex flex-col gap-4">
                    <Typography variant="h2" asChild>
                        <h2>{labels.specifications}</h2>
                    </Typography>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
                        {detailedSpecs.map((spec, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center py-3 px-4 bg-muted/30 rounded-md"
                            >
                                <Typography className="text-muted-foreground">{spec.label}</Typography>
                                <Typography className="font-medium">{spec.value}</Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {(sku || location) && (
                <>
                    <Separator />
                    <div className="flex items-center gap-6 flex-wrap">
                        {sku && (
                            <div className="flex items-center gap-2">
                                <DynamicIcon name="FileText" size={20} className="text-muted-foreground" />
                                <Typography>
                                    {offer}: {sku}
                                </Typography>
                            </div>
                        )}
                        {location && (
                            <div className="flex items-center gap-2">
                                <DynamicIcon name="MapPin" size={20} className="text-muted-foreground" />
                                <Typography>{location}</Typography>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
};
