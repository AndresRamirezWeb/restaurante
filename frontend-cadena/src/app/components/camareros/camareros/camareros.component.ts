import { Component, OnInit } from '@angular/core';
import { Camarero } from '../../../models/camarero/camarero.component';
import { CamarerosService } from '../../../services/camareros/camareros.service';

import { NgForOf, NgIf } from '@angular/common';

import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camareros',
  standalone: true,
  imports: [NgForOf, FormsModule, NgIf],
  templateUrl: './camareros.component.html',
})
export class CamarerosComponent implements OnInit {
  showModalCamarero: boolean = false;
  nombre: string;
  apellido: string;

  camareros: Camarero[];

  constructor(
    private camarerosService: CamarerosService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.obtenerCamareros();
  }

  obtenerCamareros() {
    const token = localStorage.getItem('token');
    if (token) {
      this.camarerosService.getCamareros(token).subscribe(
        (camareros: Camarero[]) => {
          this.camareros = camareros;
        },
        (error) => {
          console.error('Error al obtener los camareros:', error);
          Swal.fire({
            title: '¡Error al obtener los camareros!',
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

  openModalCamarero() {
    this.showModalCamarero = true;
  }

  cancelarCamarero() {
    this.showModalCamarero = false;
  }

  guardarCamarero() {
    const token = localStorage.getItem('token');

    if (token) {
      this.camarerosService
        .crearCamarero(this.nombre, this.apellido, token)
        .subscribe(
          () => {
            Swal.fire({
              title: 'Camarero creado!',
              text: 'El camarero se creo correctamente.',
              icon: 'success',
              confirmButtonText: 'OK',
            });
            this.obtenerCamareros(); // Volver a cargar los clientes después de eliminar
          },
          (error) => {
            console.error('Error al crear el camarero:', error);
            Swal.fire({
              title: '¡Error al crear el camarero!',
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

    this.showModalCamarero = false;
  }

  editarCamarero(camarero: Camarero) {
    const token = localStorage.getItem('token');
    if (token) {
      this.camarerosService
        .editarCamarero(camarero.id, camarero, token)
        .subscribe(
          () => {
            Swal.fire({
              title: 'Camarero editado!',
              text: 'El camarero se edito correctamente.',
              icon: 'success',
              confirmButtonText: 'OK',
            });
            this.obtenerCamareros(); // Volver a cargar los clientes después de eliminar
          },
          (error) => {
            console.error('Error al editar el camarero:', error);
            Swal.fire({
              title: '¡Error al editar el camarero!',
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

  eliminarCamarero(id: number) {
    const token = localStorage.getItem('token');

    if (token) {
      this.camarerosService.eliminarCamarero(id, token).subscribe(
        () => {
          Swal.fire({
            title: '¡Camarero eliminado!',
            text: 'El camarero se eliminó correctamente.',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          this.obtenerCamareros(); // Volver a cargar las mesas después de eliminar
        },
        (error) => {
          console.error('Error al eliminar el camarero:', error);
          Swal.fire({
            title: '¡Error al eliminar el camarero!',
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
