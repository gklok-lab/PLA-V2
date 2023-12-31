import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) { }
  
  listUsers(){
    return this.http.get(`${this.baseUrl}users`);
  }

  getUser(id: number) {
    return this.http.get(`${this.baseUrl}users/${id}`);

}
}
