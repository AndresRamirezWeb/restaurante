import { Component } from '@angular/core';
// import { Plato } from './models';
// import { PlatosService } from './platos.service';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [],
  templateUrl: './platos.component.html',
})

// export class PlatosComponent implements OnInit {
export class PlatosComponent {
  // platos: Plato[] = [];

  // constructor(private platosService: PlatosService) {}

  // ngOnInit() {
  //   this.obtenerPlatos();
  // }

  // obtenerPlatos() {
  //   this.platosService.getPlatos().subscribe((platos) => {
  //     this.platos = platos;
  //   });
  // }

  openModal() {
    // Lógica para abrir el modal de agregar plato
  }

  // editarPlato(plato: Plato) {
  //   // Lógica para editar el plato
  // }

  // eliminarPlato(id: number) {
  //   this.platosService.eliminarPlato(id).subscribe(() => {
  //     this.obtenerPlatos();
  //   });
  // }
}
