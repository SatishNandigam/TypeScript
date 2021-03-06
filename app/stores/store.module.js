"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const store_component_1 = require("./store.component");
const model_module_1 = require("../models/model.module");
const counter_directive_1 = require("./counter.directive");
const cartsummary_component_1 = require("./cartsummary.component");
let StoreModule = class StoreModule {
};
StoreModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, model_module_1.ModelModule],
        declarations: [store_component_1.StoreComponent, counter_directive_1.CounterDirective, cartsummary_component_1.CartSummaryComponent],
        exports: [store_component_1.StoreComponent]
    })
], StoreModule);
exports.StoreModule = StoreModule;
//# sourceMappingURL=store.module.js.map