import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'po-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Сторінку не знайдено - Громадська організація');
  }

  ngOnInit() {
  }

}
