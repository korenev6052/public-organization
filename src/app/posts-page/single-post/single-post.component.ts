import { Component, Input, OnInit } from '@angular/core';

import { Post } from 'src/app/shared/models/post.model';
import { PostStatusesIcon, PostStatusesColor } from 'src/app/shared/enums/post-statuses.enum'

@Component({
  selector: 'po-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})

export class SinglePostComponent {

  constructor() { }

  @Input() post: Post;

  statusesIcon = PostStatusesIcon;
  statusesColor = PostStatusesColor;
  isShowComment: boolean = false;

  showComment() {
    this.isShowComment = !this.isShowComment;
  }

}
