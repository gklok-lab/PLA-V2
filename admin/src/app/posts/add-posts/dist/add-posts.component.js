"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddPostsComponent = void 0;
var core_1 = require("@angular/core");
var AddPostsComponent = /** @class */ (function () {
    function AddPostsComponent(router, PostsService) {
        this.router = router;
        this.PostsService = PostsService;
    }
    AddPostsComponent.prototype.goToPage = function (postlist) {
        this.router.navigate(["" + postlist]);
    };
    AddPostsComponent = __decorate([
        core_1.Component({
            selector: 'app-add-posts',
            templateUrl: './add-posts.component.html',
            styleUrls: ['./add-posts.component.scss']
        })
    ], AddPostsComponent);
    return AddPostsComponent;
}());
exports.AddPostsComponent = AddPostsComponent;
