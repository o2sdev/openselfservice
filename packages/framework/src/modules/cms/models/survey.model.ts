export class Survey {
    code!: string;
    surveyId!: string;
    requiredRoles!: string[];
    surveyType!: string;
    submitDestination!: string[];
    postId!: string;
    labels!: {
        requiredLabel: string;
        optionalLabel: string;
    };
}
