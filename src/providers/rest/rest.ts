import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  nextGame = "https://www.openligadb.de/api/getnextmatchbyleagueteam/4246/2728";
  spieltag = "https://www.openligadb.de/api/getmatchdata/rsw1819";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getNexGame() {
    return new Promise(resolve => {
      this.http.get(this.nextGame).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getSpieltag() {
    return new Promise(resolve => {
      this.http.get(this.spieltag).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
