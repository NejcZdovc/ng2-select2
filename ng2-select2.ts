import { NgModule } from '@angular/core';

export { Select2OptionData, Select2TemplateFunction } from './src/select2.interface';
import { Select2Component } from './src/select2.component';

export { Select2Component } from './src/select2.component';

@NgModule({
    exports: [Select2Component],
    declarations: [Select2Component]
})
export class Select2Module {
}