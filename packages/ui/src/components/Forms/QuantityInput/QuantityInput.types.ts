export interface QuantityInputProps {
    value: number;
    onChange: (newQuantity: number) => void;
    min?: number;
    labels: {
        increase: string;
        decrease: string;
        quantity: string;
    };
}
