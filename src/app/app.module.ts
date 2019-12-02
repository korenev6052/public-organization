import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddPostPageComponent } from './add-post-page/add-post-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { SinglePostComponent } from './posts-page/single-post/single-post.component';
import { PostsServiceMock } from './shared/mocks/posts-service.mock';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    AddPostPageComponent,
    PostsPageComponent,
    MapPageComponent,
    AboutPageComponent,
    NotFoundComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MaterialFileInputModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatSlideToggleModule
  ],
  providers: [
    PostsServiceMock
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
