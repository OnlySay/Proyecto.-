import { Pipe, PipeTransform } from '@angular/core';
import { dineroeg, Usuario } from '../interfaces/interfaces';

@Pipe({
  name: 'algoasi'
})
export class algoasi implements PipeTransform {

  public transform(value: any)  {
    return value.number;
}

}
