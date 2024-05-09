import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../../models/mesa/mesa.component';
import { MesasService } from '../../../services/mesas/mesas.service';

import { NgForOf, NgIf } from '@angular/common';

import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesas',
  standalone: true,
  imports: [NgForOf, FormsModule, NgIf],
  templateUrl: './mesas.component.html',
})
export class MesasComponent implements OnInit {
  showModalMesa: boolean = false;
  maxComensales: number;
  ubicacion: string;

  mesas: Mesa[];

  constructor(
    private mesasService: MesasService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.obtenerMesas();
  }

  obtenerMesas() {
    const token = localStorage.getItem('token');
    if (token) {
      this.mesasService.getMesas(token).subscribe(
        (mesas: Mesa[]) => {
          this.mesas = mesas;
        },
        (error) => {
          console.error('Error al obtener las mesas:', error);
          Swal.fire({
            title: '¡Error al obtener las mesas!',
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

  openModalMesa() {
    this.showModalMesa = true;
  }

  cancelarMesa() {
    this.showModalMesa = false;
  }

  guardarMesa() {
    const token = localStorage.getItem('token');

    if (token) {
      this.mesasService
        .crearMesa(this.maxComensales, this.ubicacion, token)
        .subscribe(
          () => {
            Swal.fire({
              title: '¡Mesa creada!',
              text: 'La mesa se creo correctamente.',
              icon: 'success',
              confirmButtonText: 'OK',
            });
            this.obtenerMesas(); // Volver a cargar las mesas después de eliminar
          },
          (error) => {
            console.error('Error al crear la mesa:', error);
            Swal.fire({
              title: '¡Error al crear la mesa!',
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

    this.showModalMesa = false;
  }

  editarMesa(mesa: Mesa) {
    const token = localStorage.getItem('token');
    if (token) {
      this.mesasService.editarMesa(mesa.id, mesa, token).subscribe(
        () => {
          Swal.fire({
            title: '¡Mesa editada!',
            text: 'La mesa se edito correctamente.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.obtenerMesas(); // Volver a cargar las mesas después de eliminar
        },
        (error) => {
          console.error('Error al editar la mesa:', error);
          Swal.fire({
            title: '¡Error al editar la mesa!',
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

  eliminarMesa(id: number) {
    const token = localStorage.getItem('token');

    if (token) {
      this.mesasService.eliminarMesa(id, token).subscribe(
        () => {
          Swal.fire({
            title: '¡Mesa eliminada!',
            text: 'La mesa se eliminó correctamente.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.obtenerMesas(); // Volver a cargar las mesas después de eliminar
        },
        (error) => {
          console.error('Error al eliminar la mesa:', error);
          Swal.fire({
            title: '¡Error al eliminar la mesa!',
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
