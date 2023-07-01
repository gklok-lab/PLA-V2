import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { EditPostsComponent } from './edit-posts/edit-posts.component';
import { DeletePostsComponent } from './delete-posts/delete-posts.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { CommentPostComponent } from './comment-post/comment-post.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { ExpansionPanelComponent } from '../layout/expansion-panel/expansion-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ListPostsComponent,
    ViewPostsComponent,
    AddPostsComponent,
    EditPostsComponent,
    DeletePostsComponent,
    CommentPostComponent,
    ExpansionPanelComponent
    
    
    
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule,
    MatListModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule

    
    
    
    
    
  ],

  bootstrap: [
    ListPostsComponent,
    ViewPostsComponent,
    AddPostsComponent,
    EditPostsComponent,
    DeletePostsComponent,
    CommentPostComponent,
  ],

})
export class PostsModule {}
platformBrowserDynamic().bootstrapModule(PostsModule);