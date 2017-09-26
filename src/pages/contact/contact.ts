import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import{DadosAutorPage} from '../dados-autor/dados-autor';
import{CadastraAutorPage} from '../cadastra-autor/cadastra-autor';

import{Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  private url:string = 'http://localhost:8080';
  public autores: Array<{}>;
  constructor(
    public navCtrl: NavController,
    public http: Http
  ) {
    /*this.http.get(this.url+'/autores/')
      .map(res => res.json())
      .subscribe(data => {
        this.autores = data;
        console.log(data);
      });*/
      this.http.get(this.url+'/autores/')
        .map(res =>{
          if(res.status < 200 || res.status >= 300){
            throw new Error('Erro ao processar requisição '+res.status);
          }else{
            return res.json()
          }
        }).subscribe(data=>{
          this.autores = data;
          console.log(data);
        })
  }
  getAutorInfo(id){
    this.navCtrl.push(DadosAutorPage,{
      'id': id,
      'api_url':this.url
    });
  }

  cadastraAutor(){
    this.navCtrl.push(CadastraAutorPage);
  }
}
