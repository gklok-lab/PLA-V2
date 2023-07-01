"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LayoutModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var header_component_1 = require("./header/header.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var footer_component_1 = require("./footer/footer.component");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var list_1 = require("@angular/material/list");
var forms_1 = require("@angular/forms");
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            declarations: [
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                footer_component_1.FooterComponent,
            ],
            imports: [
                common_1.CommonModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                list_1.MatListModule,
                forms_1.FormsModule
            ],
            exports: [
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                footer_component_1.FooterComponent
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
