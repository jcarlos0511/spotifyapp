import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styles: []
})
export class SongsComponent  {

  songs: any[] = [];

  constructor( private spotify: SpotifyService, private router: Router) { 

    this.loadStorage();

  }

  search(term: string) {
    console.log(term);
    this.spotify.getSongs(term).subscribe((data:any)=>{
      console.log(data);
      this.songs = data;

      this.saveStorage();
    });
    
  }
  
  seeSong(item: any) {
    //console.log(item);
    this.router.navigate(["/song", item]);
  }

  // LocalStorage

  saveStorage() {

    localStorage.setItem('songs', JSON.stringify(this.songs) );

  }

  loadStorage() {

    if( localStorage.getItem('songs')){

      this.songs = JSON.parse(localStorage.getItem('songs')) ;

    }else{

      this.songs = [];

    }
  }

}
