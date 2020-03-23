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
  topTracks: any[] = [];
  loading: boolean;
  bio: any= [];
  

  constructor( private route: ActivatedRoute, private spotify: SpotifyService ) { 

    this.loading = true;

    this.route.params.subscribe( params =>{
      //console.log(params['id']);
      this.getArtist( params['id'] );
      this.getTopTracks( params['id']);
      this.getDescription( params['name']);
      
    });
  }

  /* from Spotify */

  getArtist( id: string ){
    this.spotify.getArtist(id).subscribe( (artist:any) => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
  }

  getTopTracks( id: string ){
    this.spotify.geTopTracks(id).subscribe( topTracks =>{
      //console.log(topTracks);
      this.topTracks = topTracks;
    });
  }

  /* from Wikipedia */
  getDescription( name: string ){

    this.spotify.getDescription(name).subscribe( (artist: any) =>{
      console.log(artist.query.search[0].snippet);
      this.bio = this.spotify.removeHtml(artist.query.search[0].snippet);
    })
  }
}
