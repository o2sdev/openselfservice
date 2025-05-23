export interface InputValidationsRegExpLabel {
    id: string;
    type: 'min' | 'lowercase' | 'uppercase' | 'digit' | 'special' | 'nospace';
    label: string;
    regex: string;
}

export interface InputValidationsProps {
    targetInputName: string;
    validations: InputValidationsRegExpLabel[];
    value: string;
    onValid?: (active: boolean) => void;
}
