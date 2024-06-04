import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente/cliente.component';
import { ClientesService } from '../../../services/clientes/clientes.service';

import { NgForOf, NgIf } from '@angular/common';

import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [NgForOf, FormsModule, NgIf],
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  showModalCliente: boolean = false;
  nombre: string;
  apellido: string;

  clientes: Cliente[];

  constructor(
    private clientesService: ClientesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    const token = localStorage.getItem('token');
    if (token) {
      this.clientesService.getClientes(token).subscribe(
        (clientes: Cliente[]) => {
          this.clientes = clientes;
        },
        (error) => {
          console.error('Error al obtener los clientes:', error);
          Swal.fire({
            title: '¡Error al obtener los clientes!',
            text: error.message + '. Inténtalo de nuevo.',
            icon: 'error',
            confirmButtonText: 'OK',
          });

          if (error.status === 401) {
            this.router.navigate(['/']);
          }
        },
      );
    } else {
      console.error('Token de autenticación no encontrado');
      Swal.fire({
        title: '¡Token de autenticación no encontrado!',
        text: 'Ocurrió un error al obtener el token. Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      this.router.navigate(['/']);
    }
  }

  openModalCliente() {
    this.showModalCliente = true;
  }

  cancelarCliente() {
    this.showModalCliente = false;
  }

  guardarCliente() {
    const token = localStorage.getItem('token');

    if (token) {
      this.clientesService
        .crearCliente(this.nombre, this.apellido, token)
        .subscribe(
          () => {
            Swal.fire({
              title: '¡Cliente creado!',
              text: 'El cliente se creo correctamente.',
              icon: 'success',
              confirmButtonText: 'OK',
            });
            this.obtenerClientes(); // Volver a cargar los clientes después de eliminar
          },
          (error) => {
            console.error('Error al crear el cliente:', error);
            Swal.fire({
              title: '¡Error al crear el cliente!',
              text: error.message + '. Inténtalo de nuevo.',
              icon: 'error',
              confirmButtonText: 'OK',
            });

            if (error.status === 401) {
              this.router.navigate(['/']);
            }
          },
        );
    } else {
      console.error('Token de autenticación no encontrado');
      Swal.fire({
        title: '¡Token de autenticación no encontrado!',
        text: 'Ocurrió un error al obtener el token. Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      this.router.navigate(['/']);
    }

    this.showModalCliente = false;
  }

  editarCliente(cliente: Cliente) {
    const token = localStorage.getItem('token');
    if (token) {
      this.clientesService.editarCliente(cliente.id, cliente, token).subscribe(
        () => {
          Swal.fire({
            title: 'Cliente editado!',
            text: 'El cliente se edito correctamente.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.obtenerClientes(); // Volver a cargar los clientes después de eliminar
        },
        (error) => {
          console.error('Error al editar el cliente:', error);
          Swal.fire({
            title: '¡Error al editar el cliente!',
            text: error.message + '. Inténtalo de nuevo.',
            icon: 'error',
            confirmButtonText: 'OK',
          });

          if (error.status === 401) {
            this.router.navigate(['/']);
          }
        },
      );
    } else {
      console.error('Token de autenticación no encontrado');
      Swal.fire({
        title: '¡Token de autenticación no encontrado!',
        text: 'Ocurrió un error al obtener el token. Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      this.router.navigate(['/']);
    }
  }

  eliminarCliente(id: number) {
    const token = localStorage.getItem('token');

    if (token) {
      this.clientesService.eliminarCliente(id, token).subscribe(
        () => {
          Swal.fire({
            title: '¡Cliente eliminado!',
            text: 'El cliente se eliminó correctamente.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.obtenerClientes(); // Volver a cargar las mesas después de eliminar
        },
        (error) => {
          console.error('Error al eliminar el cliente:', error);
          Swal.fire({
            title: '¡Error al eliminar el cliente!',
            text: error.message + '. Inténtalo de nuevo.',
            icon: 'error',
            confirmButtonText: 'OK',
          });

          if (error.status === 401) {
            this.router.navigate(['/']);
          }
        },
      );
    } else {
      console.error('Token de autenticación no encontrado');
      Swal.fire({
        title: '¡Token de autenticación no encontrado!',
        text: 'Ocurrió un error al obtener el token. Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      this.router.navigate(['/']);
    }
  }
}
