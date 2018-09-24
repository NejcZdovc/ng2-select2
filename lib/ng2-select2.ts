import { NgModule, ModuleWithProviders } from '@angular/core';

export { Select2OptionData, Select2TemplateFunction } from './ng2-select2.interface';
import { Select2Component } from './ng2-select2.component';
import { Select2OptionInject } from './ng2-select2.interface';

export { Select2Component } from './ng2-select2.component';

@NgModule({
    declarations: [Select2Component],
    exports: [Select2Component]
})
export class Select2Module {
    static forRoot(config: any): ModuleWithProviders {
        return {
            ngModule: Select2Module,
            providers: [
                { provide: Select2OptionInject, useValue: config }
            ]
        };
    }
}