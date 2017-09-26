import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{DadosAutorPage} from '../dados-autor/dados-autor';

import{Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private url:string = 'http://localhost:8080';
  public autores: Array<{}>;
  constructor(
    public navCtrl: NavController,
    public http: Http
  ) {
    this.http.get(this.url+'/autores/')
      .map(res => res.json())
      .subscribe(data => {
        this.autores = data;
        console.log(data);
      });
  }

  getAutorInfo(id){
    this.navCtrl.push(DadosAutorPage,{
      'id': id,
      'api_url':this.url
    });
  }
}
