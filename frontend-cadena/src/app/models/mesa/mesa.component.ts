export class Mesa {
  id: number;
  maxComensales: number;
  ubicacion: string;

  constructor(id: number, maxComensales: number, ubicacion: string) {
    this.id = id;
    this.maxComensales = maxComensales;
    this.ubicacion = ubicacion;
  }
}
