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
 * Maps Survey.js payload to ticket creation format.
 * Extracts standard fields (title, description, ticketFormId, attachments) and passes
 * all other fields as customFields to be mapped by ZendeskFieldMapper.
 *
 * Note: Caller must validate that title, description, and ticketFormId are non-empty before calling this function.
 */
export const mapSurveyToTicket = (surveyPayload: SurveyResult): Tickets.Request.PostTicketBody => {
    // Extract standard fields
    const { title, description, ticketFormId, attachments, ...customFields } = surveyPayload;

    // Map attachments from Survey.js format to Tickets format
    const mappedAttachments = attachments
        ? (Array.isArray(attachments) ? attachments : [attachments])
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .map((file: any) => {
                  // Convert base64 string to Buffer
                  // Survey.js may include data URI prefix (data:image/png;base64,...)
                  const base64Data = file.content.includes(',') ? file.content.split(',')[1] : file.content;

                  return {
                      filename: file.name,
                      content: Buffer.from(base64Data, 'base64'),
                      contentType: file.type, // MIME type
                  };
              })
        : undefined;

    return {
        title: title as string,
        description: description as string,
        ticketFormId: ticketFormId as number,
        attachments: mappedAttachments,
        customFields,
    };
};
