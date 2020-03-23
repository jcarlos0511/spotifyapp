import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html"
})
export class CardsComponent {
  @Input() items: any[] = [];

  constructor(private router: Router) {}

  seeArtist(item: any) {
    let artistId: any;
    let nameId: any;

    if (item.type === "artist") {
      artistId = item.id;
      nameId = item.name;
    } else {
      artistId = item.artists[0].id;
      nameId = item.artists[0].name;
    }
    //console.log(artistId,nameId);
    this.router.navigate(["/artist", artistId, nameId]);
  }


}
