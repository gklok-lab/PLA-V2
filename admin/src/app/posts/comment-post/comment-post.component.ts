import { Component,OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.scss']
})
export class CommentPostComponent implements OnInit {

idComment: any;
constructor(private CommentService: CommentService){}

ngOnInit(): void{
  this.CommentService.idComment().subscribe(data=>{
    this.idComment=data;
  });

}
}
