import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detalle } from '../../models/detalle/detalle.component';

@Injectable({
  providedIn: 'root',
})
export class DetallesService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getDetalles(token: string): Observable<Detalle[]> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Detalle[]>(`${this.apiUrl}/detalles`, { headers });
  }

  crearDetalle(
    cantidad: number,
    totalDetalle: number,
    facturaId: number,
    platoId: number,
    token: string,
  ): Observable<void> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post<void>(
      `${this.apiUrl}/detalles`,
      {
        cantidad: cantidad || 0,
        totalDetalle: totalDetalle || 0,
        factura: { id: facturaId || 0 },
        plato: { id: platoId || 0 },
      },
      { headers },
    );
  }

  editarDetalle(id: number, detalle: Detalle, token: string): Observable<void> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.put<void>(
      `${this.apiUrl}/detalles/${id}`,
      {
        cantidad: detalle.cantidad || 0,
        totalDetalle: detalle.totalDetalle || 0,
        factura: { id: detalle.facturaId || 0 },
        plato: { id: detalle.platoId || 0 },
      },
      { headers },
    );
  }

  eliminarDetalle(id: number, token: string): Observable<void> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete<void>(`${this.apiUrl}/detalles/${id}`, { headers });
  }
}
