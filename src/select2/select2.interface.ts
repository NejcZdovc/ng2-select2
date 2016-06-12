export interface OptionData {
    id: string;
    text: string;
    children?: Array<OptionData>;
    addition?: any;
}
