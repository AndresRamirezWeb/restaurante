import { Factura } from '../factura/factura.component';
import { Plato } from '../plato/plato.component';
export class Detalle {
  id: number;
  cantidad: number;
  totalDetalle: number;
  facturaId: number;
  platoId: number;
  factura: Factura;
  plato: Plato;

  constructor(
    id: number,
    cantidad: number,
    totalDetalle: number,
    facturaId: number,
    platoId: number,
    factura: Factura,
    plato: Plato,
  ) {
    this.id = id;
    this.cantidad = cantidad;
    this.totalDetalle = totalDetalle;
    this.facturaId = facturaId;
    this.platoId = platoId;
    this.factura = factura;
    this.plato = plato;
  }
}
