export interface PaymentCardProps {
    variant?: 'default' | 'destructive';
    data: {
        title?: string;
        locale: string;
        currency: string;
        amount: {
            value: number;
        };
        message?: string;
        noPaymentsMessage?: string;
        buttonLabel?: string;
        overdueDays?: number;
    };
}
