import { BadRequestException } from '@nestjs/common';

import { Models } from '@o2s/framework/modules';

export function mapPriceRequired(
    value: number | undefined | null,
    currency: Models.Price.Currency,
    context: string,
): Models.Price.Price {
    if (!value) {
        throw new BadRequestException(`${context}: price value is missing or invalid`);
    }
    return { value, currency };
}
