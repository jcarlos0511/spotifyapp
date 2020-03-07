import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { _routes } from 'src/app/app.routes';
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-song",
  templateUrl: "./song.component.html",
  styles: []
})
export class SongComponent {
  song: any = {};

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {
    this.route.params.subscribe( params =>{
      //console.log(params['id']);
      this.getSong(params['id']);
      
    });
  }
 

  getSong(id: string) {
    this.spotify.getSong(id).subscribe(song => {
      console.log(song);
      this.song = song;
    });
  }
}
