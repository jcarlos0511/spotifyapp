import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}
  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQD61WMsLhNgZZg3iODy26rq45U2xyNy19MlaxaFKrR1CH_izuut3mxRByrm6CgNChATwRn8XvVKCX5Abtk"
    });
    return this.http.get(
      "https://api.spotify.com/v1/browse/new-releases?limit=20",
      { headers }
    );
  }

  getArtist( term: string ) {

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQD61WMsLhNgZZg3iODy26rq45U2xyNy19MlaxaFKrR1CH_izuut3mxRByrm6CgNChATwRn8XvVKCX5Abtk"
    });
    return this.http.get(
      `https://api.spotify.com/v1/search?q=${ term }&type=artist&limit=15`,
      { headers }
    );

  }
}
