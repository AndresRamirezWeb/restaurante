import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plato } from '../../models/plato/plato.component';

@Injectable({
  providedIn: 'root',
})
export class PlatosService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getPlatos(token: string): Observable<Plato[]> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Plato[]>(`${this.apiUrl}/platos`, { headers });
  }

  crearPlato(nombre: string, precio: number, token: string): Observable<void> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post<void>(
      `${this.apiUrl}/platos`,
      { nombre: nombre || 0, precio: precio || '' },
      { headers },
    );
  }

  editarPlato(id: number, plato: Plato, token: string): Observable<void> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.put<void>(
      `${this.apiUrl}/platos/${id}`,
      { nombre: plato.nombre, precio: plato.precio },
      { headers },
    );
  }

  eliminarPlato(id: number, token: string): Observable<void> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete<void>(`${this.apiUrl}/platos/${id}`, { headers });
  }
}
