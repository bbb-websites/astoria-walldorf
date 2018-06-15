import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-newsDetail',
  templateUrl: 'newsDetail.html'
})
export class NewsDetailPage {

  newsDetail : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider, private navParams: NavParams) {
    let id = navParams.get('id');
    this.getNewsDetail(id);
  }

  getNewsDetail(id) {
    this.restProvider.getNewsDetail(id)
    .then(data => {
      try {
        this.newsDetail = data;
        console.log(this.newsDetail);
      }
      catch(e) {
        console.log(e);
      }
    }, data =>{
      console.log(data);
    });
  }

}
