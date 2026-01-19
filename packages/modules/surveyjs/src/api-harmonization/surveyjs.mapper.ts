import { Tickets } from '@o2s/framework/modules';

import { Page, Panelbase, SurveyJSLibraryJsonSchema, SurveyJs, SurveyJsRequest, SurveyResult } from './surveyjs.model';

export const mapSurveyJsRequest = (
    surveyPayload: SurveyResult,
    postId: string,
    isPartialCompleted: boolean,
    clientId?: string,
): SurveyJsRequest => {
    return {
        PostId: postId,
        SurveyResult: JSON.stringify(surveyPayload),
        IsPartialCompleted: isPartialCompleted,
        ClientId: `${clientId}$${Date.now()}`,
    };
};

export const mapSurveyJS = (data: SurveyJSLibraryJsonSchema): SurveyJs => {
    return {
        schema: {
            ...data,
            pages: data.pages?.map(
                (page): Page => ({
                    ...page,
                    renderAs: `page-o2s`,
                    // @ts-expect-error no way to determine a single type based on types generated from json schema
                    elements: page.elements?.map((element) => mapData(element)),
                }),
            ),
        },
    };
};

const getItemComponent = (type: string, itemComponent: unknown) => {
    switch (type) {
        case 'radiogroup':
            return 'CustomSurveyQuestionRadioItem';
        case 'checkbox':
            return 'CustomSurveyQuestionCheckboxItem';
        default:
            return itemComponent;
    }
};

const mapData = (element: Panelbase): Panelbase => {
    if (element.elements) {
        return {
            ...element,
            // @ts-expect-error no way to determine a single type based on types generated from json schema
            elements: element.elements.map((element) => mapData(element)),
        };
    }

    if (element.templateElements) {
        return {
            ...element,
            templateElements: element.templateElements
                ? (element.templateElements as Panelbase[]).map((element) => mapData(element as Panelbase))
                : undefined,
        };
    }

    return {
        ...element,
        choicesLazyLoadEnabled:
            element.choicesByUrl &&
            // @ts-expect-error missing types
            element.choicesByUrl.path &&
            // @ts-expect-error missing types
            element.choicesByUrl.valueName &&
            // @ts-expect-error missing types
            element.choicesByUrl.titleName &&
            // @ts-expect-error missing types
            !element.choicesByUrl.url,
        choicesLazyLoadPageSize: 5,
        renderAs: `${element.type}-o2s`,
        itemComponent: getItemComponent(element.type as string, element.itemComponent),
    };
};

/**
 * Maps Survey.js form payload to Ticket creation data.
 * 
 * Survey.js returns files in format: { name: string, type: string (MIME), content: string (base64) }
 * 
 * Expected Survey.js configuration (after fix):
 * - topic: value = "TOOL_REPAIR" (uppercase) - maps to custom field in Zendesk
 * - priority: value = "urgent" (lowercase) - Zendesk API format
 * - type: value = "problem" (lowercase) - Zendesk API format
 */
export const mapSurveyToTicket = (surveyPayload: SurveyResult): Tickets.Request.PostTicketBody => {
    // Map attachments from Survey.js format to Tickets format
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const attachments = surveyPayload.attachments
        ? (Array.isArray(surveyPayload.attachments) ? surveyPayload.attachments : [surveyPayload.attachments])
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .map((file: any) => ({
                  filename: file.name,
                  content: file.content, // base64 encoded
                  contentType: file.type, // MIME type
              }))
        : undefined;

    return {
        title: surveyPayload.title as string,
        description: surveyPayload.description as string,
        topic: surveyPayload.topic as string, // TOOL_REPAIR, FLEET_EXCHANGE, etc. (uppercase)
        priority: surveyPayload.priority as string | undefined, // urgent, high, normal, low (lowercase - Zendesk API)
        type: surveyPayload.type as string | undefined, // problem, incident, question, task (lowercase - Zendesk API)
        attachments,
    };
};
