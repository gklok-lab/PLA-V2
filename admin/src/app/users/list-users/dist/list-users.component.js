"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListUsersComponent = void 0;
var core_1 = require("@angular/core");
var ListUsersComponent = /** @class */ (function () {
    function ListUsersComponent(userService) {
        this.userService = userService;
    }
    ListUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.listUsers().subscribe(function (data) {
            _this.listUsers = data;
        });
    };
    ListUsersComponent = __decorate([
        core_1.Component({
            selector: 'app-list-users',
            templateUrl: './list-users.component.html',
            styleUrls: ['./list-users.component.scss']
        })
    ], ListUsersComponent);
    return ListUsersComponent;
}());
exports.ListUsersComponent = ListUsersComponent;
