export class Detalle {
  id: number;
  cantidad: number;
  totalDetalle: number;
  facturaId: number;
  platoId: number;

  constructor(
    id: number,
    cantidad: number,
    totalDetalle: number,
    facturaId: number,
    platoId: number,
  ) {
    this.id = id;
    this.cantidad = cantidad;
    this.totalDetalle = totalDetalle;
    this.facturaId = facturaId;
    this.platoId = platoId;
  }
}
