import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { _routes } from 'src/app/app.routes';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  constructor( private _route: ActivatedRoute ) { 
    this._route.params.subscribe( params =>{
      console.log(params['id']);
    });
  }

 
}
