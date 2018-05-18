import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  heim: any;
  aus: any;
  heimImg: any;
  ausImg: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getUsers();
  }

  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.heim = data.Team1.TeamName;
      this.heimImg = data.Team1.TeamIconUrl;
      this.aus = data.Team2.TeamName;
      this.ausImg = data.Team2.TeamIconUrl;
    });
  }

}
