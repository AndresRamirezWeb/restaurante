import { Component, OnInit } from '@angular/core';
import { Factura } from '../../../models/factura/factura.component';
import { FacturasService } from '../../../services/facturas/facturas.service';

import { NgForOf, NgIf } from '@angular/common';

import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [NgForOf, FormsModule, NgIf],
  templateUrl: './reportes.component.html',
})
export class ReportesComponent implements OnInit {
  mesSeleccionado: string;
  meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  reporteCamareroMes: any[] = [];
  clientesMasDeCienMil: any[] = [];

  constructor(
    private reportesService: FacturasService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.mesSeleccionado = this.meses[new Date().getMonth()];
    this.obtenerReporteCamareroMes();
    this.obtenerClientesMasDeCienMil();
  }

  obtenerReporteCamareroMes() {
    const token = localStorage.getItem('token');
    if (token) {
      this.reportesService.obtenerReporteCamareroMes(token).subscribe(
        (reportes: Factura[]) => {
          this.reporteCamareroMes = reportes;
        },
        (error) => {
          console.error('Error al obtener el reporte:', error);
          Swal.fire({
            title: '¡Error al obtener el reporte!',
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

  obtenerClientesMasDeCienMil() {
    const token = localStorage.getItem('token');
    if (token) {
      this.reportesService.obtenerClientesMasDeCienMil(token).subscribe(
        (clientes: Factura[]) => {
          this.clientesMasDeCienMil = clientes;
        },
        (error) => {
          console.error('Error al obtener el reporte:', error);
          Swal.fire({
            title: '¡Error al obtener el reporte!',
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
