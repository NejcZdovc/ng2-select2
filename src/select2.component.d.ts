import { EventEmitter, ElementRef, AfterViewInit, SimpleChanges } from '@angular/core';
import { Select2OptionData, Select2TemplateFunction } from './select2.interface';
export declare class Select2Component implements AfterViewInit {
    selector: ElementRef;
    data: Array<Select2OptionData>;
    value: any;
    valueChanged: EventEmitter<{}>;
    blur: EventEmitter<{}>;
    width: string;
    theme: string;
    templateSelection: Select2TemplateFunction;
    templateResult: Select2TemplateFunction;
    private element;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private initPlugin();
}
