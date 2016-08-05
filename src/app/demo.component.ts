import { Component } from '@angular/core';
import { Select2Component } from './../select2/index';
import { DataService } from './shared/data.service';
import {Select2OptionData, Select2TemplateFunction} from '../select2/select2.interface';

@Component({
    moduleId: module.id,
    selector: 'app-demo',
    templateUrl: 'demo.component.html',
    directives: [Select2Component],
    providers: [DataService]
})
export class DemoComponent {
    private startValue: any = 'car3';

    constructor(private data: DataService) {
    }

    // function for result template
    public templateResult: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
        if (!state.id) {
            return state.text;
        }

        let image = '<span class="image"></span>';

        if (state.additional.image) {
            image = '<span class="image"><img src="' + state.additional.image + '"</span>';
        }

        return jQuery('<span><b>' + state.additional.winner + '.</b> ' + image + ' ' + state.text + '</span>');
    }

    // function for selection tempalte
    public templateSelection: Select2TemplateFunction = (state: Select2OptionData): JQuery | string => {
        if (!state.id) {
            return state.text;
        }

        return jQuery('<span><b>' + state.additional.winner + '.</b> ' + state.text + '</span>');
    }

    public changed(e: string): void {
        console.log('Value changed: ', e);
    }
}
