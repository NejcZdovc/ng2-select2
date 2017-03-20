(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms'], factory) :
	(factory((global['ng2-select2'] = global['ng2-select2'] || {}),global.ng.core,global._angular_forms));
}(this, (function (exports,_angular_core,_angular_forms) { 'use strict';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.Select2Component = Select2Component_1 = (function () {
    function Select2Component(renderer) {
        this.renderer = renderer;
        // enable / disable default style for select2
        this.cssImport = true;
        // enable / disable select2
        this.disabled = false;
        // emitter when value is changed
        this.valueChanged = new _angular_core.EventEmitter();
        this.onChange = function () {
        };
        this.onTouched = function () {
        };
        this.element = undefined;
    	this.oldValue = undefined;
        this.check = false;
        this.style = ".select2-container{box-sizing:border-box;display:inline-block;margin:0;position:relative;vertical-align:middle;min-width:100px}.select2-container .select2-selection--single{box-sizing:border-box;cursor:pointer;display:block;height:28px;user-select:none;-webkit-user-select:none}.select2-container .select2-selection--single .select2-selection__rendered{display:block;padding-left:8px;padding-right:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.select2-container .select2-selection--single .select2-selection__clear{position:relative}.select2-container[dir=rtl] .select2-selection--single .select2-selection__rendered{padding-right:8px;padding-left:20px}.select2-container .select2-selection--multiple{box-sizing:border-box;cursor:pointer;display:block;min-height:32px;user-select:none;-webkit-user-select:none}.select2-container .select2-selection--multiple .select2-selection__rendered{display:inline-block;overflow:hidden;padding-left:8px;text-overflow:ellipsis;white-space:nowrap}.select2-container .select2-search--inline{float:left}.select2-container .select2-search--inline .select2-search__field{box-sizing:border-box;border:none;font-size:100%;margin-top:5px;padding:0}.select2-container .select2-search--inline .select2-search__field::-webkit-search-cancel-button{-webkit-appearance:none}.select2-dropdown{background-color:#fff;border:1px solid #aaa;border-radius:4px;box-sizing:border-box;display:block;position:absolute;left:-100000px;width:100%;z-index:1051}.select2-results{display:block}.select2-results__options{list-style:none;margin:0;padding:0}.select2-results__option{padding:6px;user-select:none;-webkit-user-select:none}.select2-results__option[aria-selected]{cursor:pointer}.select2-container--open .select2-dropdown{left:0}.select2-container--open .select2-dropdown--above{border-bottom:none;border-bottom-left-radius:0;border-bottom-right-radius:0}.select2-container--open .select2-dropdown--below{border-top:none;border-top-left-radius:0;border-top-right-radius:0}.select2-search--dropdown{display:block;padding:4px}.select2-search--dropdown .select2-search__field{padding:4px;width:100%;box-sizing:border-box}.select2-search--dropdown .select2-search__field::-webkit-search-cancel-button{-webkit-appearance:none}.select2-search--dropdown.select2-search--hide{display:none}.select2-close-mask{border:0;margin:0;padding:0;display:block;position:fixed;left:0;top:0;min-height:100%;min-width:100%;height:auto;width:auto;opacity:0;z-index:99;background-color:#fff;filter:alpha(opacity=0)}.select2-hidden-accessible{border:0!important;clip:rect(0 0 0 0)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;width:1px!important}.select2-container--classic .select2-results>.select2-results__options,.select2-container--default .select2-results>.select2-results__options{max-height:200px;overflow-y:auto}.select2-container--default .select2-selection--single{background-color:#fff;border:1px solid #aaa;border-radius:4px}.select2-container--default .select2-selection--single .select2-selection__rendered{color:#444;line-height:28px}.select2-container--default .select2-selection--single .select2-selection__clear{cursor:pointer;float:right;font-weight:700}.select2-container--default .select2-selection--single .select2-selection__placeholder{color:#999}.select2-container--default .select2-selection--single .select2-selection__arrow{height:26px;position:absolute;top:1px;right:1px;width:20px}.select2-container--default .select2-selection--single .select2-selection__arrow b{border-color:#888 transparent transparent;border-style:solid;border-width:5px 4px 0;height:0;left:50%;margin-left:-4px;margin-top:-2px;position:absolute;top:50%;width:0}.select2-container--default[dir=rtl] .select2-selection--single .select2-selection__clear{float:left}.select2-container--default[dir=rtl] .select2-selection--single .select2-selection__arrow{left:1px;right:auto}.select2-container--default.select2-container--disabled .select2-selection--single{background-color:#eee;cursor:default}.select2-container--default.select2-container--disabled .select2-selection--single .select2-selection__clear{display:none}.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b{border-color:transparent transparent #888;border-width:0 4px 5px}.select2-container--default .select2-selection--multiple{background-color:#fff;border:1px solid #aaa;border-radius:4px;cursor:text}.select2-container--default .select2-selection--multiple .select2-selection__rendered{box-sizing:border-box;list-style:none;margin:0;padding:0 5px;width:100%}.select2-container--default .select2-selection--multiple .select2-selection__rendered li{list-style:none}.select2-container--default .select2-selection--multiple .select2-selection__placeholder{color:#999;margin-top:5px;float:left}.select2-container--default .select2-selection--multiple .select2-selection__clear{cursor:pointer;float:right;font-weight:700;margin-top:5px;margin-right:10px}.select2-container--default .select2-selection--multiple .select2-selection__choice{background-color:#e4e4e4;border:1px solid #aaa;border-radius:4px;cursor:default;float:left;margin-right:5px;margin-top:5px;padding:0 5px}.select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:#999;cursor:pointer;display:inline-block;font-weight:700;margin-right:2px}.select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:#333}.select2-container--default[dir=rtl] .select2-selection--multiple .select2-search--inline,.select2-container--default[dir=rtl] .select2-selection--multiple .select2-selection__choice,.select2-container--default[dir=rtl] .select2-selection--multiple .select2-selection__placeholder{float:right}.select2-container--default[dir=rtl] .select2-selection--multiple .select2-selection__choice{margin-left:5px;margin-right:auto}.select2-container--default[dir=rtl] .select2-selection--multiple .select2-selection__choice__remove{margin-left:2px;margin-right:auto}.select2-container--default.select2-container--focus .select2-selection--multiple{border:1px solid #000;outline:0}.select2-container--default.select2-container--disabled .select2-selection--multiple{background-color:#eee;cursor:default}.select2-container--default.select2-container--disabled .select2-selection__choice__remove{display:none}.select2-container--default.select2-container--open.select2-container--above .select2-selection--multiple,.select2-container--default.select2-container--open.select2-container--above .select2-selection--single{border-top-left-radius:0;border-top-right-radius:0}.select2-container--default.select2-container--open.select2-container--below .select2-selection--multiple,.select2-container--default.select2-container--open.select2-container--below .select2-selection--single{border-bottom-left-radius:0;border-bottom-right-radius:0}.select2-container--default .select2-search--dropdown .select2-search__field{border:1px solid #aaa}.select2-container--default .select2-search--inline .select2-search__field{background:0 0;border:none;outline:0;box-shadow:none;-webkit-appearance:textfield}.select2-container--default .select2-results__option[role=group]{padding:0}.select2-container--default .select2-results__option[aria-disabled=true]{color:#999}.select2-container--default .select2-results__option[aria-selected=true]{background-color:#ddd}.select2-container--default .select2-results__option .select2-results__option{padding-left:1em}.select2-container--default .select2-results__option .select2-results__option .select2-results__group{padding-left:0}.select2-container--default .select2-results__option .select2-results__option .select2-results__option{margin-left:-1em;padding-left:2em}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-2em;padding-left:3em}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-3em;padding-left:4em}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-4em;padding-left:5em}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-5em;padding-left:6em}.select2-container--default .select2-results__option--highlighted[aria-selected]{background-color:#5897fb;color:#fff}.select2-container--default .select2-results__group{cursor:default;display:block;padding:6px}.select2-container--classic .select2-selection--single{background-color:#f7f7f7;border:1px solid #aaa;border-radius:4px;outline:0;background-image:-webkit-linear-gradient(top,#fff 50%,#eee 100%);background-image:-o-linear-gradient(top,#fff 50%,#eee 100%);background-image:linear-gradient(to bottom,#fff 50%,#eee 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0)}.select2-container--classic .select2-selection--single:focus{border:1px solid #5897fb}.select2-container--classic .select2-selection--single .select2-selection__rendered{color:#444;line-height:28px}.select2-container--classic .select2-selection--single .select2-selection__clear{cursor:pointer;float:right;font-weight:700;margin-right:10px}.select2-container--classic .select2-selection--single .select2-selection__placeholder{color:#999}.select2-container--classic .select2-selection--single .select2-selection__arrow{background-color:#ddd;border:none;border-left:1px solid #aaa;border-top-right-radius:4px;border-bottom-right-radius:4px;height:26px;position:absolute;top:1px;right:1px;width:20px;background-image:-webkit-linear-gradient(top,#eee 50%,#ccc 100%);background-image:-o-linear-gradient(top,#eee 50%,#ccc 100%);background-image:linear-gradient(to bottom,#eee 50%,#ccc 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFCCCCCC', GradientType=0)}.select2-container--classic .select2-selection--single .select2-selection__arrow b{border-color:#888 transparent transparent;border-style:solid;border-width:5px 4px 0;height:0;left:50%;margin-left:-4px;margin-top:-2px;position:absolute;top:50%;width:0}.select2-container--classic[dir=rtl] .select2-selection--single .select2-selection__clear{float:left}.select2-container--classic[dir=rtl] .select2-selection--single .select2-selection__arrow{border:none;border-right:1px solid #aaa;border-radius:4px 0 0 4px;left:1px;right:auto}.select2-container--classic.select2-container--open .select2-selection--single{border:1px solid #5897fb}.select2-container--classic.select2-container--open .select2-selection--single .select2-selection__arrow{background:0 0;border:none}.select2-container--classic.select2-container--open .select2-selection--single .select2-selection__arrow b{border-color:transparent transparent #888;border-width:0 4px 5px}.select2-container--classic.select2-container--open.select2-container--above .select2-selection--single{border-top:none;border-top-left-radius:0;border-top-right-radius:0;background-image:-webkit-linear-gradient(top,#fff 0,#eee 50%);background-image:-o-linear-gradient(top,#fff 0,#eee 50%);background-image:linear-gradient(to bottom,#fff 0,#eee 50%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFFFFFFF', endColorstr='#FFEEEEEE', GradientType=0)}.select2-container--classic.select2-container--open.select2-container--below .select2-selection--single{border-bottom:none;border-bottom-left-radius:0;border-bottom-right-radius:0;background-image:-webkit-linear-gradient(top,#eee 50%,#fff 100%);background-image:-o-linear-gradient(top,#eee 50%,#fff 100%);background-image:linear-gradient(to bottom,#eee 50%,#fff 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEEEEEE', endColorstr='#FFFFFFFF', GradientType=0)}.select2-container--classic .select2-selection--multiple{background-color:#fff;border:1px solid #aaa;border-radius:4px;cursor:text;outline:0}.select2-container--classic .select2-selection--multiple:focus{border:1px solid #5897fb}.select2-container--classic .select2-selection--multiple .select2-selection__rendered{list-style:none;margin:0;padding:0 5px}.select2-container--classic .select2-selection--multiple .select2-selection__clear{display:none}.select2-container--classic .select2-selection--multiple .select2-selection__choice{background-color:#e4e4e4;border:1px solid #aaa;border-radius:4px;cursor:default;float:left;margin-right:5px;margin-top:5px;padding:0 5px}.select2-container--classic .select2-selection--multiple .select2-selection__choice__remove{color:#888;cursor:pointer;display:inline-block;font-weight:700;margin-right:2px}.select2-container--classic .select2-selection--multiple .select2-selection__choice__remove:hover{color:#555}.select2-container--classic[dir=rtl] .select2-selection--multiple .select2-selection__choice{float:right;margin-left:5px;margin-right:auto}.select2-container--classic[dir=rtl] .select2-selection--multiple .select2-selection__choice__remove{margin-left:2px;margin-right:auto}.select2-container--classic.select2-container--open .select2-selection--multiple{border:1px solid #5897fb}.select2-container--classic.select2-container--open.select2-container--above .select2-selection--multiple{border-top:none;border-top-left-radius:0;border-top-right-radius:0}.select2-container--classic.select2-container--open.select2-container--below .select2-selection--multiple{border-bottom:none;border-bottom-left-radius:0;border-bottom-right-radius:0}.select2-container--classic .select2-search--dropdown .select2-search__field{border:1px solid #aaa;outline:0}.select2-container--classic .select2-search--inline .select2-search__field{outline:0;box-shadow:none}.select2-container--classic .select2-dropdown{background-color:#fff;border:1px solid transparent}.select2-container--classic .select2-dropdown--above{border-bottom:none}.select2-container--classic .select2-dropdown--below{border-top:none}.select2-container--classic .select2-results__option[role=group]{padding:0}.select2-container--classic .select2-results__option[aria-disabled=true]{color:grey}.select2-container--classic .select2-results__option--highlighted[aria-selected]{background-color:#3875d7;color:#fff}.select2-container--classic .select2-results__group{cursor:default;display:block;padding:6px}.select2-container--classic.select2-container--open .select2-dropdown{border-color:#5897fb}";
    }
    Select2Component.prototype.ngOnInit = function () {
        if (this.cssImport) {
            var head = document.getElementsByTagName('head')[0];
            var link = head.children[head.children.length - 1];
            if (!link.version) {
                var newLink = this.renderer.createElement(head, 'style');
                this.renderer.setElementProperty(newLink, 'type', 'text/css');
                this.renderer.setElementProperty(newLink, 'version', 'select2');
                this.renderer.setElementProperty(newLink, 'innerHTML', this.style);
            }
        }
    };
    Select2Component.prototype.ngOnChanges = function (changes) {
        if (!this.element) {
            return;
        }
        if (changes['data'] && JSON.stringify(changes['data'].previousValue) !== JSON.stringify(changes['data'].currentValue)) {
            this.initPlugin();
            var newValue = this.element.val();
            this.onChange(newValue);
            this.onTouched();
            this.valueChanged.emit({
                value: newValue,
	    	data: this.element.select2('data')
            });
        }
        if (changes['value'] && changes['value'].previousValue !== changes['value'].currentValue) {
            var newValue = changes['value'].currentValue;
            this.setElementValue(newValue);
            this.onChange(newValue);
            this.onTouched();
            this.valueChanged.emit({
                value: newValue,
	    	data: this.element.select2('data')
            });
        }
        if (changes['disabled'] && changes['disabled'].previousValue !== changes['disabled'].currentValue) {
            this.renderer.setElementProperty(this.selector.nativeElement, 'disabled', this.disabled);
        }
    };
    Select2Component.prototype.ngDoCheck = function () {
    	if (!this.element) {
            return;
        }
   	var _this = this;
        this.element = jQuery(this.selector.nativeElement);
        if (_this.element.val() !== this.oldValue) {
            _this.valueChanged.emit({
                value: _this.element.val(),
	    	data: _this.element.select2('data')
            });
            this.oldValue = _this.element.val();
        }
    };
    Select2Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.element = jQuery(this.selector.nativeElement);
        this.initPlugin();
        if (typeof this.value !== 'undefined') {
            this.setElementValue(this.value);
        }
        this.element.on('select2:select', function () {
            _this.onChange(_this.element.val());
            _this.onTouched();
            _this.valueChanged.emit({
                value: _this.element.val(),
	    	data: _this.element.select2('data')
            });
        });
    	
    	this.element.on('select2:unselect', function (evt) {
             /* for some reason the element is still returned by val. Workaround for single-select controls */
             if (_this.options.multiple !== true) {
                 _this.onChange(null);
                 _this.onTouched();
                 _this.valueChanged.emit({
                     value: null,
                     data: _this.element.select2('data')
                 });
                 return;
             }
             _this.onChange(_this.element.val());
             _this.onTouched();
             _this.valueChanged.emit({
                 value: _this.element.val(),
                 data: _this.element.select2('data')
             });
         });
    };
    Select2Component.prototype.writeValue = function (newValue) {
        if (!this.element) {
            this.element = jQuery(this.selector.nativeElement);
            this.initPlugin();
        }
        if (typeof newValue !== 'undefined') {
            this.setElementValue(newValue);
        }
        this.onChange(newValue);
        this.onTouched();
        this.valueChanged.emit({
            value: newValue
        });
    };
    Select2Component.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    Select2Component.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    Select2Component.prototype.ngOnDestroy = function () {
        this.element.off("select2:select");
    };
    Select2Component.prototype.initPlugin = function () {
        var _this = this;
        if (!this.element.select2) {
            if (!this.check) {
                this.check = true;
                console.log("Please add Select2 library (js file) to the project. You can download it from https://github.com/select2/select2/tree/master/dist/js.");
            }
            return;
        }
        // If select2 already initialized remove him and remove all tags inside
        if (this.element.hasClass('select2-hidden-accessible') == true) {
            this.element.select2('destroy');
            this.renderer.setElementProperty(this.selector.nativeElement, 'innerHTML', '');
        }
        var options = {
            data: this.data,
            width: (this.width) ? this.width : 'resolve'
        };
        Object.assign(options, this.options);
        if (options.matcher) {
            jQuery.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
                options.matcher = oldMatcher(options.matcher);
                _this.element.select2(options);
                if (typeof _this.value !== 'undefined') {
                    _this.setElementValue(_this.value);
                }
            });
        }
        else {
            this.element.select2(options);
        }
        if (this.disabled) {
            this.renderer.setElementProperty(this.selector.nativeElement, 'disabled', this.disabled);
        }
    };
    Select2Component.prototype.setElementValue = function (newValue) {
        if (Array.isArray(newValue)) {
            for (var _i = 0, _a = this.selector.nativeElement.options; _i < _a.length; _i++) {
                var option = _a[_i];
                if (newValue.indexOf(option.value) > -1) {
                    this.renderer.setElementProperty(option, 'selected', 'true');
                }
            }
        }
        else {
            this.renderer.setElementProperty(this.selector.nativeElement, 'value', newValue);
        }
        this.element.trigger('change.select2');
    };
    return Select2Component;
}());
__decorate$1([
    _angular_core.ViewChild('selector'),
    __metadata("design:type", _angular_core.ElementRef)
], exports.Select2Component.prototype, "selector", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata("design:type", Array)
], exports.Select2Component.prototype, "data", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata("design:type", Object)
], exports.Select2Component.prototype, "value", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.Select2Component.prototype, "cssImport", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata("design:type", String)
], exports.Select2Component.prototype, "width", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata("design:type", Boolean)
], exports.Select2Component.prototype, "disabled", void 0);
__decorate$1([
    _angular_core.Input(),
    __metadata("design:type", Object)
], exports.Select2Component.prototype, "options", void 0);
__decorate$1([
    _angular_core.Output(),
    __metadata("design:type", Object)
], exports.Select2Component.prototype, "valueChanged", void 0);
exports.Select2Component = Select2Component_1 = __decorate$1([
    _angular_core.Component({
        selector: 'select2',
        template: '<select #selector></select>',
        encapsulation: _angular_core.ViewEncapsulation.None,
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        providers: [
            {
                provide: _angular_forms.NG_VALUE_ACCESSOR,
                useExisting: _angular_core.forwardRef(function () { return Select2Component_1; }),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [_angular_core.Renderer])
], exports.Select2Component);
var Select2Component_1;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.Select2Module = (function () {
    function Select2Module() {
    }
    return Select2Module;
}());
exports.Select2Module = __decorate([
    _angular_core.NgModule({
        declarations: [exports.Select2Component],
        exports: [exports.Select2Component]
    })
], exports.Select2Module);

Object.defineProperty(exports, '__esModule', { value: true });

})));
