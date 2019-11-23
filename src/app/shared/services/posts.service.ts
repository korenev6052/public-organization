import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  addPost(post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/posts', post);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

  uploadPhoto(photoFile) {
    const photo = new FormData();
    photo.append('photo', photoFile, photoFile['name']);
    return this.http.post('http://localhost:3200/upload/public-organization', photo, { reportProgress: true, observe: 'events' });
  }

  uploadPhotoXHR(photoFile) {
    const photo = new FormData();
    photo.append('photo', photoFile, photoFile['name']);
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function (event) {
      console.log(event.loaded + ' / ' + event.total);
    }

    // обработчики успеха и ошибки
    // если status == 200, то это успех, иначе ошибка
    xhr.onload = xhr.onerror = function () {
      if (this.status == 201) {
        console.log("success", xhr.response);
      } else {
        console.log("error " + this.status);
      }
    };

    xhr.open('post', 'http://localhost:3200/upload/public-organization', true);

    xhr.send(photo);

  }

}