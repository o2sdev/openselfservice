export interface ContentProps {
    labels: {
        label: string;
        description?: string;
        apply: string;
    };
}

export interface ContextSwitcherFormValues {
    customer: string | undefined;
}
