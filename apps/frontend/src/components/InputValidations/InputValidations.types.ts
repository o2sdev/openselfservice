export interface InputValidationsRegExpLabel {
    type: string;
    label: string;
    regex: string;
}

export interface InputValidationsProps {
    targetInputName: string;
    validations: InputValidationsRegExpLabel[];
    value: string;
    onValid?: (active: boolean) => void;
}
