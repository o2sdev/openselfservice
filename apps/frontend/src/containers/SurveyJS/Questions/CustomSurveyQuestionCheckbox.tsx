import React from 'react';
import { RendererFactory } from 'survey-core';
import {
    ReactElementFactory,
    ReactQuestionFactory,
    SurveyQuestionCheckbox,
    SurveyQuestionCheckboxItem,
} from 'survey-react-ui';

import { Checkbox } from '@o2s/ui/components/checkbox';
import { cn } from '@o2s/ui/lib/utils';

import { Fieldset } from '../Components/Fieldset/Fieldset';

class CustomSurveyQuestionCheckbox extends SurveyQuestionCheckbox {
    renderElement() {
        return (
            <div className={'whitespace-normal'}>
                <Fieldset legend={this.question.locTitle.renderedHtml}>
                    {this.getItems('', this.question.dataChoices)}
                </Fieldset>
            </div>
        );
    }
}

ReactQuestionFactory.Instance.registerQuestion('CustomSurveyQuestionCheckbox ', function (props) {
    return React.createElement(CustomSurveyQuestionCheckbox, props);
});

RendererFactory.Instance.registerRenderer('checkbox', 'checkbox-o2s', 'CustomSurveyQuestionCheckbox ');

class CustomSurveyQuestionCheckboxItem extends SurveyQuestionCheckboxItem {
    renderElement() {
        return (
            <div className="flex items-center space-x-2">
                <Checkbox
                    id={this.question.getItemId(this.item)}
                    value={this.item.value}
                    checked={this.question.isItemSelected(this.item)}
                    disabled={this.isDisplayMode}
                    onCheckedChange={(value) => {
                        this.question.clickItemHandler(this.item, value === true);
                    }}
                    aria-invalid={!!this.question.errors?.length}
                    className={cn(this.question.errors?.length && 'border-destructive')}
                />
                <label
                    htmlFor={this.question.getItemId(this.item)}
                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                >
                    {this.renderLocString(this.item.locText, this.textStyle)}
                </label>
            </div>
        );
    }
}

ReactElementFactory.Instance.registerElement('CustomSurveyQuestionCheckboxItem', function (props) {
    return React.createElement(CustomSurveyQuestionCheckboxItem, props);
});
