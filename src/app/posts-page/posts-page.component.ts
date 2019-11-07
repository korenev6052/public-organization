import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'po-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Повідомлення - Громадська організація');
  }

  ngOnInit() {
  }

}
