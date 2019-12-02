import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Post } from '../models/post.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  addPost(post): Observable<Post> {
    return this.http.post<Post>(`${environment.jsonServerApiUrl}/posts`, post);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.jsonServerApiUrl}/posts`);
  }

  uploadPhoto(photoFile) {
    const photo = new FormData();
    photo.append('photo', photoFile, photoFile['name']);
    return this.http.post(`${environment.fileServerApiUrl}/upload/public-organization`, photo, { reportProgress: true, observe: 'events' });
  }

}