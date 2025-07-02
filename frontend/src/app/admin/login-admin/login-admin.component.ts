import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.scss',
})
export class LoginAdminComponent {
  username = '';
  password = '';
  error = '';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login() {
    this.http
      .post<{ token: string }>('http://localhost:3000/api/admin/login', {
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (res) => {
          localStorage.setItem('admin_token', res.token);
          this.router.navigate(['/admin/dashboard']);
        },
        error: () => (this.error = 'Identifiants invalides.'),
      });
  }
}
