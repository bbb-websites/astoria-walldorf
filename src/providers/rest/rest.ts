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
  spieltag = "https://www.openligadb.de/api/getmatchdata/rsw1819/2018/1";
  news = "https://fcastoria.de/wp-json/wp/v2/posts";
  newsDetail = "https://fcastoria.de/wp-json/wp/v2/posts/";
  newsPicture = "https://fcastoria.de/wp-json/wp/v2/media/";

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

  getNews() {
    return new Promise(resolve => {
      this.http.get(this.news).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getNewsDetail(par) {
    return new Promise(resolve => {
      this.http.get(this.newsDetail+par).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getNewsPicture(featured_media) {
    return new Promise(resolve => {
      this.http.get(this.newsPicture + featured_media).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
