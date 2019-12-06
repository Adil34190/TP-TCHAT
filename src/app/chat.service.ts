import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { message } from './message';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  addChat(le_message: message): Observable<message>{
    return this.http.post<message>('http://localhost:3000/messages', le_message);
  }

  getChat(): Observable<message[]> {
    return this.http.get<message[]>('http://localhost:3000/messages');
  }
}
