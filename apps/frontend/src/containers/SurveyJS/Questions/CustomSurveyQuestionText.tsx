import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { RendererFactory } from 'survey-core';
import { ReactQuestionFactory, SurveyQuestionText } from 'survey-react-ui';

import { Button } from '@o2s/ui/components/button';
import { Calendar } from '@o2s/ui/components/calendar';
import { Input } from '@o2s/ui/components/input';
import { Label } from '@o2s/ui/components/label';
import { Popover, PopoverContent, PopoverTrigger } from '@o2s/ui/components/popover';
import { cn } from '@o2s/ui/lib/utils';

interface CustomSurveyQuestionTextState {
    open: boolean;
}

class CustomSurveyQuestionText extends SurveyQuestionText {
    state: CustomSurveyQuestionTextState = {
        open: false,
    };

    render() {
        return this.renderElement();
    }

    renderElement() {
        if (this.question.inputType === 'date') {
            return (
                <div className="whitespace-normal">
                    <div className="grid w-full items-center gap-2">
                        <Label htmlFor={this.question.inputId}>{this.question.title}</Label>

                        <Popover open={this.state.open} onOpenChange={(open) => this.setState({ open })}>
                            <PopoverTrigger asChild disabled={this.isDisplayMode}>
                                <Button
                                    variant={'outline'}
                                    className={cn(
                                        'w-full justify-start text-left font-normal',
                                        !this.question.value && 'text-muted-foreground',
                                        this.question.errors?.length && 'border-destructive',
                                    )}
                                    name={this.question.inputId}
                                    disabled={this.isDisplayMode}
                                >
                                    <CalendarIcon />
                                    {this.question.value ? (
                                        format(new Date(this.question.value), 'dd.MM.yyyy')
                                    ) : (
                                        <span>{this.question.placeholder}</span>
                                    )}
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={this.question.value}
                                    initialFocus
                                    id={this.question.inputId}
                                    onSelect={(value) => {
                                        this.question.value = value;
                                        this.setState({ open: false });
                                    }}
                                    // TODO: add translations
                                    // locale={}
                                    // labels={{
                                    //     labelMonthDropdown: () => 'TODO',
                                    //     labelYearDropdown: () => 'TODO',
                                    //     labelNext: () => 'TODO',
                                    //     labelPrevious: () => 'TODO',
                                    //     labelWeekday: () => 'TODO',
                                    //     labelWeekNumber: () => 'TODO',
                                    // }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            );
        }

        return (
            <div className={'whitespace-normal'}>
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor={this.question.inputId}>{this.question.title}</Label>
                    <Input
                        id={this.question.inputId}
                        name={this.question.inputId}
                        value={this.question.value || ''}
                        placeholder={this.question.renderedPlaceholder}
                        disabled={this.isDisplayMode}
                        onChange={(event) => {
                            this.question.value = event.target.value;
                        }}
                        aria-invalid={!!this.question.errors?.length}
                        className={cn(this.question.errors?.length && 'border-destructive', 'font-regular')}
                    />
                </div>
            </div>
        );
    }
}

ReactQuestionFactory.Instance.registerQuestion('CustomSurveyQuestionText', function (props) {
    return React.createElement(CustomSurveyQuestionText, props);
});

RendererFactory.Instance.registerRenderer('text', 'text-o2s', 'CustomSurveyQuestionText');
