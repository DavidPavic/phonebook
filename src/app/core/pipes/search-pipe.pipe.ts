import { Pipe, PipeTransform } from '@angular/core';
import { mockPerson } from '../IPerson';
import { mockData } from '../mockData';

@Pipe({
  name: 'searchPipe'
})

export class SearchPipePipe implements PipeTransform {
  transform(personArray: mockPerson[], searchInput: string): any[]{
    if(!searchInput) {
        return  personArray;
    }
    return personArray.filter(
       x =>x.name.includes(searchInput) || x.lastName.includes(searchInput) || x.email.includes(searchInput)
   )
 }
}
