import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListPost } from '../posts/list-posts/list-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService{

  baseUrl: string = 'https://jsonplaceholder.typicode.com/';
  
  constructor(private http: HttpClient) { }
  
  listPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}posts`);
  }

  viewSelectedPost(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}posts/${id}`); 
  }
}




