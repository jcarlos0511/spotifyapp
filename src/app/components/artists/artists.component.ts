import { Component } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-artists",
  templateUrl: "./artists.component.html",
  styles: []
})
export class ArtistsComponent {
  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {
    
    this.loadStorage();

  }

  search(term: string) {
    this.loading = true;
    console.log(term);
    
    this.spotify.getArtists(term).subscribe((data: any) => {
      console.log(data);
      this.artists = data;
      this.loading = false;

      this.saveStorage()

    });
  }

  // LocalStorage
  saveStorage() {

    localStorage.setItem('artists', JSON.stringify(this.artists) );

  }

  loadStorage() {

    if( localStorage.getItem('artists')){

      this.artists = JSON.parse(localStorage.getItem('artists')) ;

    }else{

      this.artists = [];

    }
  }
}
