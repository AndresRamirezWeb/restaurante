import { Component, OnInit } from '@angular/core';
import { Plato } from '../../../models/plato/plato.component';
import { PlatosService } from '../../../services/platos/platos.service';

import { NgForOf, NgIf } from '@angular/common';

import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [NgForOf, FormsModule, NgIf],
  templateUrl: './platos.component.html',
})
export class PlatosComponent implements OnInit {
  showModalPlato: boolean = false;
  nombre: string;
  precio: number;
  platos: Plato[];

  constructor(
    private platosService: PlatosService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.obtenerPlatos();
  }

  obtenerPlatos() {
    const token = localStorage.getItem('token');
    if (token) {
      this.platosService.getPlatos(token).subscribe(
        (platos: Plato[]) => {
          this.platos = platos;
        },
        (error) => {
          console.error('Error al obtener los platos:', error);
          Swal.fire({
            title: '¡Error al obtener los platos!',
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

  openModalPlato() {
    this.showModalPlato = true;
  }

  cancelarPlato() {
    this.showModalPlato = false;
  }

  guardarPlato() {
    const token = localStorage.getItem('token');

    if (token) {
      this.platosService.crearPlato(this.nombre, this.precio, token).subscribe(
        () => {
          Swal.fire({
            title: '¡Plato creado!',
            text: 'El plato se creo correctamente.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.obtenerPlatos(); // Volver a cargar los clientes después de eliminar
        },
        (error) => {
          console.error('Error al crear el plato:', error);
          Swal.fire({
            title: '¡Error al crear el plato!',
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

    this.showModalPlato = false;
  }

  editarPlato(plato: Plato) {
    const token = localStorage.getItem('token');
    if (token) {
      this.platosService.editarPlato(plato.id, plato, token).subscribe(
        () => {
          Swal.fire({
            title: 'Plato editado!',
            text: 'El plato se edito correctamente.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.obtenerPlatos(); // Volver a cargar los clientes después de eliminar
        },
        (error) => {
          console.error('Error al editar el plato:', error);
          Swal.fire({
            title: '¡Error al editar el plato!',
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

  eliminarPlato(id: number) {
    const token = localStorage.getItem('token');

    if (token) {
      this.platosService.eliminarPlato(id, token).subscribe(
        () => {
          Swal.fire({
            title: 'Plato eliminado!',
            text: 'El plato se eliminó correctamente.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.obtenerPlatos(); // Volver a cargar las mesas después de eliminar
        },
        (error) => {
          console.error('Error al eliminar el plato:', error);
          Swal.fire({
            title: '¡Error al eliminar el plato!',
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
