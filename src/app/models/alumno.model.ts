export class Alumno{
  constructor(
    public id: number,
    public Nombre: string,
    public Apellido: string,
    public email: string,
    public edad: number,
    public cumpleanios: Date,
    public curso: string,
  ) {}
}
