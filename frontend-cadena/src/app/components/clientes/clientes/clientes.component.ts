import { Component } from '@angular/core';
// import { Cliente } from './models';
// import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [],
  templateUrl: './clientes.component.html',
})

// export class ClientesComponent implements OnInit {
export class ClientesComponent {
  // clientes: Cliente[] = [];

  // constructor(private clientesService: ClientesService) {}

  // ngOnInit() {
  //   this.obtenerClientes();
  // }

  // obtenerClientes() {
  //   this.clientesService.getClientes().subscribe((clientes) => {
  //     this.clientes = clientes;
  //   });
  // }

  openModal() {
    // Lógica para abrir el modal de agregar cliente
  }

  // editarCliente(cliente: Cliente) {
  //   // Lógica para editar el cliente
  // }

  // eliminarCliente(id: number) {
  //   this.clientesService.eliminarCliente(id).subscribe(() => {
  //     this.obtenerClientes();
  //   });
  // }
}
