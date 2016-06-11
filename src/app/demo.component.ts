import { Component } from '@angular/core';
import { Select2Component, OptionData } from './../select2/index';
import { DataService } from "./shared/data.service";

@Component({
    moduleId: module.id,
    selector: 'app-demo',
    templateUrl: 'demo.component.html',
    directives: [Select2Component],
    providers: [DataService]
})
export class DemoComponent {

    constructor(private data: DataService) {
    }

    // function for result template
    public templateResult: Function = (state: any) => {
        if (!state.id) {
            return state.text;
        }

        let image: string = '<span class="image"></span>';
        if(state.addition.image) {
            image = '<span class="image"><img src="' + state.addition.image + '"</span>';
        }

        return jQuery('<span><b>' + state.addition.winner + '.</b> ' + image + ' ' + state.text + '</span>');
    }

    // function for selection tempalte
    public templateSelection: Function = (state: any) => {
        if (!state.id) {
            return state.text;
        }

        return jQuery('<span><b>' + state.addition.winner + '.</b> ' + state.text + '</span>');
    }
}
