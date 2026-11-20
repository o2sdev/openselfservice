import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { SourceMapContext, createFieldEncoder } from '../../live-preview/encode-source-map';
import { mapFields } from '../cms.fieldMapping.mapper';
import { mapFilters } from '../cms.filters.mapper';
import { mapLink } from '../cms.link.mapper';
import { mapPagination } from '../cms.pagination.mapper';
import { mapTable } from '../cms.table.mapper';

export const mapTicketListBlock = (data: GetComponentQuery): CMS.Model.TicketListBlock.TicketListBlock => {
    const component = data.component!.content[0];
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsTicketList':
            return {
                id: component.id,
                title: component.title,
                subtitle: component.subtitle,
                forms: component.forms?.map((link) => mapLink(link)).filter((link) => link !== undefined),
                table: mapTable(component.table),
                fieldMapping: mapFields(component.fields),
                pagination: mapPagination(component.pagination),
                filters: mapFilters(component.filters),
                noResults: {
                    title: component.noResults.title,
                    description: component.noResults.description,
                },
                labels: {
                    today: configurableTexts.dates.today,
                    yesterday: configurableTexts.dates.yesterday,
                    showMore: configurableTexts.actions.showMore,
                    clickToSelect: configurableTexts.actions.clickToSelect,
                },
                detailsUrl: component.detailsURL as string,
                initialFilters: undefined, // TODO: add initial filters field in CMS
            };
    }

    throw new NotFoundException();
};

/**
 * Live Preview: encode Content Source Maps into the normalized TicketList block.
 * Same-document text only: block `title`/`subtitle` and the embedded `noResults` banner
 * (`content.0.noResults.*`). Column/field labels, `labels` (from the separate
 * configurable-texts document) and `detailsUrl` are intentionally not encoded.
 */
export const encodeTicketListBlock = (
    block: CMS.Model.TicketListBlock.TicketListBlock,
    ctx: SourceMapContext,
): CMS.Model.TicketListBlock.TicketListBlock => {
    const enc = createFieldEncoder(ctx);

    return {
        ...block,
        title: enc(block.title, 'title'),
        subtitle: enc(block.subtitle, 'subtitle'),
        noResults: block.noResults
            ? {
                  ...block.noResults,
                  title: enc(block.noResults.title, 'noResults.title'),
                  description: enc(block.noResults.description, 'noResults.description', 'richtext'),
              }
            : block.noResults,
    };
};
