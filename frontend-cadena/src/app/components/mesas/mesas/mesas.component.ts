import { Component } from '@angular/core';
// import { Mesa } from './models';
// import { MesasService } from './mesas.service';

@Component({
  selector: 'app-mesas',
  standalone: true,
  imports: [],
  templateUrl: './mesas.component.html',
})

// export class MesasComponent implements OnInit {
export class MesasComponent {
  // mesas: Mesa[] = [];

  // constructor(private mesasService: MesasService) {}

  // ngOnInit() {
  //   this.obtenerMesas();
  // }

  // obtenerMesas() {
  //   this.mesasService.getMesas().subscribe((mesas) => {
  //     this.mesas = mesas;
  //   });
  // }

  openModal() {
    // Lógica para abrir el modal de agregar mesa
  }

  // editarMesa(mesa: Mesa) {
  //   // Lógica para editar la mesa
  // }

  // eliminarMesa(id: number) {
  //   this.mesasService.eliminarMesa(id).subscribe(() => {
  //     this.obtenerMesas();
  //   });
  // }
}
