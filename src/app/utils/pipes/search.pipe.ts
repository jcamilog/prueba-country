import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resulSearch = [];
    for(const country of value){
      if(country.name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1) {
        resulSearch.push(country)
      }
    }
    return resulSearch;
  }

}
