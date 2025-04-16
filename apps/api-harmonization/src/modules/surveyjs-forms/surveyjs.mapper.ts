import { SurveyJsRequest, SurveyResult } from './models/surveyjs.model';

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
