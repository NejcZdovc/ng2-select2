"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_select2_component_1 = require("./ng2-select2.component");
var ng2_select2_component_2 = require("./ng2-select2.component");
exports.Select2Component = ng2_select2_component_2.Select2Component;
var Select2Module = (function () {
    function Select2Module() {
    }
    return Select2Module;
}());
Select2Module = __decorate([
    core_1.NgModule({
        declarations: [ng2_select2_component_1.Select2Component],
        exports: [ng2_select2_component_1.Select2Component]
    })
], Select2Module);
exports.Select2Module = Select2Module;
//# sourceMappingURL=ng2-select2.js.map
