import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/openapi/v1';

  constructor(private http: HttpClient) {}

  registrar(
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    phone: string,
    password: string,
  ): Observable<any> {
    const datos = { firstName, lastName, email, role, phone, password };
    return this.http.post(`${this.apiUrl}/register`, datos);
  }

  login(email: string, password: string): Observable<string> {
    const datos = { email, password };
    return this.http.post<string>(`${this.apiUrl}/login`, datos);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
