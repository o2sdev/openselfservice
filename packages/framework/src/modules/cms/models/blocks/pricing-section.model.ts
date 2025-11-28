import { Block, PricingCard } from '@/utils/models';

export class PricingSectionBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    description?: string;
    headingType?: 'h1' | 'h2';
    pricingList?: PricingCard.PricingCard[];
}
