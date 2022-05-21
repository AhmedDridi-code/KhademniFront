import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): any[] {
    let service = args[0];
    let ville = args[1];
    if(service.length<1 && ville.length<1) {
      return value
    }  
    if(service && service.length>1){
      value = value.filter(el=> el.service === service);
    }
    if(ville && ville.length>1){
      value = value.filter(el=> el.ville === ville);
    }
    return value;
  }

}
