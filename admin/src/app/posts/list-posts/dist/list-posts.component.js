"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListPostsComponent = void 0;
var core_1 = require("@angular/core");
var ListPostsComponent = /** @class */ (function () {
    function ListPostsComponent(PostsService, CommentService, router) {
        this.PostsService = PostsService;
        this.CommentService = CommentService;
        this.router = router;
        this.panelOpenState = false;
        this.count = 20;
        this.isLoading = false;
    }
    ListPostsComponent.prototype.goToPage = function (postview) {
        this.router.navigate(["" + postview]);
    };
    ListPostsComponent.prototype.ngOnInit = function () {
        this.listPosts1();
        this.idComment1();
    };
    ListPostsComponent.prototype.listPosts1 = function () {
        var _this = this;
        this.isLoading = true;
        this.PostsService.listPosts().subscribe(function (data) {
            _this.isLoading = false;
            _this.posts = data;
        });
    };
    ListPostsComponent.prototype.idComment1 = function () {
        var _this = this;
        this.CommentService.idComment().subscribe(function (data) {
            _this.idComments = data;
        });
    };
    ListPostsComponent.prototype.sumComments = function (postId) {
        var sum = 0;
        this.idComments.forEach(function (element) {
            if (element.postId == postId) {
                sum++;
            }
        });
        return sum;
    };
    ListPostsComponent.prototype.viewDetails = function (id) {
        this.router.navigate(["postview/" + id]);
    };
    ListPostsComponent.prototype.onScroll = function () {
        var _this = this;
        this.isLoading = true;
        this.count += 20;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    ListPostsComponent = __decorate([
        core_1.Component({
            selector: 'app-list-posts',
            templateUrl: './list-posts.component.html',
            styleUrls: ['./list-posts.component.scss']
        })
    ], ListPostsComponent);
    return ListPostsComponent;
}());
exports.ListPostsComponent = ListPostsComponent;
