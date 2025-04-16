import { SurveyResult } from './models/surveyjs.model';

export class SurveyJsQuery {
    code!: string;
}

export class SurveyJsSubmitPayload {
    code!: string;
    surveyPayload!: SurveyResult;
}
