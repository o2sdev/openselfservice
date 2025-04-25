import React, { JSX } from 'react';
import { ReactElementFactory, SurveyQuestion } from 'survey-react-ui';

import { Label } from '@o2s/ui/components/label';
import { Typography } from '@o2s/ui/components/typography';

class CustomSurveyQuestion extends SurveyQuestion {
    renderElement(): JSX.Element {
        const question = this.question;
        this.question.errorLocation = 'bottom';

        const header = this.renderHeader();
        const headerTop = question.hasTitleOnLeftTop ? header : null;
        const headerBottom = question.hasTitleOnBottom ? header : null;

        const errorsAboveQuestion = this.question.showErrorsAboveQuestion ? this.renderErrors() : null;
        const errorsBelowQuestion = this.question.showErrorsBelowQuestion ? this.renderErrors() : null;

        const questionContent = this.wrapQuestionContent(this.renderQuestionContent());

        return (
            <>
                <div
                    id={question.id}
                    className={'h-full w-full box-border !p-0'}
                    role={question.ariaRole}
                    aria-required={this.question.ariaRequired}
                    aria-invalid={this.question.ariaInvalid}
                    aria-labelledby={question.ariaLabelledBy}
                    aria-describedby={question.ariaDescribedBy}
                    aria-expanded={question.ariaExpanded === null ? undefined : question.ariaExpanded === 'true'}
                >
                    {headerTop}
                    {errorsAboveQuestion}
                    {questionContent}
                    {errorsBelowQuestion}
                    {headerBottom}
                </div>
            </>
        );
    }

    renderHeader(): JSX.Element {
        if (
            this.question.getType() === 'text' ||
            this.question.getType() === 'comment' ||
            this.question.getType() === 'dropdown'
        ) {
            return <></>;
        }

        return (
            <div className={'header my-2 first:mt-0'}>
                <Label htmlFor={this.question.id}>{this.question.title}</Label>
            </div>
        );
    }

    renderErrors(): JSX.Element {
        if (!this.question.errors?.length) {
            return <></>;
        }

        return (
            <div role="alert" aria-live="polite" className={'mt-2'}>
                {this.question.errors.map((error) => (
                    <Typography variant="small" className="text-destructive" key={error.locText.renderedHtml}>
                        {this.renderLocString(error.locText)}
                    </Typography>
                ))}
            </div>
        );
    }
}

ReactElementFactory.Instance.registerElement('question', function (props) {
    return React.createElement(CustomSurveyQuestion, props);
});
