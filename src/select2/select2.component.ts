import {
    Component, Input, ViewChild, ViewEncapsulation, Output, EventEmitter, ElementRef,
    AfterViewInit
} from '@angular/core';

import { Select2OptionData, Select2TemplateFunction } from './select2.interface';

@Component({
    selector: 'select2',
    template: '<select #selector></select>',
    styleUrls: ['select2.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class Select2Component implements AfterViewInit {
    @ViewChild('selector') selector: ElementRef;

    // data for select2 dropdown
    @Input() data: Array<Select2OptionData>;
    @Input() value: any;

    @Output() valueChanged = new EventEmitter();
    @Output() blur = new EventEmitter();

    // Optional options for select2
    @Input() width: string;
    @Input() theme: string;
    @Input() templateSelection: Select2TemplateFunction;
    @Input() templateResult: Select2TemplateFunction;

    private element: JQuery;

    ngAfterViewInit() {
        if (this.data) {
            let that = this;

            this.element = jQuery(this.selector.nativeElement);
            this.element.select2({
                data: this.data,
                templateResult: this.templateResult,
                templateSelection: this.templateSelection,
                theme: (this.theme) ? this.theme : 'default',
                width: (this.width) ? this.width : 'resolve'
            });

            if (typeof this.value !== 'undefined') {
                this.element.val(that.value).trigger('change');
            }

            this.element.on('select2:select', function (e: Event) {
                that.valueChanged.emit({
                    value: that.selector.nativeElement.value
                });
            });
        }
    }

    ngOnDestroy() {
        this.element.off("select2:select");
    }
}
