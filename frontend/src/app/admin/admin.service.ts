import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private tokenKey = 'admin_token';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('/api/admin/login', {
      username,
      password,
    });
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/admin']);
  }
}
