import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mesa } from '../../models/mesa/mesa.component';

@Injectable({
  providedIn: 'root',
})
export class MesasService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getMesas(token: string): Observable<Mesa[]> {
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Mesa[]>(`${this.apiUrl}/mesas`, { headers });
  }

  crearMesa(
    maxComensales: number,
    ubicacion: string,
    token: string,
  ): Observable<void> {
    // Lógica para crear la mesa
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post<void>(
      `${this.apiUrl}/mesas`,
      { maxComensales: maxComensales || 0, ubicacion: ubicacion || '' },
      { headers },
    );
  }

  editarMesa(id: number, mesa: Mesa, token: string): Observable<void> {
    // Lógica para editar la mesa
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.put<void>(
      `${this.apiUrl}/mesas/${id}`,
      { maxComensales: mesa.maxComensales, ubicacion: mesa.ubicacion },
      { headers },
    );
  }

  eliminarMesa(id: number, token: string): Observable<void> {
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete<void>(`${this.apiUrl}/mesas/${id}`, { headers });
  }
}
