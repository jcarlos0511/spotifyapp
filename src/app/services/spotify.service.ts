import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  /* for Spotify */

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQBMAxTyJ4j8vAoR5gbhS5Fh8-v4oTOIrKMCwKTvA6NTtzFp_BGvpNbepeC7SoAmsT_iB3Pq8C7Od6MJ4s8"
    });

    return this.http.get(url, { headers });
  }

  /* for Wikipedia */

  getWiki( wiki: string ) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=`;
    const url2 = `%20artist&utf8=&format=json&origin=*`;
    return this.http.get(url + wiki + url2);
  }

  seeWiki( id: any ){
    const url = `https://en.wikipedia.org/?curid=${id}`;
    return url;
  }

  /* for Home.Component */

  getNewReleases() {
    /*const headers = new HttpHeaders({
      Authorization:
        "Bearer 'token here' "
    });*/
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map(data => {
        return data["albums"].items;
      })
    );
  }

  /*for Search.Component */

  getArtists(term: string) {
    /*const headers = new HttpHeaders({
      Authorization:
        "Bearer 'token here' "
    });*/
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map(data => {
        return data["artists"].items;
      })
    );
  }

  /* for Artist.component */

  /* Spotify */
  getArtist(id: string) {
    return this.getQuery(
      `artists/${id}`
    ); /*.pipe(
      map(data => {
        return data["artists"].items;
      })
    );*/
  }

  geTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe(
      map(data => {
        return data["tracks"];
      })
    );
  }

  /* Wikipedia */

  getDescription(name: any) {
    return this.getWiki(name);
  }

  //remove the html that comes in the wikipedia API
  removeHtml(value:string){
    return value.replace(/<\/?[^>]+>/gi, '');
  }

  /* for Songs.Component */

  getSongs(term: string) {
    return this.getQuery(`search?q=${term}&type=track&market=US&limit=3`).pipe(
      map(data => {
        return data["tracks"].items; // reduce the object to a specific one
      })
    );
  }

  /* for Song.Component */

  getSong(id: string) {
    return this.getQuery(`tracks/${id}?market=US`);
  }
}
