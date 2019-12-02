import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddPostPageComponent } from './add-post-page/add-post-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SinglePostComponent } from './posts-page/single-post/single-post.component';
import { PostsServiceMock } from './shared/mocks/posts-service.mock';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SingleFormComponent } from './shared/components/single-form/single-form.component';
import { TextInputComponent } from './shared/components/text-input/text-input.component';
import { FileInputComponent } from './shared/components/file-input/file-input.component';
import { MessagesService } from './shared/services/messages.service';
import { PostService } from './shared/services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    AddPostPageComponent,
    PostsPageComponent,
    MapPageComponent,
    AboutPageComponent,
    SinglePostComponent,
    NotFoundPageComponent,
    SingleFormComponent,
    TextInputComponent,
    FileInputComponent
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
    PostsServiceMock,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MessagesService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
