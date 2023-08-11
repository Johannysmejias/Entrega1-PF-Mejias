import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/models';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    return `${value.Nombre} ${value.Apellido}`;
  }

}
