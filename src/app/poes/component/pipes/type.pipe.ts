import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
})
export class TypePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value == 'POEI' ? 'POEI' : 'POEC';
  }
}
