import { Component, Input } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'po-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {

  constructor() { }

  @Input() post: Post;

  statusIcons = {
    'Надійшло': 'error',
    'Виконано': 'check_circle',
    'Скасовано': 'remove_circle'
  }

  isShowComment: boolean = false;

  showComment() {
    this.isShowComment = !this.isShowComment;
  }

}
