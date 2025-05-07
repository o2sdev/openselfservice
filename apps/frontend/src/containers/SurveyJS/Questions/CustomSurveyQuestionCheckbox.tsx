import React from 'react';
import { RendererFactory } from 'survey-core';
import {
    ReactElementFactory,
    ReactQuestionFactory,
    SurveyQuestionCheckbox,
    SurveyQuestionCheckboxItem,
} from 'survey-react-ui';

import { CheckboxWithLabel } from '@o2s/ui/components/checkbox';
import { cn } from '@o2s/ui/lib/utils';

import { Fieldset } from '../Components/Fieldset/Fieldset';

class CustomSurveyQuestionCheckbox extends SurveyQuestionCheckbox {
    renderElement() {
        return (
            <Fieldset legend={this.question.locTitle.renderedHtml}>
                {this.getItems('', this.question.dataChoices)}
            </Fieldset>
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
            <CheckboxWithLabel
                id={this.question.getItemId(this.item)}
                value={this.item.value}
                checked={this.question.isItemSelected(this.item)}
                disabled={this.question.readOnly}
                onCheckedChange={(value) => {
                    this.question.clickItemHandler(this.item, value === true);
                }}
                aria-invalid={!!this.question.errors?.length}
                className={cn(this.question.errors?.length && 'border-destructive')}
                label={this.renderLocString(this.item.locText, this.textStyle)}
            />
        );
    }
}

ReactElementFactory.Instance.registerElement('CustomSurveyQuestionCheckboxItem', function (props) {
    return React.createElement(CustomSurveyQuestionCheckboxItem, props);
});
