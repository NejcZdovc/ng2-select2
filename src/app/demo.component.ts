import {Component} from '@angular/core';
import { Select2Component, OptionData } from './select2/index';
import { Demo2Component } from './demo2/index';

@Component({
    moduleId: module.id,
    selector: 'app-demo',
    templateUrl: 'demo.component.html',
    directives: [Select2Component, Demo2Component]
})
export class DemoComponent {
    // items for select2
    public items: Array<OptionData> = [
        {
            id: 'val1',
            text: 'Value 1'
        },
        {
            id: 'val2',
            text: 'Value 2'
        },
        {
            id: 'val3',
            text: 'Value 3'
        },
        {
            id: 'val4',
            text: 'Value 4'
        },
        {
            id: 'val5',
            text: 'Value 5'
        }
    ];

    public items2: Array<OptionData> = [
        {
            id: 'car1',
            text: 'Car 1'
        },
        {
            id: 'car2',
            text: 'Car 2'
        },
        {
            id: 'car3',
            text: 'Car 3'
        },
        {
            id: 'car4',
            text: 'Car 4'
        },
        {
            id: 'car5',
            text: 'Car 5'
        }
    ];

    // function for result template
    public templateResult: Function = (state: any) => {
        if (!state.id) {
            return state.text;
        }

        return jQuery('<span>Changed - ' + state.text + '</span>');
    }

    // function for selection tempalte
    public templateSelection: Function = (state: any) => {
        if (!state.id) {
            return state.text;
        }

        return jQuery('<span>Selected - ' + state.text + '</span>');
    }
}
