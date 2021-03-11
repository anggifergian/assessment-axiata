import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'course-http',
  templateUrl: './course-http.component.html',
  styleUrls: ['./course-http.component.scss']
})
export class CourseHttpComponent implements OnInit {
  posts: any[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    input.value = '';

    this.postService.createPost(post)
      .subscribe((response:any) => {
        post["id"] = response.id;
        this.posts.splice(0, 0, post);
      });
  }

  updatePost(post) {
    this.postService.updatePost(post.id, {isRead: true})
      .subscribe(resp => console.log(resp));
  }

  deletePost(post) {
    this.postService.deletePost(post.id)
      .subscribe(resp => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }
}
