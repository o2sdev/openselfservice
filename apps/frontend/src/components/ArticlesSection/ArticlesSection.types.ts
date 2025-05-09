export interface ArticlesSectionProps {
    title?: string;
    description?: string;
    allArticlesLink?: {
        url: string;
        label: string;
    };
    children: React.ReactNode;
}
