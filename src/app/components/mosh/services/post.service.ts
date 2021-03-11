import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts():Observable<any> {
    return this.http.get(this.url);
  }

  createPost(body) {
    return this.http.post(this.url, body);
  }

  updatePost(id, body) {
    return this.http.patch(`${this.url}/${id}`, body);
  }

  deletePost(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
