import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../../models/cliente/cliente.component';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getClientes(token: string): Observable<Cliente[]> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Cliente[]>(`${this.apiUrl}/clientes`, { headers });
  }

  crearCliente(
    nombre: string,
    apellido: string,
    token: string,
  ): Observable<void> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post<void>(
      `${this.apiUrl}/clientes`,
      { nombre: nombre || 0, apellido: apellido || '' },
      { headers },
    );
  }

  editarCliente(id: number, cliente: Cliente, token: string): Observable<void> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.put<void>(
      `${this.apiUrl}/clientes/${id}`,
      { nombre: cliente.nombre, apellido: cliente.apellido },
      { headers },
    );
  }

  eliminarCliente(id: number, token: string): Observable<void> {
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete<void>(`${this.apiUrl}/clientes/${id}`, { headers });
  }
}
