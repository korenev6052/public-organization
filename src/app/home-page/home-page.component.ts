import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SingleFormComponent } from '../shared/components/single-form/single-form.component';

@Component({
  selector: 'po-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent extends SingleFormComponent implements OnInit {

  constructor(formBuilder: FormBuilder, snackBar: MatSnackBar, private title: Title) {
    super(formBuilder, snackBar);
    title.setTitle('Головна - Громадська організація');
  }

  ngOnInit() {
    this.initForm({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    }, {
      name: {
        required: 'Значення поля "Ваше ім\'я" не може бути порожнім'
      },
      email: {
        required: 'Значення поля "Ваша пошта" не може бути порожнім',
        email: 'Значення поля "Ваша пошта" некоректне'
      },
      message: {
        required: 'Значення поля "Текст повідомлення" не може бути порожнім',
        minlength: 'Значення поля "Текст повідомлення" не може бути менше 10 символів'
      }
    })
  }

  onSubmit() {
    // this.makeRequest = ;
    // this.formSubmit('Дякуємо, повідомлення надіслано', 'На жаль, виникла помилка відправки, спробуйте ще раз');
  }

}
