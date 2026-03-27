import { Models } from '@o2s/framework/modules';

export interface InputValidationsProps {
    targetInputName: string;
    validations: Models.FormField.PatternValidation[];
    value: string;
    onValid?: (active: boolean) => void;
}
