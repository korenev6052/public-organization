import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'po-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css']
})
export class AddPostPageComponent implements OnInit {

  constructor() { }

  formSubmitted: boolean = false;

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.formSubmitted = true;
    setTimeout(() => {
      this.formSubmitted = false;
    }, 2000);
  }

}
