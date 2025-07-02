import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Message {
  nom: string;
  email: string;
  message: string;
  date: string;
}

@Component({
  selector: 'app-dashboard-admin',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss'
})
export class DashboardAdminComponent implements OnInit {
  messages: Message[] = [];
  
  constructor(private http: HttpClient) {}

 ngOnInit(): void {
    this.http.get<Message[]>('https://sheetdb.io/api/v1/i8mq9v6y09lu0')
      .subscribe({
        next: (data) => this.messages = data,
        error: (err) => {
          console.error('Erreur de chargement des messages :', err);
        }
      });
    }
}