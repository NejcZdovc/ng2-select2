import {Component, Input, ViewChild, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {OptionData} from './select2.interface';

@Component({
    moduleId: module.id,
    selector: 'select2',
    template: '<select #selector></select>',
    styleUrls: ['select2.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Select2Component {
    // data for select2 dropdown
    @Input() data:Array<OptionData>;
    @Input() selectedValue: any;
    @ViewChild('selector') selector;
	@Output() valueChanged = new EventEmitter();

    // Optional options for select2
    @Input() width:string;
    @Input() theme:string;
    @Input() templateSelection;
    @Input() templateResult;

    private element:JQuery;

    ngAfterViewInit() {
        if(this.data) {
			let that = this;

            this.element = jQuery(this.selector.nativeElement);
            this.element.select2({
                data: this.data,
                templateResult: this.templateResult,
                templateSelection: this.templateSelection,
                theme: (this.theme) ? this.theme : 'default',
                width: (this.width) ? this.width : 'resolve'
            });

			if(typeof this.selectedValue !== 'undefined') {
				this.element.val(that.selectedValue).trigger("change");
			}

			this.element.on("select2:select", function (e: Event) {
				that.valueChanged.emit({
				  value: that.selector.nativeElement.value
				})
			});
        }
    }
}
