import { SurveyResult } from './models/surveyjs.model';

export class SurveyJsQuery {
    surveyId!: string;
}

export class SurveyJsSubmitPayload {
    code!: string;
    surveyPayload!: SurveyResult;
}
