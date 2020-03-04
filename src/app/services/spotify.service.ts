import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQC4indAVBbBVJN1bRm2uA8YHe7hztkZtoq3Ja32xolxpwjSRmL-E5oUvJdMVx7K_-9snenuXEynCqfhP7s"
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    /*const headers = new HttpHeaders({
      Authorization:
        "Bearer BQA9_Ki-_Go_BBNw0H58Wpw6OyxZiDZIgjB8Z1-xGfJMNxiGmbQnSLFVxNJiGPWHHG3BoqCMXsA7Cw9Ut-w"
    });*/
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map(data => {
        return data["albums"].items;
      })
    );
  }

  getArtists(term: string) {
    /*const headers = new HttpHeaders({
      Authorization:
        "Bearer BQA9_Ki-_Go_BBNw0H58Wpw6OyxZiDZIgjB8Z1-xGfJMNxiGmbQnSLFVxNJiGPWHHG3BoqCMXsA7Cw9Ut-w"
    });*/
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map(data => {
        return data["artists"].items;
      })
    );
  }

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
        return data['tracks'];
      })
    );
  }
}
