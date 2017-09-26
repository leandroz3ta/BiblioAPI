import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Http} from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-dados-autor',
  templateUrl: 'dados-autor.html',
})
export class DadosAutorPage {

public autor:any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http
  ) {
    let url = this.navParams.get('api_url');
    let autor_id = this.navParams.get('id');

      this.http.get(url+'/autores/'+autor_id)
      .map(res => res.json())
      .subscribe(data => {
        this.autor = data;
        console.log(data);
      });

   // alert(url+'/'+autor_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosAutorPage');
  }

}
