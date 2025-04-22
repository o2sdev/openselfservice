import React from 'react';
import { RendererFactory } from 'survey-core';
import {
    ReactElementFactory,
    ReactQuestionFactory,
    SurveyQuestionRadioItem,
    SurveyQuestionRadiogroup,
} from 'survey-react-ui';

import { Label } from '@o2s/ui/components/label';
import { RadioGroup, RadioGroupItem } from '@o2s/ui/components/radio-group';
import { cn } from '@o2s/ui/lib/utils';

class CustomSurveyQuestionRadiogroup extends SurveyQuestionRadiogroup {
    renderElement() {
        return (
            <div className={'whitespace-normal'}>
                <RadioGroup
                    id={this.question.questionName}
                    disabled={this.isDisplayMode}
                    name={this.question.questionName}
                    onValueChange={(value) => {
                        this.question.renderedValue = value;
                    }}
                    defaultValue={this.question.value}
                    orientation="vertical"
                    aria-invalid={!!this.question.errors?.length}
                    aria-label={this.question.title}
                    className="flex flex-col gap-4"
                >
                    <>{this.getItems('', this.question.dataChoices)}</>
                    {/*empty element to overcome RadioGroup requiring multiple children*/}
                    <></>
                </RadioGroup>
            </div>
        );
    }
}

ReactQuestionFactory.Instance.registerQuestion('CustomSurveyQuestionRadiogroup', function (props) {
    return React.createElement(CustomSurveyQuestionRadiogroup, props);
});

RendererFactory.Instance.registerRenderer('radiogroup', 'radiogroup-o2s', 'CustomSurveyQuestionRadiogroup');

class CustomSurveyQuestionRadioItem extends SurveyQuestionRadioItem {
    renderElement() {
        return (
            <div className="flex items-center space-x-2">
                <RadioGroupItem
                    value={this.item.value}
                    id={this.item.value}
                    className={cn(this.question.errors?.length && 'border-destructive', 'justify-start')}
                />
                <Label
                    htmlFor={this.item.value}
                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                >
                    {this.renderLocString(this.item.locText, this.textStyle)}
                </Label>
            </div>
        );
    }
}

ReactElementFactory.Instance.registerElement('CustomSurveyQuestionRadioItem', function (props) {
    return React.createElement(CustomSurveyQuestionRadioItem, props);
});
