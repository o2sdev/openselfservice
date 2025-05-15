export interface InputValidationRegExpLabel {
    id: string;
    type: 'min' | 'lowercase' | 'uppercase' | 'digit' | 'special' | 'nospace';
    label: string;
    regex: string;
}

export interface InputValidationProps {
    targetInputName: string;
    validations: InputValidationRegExpLabel[];
    value: string;
    onValid?: (active: boolean) => void;
}
