import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from '../../models/factura/factura.component';

@Injectable({
  providedIn: 'root',
})
export class FacturasService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  obtenerReporteCamareroMes(token: string): Observable<Factura[]> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Factura[]>(`${this.apiUrl}/facturas/camareros`, {
      headers,
    });
  }

  obtenerClientesMasDeCienMil(token: string): Observable<Factura[]> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Factura[]>(`${this.apiUrl}/facturas/clientes`, {
      headers,
    });
  }
}
