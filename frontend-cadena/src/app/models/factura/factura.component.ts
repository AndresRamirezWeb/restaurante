export class Factura {
  id: number;
  mesaId: number;
  clienteId: number;
  camareroId: number;
  fecha: number;
  totalFacturado: number;
  maxComensales: number;
  ubicacion: string;
  nombreCliente: string;
  apellidoCliente: string;
  nombreCamarero: string;
  apellidoCamarero: string;

  constructor(
    id: number,
    mesaId: number,
    clienteId: number,
    camareroId: number,
    fecha: number,
    totalFacturado: number,
    maxComensales: number,
    ubicacion: string,
    nombreCliente: string,
    apellidoCliente: string,
    nombreCamarero: string,
    apellidoCamarero: string,
  ) {
    this.id = id;
    this.mesaId = mesaId;
    this.clienteId = clienteId;
    this.camareroId = camareroId;
    this.fecha = fecha;
    this.totalFacturado = totalFacturado;
    this.maxComensales = maxComensales;
    this.ubicacion = ubicacion;
    this.nombreCliente = nombreCliente;
    this.apellidoCliente = apellidoCliente;
    this.nombreCamarero = nombreCamarero;
    this.apellidoCamarero = apellidoCamarero;
  }
}
