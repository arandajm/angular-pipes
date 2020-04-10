import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
})
// value => value to transform
// todas => param
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    value = value.toLowerCase();
    let nombres = value.split(' ');
    console.log(nombres);
    if (todas) {
      nombres = nombres.map((nombre) => {
        return nombre[0].toUpperCase() + nombre.substring(1);
      });
    } else {
      // Only capitalize the firt letter of the first name.
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
    }
    return nombres.join(' ');
  }
}
