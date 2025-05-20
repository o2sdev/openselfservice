import { Card } from '@o2s/ui/components/card';
import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { DynamicIcon } from '@/components/DynamicIcon/DynamicIcon';
import { RichText } from '@/components/RichText/RichText';

import { InfoCardProps } from './InfoCard.types';

export const InfoCard: React.FC<Readonly<InfoCardProps>> = ({ title, value, description, icon, button, className }) => {
    return (
        <Card className={cn('h-full w-full', className)}>
            <div className="p-6 flex flex-col gap-2">
                <div className="flex flex-row justify-between items-top gap-2">
                    <Typography variant="subtitle">{title}</Typography>
                    {typeof icon === 'string' ? <DynamicIcon name={icon} /> : icon}
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-end gap-2">
                    <div className="flex flex-col gap-2 w-full">
                        {typeof value === 'string' ? <Typography variant="highlightedBig">{value}</Typography> : value}
                        {typeof description === 'string' ? (
                            <div className="line-clamp-3">
                                <RichText content={description} className="text-muted-foreground" />
                            </div>
                        ) : (
                            description
                        )}
                    </div>
                    <div className="w-full sm:w-fit mt-2">{button}</div>
                </div>
            </div>
        </Card>
    );
};
