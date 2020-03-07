import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSafe2'
})
export class DomSafe2Pipe implements PipeTransform {

   constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, song:boolean=true): any {
    if(song){
      const url = 'https://open.spotify.com/follow/1/?uri=';
      const url2 = '&size=detail&theme=dark';
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value + url2);
    }
      
    
    
  }
}
