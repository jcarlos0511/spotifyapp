import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _routes } from 'src/app/app.routes';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist: any = {};
  topTracks: any = {};
  loading: boolean;
  

  constructor( private _route: ActivatedRoute, private spotify: SpotifyService ) { 

    this.loading = true;

    this._route.params.subscribe( params =>{
      //console.log(params['id']);
      this.getArtist( params['id'] );
      this.getTopTracks( params['id']);
      
    });
  }

  getArtist( id: string ){
    this.spotify.getArtist(id).subscribe( artist => {
      //console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks( id: string ){
    this.spotify.geTopTracks(id).subscribe( topTracks =>{
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
 
}
