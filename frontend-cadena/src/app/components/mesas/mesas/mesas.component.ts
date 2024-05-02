import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../../models/mesa/mesa.component';
import { MesasService } from '../../../services/mesas/mesas.service';

import { NgForOf } from '@angular/common';

import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mesas',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './mesas.component.html',
})
export class MesasComponent implements OnInit {
  mesas: Mesa[];
  // mesas: Mesa[] = [];

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

  openModal() {
    // Aquí puedes implementar la lógica para abrir un modal de agregar mesa
    // Por ejemplo, si estás utilizando alguna librería de modales como ng-bootstrap,
    // puedes activar el modal aquí utilizando su API.
    // También puedes mostrar un componente de Angular como un modal
    // o cambiar el estado de una variable que controle la visibilidad del modal en el HTML.
    console.log('Abriendo modal de agregar mesa');
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
