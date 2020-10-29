import { Pipe, PipeTransform } from '@angular/core';
import { dineroeg, Usuario } from '../interfaces/interfaces';

@Pipe({
  name: 'FiltroPipe'
})
export class FiltroPipe implements PipeTransform {

  public transform(value: any)  {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");;
}

}
