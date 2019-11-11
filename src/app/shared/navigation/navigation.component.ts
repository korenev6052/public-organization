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

  navItems: {
    'name': string,
    'link': string,
    'icon': string
  }[] = [{
    'name': 'Повідомити',
    'link': '/add-post',
    'icon': 'flash_on'
  }, {
    'name': 'Повідомлення',
    'link': '/posts',
    'icon': 'view_list'
  }, {
    'name': 'Мапа',
    'link': '/map',
    'icon': 'room'
  }, {
    'name': 'Про нас',
    'link': '/about',
    'icon': 'import_contacts'
  }];

  ngOnInit() {
  }

}
