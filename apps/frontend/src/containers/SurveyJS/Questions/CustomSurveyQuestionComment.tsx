import React from 'react';
import { RendererFactory } from 'survey-core';
import { ReactQuestionFactory, SurveyQuestionComment } from 'survey-react-ui';

import { TextareaWithLabel } from '@o2s/ui/components/textarea';
import { cn } from '@o2s/ui/lib/utils';

class CustomSurveyQuestionComment extends SurveyQuestionComment {
    renderElement() {
        return (
            <TextareaWithLabel
                id={this.question.name}
                name={this.question.name}
                value={this.question.value}
                placeholder={this.question.placeholder}
                disabled={this.question.readOnly}
                onChange={(event) => {
                    this.question.value = event.target.value;
                }}
                aria-invalid={!!this.question.errors?.length}
                className={cn(this.question.errors?.length && 'border-destructive')}
                label={this.question.title}
            />
        );
    }
}

ReactQuestionFactory.Instance.registerQuestion('CustomSurveyQuestionComment', function (props) {
    return React.createElement(CustomSurveyQuestionComment, props);
});

RendererFactory.Instance.registerRenderer('comment', 'comment-o2s', 'CustomSurveyQuestionComment');
