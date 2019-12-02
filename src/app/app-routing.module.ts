import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AddPostPageComponent } from './add-post-page/add-post-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'add-post', component: AddPostPageComponent },
  { path: 'posts', component: PostsPageComponent },
  { path: 'map', component: MapPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
