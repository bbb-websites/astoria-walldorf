import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-spielplan',
  templateUrl: 'spielplan.html'
})
export class SpieplanPage {

  spiele : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getSpiele();
  }

  getSpiele() {
    this.restProvider.getSpieltag()
    .then(data => {
      try {
        let spieltag = data;
        console.log(spieltag);
        this.spiele = spieltag;
      }
      catch(e) {
        console.log(e);
      }
    }, data =>{
      console.log(data);
    });
  }

  test(){
    console.log("list item press")
  }
}
