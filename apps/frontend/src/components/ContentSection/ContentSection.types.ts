export interface ContentSectionProps {
    title?: string;
    description?: string;
    additionalLink?: {
        url: string;
        label: string;
    };
    children: React.ReactNode;
}
