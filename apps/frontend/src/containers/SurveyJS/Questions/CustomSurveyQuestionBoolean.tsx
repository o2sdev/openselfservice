import React from 'react';
import { RendererFactory } from 'survey-core';
import { ReactQuestionFactory, SurveyQuestionBoolean } from 'survey-react-ui';

import { ToggleGroup, ToggleGroupItem } from '@o2s/ui/components/toggle-group';
import { cn } from '@o2s/ui/lib/utils';

class CustomSurveyQuestionBoolean extends SurveyQuestionBoolean {
    renderElement() {
        return (
            <ToggleGroup
                type="single"
                value={this.question.booleanValue === null ? undefined : this.question.booleanValue ? 'true' : 'false'}
                size="default"
                variant="outline"
                disabled={this.question.readOnly}
                onValueChange={(value) => {
                    this.question.booleanValue = value === 'true';
                }}
                className={cn(this.question.errors?.length && 'border-destructive', 'justify-start')}
                aria-label={this.question.title}
                aria-invalid={!!this.question.errors?.length}
            >
                <ToggleGroupItem
                    value={this.question.swapOrder ? 'true' : 'false'}
                    className={cn(this.question.errors?.length && 'border-destructive', 'justify-center min-w-12')}
                >
                    {this.renderLocString(this.question.locLabelLeft)}
                </ToggleGroupItem>
                <ToggleGroupItem
                    value={this.question.swapOrder ? 'false' : 'true'}
                    className={cn(this.question.errors?.length && 'border-destructive', 'justify-center min-w-12')}
                >
                    {this.renderLocString(this.question.locLabelRight)}
                </ToggleGroupItem>
            </ToggleGroup>
        );
    }
}

ReactQuestionFactory.Instance.registerQuestion('CustomSurveyQuestionBoolean', function (props) {
    return React.createElement(CustomSurveyQuestionBoolean, props);
});

RendererFactory.Instance.registerRenderer('boolean', 'boolean-o2s', 'CustomSurveyQuestionBoolean');
