import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'po-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css']
})
export class AddPostPageComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Додати нове повідомлення - Громадська організація');
  }

  ngOnInit() {
  }

}
