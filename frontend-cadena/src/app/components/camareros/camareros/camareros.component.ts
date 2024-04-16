import { Component } from '@angular/core';
// import { Camarero } from './models';
// import { CamarerosService } from './camareros.service';

@Component({
  selector: 'app-camareros',
  standalone: true,
  imports: [],
  templateUrl: './camareros.component.html',
})

// export class CamarerosComponent implements OnInit {
export class CamarerosComponent {
  // camareros: Camarero[] = [];

  // constructor(private camarerosService: CamarerosService) {}

  // ngOnInit() {
  //   this.obtenerCamareros();
  // }

  // obtenerCamareros() {
  //   this.camarerosService.getCamareros().subscribe((camareros) => {
  //     this.camareros = camareros;
  //   });
  // }

  openModal() {
    // Lógica para abrir el modal de agregar camarero
  }

  // editarCamarero(camarero: Camarero) {
  //   // Lógica para editar el camarero
  // }

  // eliminarCamarero(id: number) {
  //   this.camarerosService.eliminarCamarero(id).subscribe(() => {
  //     this.obtenerCamareros();
  //   });
  // }
}
