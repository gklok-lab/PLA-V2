import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { CommentService } from 'src/app/services/comment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss'],
})

export class ListPostsComponent implements OnInit {
  panelOpenState = false;

  posts:any;
  listPosts: any;
  idComments: any;
  count: any = 20;
  isLoading = false;
  
  constructor(private PostsService: PostsService,
              private CommentService: CommentService,
              private router:Router){}

  goToPage(postview: string) :void {
    this.router.navigate([`${postview}`]);
  }             

  ngOnInit(): void {
    this.listPosts1();
    this.idComment1();
    
  }
    listPosts1(): void {
    this.isLoading = true;
    this.PostsService.listPosts().subscribe((data) =>{
    this.isLoading = false;
    this.posts = data;
    });
  }
  idComment1(): void {
    this.CommentService.idComment().subscribe((data) => {
      this.idComments = data;
    });
  }
  sumComments(postId: any) {
    let sum = 0;
    this.idComments.forEach((element: { postId: any }) => {
      if (element.postId == postId) {
        sum++;
      }
    });
    return sum;
  }


  viewDetails(id: any) {
    this.router.navigate([`postview/${id}`]);
  }
  onScroll() {
    this.isLoading = true;
    this.count += 20;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000)
  }
  
}




