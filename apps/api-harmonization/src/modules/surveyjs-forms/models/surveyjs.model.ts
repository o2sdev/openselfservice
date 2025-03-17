export class SurveyJs {
    schema!: SurveyJSLibraryJsonSchema;
}

export class SurveyResult {
    [question: string]: unknown;
}

export class SurveyJsRequest {
    PostId!: string;
    SurveyResult!: string;
    IsPartialCompleted!: boolean;
    ClientId?: string;
}

export type Htmlconditionitem = Expressionitem & {
    html?: string;
    [k: string]: unknown;
};
export type Page = Panelbase & {
    navigationButtonsVisibility?: 'inherit' | 'show' | 'hide';
    maxTimeToFinish?: number;
    navigationTitle?: string;
    navigationDescription?: string;
    title?: string;
    description?: string;
    [k: string]: unknown;
};
export type Checkbox = Checkboxbase & {
    showSelectAllItem?: boolean;
    separateSpecialChoices?: string;
    maxSelectedChoices?: number;
    selectAllText?: string;
    valuePropertyName?: string;
    itemComponent?: string;
    [k: string]: unknown;
};
export type Checkboxbase = Selectbase & {
    colCount?: 0 | 1 | 2 | 3 | 4 | 5;
    [k: string]: unknown;
};
export type Selectbase = Question & {
    showCommentArea?: string;
    choicesFromQuestion?: string;
    choices?: Itemvalue[];
    choicesFromQuestionMode?: 'all' | 'selected' | 'unselected';
    choicesOrder?: 'none' | 'asc' | 'desc' | 'random';
    hideIfChoicesEmpty?: boolean;
    choicesVisibleIf?: string;
    choicesEnableIf?: string;
    separateSpecialChoices?: boolean;
    showOtherItem?: boolean;
    showNoneItem?: boolean;
    otherPlaceholder?: string;
    noneText?: string;
    otherText?: string;
    otherErrorText?: string;
    storeOthersAsComment?: 'default' | true | false;
    [k: string]: unknown;
};
export type Numericvalidator = Surveyvalidator & {
    minValue?: number;
    maxValue?: number;
    [k: string]: unknown;
};
export type Textvalidator = Surveyvalidator & {
    minLength?: number;
    maxLength?: number;
    allowDigits?: boolean;
    [k: string]: unknown;
};
export type Answercountvalidator = Surveyvalidator & {
    minCount?: number;
    maxCount?: number;
    [k: string]: unknown;
};
export type Regexvalidator = Surveyvalidator & {
    regex?: string;
    [k: string]: unknown;
};
export type Emailvalidator = Surveyvalidator & {
    [k: string]: unknown;
};
export type Expressionvalidator = Surveyvalidator & {
    expression?: string;
    [k: string]: unknown;
};
export type Tagbox = Checkbox & {
    placeholder?: string;
    allowClear?: boolean;
    searchEnabled?: boolean;
    choicesLazyLoadEnabled?: boolean;
    choicesLazyLoadPageSize?: number;
    hideSelectedItems?: boolean;
    closeOnSelect?: boolean;
    itemComponent?: string;
    [k: string]: unknown;
};
export type Ranking = Checkbox & {
    showOtherItem?: string;
    otherText?: string;
    otherErrorText?: string;
    storeOthersAsComment?: string;
    showNoneItem?: string;
    noneText?: string;
    showSelectAllItem?: string;
    selectAllText?: string;
    colCount?: number;
    maxSelectedChoices?: string;
    separateSpecialChoices?: string;
    longTap?: string;
    itemComponent?: string;
    [k: string]: unknown;
};
export type Radiogroup = Checkboxbase & {
    showClearButton?: boolean;
    separateSpecialChoices?: string;
    itemComponent?: string;
    [k: string]: unknown;
};
export type Imagepicker = Checkboxbase & {
    showOtherItem?: string;
    otherText?: string;
    showNoneItem?: string;
    noneText?: string;
    optionsCaption?: string;
    otherErrorText?: string;
    storeOthersAsComment?: string;
    contentMode?: 'image' | 'video';
    imageFit?: 'none' | 'contain' | 'cover' | 'fill';
    imageHeight?: number;
    imageWidth?: number;
    minImageWidth?: string;
    minImageHeight?: string;
    maxImageWidth?: string;
    maxImageHeight?: string;
    showLabel?: boolean;
    colCount?: 0 | 1 | 2 | 3 | 4 | 5;
    multiSelect?: boolean;
    choices?: Imageitemvalue[];
    [k: string]: unknown;
};
export type Imageitemvalue = Itemvalue & {
    imageLink?: string;
    [k: string]: unknown;
};
export type Buttongroup = Checkboxbase & {
    choices?: Buttongroupitemvalue[];
    [k: string]: unknown;
};
export type Buttongroupitemvalue = Itemvalue & {
    showCaption?: boolean;
    iconName?: string;
    iconSize?: number;
    [k: string]: unknown;
};
export type Dropdown = Selectbase & {
    placeholder?: string;
    allowClear?: boolean;
    choicesMin?: number;
    choicesMax?: number;
    choicesStep?: number;
    autocomplete?:
        | ''
        | 'name'
        | 'honorific-prefix'
        | 'given-name'
        | 'additional-name'
        | 'family-name'
        | 'honorific-suffix'
        | 'nickname'
        | 'organization-title'
        | 'username'
        | 'new-password'
        | 'current-password'
        | 'organization'
        | 'street-address'
        | 'address-line1'
        | 'address-line2'
        | 'address-line3'
        | 'address-level4'
        | 'address-level3'
        | 'address-level2'
        | 'address-level1'
        | 'country'
        | 'country-name'
        | 'postal-code'
        | 'cc-name'
        | 'cc-given-name'
        | 'cc-additional-name'
        | 'cc-family-name'
        | 'cc-number'
        | 'cc-exp'
        | 'cc-exp-month'
        | 'cc-exp-year'
        | 'cc-csc'
        | 'cc-type'
        | 'transaction-currency'
        | 'transaction-amount'
        | 'language'
        | 'bday'
        | 'bday-day'
        | 'bday-month'
        | 'bday-year'
        | 'sex'
        | 'url'
        | 'photo'
        | 'tel'
        | 'tel-country-code'
        | 'tel-national'
        | 'tel-area-code'
        | 'tel-local'
        | 'tel-local-prefix'
        | 'tel-local-suffix'
        | 'tel-extension'
        | 'email'
        | 'impp';
    renderAs?: string;
    searchEnabled?: boolean;
    choicesLazyLoadEnabled?: boolean;
    choicesLazyLoadPageSize?: number;
    inputFieldComponent?: string;
    itemComponent?: string;
    [k: string]: unknown;
};
export type Matrixdropdownbase = Matrixbase & {
    columns?: Matrixdropdowncolumn[];
    columnLayout?: 'horizontal' | 'vertical';
    detailElements?: string;
    detailPanelMode?: 'none' | 'underRow' | 'underRowSingle';
    horizontalScroll?: boolean;
    choices?: Itemvalue[];
    placeholder?: string;
    keyDuplicationError?: string;
    cellType?:
        | 'dropdown'
        | 'checkbox'
        | 'radiogroup'
        | 'tagbox'
        | 'text'
        | 'comment'
        | 'boolean'
        | 'expression'
        | 'rating';
    columnColCount?: 0 | 1 | 2 | 3 | 4;
    columnMinWidth?: string;
    allowAdaptiveActions?: boolean;
    [k: string]: unknown;
};
export type Matrixbase = Question & {
    showCommentArea?: string;
    columnsVisibleIf?: string;
    rowsVisibleIf?: string;
    columnMinWidth?: string;
    showHeader?: boolean;
    verticalAlign?: 'top' | 'middle';
    alternateRows?: boolean;
    [k: string]: unknown;
};
export type Matrixdropdown = Matrixdropdownbase & {
    rows?: Itemvalue[];
    rowsVisibleIf?: string;
    rowTitleWidth?: string;
    totalText?: string;
    hideIfRowsEmpty?: boolean;
    [k: string]: unknown;
};
export type Matrixdynamic = Matrixdropdownbase & {
    rowsVisibleIf?: string;
    allowAddRows?: boolean;
    allowRemoveRows?: boolean;
    rowCount?: number;
    minRowCount?: number;
    maxRowCount?: number;
    keyName?: string;
    defaultRowValue?: string;
    defaultValueFromLastRow?: boolean;
    confirmDelete?: boolean;
    confirmDeleteText?: string;
    addRowLocation?: 'default' | 'top' | 'bottom' | 'topBottom';
    addRowText?: string;
    removeRowText?: string;
    hideColumnsIfEmpty?: boolean;
    emptyRowsText?: string;
    detailPanelShowOnAdding?: boolean;
    allowRowsDragAndDrop?: string;
    [k: string]: unknown;
};
export type Matrix = Matrixbase & {
    rowTitleWidth?: string;
    columns?: Itemvalue[];
    rows?: Itemvalue[];
    cells?: string;
    rowsOrder?: 'initial' | 'random';
    isAllRowRequired?: boolean;
    hideIfRowsEmpty?: boolean;
    [k: string]: unknown;
};
export type Expression = Question & {
    expression?: string;
    format?: string;
    displayStyle?: 'none' | 'decimal' | 'currency' | 'percent' | 'date';
    currency?:
        | 'AED'
        | 'AFN'
        | 'ALL'
        | 'AMD'
        | 'ANG'
        | 'AOA'
        | 'ARS'
        | 'AUD'
        | 'AWG'
        | 'AZN'
        | 'BAM'
        | 'BBD'
        | 'BDT'
        | 'BGN'
        | 'BHD'
        | 'BIF'
        | 'BMD'
        | 'BND'
        | 'BOB'
        | 'BOV'
        | 'BRL'
        | 'BSD'
        | 'BTN'
        | 'BWP'
        | 'BYN'
        | 'BZD'
        | 'CAD'
        | 'CDF'
        | 'CHE'
        | 'CHF'
        | 'CHW'
        | 'CLF'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'COU'
        | 'CRC'
        | 'CUC'
        | 'CUP'
        | 'CVE'
        | 'CZK'
        | 'DJF'
        | 'DKK'
        | 'DOP'
        | 'DZD'
        | 'EGP'
        | 'ERN'
        | 'ETB'
        | 'EUR'
        | 'FJD'
        | 'FKP'
        | 'GBP'
        | 'GEL'
        | 'GHS'
        | 'GIP'
        | 'GMD'
        | 'GNF'
        | 'GTQ'
        | 'GYD'
        | 'HKD'
        | 'HNL'
        | 'HRK'
        | 'HTG'
        | 'HUF'
        | 'IDR'
        | 'ILS'
        | 'INR'
        | 'IQD'
        | 'IRR'
        | 'ISK'
        | 'JMD'
        | 'JOD'
        | 'JPY'
        | 'KES'
        | 'KGS'
        | 'KHR'
        | 'KMF'
        | 'KPW'
        | 'KRW'
        | 'KWD'
        | 'KYD'
        | 'KZT'
        | 'LAK'
        | 'LBP'
        | 'LKR'
        | 'LRD'
        | 'LSL'
        | 'LYD'
        | 'MAD'
        | 'MDL'
        | 'MGA'
        | 'MKD'
        | 'MMK'
        | 'MNT'
        | 'MOP'
        | 'MRO'
        | 'MUR'
        | 'MVR'
        | 'MWK'
        | 'MXN'
        | 'MXV'
        | 'MYR'
        | 'MZN'
        | 'NAD'
        | 'NGN'
        | 'NIO'
        | 'NOK'
        | 'NPR'
        | 'NZD'
        | 'OMR'
        | 'PAB'
        | 'PEN'
        | 'PGK'
        | 'PHP'
        | 'PKR'
        | 'PLN'
        | 'PYG'
        | 'QAR'
        | 'RON'
        | 'RSD'
        | 'RUB'
        | 'RWF'
        | 'SAR'
        | 'SBD'
        | 'SCR'
        | 'SDG'
        | 'SEK'
        | 'SGD'
        | 'SHP'
        | 'SLL'
        | 'SOS'
        | 'SRD'
        | 'SSP'
        | 'STD'
        | 'SVC'
        | 'SYP'
        | 'SZL'
        | 'THB'
        | 'TJS'
        | 'TMT'
        | 'TND'
        | 'TOP'
        | 'TRY'
        | 'TTD'
        | 'TWD'
        | 'TZS'
        | 'UAH'
        | 'UGX'
        | 'USD'
        | 'USN'
        | 'UYI'
        | 'UYU'
        | 'UZS'
        | 'VEF'
        | 'VND'
        | 'VUV'
        | 'WST'
        | 'XAF'
        | 'XAG'
        | 'XAU'
        | 'XBA'
        | 'XBB'
        | 'XBC'
        | 'XBD'
        | 'XCD'
        | 'XDR'
        | 'XOF'
        | 'XPD'
        | 'XPF'
        | 'XPT'
        | 'XSU'
        | 'XTS'
        | 'XUA'
        | 'XXX'
        | 'YER'
        | 'ZAR'
        | 'ZMW'
        | 'ZWL';
    maximumFractionDigits?: number;
    minimumFractionDigits?: number;
    useGrouping?: boolean;
    enableIf?: string;
    isRequired?: string;
    readOnly?: string;
    requiredErrorText?: string;
    defaultValueExpression?: string;
    defaultValue?: string;
    correctAnswer?: string;
    requiredIf?: string;
    [k: string]: unknown;
};
export type Textbase = Question & {
    [k: string]: unknown;
};
export type Text = Textbase & {
    inputType?:
        | 'color'
        | 'date'
        | 'datetime'
        | 'datetime-local'
        | 'email'
        | 'month'
        | 'number'
        | 'password'
        | 'range'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week';
    size?: number;
    textUpdateMode?: 'default' | 'onBlur' | 'onTyping';
    autocomplete?:
        | ''
        | 'name'
        | 'honorific-prefix'
        | 'given-name'
        | 'additional-name'
        | 'family-name'
        | 'honorific-suffix'
        | 'nickname'
        | 'organization-title'
        | 'username'
        | 'new-password'
        | 'current-password'
        | 'organization'
        | 'street-address'
        | 'address-line1'
        | 'address-line2'
        | 'address-line3'
        | 'address-level4'
        | 'address-level3'
        | 'address-level2'
        | 'address-level1'
        | 'country'
        | 'country-name'
        | 'postal-code'
        | 'cc-name'
        | 'cc-given-name'
        | 'cc-additional-name'
        | 'cc-family-name'
        | 'cc-number'
        | 'cc-exp'
        | 'cc-exp-month'
        | 'cc-exp-year'
        | 'cc-csc'
        | 'cc-type'
        | 'transaction-currency'
        | 'transaction-amount'
        | 'language'
        | 'bday'
        | 'bday-day'
        | 'bday-month'
        | 'bday-year'
        | 'sex'
        | 'url'
        | 'photo'
        | 'tel'
        | 'tel-country-code'
        | 'tel-national'
        | 'tel-area-code'
        | 'tel-local'
        | 'tel-local-prefix'
        | 'tel-local-suffix'
        | 'tel-extension'
        | 'email'
        | 'impp';
    min?: string;
    max?: string;
    minValueExpression?: string;
    maxValueExpression?: string;
    minErrorText?: string;
    maxErrorText?: string;
    step?: number;
    maxLength?: number;
    placeholder?: string;
    dataList?: string;
    [k: string]: unknown;
};
export type Comment = Textbase & {
    maxLength?: number;
    cols?: number;
    rows?: number;
    placeholder?: string;
    textUpdateMode?: 'default' | 'onBlur' | 'onTyping';
    autoGrow?: boolean;
    acceptCarriageReturn?: boolean;
    [k: string]: unknown;
};
export type Multipletext = Question & {
    items?: Multipletextitem[];
    itemSize?: number;
    colCount?: 1 | 2 | 3 | 4 | 5;
    [k: string]: unknown;
};
export type Nonvalue = Question & {
    title?: string;
    description?: string;
    valueName?: string;
    enableIf?: string;
    defaultValue?: string;
    correctAnswer?: string;
    clearIfInvisible?: string;
    isRequired?: string;
    requiredErrorText?: string;
    readOnly?: string;
    requiredIf?: string;
    validators?: string;
    titleLocation?: string;
    showCommentArea?: string;
    useDisplayValuesInDynamicTexts?: string;
    [k: string]: unknown;
};
export type Html = Nonvalue & {
    html?: string;
    [k: string]: unknown;
};
export type Image = Nonvalue & {
    imageLink?: string;
    altText?: string;
    contentMode?: 'auto' | 'image' | 'video' | 'youtube';
    imageFit?: 'none' | 'contain' | 'cover' | 'fill';
    imageHeight?: string;
    imageWidth?: string;
    [k: string]: unknown;
};
export type Empty = Question & {
    [k: string]: unknown;
};
export type File = Question & {
    showCommentArea?: string;
    showPreview?: boolean;
    allowMultiple?: boolean;
    allowImagesPreview?: boolean;
    imageHeight?: string;
    imageWidth?: string;
    acceptedTypes?: string;
    storeDataAsText?: boolean;
    waitForUpload?: boolean;
    maxSize?: number;
    defaultValue?: string;
    correctAnswer?: string;
    validators?: string;
    needConfirmRemoveFile?: boolean;
    [k: string]: unknown;
};
export type Rating = Question & {
    showCommentArea?: string;
    rateValues?: Itemvalue[];
    rateMin?: number;
    rateMax?: number;
    rateStep?: number;
    minRateDescription?: string;
    maxRateDescription?: string;
    displayRateDescriptionsAsExtremeItems?: boolean;
    displayMode?: 'auto' | 'buttons' | 'dropdown';
    rateType?: 'numbers' | 'labels' | 'stars' | 'smileys';
    [k: string]: unknown;
};
export type Boolean2 = Question & {
    showCommentArea?: string;
    label?: string;
    labelTrue?: string;
    labelFalse?: string;
    valueTrue?: string;
    valueFalse?: string;
    renderAs?: string;
    [k: string]: unknown;
};
export type Signaturepad = Question & {
    signatureWidth?: number;
    signatureHeight?: number;
    height?: number;
    allowClear?: boolean;
    penColor?: string;
    backgroundColor?: string;
    dataFormat?: {
        [k: string]: unknown;
    };
    defaultValue?: string;
    correctAnswer?: string;
    [k: string]: unknown;
};
export type Paneldynamic = Question & {
    showCommentArea?: string;
    templateElements?:
        | []
        | [Checkbox]
        | [Checkbox, Tagbox]
        | [Checkbox, Tagbox, Ranking]
        | [Checkbox, Tagbox, Ranking, Radiogroup]
        | [Checkbox, Tagbox, Ranking, Radiogroup, Imagepicker]
        | [Checkbox, Tagbox, Ranking, Radiogroup, Imagepicker, Buttongroup]
        | [Checkbox, Tagbox, Ranking, Radiogroup, Imagepicker, Buttongroup, Dropdown]
        | [Checkbox, Tagbox, Ranking, Radiogroup, Imagepicker, Buttongroup, Dropdown, Matrixdropdownbase]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
              Boolean2,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
              Boolean2,
              Signaturepad,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
              Boolean2,
              Signaturepad,
              Paneldynamic,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
              Boolean2,
              Signaturepad,
              Paneldynamic,
              Panel,
          ];
    templateTitle?: string;
    templateDescription?: string;
    minWidth?: string;
    noEntriesText?: string;
    allowAddPanel?: boolean;
    allowRemovePanel?: boolean;
    panelCount?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    minPanelCount?: number;
    maxPanelCount?: number;
    defaultPanelValue?: string;
    defaultValueFromLastPanel?: boolean;
    panelsState?: 'default' | 'collapsed' | 'expanded' | 'firstExpanded';
    keyName?: string;
    keyDuplicationError?: string;
    confirmDelete?: boolean;
    confirmDeleteText?: string;
    panelAddText?: string;
    panelRemoveText?: string;
    panelPrevText?: string;
    panelNextText?: string;
    showQuestionNumbers?: 'off' | 'onPanel' | 'onSurvey';
    showRangeInProgress?: boolean;
    renderMode?: 'list' | 'progressTop' | 'progressBottom' | 'progressTopBottom';
    templateTitleLocation?: 'default' | 'top' | 'bottom' | 'left';
    panelRemoveButtonLocation?: 'bottom' | 'right';
    [k: string]: unknown;
};
export type Panel = Panelbase & {
    state?: 'default' | 'collapsed' | 'expanded';
    isRequired?: string;
    requiredErrorText?: string;
    startWithNewLine?: boolean;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    innerIndent?: 0 | 1 | 2 | 3;
    indent?: 0 | 1 | 2 | 3;
    page?: '';
    showNumber?: boolean;
    showQuestionNumbers?: 'default' | 'onpanel' | 'off';
    questionStartIndex?: string;
    allowAdaptiveActions?: boolean;
    [k: string]: unknown;
};
export type Visibletrigger = Surveytrigger & {
    pages?: string;
    questions?: string;
    [k: string]: unknown;
};
export type Surveytrigger = Trigger & {
    name?: string;
    [k: string]: unknown;
};
export type Completetrigger = Surveytrigger & {
    [k: string]: unknown;
};
export type Setvaluetrigger = Surveytrigger & {
    setToName?: string;
    setValue?: string;
    isVariable?: boolean;
    [k: string]: unknown;
};
export type Copyvaluetrigger = Surveytrigger & {
    fromName?: string;
    setToName?: string;
    [k: string]: unknown;
};
export type Skiptrigger = Surveytrigger & {
    gotoName?: string;
    [k: string]: unknown;
};
export type Runexpressiontrigger = Surveytrigger & {
    setToName?: string;
    runExpression?: string;
    [k: string]: unknown;
};
export type Urlconditionitem = Expressionitem & {
    url?: string;
    [k: string]: unknown;
};

