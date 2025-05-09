import React, { JSX } from 'react';
import { ReactElementFactory, SurveyNavigationButton } from 'survey-react-ui';

import { Button } from '@o2s/ui/components/button';

class CustomSurveyNavigationButton extends SurveyNavigationButton {
    renderElement(): JSX.Element {
        return (
            <Button
                disabled={this.item.disabled}
                onMouseDown={this.item.data && this.item.data.mouseDown}
                onClick={this.item.action}
            >
                {this.item.title}
            </Button>
        );
    }
}

ReactElementFactory.Instance.registerElement('sv-nav-btn', (props) => {
    return React.createElement(CustomSurveyNavigationButton, props);
});
