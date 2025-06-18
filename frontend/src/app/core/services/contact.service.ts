import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/contact';

  constructor(private http: HttpClient) {}

  envoyerMessage(data: { nom: string; email: string; message: string }) {
    return this.http.post<{ message: string }>(this.apiUrl, data);
  }
}
