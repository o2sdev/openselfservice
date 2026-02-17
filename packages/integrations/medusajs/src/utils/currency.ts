import { BadRequestException } from '@nestjs/common';

import { Models } from '@o2s/framework/modules';

export function parseCurrency(code: string | undefined | null): Models.Price.Currency {
    if (typeof code !== 'string') {
        throw new BadRequestException(`Invalid currency: ${code}`);
    }

    return code.toUpperCase() as Models.Price.Currency;
}
