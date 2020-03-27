import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { SongComponent } from './components/song/song.component';
import { SongsComponent } from './components/songs/songs.component';

//Routes
import { _routes } from './app.routes';

//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomSafePipe } from './pipes/dom-safe.pipe';
import { DomSafe2Pipe } from './pipes/dom-safe2.pipe';
import { FooterComponent } from './components/shared/footer/footer.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistsComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    CardsComponent,
    LoadingComponent,
    DomSafePipe,
    SongComponent,
    SongsComponent,
    DomSafe2Pipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(_routes, { useHash: true})// import routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
