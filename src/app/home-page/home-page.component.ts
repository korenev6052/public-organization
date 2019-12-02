import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { forkJoin } from 'rxjs';

import { SingleFormComponent } from '../shared/components/single-form/single-form.component';
import { MessagesService } from '../shared/services/messages.service';
import { Message } from '../shared/models/message.model';

@Component({
  selector: 'po-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent extends SingleFormComponent implements OnInit {

  constructor(formBuilder: FormBuilder, snackBar: MatSnackBar, private title: Title, private messagesService: MessagesService) {
    super(formBuilder, snackBar);
    title.setTitle('Головна - Громадська організація');
  }

  ngOnInit() {
    this.initForm({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      messageText: ['', [Validators.required, Validators.minLength(10)]]
    }, {
      name: {
        required: 'Значення поля "Ваше ім\'я" не може бути порожнім'
      },
      email: {
        required: 'Значення поля "Ваша пошта" не може бути порожнім',
        email: 'Значення поля "Ваша пошта" некоректне'
      },
      messageText: {
        required: 'Значення поля "Текст повідомлення" не може бути порожнім',
        minlength: 'Значення поля "Текст повідомлення" не може бути менше 10 символів'
      }
    })
  }

  onSubmit() {
    const timeStamp = moment().format('DD.MM.YYYY HH.mm.ss');
    const { email, name, messageText } = this.form.value;
    const message = new Message(name, email, messageText, timeStamp);
    this.makeRequest = forkJoin(
      this.messagesService.addMessage(message),
      this.messagesService.sendMessage(message)
    );
    this.formSubmit('Дякуємо, повідомлення надіслано', 'На жаль, виникла помилка відправки, спробуйте ще раз');
  }

}
