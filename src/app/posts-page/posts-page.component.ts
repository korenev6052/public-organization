import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from '../shared/models/post.model';
import { PostsServiceMock } from '../shared/mocks/posts-service.mock';

@Component({
  selector: 'po-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})

export class PostsPageComponent implements OnInit {

  constructor(private title: Title, private postServiceMock: PostsServiceMock) {
    title.setTitle('Повідомлення - Громадська організація');
  }

  loadedPosts: number = 3;
  posts: Post[] = [];

  ngOnInit() {
    this.posts = this.postServiceMock.getPosts();
  }

  downloadPosts() {
    this.loadedPosts += 3;
  }

}
