import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camarero } from '../../models/camarero/camarero.component';

@Injectable({
  providedIn: 'root',
})
export class CamarerosService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getCamarero(token: string): Observable<Camarero[]> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Camarero[]>(`${this.apiUrl}/camareros`, { headers });
  }

  crearCamarero(
    nombre: string,
    apellido: string,
    token: string,
  ): Observable<void> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post<void>(
      `${this.apiUrl}/camareros`,
      { nombre: nombre || 0, apellido: apellido || '' },
      { headers },
    );
  }

  editarCamarero(
    id: number,
    camarero: Camarero,
    token: string,
  ): Observable<void> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.put<void>(
      `${this.apiUrl}/camareros/${id}`,
      { nombre: camarero.nombre, apellido: camarero.apellido },
      { headers },
    );
  }

  eliminarCamarero(id: number, token: string): Observable<void> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete<void>(`${this.apiUrl}/camareros/${id}`, {
      headers,
    });
  }
}
