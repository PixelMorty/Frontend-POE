import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value=='M' ? 'Masculin':"Feminin";
  }

}
