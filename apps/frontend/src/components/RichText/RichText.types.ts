import { TypographyProps } from '@o2s/ui/components/typography';

export interface RichTextProps {
    content?: string;
    baseFontSize?: Extract<TypographyProps['variant'], 'small' | 'body' | 'large'>;
    className?: string;
    startingHeadingLevel?: number;
}
