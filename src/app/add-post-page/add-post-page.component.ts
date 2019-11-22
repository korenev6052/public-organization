import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { SingleFormComponent } from '../shared/components/single-form/single-form.component';

@Component({
  selector: 'po-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css']
})
export class AddPostPageComponent extends SingleFormComponent implements OnInit {

  constructor(formBuilder: FormBuilder, snackBar: MatSnackBar, private title: Title) {
    super(formBuilder, snackBar);
    title.setTitle('Додати нове повідомлення - Громадська організація');
  }

  photo: File = null;

  ngOnInit() {
    this.initForm({
      city: ['', Validators.required],
      street: ['', Validators.required],
      house: ['', Validators.required],
      photo: ['', Validators.required],
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
        required: 'Значення поля "Фото" не може бути порожнім'
      }
    })
  }

  changePhoto(event) {
    this.photo = event.target.files[0];
  }

  onSubmit() {
    // this.makeRequest = ;
    // this.formSubmit('Дякуємо, повідомлення надіслано', 'На жаль, виникла помилка відправки, спробуйте ще раз');
  }

}
