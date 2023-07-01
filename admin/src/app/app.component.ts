import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin';

  listPosts: any;
  constructor(private PostsService: PostsService) { }

  ngOnInit(): void {
    
    
  }
  
}
