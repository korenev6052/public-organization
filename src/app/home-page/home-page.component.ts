import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'po-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private title: Title, private matSnackBar: MatSnackBar) {
    title.setTitle('Головна - Громадська організація');
  }

  ngOnInit() {
  }

  private openMatSnackBar() {
    this.matSnackBar.open('Повідомлення надіслане', '', {
      verticalPosition: 'top',
      duration: 2000
    })
  }

  onSubmit(form: NgForm) {
    const formData = form.value;
    console.log(formData);
    this.openMatSnackBar();
    form.resetForm();
  }

}
