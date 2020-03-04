import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "domSafe"
})
export class DomSafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, artist:boolean=true ): any {
    if(artist){
      const url = 'https://open.spotify.com/follow/1/?uri=';
      const url2 = '&size=basic&theme=dark';
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value + url2);
    }
    else{
      const url = 'https://open.spotify.com/embed?uri=';
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    }
    
  }
}
