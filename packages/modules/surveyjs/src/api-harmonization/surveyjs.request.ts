import { SurveyResult } from './surveyjs.model';

export class SurveyJsQuery {
    code!: string;
}

export class SurveyJsSubmitPayload {
    code!: string;
    surveyPayload!: SurveyResult;
}
