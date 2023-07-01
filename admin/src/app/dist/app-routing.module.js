"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var view_user_component_1 = require("./users/view-user/view-user.component");
var list_users_component_1 = require("./users/list-users/list-users.component");
var view_posts_component_1 = require("./posts/view-posts/view-posts.component");
var list_posts_component_1 = require("./posts/list-posts/list-posts.component");
var delete_posts_component_1 = require("./posts/delete-posts/delete-posts.component");
var edit_posts_component_1 = require("./posts/edit-posts/edit-posts.component");
var comment_post_component_1 = require("./posts/comment-post/comment-post.component");
var expansion_panel_component_1 = require("./layout/expansion-panel/expansion-panel.component");
var add_posts_component_1 = require("./posts/add-posts/add-posts.component");
var routes = [
    { path: 'view/:id', component: view_user_component_1.ViewUserComponent },
    { path: 'addPost', component: add_posts_component_1.AddPostsComponent },
    { path: 'list', component: list_users_component_1.ListUsersComponent },
    { path: 'postview/:id', component: view_posts_component_1.ViewPostsComponent },
    { path: 'postlist', component: list_posts_component_1.ListPostsComponent },
    { path: 'delete/id', component: delete_posts_component_1.DeletePostsComponent },
    { path: 'edit/:id', component: edit_posts_component_1.EditPostsComponent },
    { path: 'comment/:id', component: comment_post_component_1.CommentPostComponent },
    { path: 'title', component: expansion_panel_component_1.ExpansionPanelComponent },
    { path: 'postview', component: view_posts_component_1.ViewPostsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
