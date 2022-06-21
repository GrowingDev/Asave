import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'singleWord'
  })
  export class SingleWordPipe implements PipeTransform
  {
      transform(value: string, index: number): string | boolean
      {
          if (value == null) {
            return value;
          }
          const words = value.split(' ');
          return words.length > 0 ? words[index] : value;
      }
  }