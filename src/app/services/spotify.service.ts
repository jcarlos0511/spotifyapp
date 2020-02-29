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
        "Bearer BQBiIOt6MqWMzp1IHcvPxwZbLvBZPljOX_YvZqItauN8tF2SQYMZuB80xmpMbLOMgl6Usleru72FWvEgzog"
    });
    return this.http.get(
      "https://api.spotify.com/v1/browse/new-releases?limit=20",
      { headers }
    );
  }
}
