import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsDetailPage } from '../../pages/newsDetail/newsDetail';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  news : any;
  newsPicture : any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getNews();
  }

  getNews() {
    this.restProvider.getNews()
    .then(data => {
      try {
        var news = data;
        console.log(news);
        for(var i = 0; i < news.length; i++){
          news[i].content.rendered = news[i].content.rendered.replace(/<\/?[^>]+(>|$)/g, "");
        }
        
        console.log(news);
        this.news = news;
      }
      catch(e) {
        console.log(e);
      }
    }, data =>{
      console.log(data);
    });
  }

  newsDetail(par) {
    console.log("NewsDetail clicked");
    console.log(par);
    this.navCtrl.push(NewsDetailPage, {
      id: par
    });
  }

  getNewsPicture(featured_media){
    this.restProvider.getNewsPicture(featured_media)
    .then(data => {
      try {
        let newsPicture = data;
        console.log(newsPicture.guid.rendered);
        this.newsPicture = newsPicture;

      }
      catch(e) {
        console.log(e);
      }
    }, data =>{
      console.log(data);
    });
  }

}
