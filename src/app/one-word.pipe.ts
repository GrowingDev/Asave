import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oneWord'
})
export class OneWordPipe implements PipeTransform {

  transform(value: string, index: string): string | boolean
  {
      if (value == null) {
        return value;
      }
      const words = value.split(' ');
      return words.length > 0 ? words[index] : value;
  }

}
