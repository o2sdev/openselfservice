import React, { JSX } from 'react';
import { Action, Base, SurveyModel } from 'survey-core';
import { ReactElementFactory, SurveyElementBase } from 'survey-react-ui';

import { Button } from '@o2s/ui/elements/button';

// SurveyJS v3 renders navigation buttons through the action bar and no longer exposes the legacy
// `sv-nav-btn` element / `SurveyNavigationButton` class. Instead we register a custom element that
// renders the O2S <Button> from the action item and assign it as the `component` of the survey's
// navigation actions (see applyO2sNavigationButtons). Extending SurveyElementBase keeps the button
// reactive to state changes (e.g. the "next" action enabling/disabling on validation), the same way
// SurveyJS's own SurveyAction renderer works.
export const O2S_NAV_BUTTON_COMPONENT = 'o2s-nav-btn';

interface O2sNavigationButtonProps {
    item: Action;
}

class O2sNavigationButton extends SurveyElementBase<O2sNavigationButtonProps, unknown> {
    private get item(): Action {
        return this.props.item;
    }

    protected getStateElement(): Base {
        return this.item;
    }

    renderElement(): JSX.Element {
        const item = this.item;
        return (
            <Button disabled={item.disabled} onMouseDown={item.data && item.data.mouseDown} onClick={item.action}>
                {item.title}
            </Button>
        );
    }
}

ReactElementFactory.Instance.registerElement(O2S_NAV_BUTTON_COMPONENT, (props) =>
    React.createElement(O2sNavigationButton, props as O2sNavigationButtonProps),
);

/**
 * Routes the survey's navigation buttons (previous / next / complete / preview) through the custom
 * O2S element registered above, preserving the O2S <Button> look after the SurveyJS v3 upgrade.
 */
export const applyO2sNavigationButtons = (survey: SurveyModel): void => {
    survey.navigationBar.actions.forEach((action) => {
        action.component = O2S_NAV_BUTTON_COMPONENT;
    });
};
