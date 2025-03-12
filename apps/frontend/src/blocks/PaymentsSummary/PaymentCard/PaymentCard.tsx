import { ArrowUpRight, CircleAlert, CreditCard } from 'lucide-react';
import reactStringReplace from 'react-string-replace';

import { Button } from '@o2s/ui/components/button';
import { Card } from '@o2s/ui/components/card';
import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { useGlobalContext } from '@/providers/GlobalProvider';

import { PaymentCardProps } from './PaymentCard.types';
import { Currency } from '@/hooks/usePriceService';

export const PaymentCard: React.FC<PaymentCardProps> = ({ data, variant = 'default' }) => {
    const { title, amount, message, noPaymentsMessage, buttonLabel, overdueDays, currency } = data;

    const { priceService } = useGlobalContext();

    const activeState = amount.value > 0;

    const destructiveIconMap = activeState ? <CircleAlert className="h-6 w-6 text-destructive" /> : null;
    const defaultIconMap = <CreditCard className="h-6 w-6" />;

    const className = cn(
        'text-foreground',
        variant === 'destructive' && 'text-destructive text',
        variant === 'default' && 'text-foreground',
    );

    return (
        <Card className="w-full">
            <div className="p-6 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <Typography variant="subtitle">{title}</Typography>
                    {variant === 'destructive' ? destructiveIconMap : defaultIconMap}
                </div>

                <div className="flex justify-between items-end gap-4">
                    <div className="flex flex-col gap-2">
                        <Typography
                            variant="highlightedBig"
                            className={cn(activeState ? className : 'text-muted-foreground')}
                        >
                            {priceService.formatPrice(amount, currency as Currency).format}
                        </Typography>
                        {activeState ? (
                            <Typography
                                variant="body"
                                className={cn(variant === 'destructive' ? className : 'text-muted-foreground')}
                            >
                                {reactStringReplace(message, /{days}/g, (match, i) => (
                                    <span key={i}>
                                        <span className="mx-0.5">{overdueDays}</span>
                                        {match}
                                    </span>
                                ))}
                            </Typography>
                        ) : (
                            <Typography variant="body" className="text-muted-foreground">
                                {noPaymentsMessage}
                            </Typography>
                        )}
                    </div>
                    {activeState && buttonLabel && (
                        <Button
                            variant={variant === 'destructive' ? 'destructive' : 'secondary'}
                            size="sm"
                            onClick={() => console.log('clicked')}
                            className="flex items-center gap-2"
                        >
                            <ArrowUpRight className="h-4 w-4" />
                            {buttonLabel}
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
};
