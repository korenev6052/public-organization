import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'po-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  constructor(private title: Title) {
    title.setTitle('Мапа - Громадська організація');
  }

  ngOnInit() {
  }

}
