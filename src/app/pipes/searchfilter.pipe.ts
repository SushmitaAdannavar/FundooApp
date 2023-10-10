import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(data: Array<any>, search: string) {
    
    if (search==='') {
      return data;
    }
    const users = data.filter((value)=>{
      return value.name.includes(search);
    })
    
    return users;
    
  }

}
