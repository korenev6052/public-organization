import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';
import { MatSnackBar } from '@angular/material';
import * as moment from 'moment';
import { HttpEventType } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';

import { SingleFormComponent } from '../shared/components/single-form/single-form.component';
import { Post } from '../shared/models/post.model';
import { PostService } from '../shared/services/posts.service';
import { PostStatuses } from '../shared/enums/post-statuses.enum'

@Component({
  selector: 'po-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css']
})
export class AddPostPageComponent extends SingleFormComponent implements OnInit, OnDestroy {

  constructor(formBuilder: FormBuilder, snackBar: MatSnackBar, private title: Title, private postsService: PostService) {
    super(formBuilder, snackBar);
    title.setTitle('Додати нове повідомлення - Громадська організація');
  }

  currentPhoto: File = null;
  photoUploadProgress: number = null;

  ngOnInit() {
    this.initForm({
      city: ['', Validators.required],
      street: ['', Validators.required],
      house: ['', Validators.required],
      photo: ['', [Validators.required, FileValidator.maxContentSize(83886080)]],
      comment: ['']
    }, {
      city: {
        required: 'Значення поля "Місто" не може бути порожнім'
      },
      street: {
        required: 'Значення поля "Вулиця" не може бути порожнім'
      },
      house: {
        required: 'Значення поля "Будинок" не може бути порожнім'
      },
      photo: {
        required: 'Значення поля "Фото" не може бути порожнім',
        maxContentSize: 'Розмір файлу не повинен перевищувати 10 Мб'
      }
    })
  }

  changePhoto(event) {
    this.currentPhoto = event.target.files[0];
  }

  onSubmit() {
    if (this.form.valid) {
      this.sending = true;
      this.sent = false;
      this.postsService.uploadPhoto(this.currentPhoto)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          event => {
            if (event.type === HttpEventType.UploadProgress) {
              this.photoUploadProgress = Math.round(event.loaded / event.total * 100);
            }
            if (event.type === HttpEventType.Response) {
              this.photoUploadProgress = null;
              const photo = event.body['filename'];
              const { city, street, house, comment } = this.form.value;
              const status = PostStatuses.New;
              const createdTimeStamp = moment().format('DD.MM.YYYY HH.mm.ss');
              const changedTimeStamp = createdTimeStamp;
              const post = new Post(city, street, house, photo, comment, status, createdTimeStamp, changedTimeStamp);
              this.makeRequest = this.postsService.addPost(post);
              this.formSubmit('Дякуємо, повідомлення надіслано', 'На жаль, виникла помилка відправки, спробуйте ще раз');
            }
          }, error => {
            this.sending = false;
            this.showMessage('На жаль, виникла помилка відправки, спробуйте ще раз');
          });
    } else {
      this.form.markAllAsTouched();
    }
  }

}