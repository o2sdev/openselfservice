import React from 'react';
import reactStringReplaceOriginal from 'react-string-replace';

export const reactStringReplace = (
    template: string,
    replacements: Record<string, React.ReactNode>,
): React.ReactNode => {
    let result: React.ReactNode[] = [template];

    Object.keys(replacements).forEach((key) => {
        result = reactStringReplaceOriginal(result, `{${key}}`, () => (
            <React.Fragment key={key}>{replacements[key]}</React.Fragment>
        ));
    });

    return result;
};
