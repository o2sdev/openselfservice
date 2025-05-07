'use client';

import { format } from 'date-fns';
import { de, enUS, pl } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { useLocale } from 'next-intl';
import React, { useState } from 'react';
import { RendererFactory } from 'survey-core';
import { ReactQuestionFactory } from 'survey-react-ui';

import { Button } from '@o2s/ui/components/button';
import { Calendar } from '@o2s/ui/components/calendar';
import { InputWithLabel } from '@o2s/ui/components/input';
import { Label } from '@o2s/ui/components/label';
import { Popover, PopoverContent, PopoverTrigger } from '@o2s/ui/components/popover';
import { cn } from '@o2s/ui/lib/utils';

const localeMap = {
    en: {
        locale: enUS,
        format: 'MM.dd.yyyy',
    },
    pl: {
        locale: pl,
        format: 'dd.MM.yyyy',
    },
    de: {
        locale: de,
        format: 'dd.MM.yyyy',
    },
};

interface CustomSurveyQuestionTextProps {
    question: {
        inputId: string;
        title: string;
        value: Date | string | null;
        placeholder: string;
        renderedPlaceholder: string;
        isDisplayMode: boolean;
        errors?: Array<unknown>;
        inputType?: string;
        readOnly: boolean;
    };
}

const CustomSurveyQuestionText: React.FC<CustomSurveyQuestionTextProps> = (props) => {
    const [open, setOpen] = useState(false);
    const locale = useLocale();
    const question = props.question;

    if (question.inputType === 'date') {
        return (
            <div className="grid w-full items-center gap-2">
                <Label htmlFor={question.inputId}>{question.title}</Label>

                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild disabled={question.readOnly}>
                        <Button
                            variant={'outline'}
                            className={cn(
                                'w-full justify-start text-left font-normal',
                                !question.value && 'text-muted-foreground',
                                question.errors?.length && 'border-destructive',
                            )}
                            name={question.inputId}
                            disabled={question.readOnly}
                        >
                            <CalendarIcon />
                            {question.value ? (
                                format(
                                    new Date(question.value),
                                    localeMap[locale as keyof typeof localeMap].format || localeMap.en.format,
                                    {
                                        locale:
                                            localeMap[locale as keyof typeof localeMap].locale || localeMap.en.locale,
                                    },
                                )
                            ) : (
                                <span>{question.placeholder}</span>
                            )}
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={question.value ? new Date(question.value) : undefined}
                            initialFocus
                            id={question.inputId}
                            onSelect={(value) => {
                                question.value = value?.toISOString() || null;
                                setOpen(false);
                            }}
                            showYearSwitcher
                            locale={localeMap[locale as keyof typeof localeMap].locale || localeMap.en.locale}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        );
    }

    return (
        <InputWithLabel
            id={question.inputId}
            name={question.inputId}
            value={question.value?.toString() || ''}
            placeholder={question.placeholder}
            disabled={question.isDisplayMode}
            onChange={(event) => {
                question.value = event.target.value;
            }}
            aria-invalid={!!question.errors?.length}
            className={cn(question.errors?.length && 'border-destructive', 'font-regular')}
            label={question.title}
        />
    );
};

ReactQuestionFactory.Instance.registerQuestion('CustomSurveyQuestionText', function (props) {
    return React.createElement(CustomSurveyQuestionText, props as unknown as CustomSurveyQuestionTextProps);
});

RendererFactory.Instance.registerRenderer('text', 'text-o2s', 'CustomSurveyQuestionText');
