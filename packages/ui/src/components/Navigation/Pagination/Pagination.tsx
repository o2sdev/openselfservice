import React from 'react';

import { Utils } from '@o2s/utils.frontend';

import {
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
    Pagination as PaginationUI,
} from '@o2s/ui/elements/pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/elements/select';
import { Typography } from '@o2s/ui/elements/typography';

import { PaginationProps } from './Pagination.types';

export const Pagination: React.FC<PaginationProps> = ({
    disabled,
    total,
    offset,
    onChange,
    prev,
    next,
    legend,
    limit,
    selectPage,
}) => {
    const currentPage = offset / limit + 1;
    const totalPages = Math.ceil(total / limit);

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex items-center justify-between gap-6">
            <PaginationUI>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            aria-label={prev}
                            disabled={disabled || currentPage <= 1}
                            onClick={() => onChange(currentPage - 1)}
                        />
                    </PaginationItem>

                    <PaginationItem>
                        <div className="flex items-center gap-2">
                            <Select
                                disabled={disabled}
                                value={currentPage.toString()}
                                onValueChange={(value) => onChange(parseInt(value, 10))}
                            >
                                <SelectTrigger className="w-[63px]" aria-label={selectPage}>
                                    <SelectValue>{currentPage}</SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                                            {i + 1}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Typography variant="small" className="text-muted-foreground">
                                {Utils.StringReplace.reactStringReplace(legend, {
                                    total: <span>{total}</span>,
                                    totalPages: <span>{totalPages}</span>,
                                })}
                            </Typography>
                        </div>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationNext
                            aria-label={next}
                            disabled={disabled || currentPage >= totalPages}
                            onClick={() => onChange(currentPage + 1)}
                        />
                    </PaginationItem>
                </PaginationContent>
            </PaginationUI>
        </div>
    );
};
