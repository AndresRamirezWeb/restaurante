import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../../models/cliente/cliente';
import { Camarero } from '../../../models/camarero/camarero';
import { Plato } from '../../../models/plato/plato';
import { FacturasService } from '../../../services/facturas/facturas.service';

@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [],
  templateUrl: './facturas.component.html',
})
export class FacturasComponent implements OnInit {
  facturaForm: FormGroup;
  clientes: Cliente[];
  camareros: Camarero[];
  platos: Plato[];
  totalFactura = 0;

  constructor(
    private fb: FormBuilder,
    private facturaService: FacturasService,
  ) {
    this.facturaForm = this.fb.group({
      cliente: ['', Validators.required],
      camarero: ['', Validators.required],
      platos: this.fb.array([]),
    });
  }

  ngOnInit() {
    // this.facturaService.getClientes().subscribe((clientes) => {
    //   this.clientes = clientes;
    // });
    // this.facturaService.getCamareros().subscribe((camareros) => {
    //   this.camareros = camareros;
    // });
    // this.facturaService.getPlatos().subscribe((platos) => {
    //   this.platos = platos;
    // });
  }

  get dishes(): FormArray {
    return this.facturaForm.get('platos') as FormArray;
  }

  // agregarPlato() {
  //   const platoForm = this.fb.group({
  //     plato: ['', Validators.required],
  //     cantidad: ['', Validators.required],
  //   });
  //   this.platos.push(platoForm);
  // }

  // removerPlato(index: number) {
  //   this.platos.removeAt(index);
  //   this.calcularTotalFactura();
  // }

  // calcularTotal(index: number): number {
  //   const platoControl = this.platos.controls[index];
  //   const plato = platoControl.get('plato')?.value;
  //   const cantidad = platoControl.get('cantidad')?.value;
  //   const platoSeleccionado = this.platos.find((p) => p.id === plato);
  //   return platoSeleccionado ? platoSeleccionado.precio * cantidad : 0;
  // }

  // calcularTotalFactura() {
  //   this.totalFactura = this.platos.controls.reduce(
  //     (total, platoControl) =>
  //       total + this.calcularTotal(this.platos.controls.indexOf(platoControl)),
  //     0,
  //   );
  // }

  // registrarFactura() {
  //   const factura = {
  //     cliente: this.facturaForm.get('cliente')?.value,
  //     camarero: this.facturaForm.get('camarero')?.value,
  //     platos: this.platos.controls.map((platoControl) => ({
  //       plato: platoControl.get('plato')?.value,
  //       cantidad: platoControl.get('cantidad')?.value,
  //     })),
  //   };

  //   this.facturaService.registrarFactura(factura).subscribe(
  //     () => {
  //       console.log('Factura registrada exitosamente');
  //       // Realizar acciones adicionales después de registrar la factura
  //     },
  //     (error) => {
  //       console.error('Error al registrar la factura:', error);
  //       // Mostrar mensaje de error al usuario
  //     },
  //   );
  // }
}
