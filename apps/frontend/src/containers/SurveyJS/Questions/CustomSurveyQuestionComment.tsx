import React from 'react';
import { RendererFactory } from 'survey-core';
import { ReactQuestionFactory, SurveyQuestionComment } from 'survey-react-ui';

import { Label } from '@o2s/ui/components/label';
import { Textarea } from '@o2s/ui/components/textarea';
import { cn } from '@o2s/ui/lib/utils';

class CustomSurveyQuestionComment extends SurveyQuestionComment {
    renderElement() {
        return (
            <div className={'whitespace-normal'}>
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor={this.question.inputId}>{this.question.title}</Label>
                    <Textarea
                        id={this.question.inputId}
                        name={this.question.inputId}
                        value={this.question.value}
                        placeholder={this.question.renderedPlaceholder}
                        disabled={this.isDisplayMode}
                        onChange={(event) => {
                            this.question.value = event.target.value;
                        }}
                        aria-invalid={!!this.question.errors?.length}
                        className={cn(this.question.errors?.length && 'border-destructive')}
                    />
                </div>
            </div>
        );
    }
}

ReactQuestionFactory.Instance.registerQuestion('CustomSurveyQuestionComment', function (props) {
    return React.createElement(CustomSurveyQuestionComment, props);
});

RendererFactory.Instance.registerRenderer('comment', 'comment-o2s', 'CustomSurveyQuestionComment');
