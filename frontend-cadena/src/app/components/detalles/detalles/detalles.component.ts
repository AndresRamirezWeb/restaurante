import { Component, OnInit } from '@angular/core';
import { Detalle } from '../../../models/detalle/detalle.component';
import { DetallesService } from '../../../services/detalles/detalles.service';

import { NgForOf, NgIf } from '@angular/common';

import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [NgForOf, FormsModule, NgIf],
  templateUrl: './detalles.component.html',
})
export class DetallesComponent implements OnInit {
  detalles: Detalle[];
  showModalDetalle: boolean = false;
  cantidad: number;
  totalDetalle: number;
  facturaId: number;
  platoId: number;

  constructor(
    private detallesService: DetallesService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.obtenerDetalles();
  }

  obtenerDetalles() {
    const token = localStorage.getItem('token');
    if (token) {
      this.detallesService.getDetalles(token).subscribe(
        (detalles: Detalle[]) => {
          this.detalles = detalles;
        },
        (error) => {
          console.error('Error al obtener los detalles:', error);
          Swal.fire({
            title: '¡Error al obtener los detalles!',
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

  openModalDetalle() {
    this.showModalDetalle = true;
  }

  cancelarDetalle() {
    this.showModalDetalle = false;
  }

  guardarDetalle() {
    const token = localStorage.getItem('token');
    if (token) {
      this.detallesService
        .crearDetalle(
          this.cantidad,
          this.totalDetalle,
          this.facturaId,
          this.platoId,
          token,
        )
        .subscribe(
          () => {
            Swal.fire({
              title: '¡Detalle creado!',
              text: 'El detalle se creo correctamente.',
              icon: 'success',
              confirmButtonText: 'OK',
            });
            this.obtenerDetalles(); // Volver a cargar los clientes después de eliminar
          },
          (error) => {
            console.error('Error al crear el detalle:', error);
            Swal.fire({
              title: '¡Error al crear el detalle!',
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
    this.showModalDetalle = false;
  }

  editarDetalle(detalle: Detalle) {
    const token = localStorage.getItem('token');
    if (token) {
      this.detallesService.editarDetalle(detalle.id, detalle, token).subscribe(
        () => {
          Swal.fire({
            title: 'Detalle editado!',
            text: 'El detalle se edito correctamente.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.obtenerDetalles(); // Volver a cargar los clientes después de eliminar
        },
        (error) => {
          console.error('Error al editar el detalle:', error);
          Swal.fire({
            title: '¡Error al editar el detalle!',
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

  eliminarDetalle(id: number) {
    const token = localStorage.getItem('token');
    if (token) {
      this.detallesService.eliminarDetalle(id, token).subscribe(
        () => {
          Swal.fire({
            title: '¡Detalle eliminado!',
            text: 'El detalle se eliminó correctamente.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.obtenerDetalles(); // Volver a cargar las mesas después de eliminar
        },
        (error) => {
          console.error('Error al eliminar el detalle:', error);
          Swal.fire({
            title: '¡Error al eliminar el detalle!',
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
