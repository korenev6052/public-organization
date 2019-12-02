import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from '../models/message.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class MessagesService {

  constructor(private http: HttpClient) { }

  addMessage(message): Observable<Message> {
    return this.http.post<Message>(`${environment.jsonServerApiUrl}/messages`, message);
  }

  sendMessage(message): Observable<any> {
    return this.http.post(environment.formspreeApiUrl, message);
  }


}