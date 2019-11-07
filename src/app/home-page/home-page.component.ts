import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'po-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Головна - Громадська організація');
  }

  formSubmitted: boolean = false;

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    form.resetForm();
    this.formSubmitted = true;
    setTimeout(() => {
      this.formSubmitted = false;
    }, 2000);
  }

}
