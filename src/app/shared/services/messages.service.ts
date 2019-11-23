import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable()
export class MessagesService {

  constructor(private http: HttpClient) { }

  addMessage(message): Observable<Message> {
    return this.http.post<Message>('http://localhost:3000/messages', message);
  }

  sendMessage(message): Observable<any> {
    return this.http.post('https://formspree.io/xayygpnr', message);
  }


}