import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'po-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css']
})
export class AddPostPageComponent implements OnInit {

  constructor(private matSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  private openMatSnackBar() {
    this.matSnackBar.open('Повідомлення надіслане', '', {
      verticalPosition: 'top',
      duration: 2000
    });
  }

  onSubmit(form: NgForm) {
    const formData = form.value;
    console.log(formData);
    this.openMatSnackBar();
    form.resetForm();
  }

}
