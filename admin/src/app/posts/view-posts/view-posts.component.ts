import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit {
panelOpenState = false;

postId: any;
postDetails: any;
userDetails: any;
editMode: any;

constructor(
  private PostsService: PostsService,
  private UserService: UserService,
  private activatedRoute: ActivatedRoute
) {}

ngOnInit(): void {
  this.postId = this.activatedRoute.snapshot.params['id'];

  this.getPostDetails();
}

async getPostDetails() {
  this.PostsService.viewSelectedPost(this.postId).subscribe((data) => {
    this.postDetails = data;
    this.UserService.getUser(this.postDetails?.userId).subscribe((data) => {
      this.userDetails = data;
    })

  });
}
edit() {
  this.editMode = true;
}

save() {
  this.editMode = true;
}







}
