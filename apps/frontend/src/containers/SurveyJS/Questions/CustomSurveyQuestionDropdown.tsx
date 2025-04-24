import React from 'react';
import { RendererFactory } from 'survey-core';
import { ReactQuestionFactory, SurveyQuestionDropdown } from 'survey-react-ui';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/components/select';
import { cn } from '@o2s/ui/lib/utils';

interface Choice {
    value: string;
    text: string;
}

class CustomSurveyQuestionDropdown extends SurveyQuestionDropdown {
    renderElement() {
        return (
            <div className="grid w-full items-center gap-2">
                <Select
                    value={this.question.value}
                    onValueChange={(value) => {
                        this.question.value = value;
                    }}
                    disabled={this.isDisplayMode}
                >
                    <SelectTrigger className={cn(this.question.errors?.length && 'border-destructive')}>
                        <SelectValue placeholder={this.question.renderedPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {this.question.visibleChoices.map((choice: Choice) => (
                            <SelectItem key={choice.value} value={choice.value}>
                                {choice.text}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        );
    }
}

ReactQuestionFactory.Instance.registerQuestion('CustomSurveyQuestionDropdown', function (props) {
    return React.createElement(CustomSurveyQuestionDropdown, props);
});

RendererFactory.Instance.registerRenderer('dropdown', 'dropdown-o2s', 'CustomSurveyQuestionDropdown');
