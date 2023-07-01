"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExpansionPanelComponent = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var ExpansionPanelComponent = /** @class */ (function () {
    function ExpansionPanelComponent() {
        this.initiallyExpanded = false;
        this.isExpanded = this.initiallyExpanded;
    }
    ExpansionPanelComponent.prototype.togglePanel = function () {
        this.isExpanded = !this.isExpanded;
    };
    __decorate([
        core_1.Input()
    ], ExpansionPanelComponent.prototype, "initiallyExpanded");
    ExpansionPanelComponent = __decorate([
        core_1.Component({
            selector: 'app-expansion-panel',
            templateUrl: './expansion-panel.component.html',
            styleUrls: ['./expansion-panel.component.scss'],
            animations: [
                animations_1.trigger('panelExpand', [
                    animations_1.state('transition', animations_1.style({ height: '0', overflow: 'hidden' })),
                    animations_1.state('collapsed', animations_1.style({ height: '0', overflow: 'hidden' })),
                    animations_1.state('expanded', animations_1.style({ height: '*', overflow: 'hidden' })),
                    animations_1.transition('collapsed <=> expanded', animations_1.animate('300ms ease-in-out'))
                ])
            ]
        })
    ], ExpansionPanelComponent);
    return ExpansionPanelComponent;
}());
exports.ExpansionPanelComponent = ExpansionPanelComponent;
