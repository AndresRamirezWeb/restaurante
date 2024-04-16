import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://tu-api.com/api';

  constructor(private http: HttpClient) {}

  registrar(
    nombre: string,
    apellido: string,
    email: string,
    password: string,
  ): Observable<any> {
    const datos = { nombre, apellido, email, password };
    return this.http.post(`${this.apiUrl}/registro`, datos);
  }

  login(email: string, password: string): Observable<string> {
    const datos = { email, password };
    return this.http.post<string>(`${this.apiUrl}/login`, datos);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
