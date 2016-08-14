/// <reference types="jquery" />
/// <reference types="select2" />
export interface Select2OptionData {
    id: string;
    text: string;
    children?: Array<Select2OptionData>;
    additional?: any;
}
export interface Select2TemplateFunction {
    (state: Select2OptionData): JQuery | string;
}
