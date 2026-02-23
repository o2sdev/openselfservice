export interface CartPromoCodePromotion {
    code: string;
    name?: string;
}

export interface CartPromoCodeLabels {
    title: string;
    inputPlaceholder: string;
    applyButton: string;
    removeLabel: string;
    invalidCodeError: string;
}

export interface CartPromoCodeProps {
    promotions?: CartPromoCodePromotion[];
    labels: CartPromoCodeLabels;
    isLoading?: boolean;
    onApply: (code: string) => Promise<void>;
    onRemove: (code: string) => Promise<void>;
}
