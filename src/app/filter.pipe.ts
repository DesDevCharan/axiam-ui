import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string, labelKey?: string): any {
    if (!items || !searchTerm) {
      return items;
    }

    return items.filter(
      item =>
        item[labelKey || 'title']
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) === true
    );
  }
}
