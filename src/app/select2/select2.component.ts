import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { OptionData } from './interface';

@Component({
  moduleId: module.id,
  selector: 'select2',
  templateUrl: 'select2.component.html',
  styleUrls: ['select2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Select2Component {
    @Input() data: Array<OptionData>;
    @ViewChild('foo') foo;

    @Input() width: string;
    @Input() templateSelection;
    @Input() templateResult;

    private element: JQuery;

    ngAfterViewInit() {
        this.element = jQuery(this.foo.nativeElement);
        this.element.select2({
            width: this.width,
            templateResult: this.templateResult,
            templateSelection: this.templateSelection
        });
    }
}
