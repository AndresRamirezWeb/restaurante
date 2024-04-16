import { Component, OnInit } from '@angular/core';
// import { ReportesService } from './reportes.service';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [],
  templateUrl: './reportes.component.html',
})
// export class ReportesComponent implements OnInit {
export class ReportesComponent {
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

  // constructor(private reportesService: ReportesService) {}

  // ngOnInit() {
  //   this.mesSeleccionado = this.meses[new Date().getMonth()];
  //   this.obtenerReporteCamareroMes();
  //   this.obtenerClientesMasDeCienMil();
  // }

  // obtenerReporteCamareroMes() {
  //   this.reportesService
  //     .obtenerReporteCamareroMes(this.mesSeleccionado)
  //     .subscribe((reportes) => {
  //       this.reporteCamareroMes = reportes;
  //     });
  // }

  // obtenerClientesMasDeCienMil() {
  //   this.reportesService.obtenerClientesMasDeCienMil().subscribe((clientes) => {
  //     this.clientesMasDeCienMil = clientes;
  //   });
  // }
}
