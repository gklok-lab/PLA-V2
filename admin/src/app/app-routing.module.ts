import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ViewPostsComponent } from './posts/view-posts/view-posts.component';
import { ListPostsComponent } from './posts/list-posts/list-posts.component';
import { DeletePostsComponent } from './posts/delete-posts/delete-posts.component';
import { EditPostsComponent } from './posts/edit-posts/edit-posts.component';
import { CommentPostComponent } from './posts/comment-post/comment-post.component';
import { ExpansionPanelComponent } from './layout/expansion-panel/expansion-panel.component';
import { AddPostsComponent } from './posts/add-posts/add-posts.component';
const routes: Routes = [
{path: 'view/:id', component:ViewUserComponent },
{path: 'addPost', component:AddPostsComponent},
{path: 'list', component:ListUsersComponent},
{path: 'postview/:id', component:ViewPostsComponent},
{path: 'postlist', component:ListPostsComponent},
{path: 'delete/id', component:DeletePostsComponent},
{path: 'edit/:id', component:EditPostsComponent},
{path: 'comment/:id', component:CommentPostComponent},
{path: 'title', component:ExpansionPanelComponent},
{path: 'postview', component:ViewPostsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