export interface SurveyJSLibraryJsonSchema {
    locale?: '';
    title?: string;
    description?: string;
    logo?: string;
    logoWidth?: string;
    logoHeight?: string;
    logoFit?: 'none' | 'contain' | 'cover' | 'fill';
    logoPosition?: 'none' | 'left' | 'right' | 'top' | 'bottom';
    focusFirstQuestionAutomatic?: boolean;
    focusOnFirstError?: boolean;
    completedHtml?: string;
    completedBeforeHtml?: string;
    completedHtmlOnCondition?: Htmlconditionitem[];
    loadingHtml?: string;
    pages?: Page[];
    questions?:
        | []
        | [Checkbox]
        | [Checkbox, Tagbox]
        | [Checkbox, Tagbox, Ranking]
        | [Checkbox, Tagbox, Ranking, Radiogroup]
        | [Checkbox, Tagbox, Ranking, Radiogroup, Imagepicker]
        | [Checkbox, Tagbox, Ranking, Radiogroup, Imagepicker, Buttongroup]
        | [Checkbox, Tagbox, Ranking, Radiogroup, Imagepicker, Buttongroup, Dropdown]
        | [Checkbox, Tagbox, Ranking, Radiogroup, Imagepicker, Buttongroup, Dropdown, Matrixdropdownbase]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
              Boolean2,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
              Boolean2,
              Signaturepad,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
              Boolean2,
              Signaturepad,
              Paneldynamic,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
              Boolean2,
              Signaturepad,
              Paneldynamic,
              Panel,
          ];
    triggers?:
        | []
        | [Visibletrigger]
        | [Visibletrigger, Completetrigger]
        | [Visibletrigger, Completetrigger, Setvaluetrigger]
        | [Visibletrigger, Completetrigger, Setvaluetrigger, Copyvaluetrigger]
        | [Visibletrigger, Completetrigger, Setvaluetrigger, Copyvaluetrigger, Skiptrigger]
        | [Visibletrigger, Completetrigger, Setvaluetrigger, Copyvaluetrigger, Skiptrigger, Runexpressiontrigger];
    calculatedValues?: Calculatedvalue[];
    surveyId?: string;
    surveyPostId?: string;
    surveyShowDataSaving?: boolean;
    cookieName?: string;
    sendResultOnPageNext?: boolean;
    showNavigationButtons?: 'none' | 'top' | 'bottom' | 'both';
    showPrevButton?: boolean;
    showTitle?: boolean;
    showPageTitles?: boolean;
    showCompletedPage?: boolean;
    navigateToUrl?: string;
    navigateToUrlOnCondition?: Urlconditionitem[];
    questionsOrder?: 'initial' | 'random';
    showPageNumbers?: boolean;
    showQuestionNumbers?: 'on' | 'onPage' | 'off';
    questionTitleLocation?: 'top' | 'bottom' | 'left';
    questionDescriptionLocation?: 'underInput' | 'underTitle';
    questionErrorLocation?: 'top' | 'bottom';
    showProgressBar?: 'off' | 'top' | 'bottom' | 'both';
    progressBarType?: 'pages' | 'questions' | 'requiredQuestions' | 'correctQuestions' | 'buttons';
    showTOC?: string;
    tocLocation?: 'left' | 'right';
    mode?: 'edit' | 'display';
    storeOthersAsComment?: boolean;
    maxTextLength?: number;
    maxOthersLength?: number;
    goNextPageAutomatic?: boolean;
    clearInvisibleValues?: 'none' | 'onComplete' | 'onHidden' | 'onHiddenContainer';
    checkErrorsMode?: 'onNextPage' | 'onValueChanged' | 'onValueChanging' | 'onComplete';
    textUpdateMode?: 'onBlur' | 'onTyping';
    autoGrowComment?: boolean;
    startSurveyText?: string;
    pagePrevText?: string;
    pageNextText?: string;
    completeText?: string;
    previewText?: string;
    editText?: string;
    requiredText?: string;
    questionStartIndex?: string;
    questionTitlePattern?: '';
    questionTitleTemplate?: string;
    firstPageIsStarted?: boolean;
    isSinglePage?: boolean;
    questionsOnPageMode?: 'singlePage' | 'standard' | 'questionPerPage';
    showPreviewBeforeComplete?: 'noPreview' | 'showAllQuestions' | 'showAnsweredQuestions';
    maxTimeToFinish?: number;
    maxTimeToFinishPage?: number;
    showTimerPanel?: 'none' | 'top' | 'bottom';
    showTimerPanelMode?: 'all' | 'page' | 'survey';
    widthMode?: 'auto' | 'static' | 'responsive';
    width?: string;
    showBrandInfo?: boolean;
    [k: string]: unknown;
}
export interface Expressionitem {
    expression?: string;
    [k: string]: unknown;
}
export interface Panelbase {
    name?: string;
    elements?:
        | []
        | [Checkbox]
        | [Checkbox, Tagbox]
        | [Checkbox, Tagbox, Ranking]
        | [Checkbox, Tagbox, Ranking, Radiogroup]
        | [Checkbox, Tagbox, Ranking, Radiogroup, Imagepicker]
        | [Checkbox, Tagbox, Ranking, Radiogroup, Imagepicker, Buttongroup]
        | [Checkbox, Tagbox, Ranking, Radiogroup, Imagepicker, Buttongroup, Dropdown]
        | [Checkbox, Tagbox, Ranking, Radiogroup, Imagepicker, Buttongroup, Dropdown, Matrixdropdownbase]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
              Boolean2,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
              Boolean2,
              Signaturepad,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
              Boolean2,
              Signaturepad,
              Paneldynamic,
          ]
        | [
              Checkbox,
              Tagbox,
              Ranking,
              Radiogroup,
              Imagepicker,
              Buttongroup,
              Dropdown,
              Matrixdropdownbase,
              Matrixdropdown,
              Matrixdynamic,
              Matrix,
              Expression,
              Textbase,
              Text,
              Comment,
              Multipletext,
              Nonvalue,
              Html,
              Image,
              Empty,
              File,
              Rating,
              Boolean2,
              Signaturepad,
              Paneldynamic,
              Panel,
          ];
    visible?: string;
    visibleIf?: string;
    enableIf?: string;
    requiredIf?: string;
    readOnly?: boolean;
    questionTitleLocation?: 'default' | 'top' | 'bottom' | 'left' | 'hidden';
    title?: string;
    description?: string;
    questionsOrder?: 'default' | 'initial' | 'random';
    [k: string]: unknown;
}
export interface Question {
    name?: string;
    state?: 'default' | 'collapsed' | 'expanded';
    visible?: string;
    useDisplayValuesInDynamicTexts?: boolean;
    visibleIf?: string;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    startWithNewLine?: boolean;
    indent?: 0 | 1 | 2 | 3;
    page?: '';
    title?: string;
    titleLocation?: 'default' | 'top' | 'bottom' | 'left' | 'hidden';
    description?: string;
    descriptionLocation?: 'default' | 'underInput' | 'underTitle';
    hideNumber?: boolean;
    valueName?: string;
    enableIf?: string;
    defaultValue?: string;
    defaultValueExpression?: string;
    correctAnswer?: string;
    clearIfInvisible?: 'default' | 'none' | 'onComplete' | 'onHidden';
    isRequired?: string;
    requiredIf?: string;
    requiredErrorText?: string;
    readOnly?: string;
    validators?:
        | []
        | [Numericvalidator]
        | [Numericvalidator, Textvalidator]
        | [Numericvalidator, Textvalidator, Answercountvalidator]
        | [Numericvalidator, Textvalidator, Answercountvalidator, Regexvalidator]
        | [Numericvalidator, Textvalidator, Answercountvalidator, Regexvalidator, Emailvalidator]
        | [Numericvalidator, Textvalidator, Answercountvalidator, Regexvalidator, Emailvalidator, Expressionvalidator];
    bindings?: string;
    renderAs?: string;
    showCommentArea?: string;
    commentText?: string;
    commentPlaceholder?: string;
    [k: string]: unknown;
}
export interface Surveyvalidator {
    text?: string;
    [k: string]: unknown;
}
export interface Itemvalue {
    value?: string;
    text?: string;
    visibleIf?: string;
    enableIf?: string;
    [k: string]: unknown;
}
export interface Matrixdropdowncolumn {
    name?: string;
    title?: string;
    cellHint?: string;
    cellType?:
        | 'default'
        | 'dropdown'
        | 'checkbox'
        | 'radiogroup'
        | 'tagbox'
        | 'text'
        | 'comment'
        | 'boolean'
        | 'expression'
        | 'rating';
    colCount?: -1 | 0 | 1 | 2 | 3 | 4;
    isRequired?: boolean;
    isUnique?: boolean;
    requiredErrorText?: string;
    readOnly?: boolean;
    minWidth?: string;
    width?: string;
    visibleIf?: string;
    enableIf?: string;
    requiredIf?: string;
    showInMultipleColumns?: boolean;
    validators?:
        | []
        | [Numericvalidator]
        | [Numericvalidator, Textvalidator]
        | [Numericvalidator, Textvalidator, Answercountvalidator]
        | [Numericvalidator, Textvalidator, Answercountvalidator, Regexvalidator]
        | [Numericvalidator, Textvalidator, Answercountvalidator, Regexvalidator, Emailvalidator]
        | [Numericvalidator, Textvalidator, Answercountvalidator, Regexvalidator, Emailvalidator, Expressionvalidator];
    totalType?: 'none' | 'sum' | 'count' | 'min' | 'max' | 'avg';
    totalExpression?: string;
    totalFormat?: string;
    totalDisplayStyle?: 'none' | 'decimal' | 'currency' | 'percent';
    totalCurrency?:
        | 'AED'
        | 'AFN'
        | 'ALL'
        | 'AMD'
        | 'ANG'
        | 'AOA'
        | 'ARS'
        | 'AUD'
        | 'AWG'
        | 'AZN'
        | 'BAM'
        | 'BBD'
        | 'BDT'
        | 'BGN'
        | 'BHD'
        | 'BIF'
        | 'BMD'
        | 'BND'
        | 'BOB'
        | 'BOV'
        | 'BRL'
        | 'BSD'
        | 'BTN'
        | 'BWP'
        | 'BYN'
        | 'BZD'
        | 'CAD'
        | 'CDF'
        | 'CHE'
        | 'CHF'
        | 'CHW'
        | 'CLF'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'COU'
        | 'CRC'
        | 'CUC'
        | 'CUP'
        | 'CVE'
        | 'CZK'
        | 'DJF'
        | 'DKK'
        | 'DOP'
        | 'DZD'
        | 'EGP'
        | 'ERN'
        | 'ETB'
        | 'EUR'
        | 'FJD'
        | 'FKP'
        | 'GBP'
        | 'GEL'
        | 'GHS'
        | 'GIP'
        | 'GMD'
        | 'GNF'
        | 'GTQ'
        | 'GYD'
        | 'HKD'
        | 'HNL'
        | 'HRK'
        | 'HTG'
        | 'HUF'
        | 'IDR'
        | 'ILS'
        | 'INR'
        | 'IQD'
        | 'IRR'
        | 'ISK'
        | 'JMD'
        | 'JOD'
        | 'JPY'
        | 'KES'
        | 'KGS'
        | 'KHR'
        | 'KMF'
        | 'KPW'
        | 'KRW'
        | 'KWD'
        | 'KYD'
        | 'KZT'
        | 'LAK'
        | 'LBP'
        | 'LKR'
        | 'LRD'
        | 'LSL'
        | 'LYD'
        | 'MAD'
        | 'MDL'
        | 'MGA'
        | 'MKD'
        | 'MMK'
        | 'MNT'
        | 'MOP'
        | 'MRO'
        | 'MUR'
        | 'MVR'
        | 'MWK'
        | 'MXN'
        | 'MXV'
        | 'MYR'
        | 'MZN'
        | 'NAD'
        | 'NGN'
        | 'NIO'
        | 'NOK'
        | 'NPR'
        | 'NZD'
        | 'OMR'
        | 'PAB'
        | 'PEN'
        | 'PGK'
        | 'PHP'
        | 'PKR'
        | 'PLN'
        | 'PYG'
        | 'QAR'
        | 'RON'
        | 'RSD'
        | 'RUB'
        | 'RWF'
        | 'SAR'
        | 'SBD'
        | 'SCR'
        | 'SDG'
        | 'SEK'
        | 'SGD'
        | 'SHP'
        | 'SLL'
        | 'SOS'
        | 'SRD'
        | 'SSP'
        | 'STD'
        | 'SVC'
        | 'SYP'
        | 'SZL'
        | 'THB'
        | 'TJS'
        | 'TMT'
        | 'TND'
        | 'TOP'
        | 'TRY'
        | 'TTD'
        | 'TWD'
        | 'TZS'
        | 'UAH'
        | 'UGX'
        | 'USD'
        | 'USN'
        | 'UYI'
        | 'UYU'
        | 'UZS'
        | 'VEF'
        | 'VND'
        | 'VUV'
        | 'WST'
        | 'XAF'
        | 'XAG'
        | 'XAU'
        | 'XBA'
        | 'XBB'
        | 'XBC'
        | 'XBD'
        | 'XCD'
        | 'XDR'
        | 'XOF'
        | 'XPD'
        | 'XPF'
        | 'XPT'
        | 'XSU'
        | 'XTS'
        | 'XUA'
        | 'XXX'
        | 'YER'
        | 'ZAR'
        | 'ZMW'
        | 'ZWL';
    totalMaximumFractionDigits?: number;
    totalMinimumFractionDigits?: number;
    renderAs?: string;
    [k: string]: unknown;
}
export interface Multipletextitem {
    name?: string;
    isRequired?: boolean;
    placeholder?: string;
    inputType?:
        | 'color'
        | 'date'
        | 'datetime'
        | 'datetime-local'
        | 'email'
        | 'month'
        | 'number'
        | 'password'
        | 'range'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week';
    title?: string;
    maxLength?: number;
    size?: number;
    requiredErrorText?: string;
    validators?:
        | []
        | [Numericvalidator]
        | [Numericvalidator, Textvalidator]
        | [Numericvalidator, Textvalidator, Answercountvalidator]
        | [Numericvalidator, Textvalidator, Answercountvalidator, Regexvalidator]
        | [Numericvalidator, Textvalidator, Answercountvalidator, Regexvalidator, Emailvalidator]
        | [Numericvalidator, Textvalidator, Answercountvalidator, Regexvalidator, Emailvalidator, Expressionvalidator];
    [k: string]: unknown;
}
export interface Trigger {
    operator?: string;
    value?: string;
    expression?: string;
    [k: string]: unknown;
}
export interface Calculatedvalue {
    name?: string;
    expression?: string;
    includeIntoResult?: boolean;
    [k: string]: unknown;
}
