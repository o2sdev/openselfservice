'use client';
import React from 'react';
import { Mappings } from '@o2s/utils.frontend';
import { cn } from '@o2s/ui/lib/utils';
import { InfoCard } from '@o2s/ui/components/Cards/InfoCard';
import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { RichText } from '@o2s/ui/components/RichText';
import { Typography } from '@o2s/ui/elements/typography';
export const TicketSummaryPure = ({ ...component }) => {
    const { infoCards, layout } = component;
    if (!infoCards || infoCards.length === 0) {
        return null;
    }
    const isVertical = layout === 'vertical';
    const containerClass = cn('w-full gap-6', isVertical ? 'flex flex-col' : 'grid grid-cols-1 md:grid-cols-3');
    return (React.createElement("div", { className: containerClass }, infoCards.map((infoCard, index) => {
        const colorClass = infoCard.variant &&
            Mappings.TicketSummary.ticketSummaryVariants[infoCard.variant];
        return (React.createElement(InfoCard, { key: index, title: infoCard.title, value: React.createElement(Typography, { variant: "highlightedBig", className: colorClass }, infoCard.value), description: infoCard.description ? (React.createElement("div", { className: "line-clamp-3" },
                React.createElement(RichText, { content: infoCard.description, className: colorClass }))) : undefined, icon: infoCard.icon ? (React.createElement(DynamicIcon, { name: infoCard.icon, className: colorClass })) : undefined }));
    })));
};
