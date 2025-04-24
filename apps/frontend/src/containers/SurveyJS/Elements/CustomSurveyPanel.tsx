import React, { JSX } from 'react';
import { PanelModel } from 'survey-core';
import { ReactElementFactory, SurveyElementErrors, SurveyPanel } from 'survey-react-ui';

import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

class CustomSurveyPanel extends SurveyPanel {
    private hasBeenExpanded1: boolean = false;

    renderElement(): JSX.Element {
        const header = this.renderHeader();
        const errors = (
            <SurveyElementErrors
                element={this.panelBase}
                cssClasses={this.panelBase.cssClasses}
                creator={this.creator}
            />
        );
        const style = {
            paddingLeft: this.panel.innerPaddingLeft,
            display: !this.panel.isCollapsed ? undefined : 'none',
            margin: '0',
            padding: '0',
        };
        let content: JSX.Element | null = null;
        if (!this.panel.isCollapsed || this.hasBeenExpanded1) {
            this.hasBeenExpanded1 = true;
            const rows: JSX.Element[] = this.renderRows(this.panelBase.cssClasses);
            const className: string = this.panelBase.cssClasses.panel.content;
            content = this.renderContent(style, rows, className);
        }
        const focusIn = () => {
            if (this.panelBase) (this.panelBase as PanelModel).focusIn();
        };

        const inner = (
            <>
                {header}
                {content}
                {errors}
            </>
        );

        return (
            <>
                <div
                    ref={this.rootRef}
                    className="rounded-lg border bg-card text-card-foreground !shadow-xs !p-4 !m-0"
                    onFocus={focusIn}
                    id={this.panelBase.id}
                >
                    {inner}
                </div>
            </>
        );
    }

    renderHeader() {
        if (!this.panel.hasTitle && !this.panel.hasDescription) {
            return <></>;
        }

        return (
            <div className={'my-4 first:mt-0'}>
                <Typography>{this.panel.title}</Typography>
            </div>
        );
    }

    renderContent(style: React.CSSProperties, rows: JSX.Element[], className: string): JSX.Element {
        const bottom: JSX.Element | null = this.renderBottom();
        return (
            <div style={style} className={cn(className, 'p-0')} id={this.panel.contentId}>
                {bottom}
                {rows}
            </div>
        );
    }
}

ReactElementFactory.Instance.registerElement('panel', function (props) {
    return React.createElement(CustomSurveyPanel, props);
});
