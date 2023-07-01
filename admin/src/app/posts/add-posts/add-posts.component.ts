import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss'],
  
})
export class AddPostsComponent {

  viewSelectedPost: any;

  constructor(private router:Router,
  private PostsService: PostsService,){}  

  goToPage(postlist:string):void{
    this.router.navigate([`${postlist}`]);
  } 


  }
