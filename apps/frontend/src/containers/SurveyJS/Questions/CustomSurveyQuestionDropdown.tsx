import React from 'react';
import { RendererFactory } from 'survey-core';
import { ReactQuestionFactory, SurveyQuestionDropdown } from 'survey-react-ui';

import { SelectContent, SelectItem, SelectTrigger, SelectValue, SelectWithTitle } from '@o2s/ui/components/select';
import { cn } from '@o2s/ui/lib/utils';

interface Choice {
    value: string;
    text: string;
}

class CustomSurveyQuestionDropdown extends SurveyQuestionDropdown {
    renderElement() {
        return (
            <div className="grid w-full items-center gap-2">
                <SelectWithTitle
                    value={this.question.value}
                    onValueChange={(value) => {
                        this.question.value = value;
                    }}
                    disabled={this.question.readOnly}
                    label={this.question.title}
                    id={this.question.name}
                >
                    <SelectTrigger
                        className={cn(this.question.errors?.length && 'border-destructive')}
                        id={this.question.id}
                    >
                        <SelectValue placeholder={this.question.renderedPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {this.question.visibleChoices.map((choice: Choice) => (
                            <SelectItem key={choice.value} value={choice.value}>
                                {choice.text}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </SelectWithTitle>
            </div>
        );
    }
}

ReactQuestionFactory.Instance.registerQuestion('CustomSurveyQuestionDropdown', function (props) {
    return React.createElement(CustomSurveyQuestionDropdown, props);
});

RendererFactory.Instance.registerRenderer('dropdown', 'dropdown-o2s', 'CustomSurveyQuestionDropdown');
