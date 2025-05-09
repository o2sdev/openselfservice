'use client';

import { Modules } from '@o2s/api-harmonization';
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import React, { startTransition, useActionState, useEffect } from 'react';
import { Model } from 'survey-core';
import { Survey as SurveySDK } from 'survey-react-ui';

import { LoadingOverlay } from '@o2s/ui/components/loading-overlay';
import { toast } from '@o2s/ui/hooks/use-toast';
import { cn } from '@o2s/ui/lib/utils';

import { sdk } from '@/api/sdk';

import { useGlobalContext } from '@/providers/GlobalProvider';

import { Loading } from '@/components/Loading/Loading';

import './Elements/CustomSurveyNavigationButton';
import './Elements/CustomSurveyPanel';
import './Elements/CustomSurveyQuestion';
import './Questions/CustomSurveyQuestionBoolean';
import './Questions/CustomSurveyQuestionCheckbox';
import './Questions/CustomSurveyQuestionComment';
import './Questions/CustomSurveyQuestionDropdown';
import './Questions/CustomSurveyQuestionRadioGroup';
import './Questions/CustomSurveyQuestionText';
import { Labels, SurveyAction, SurveyProps, SurveyState } from './Survey.types';

const initialState: SurveyState = {
    isLoading: true,
    error: null,
    model: null,
};

const createSurveyModel = (
    schema: Modules.SurveyjsForms.Model.SurveyJSLibraryJsonSchema,
    locale: string,
    onComplete: (data: Modules.SurveyjsForms.Model.SurveyResult) => void,
): Model => {
    const survey = new Model(schema);

    survey.loadingHtml = '';
    survey.locale = locale;
    survey.css = {
        root: 'bg-transparent text-sm md:text-base [&>*]:[&>*:last-child]:hidden',
        body: '!m-0 box-border',
        header: 'pb-8',
        title: 'scroll-m-20 text-lg md:text-2xl font-semibold tracking-tight first:mt-0',
        description: 'text-base text-muted-foreground font-inherit',
        footer: 'flex flex-wrap gap-8 justify-end mt-6 !p-0 [&_.sv-action--hidden]:hidden',
        page: {
            root: '',
            title: 'scroll-m-20 text-base md:text-xl font-semibold tracking-tight',
            description: 'text-base text-muted-foreground font-inherit',
        },
        row: '!w-full mt-4 first:mt-0 flex flex-row flex-wrap md:!flex-nowrap [.sd-row--multiple]:!gap-4 !ml-0 [&>*]:!p-0',
        pageRow: 'mt-4',
        dropdown: {
            root: 'text-sm',
            control:
                'pl-3 pr-12 h-10 m-0 border border-input rounded-md shadow-none flex space-between text-sm bg-background',
            controlValue: cn(
                survey.css.dropdown.controlValue,
                '!text-sm w-full truncate flex items-center !font-[Inter] font-sans font-normal',
            ),
            filterStringInput: cn(
                survey.css.dropdown.filterStringInput,
                '!text-sm !text-foreground !font-[Inter] font-sans font-normal',
            ),
        },
        list: {
            itemBody: 'p-2 hover:bg-accent rounded-md text-base',
        },
    };

    survey.onGetTitleTagName.add((_model, options) => {
        switch (options.element.getType()) {
            case 'survey':
                options.tagName = 'h2';
                break;
            case 'page':
                options.tagName = 'h3';
                break;
        }
    });

    survey.onComplete.add((model) => onComplete(model.data));

    return survey;
};

const handleError = (error: unknown, labels: Labels) => {
    toast({
        variant: 'destructive',
        title: labels.errors.requestError.title,
        description: labels.errors.requestError.content,
    });

    return error instanceof Error ? error.message : 'Unknown error';
};

export const Survey: React.FC<SurveyProps> = ({ code }) => {
    const session = useSession();
    const token = session.data?.accessToken || '';

    const locale = useLocale();

    const { labels } = useGlobalContext();

    const [state, dispatch] = useActionState((prevState: SurveyState, action: SurveyAction) => {
        switch (action.type) {
            case 'LOAD':
                return { ...prevState, isLoading: true, error: null };
            case 'ERROR':
                return { ...prevState, isLoading: false, error: action.payload };
            case 'SET_MODEL':
                return { ...prevState, isLoading: false, model: action.payload };
            default:
                return prevState;
        }
    }, initialState);

    useEffect(() => {
        const handleSubmit = async (data: Modules.SurveyjsForms.Model.SurveyResult) => {
            startTransition(async () => {
                try {
                    await sdk.modules.submitSurvey(
                        {
                            code,
                            surveyPayload: data,
                        },
                        { 'x-locale': locale },
                        token,
                    );
                } catch (error) {
                    handleError(error, labels);
                }
            });
        };

        const loadSurvey = async () => {
            startTransition(async () => {
                try {
                    dispatch({ type: 'LOAD' });

                    const { schema } = await sdk.modules.getSurvey(
                        {
                            code,
                        },
                        { 'x-locale': locale },
                        token,
                    );

                    if (!schema) {
                        throw new Error(`No survey with code '${code}' found`);
                    }

                    const model = createSurveyModel(schema, locale, handleSubmit);

                    dispatch({ type: 'SET_MODEL', payload: model });
                } catch (error) {
                    dispatch({ type: 'ERROR', payload: handleError(error, labels) });
                }
            });
        };

        loadSurvey();
    }, [dispatch, code, locale, token, labels]);

    return (
        <LoadingOverlay isActive={state.isLoading} fallback={<Loading bars={12} />}>
            <div className={'min-h-[400px]'}>{state.model && <SurveySDK model={state.model} />}</div>
        </LoadingOverlay>
    );
};
