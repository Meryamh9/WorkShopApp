import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/contact`;

  constructor(private http: HttpClient) {}

  envoyerMessage(data: { nom: string; email: string; message: string }) {
    return this.http.post<{ message: string }>(this.apiUrl, data);
  }
}
