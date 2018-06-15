import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpieplanPage } from '../../pages/spielplan/spielplan';
import { NewsPage } from '../../pages/news/news';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nextGameDay: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getSpiele();
  }

  getSpiele() {
    this.restProvider.getNexGame()
    .then(data => {
      try {
        this.nextGameDay = data;
      }
      catch(e) {
        console.log(e);
      }
    }, data =>{
      console.log(data);
    });
  }

  spielplan() {
    console.log("Speilplan clicked");
    this.navCtrl.push(SpieplanPage);
  }

  news() {
    console.log("News clicked");
    this.navCtrl.push(NewsPage);
  }

}
