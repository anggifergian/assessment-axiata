import { Component, OnInit } from '@angular/core';
import { AppError } from '../services/app-error';
import { BadInput } from '../services/bad-input';
import { NotFoundError } from '../services/not-found-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'course-http',
  templateUrl: './course-http.component.html',
  styleUrls: ['./course-http.component.scss']
})
export class CourseHttpComponent implements OnInit {
  posts;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAll()
      .subscribe(resp => this.posts = resp);
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.postService.create(post)
      .subscribe(
        (response: any) => {
          post.id = response.id;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadInput) {
            console.log(error.originalError);
          }
          else { throw error; }
        });
  }

  updatePost(post) {
    this.postService.update(post, {isRead: true})
      .subscribe(resp => console.log(resp));
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post.id)
      .subscribe(
        null,
        (error: AppError) => {
          this.posts.splice(index, 0, post);
          if (error instanceof NotFoundError) {
            alert('This post has been deleted.');
          }
          else { throw error; }
        }
      );
  }
}
