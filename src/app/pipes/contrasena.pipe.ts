import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena',
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, activar: boolean): string {
    if (activar) {
      value = value
        .split('')
        .map((char) => '*')
        .join(' ');
    }
    return value;
  }
}
