/// <reference types="select2" />
import { AfterViewInit, ElementRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges, Renderer, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Select2OptionData } from './ng2-select2.interface';
export declare class Select2Component implements AfterViewInit, OnChanges, OnDestroy, OnInit, ControlValueAccessor {
    private renderer;
    selector: ElementRef;
    data: Array<Select2OptionData>;
    value: string | string[];
    cssImport: boolean;
    width: string;
    disabled: boolean;
    options: Select2Options;
    valueChanged: EventEmitter<{}>;
    onChange: Function;
    onTouched: Function;
    private element;
    private check;
    constructor(renderer: Renderer);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    writeValue(newValue: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnDestroy(): void;
    private initPlugin();
    private setElementValue(newValue);
    private style;
}
