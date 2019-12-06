import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salon } from './salons';

@Injectable({
  providedIn: 'root'
})
export class SalonsService {

  constructor(private http: HttpClient) { }

  getSalons(): Observable<Salon[]> {
    return this.http.get<Salon[]>('http://localhost:3000/channels');
  }

}
