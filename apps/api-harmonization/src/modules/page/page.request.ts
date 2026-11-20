export class GetInitQuery {
    referrer!: string;
    /** When true, returns draft/preview CMS content (same contract as the block endpoints). */
    preview?: boolean;
}

export class GetPageQuery {
    slug!: string;
    /** When true, returns draft/preview CMS content (same contract as the block endpoints). */
    preview?: boolean;
}
