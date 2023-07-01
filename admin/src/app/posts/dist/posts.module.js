"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var list_posts_component_1 = require("./list-posts/list-posts.component");
var view_posts_component_1 = require("./view-posts/view-posts.component");
var add_posts_component_1 = require("./add-posts/add-posts.component");
var edit_posts_component_1 = require("./edit-posts/edit-posts.component");
var delete_posts_component_1 = require("./delete-posts/delete-posts.component");
var expansion_1 = require("@angular/material/expansion");
var comment_post_component_1 = require("./comment-post/comment-post.component");
var router_1 = require("@angular/router");
var list_1 = require("@angular/material/list");
var ngx_infinite_scroll_1 = require("ngx-infinite-scroll");
var ngx_spinner_1 = require("ngx-spinner");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var card_1 = require("@angular/material/card");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var forms_1 = require("@angular/forms");
var expansion_panel_component_1 = require("../layout/expansion-panel/expansion-panel.component");
var animations_1 = require("@angular/platform-browser/animations");
var button_1 = require("@angular/material/button");
var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        core_1.NgModule({
            declarations: [
                list_posts_component_1.ListPostsComponent,
                view_posts_component_1.ViewPostsComponent,
                add_posts_component_1.AddPostsComponent,
                edit_posts_component_1.EditPostsComponent,
                delete_posts_component_1.DeletePostsComponent,
                comment_post_component_1.CommentPostComponent,
                expansion_panel_component_1.ExpansionPanelComponent
            ],
            imports: [
                common_1.CommonModule,
                expansion_1.MatExpansionModule,
                router_1.RouterModule,
                list_1.MatListModule,
                ngx_infinite_scroll_1.InfiniteScrollModule,
                ngx_spinner_1.NgxSpinnerModule,
                card_1.MatCardModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                button_1.MatButtonModule
            ],
            bootstrap: [
                list_posts_component_1.ListPostsComponent,
                view_posts_component_1.ViewPostsComponent,
                add_posts_component_1.AddPostsComponent,
                edit_posts_component_1.EditPostsComponent,
                delete_posts_component_1.DeletePostsComponent,
                comment_post_component_1.CommentPostComponent,
            ]
        })
    ], PostsModule);
    return PostsModule;
}());
exports.PostsModule = PostsModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(PostsModule);
