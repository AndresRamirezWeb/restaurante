import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../../models/mesa/mesa.component';
import { MesasService } from '../../../services/mesas/mesas.service';

import { NgForOf, NgIf } from '@angular/common';

import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

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

  constructor(private mesasService: MesasService) {}

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
          // Manejar el error, por ejemplo, mostrar un mensaje al usuario
        },
      );
    } else {
      console.error('Token de autenticación no encontrado');
      // Manejar la falta de token, tal vez redirigir a la página de inicio de sesión
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
            // Manejar el error, por ejemplo, mostrar un mensaje al usuario
          },
        );
    } else {
      console.error('Token de autenticación no encontrado');
      // Manejar la falta de token, tal vez redirigir a la página de inicio de sesión
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
          // Manejar el error, por ejemplo, mostrar un mensaje al usuario
        },
      );
    } else {
      console.error('Token de autenticación no encontrado');
      // Manejar la falta de token, tal vez redirigir a la página de inicio de sesión
    }
    // Aquí puedes implementar la lógica para editar la mesa seleccionada
    // Por ejemplo, puedes navegar a una ruta que tenga un componente de edición de mesa
    // o mostrar un modal de edición de mesa similar a openModal().
    // console.log('Editando la mesa:', mesa);
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
          // Manejar el error, por ejemplo, mostrar un mensaje al usuario
        },
      );
    } else {
      console.error('Token de autenticación no encontrado');
      // Manejar la falta de token, tal vez redirigir a la página de inicio de sesión
    }
  }
}
