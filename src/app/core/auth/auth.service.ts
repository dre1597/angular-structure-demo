import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticated(): boolean {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      return !!token;
    }
    return false;
  }

  public login(phone: string, password: string): boolean {
    if (phone && password) {
      localStorage.setItem('auth_token', 'your-token');
      localStorage.setItem('last_login', Date.now().toString());
      return true;
    }
    return false;
  }

  public logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('auth_token');
      window.location.reload();
    }
  }
}
