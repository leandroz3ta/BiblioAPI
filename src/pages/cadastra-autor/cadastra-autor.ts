import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@IonicPage()
@Component({
  selector: 'page-cadastra-autor',
  templateUrl: 'cadastra-autor.html',
})
export class CadastraAutorPage {

    selectedItem: any;
   public autor = {
      nome: "",
      sexo: ""
    };

      private url:string = 'http://localhost:8080';
      private headers = new Headers({'Content-Type': 'application/json'});

  constructor( 
              public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http
            ) {
              
  }

saveAutor(autor){
  console.log('Iniciando registro...');
    let header = new Headers();
        header.append('Content-Type', 'application/json');

    let options = new RequestOptions({headers: header});

    this.http.post(this.url+'/autores', autor, options)
              .map(res => {res.json()}).subscribe(data => console.log(header));
    //console.log(autor);
  
  /*saveAutor(autor){
    let header = new Headers();
        header.append('Content-Type', 'application/json');

    let options = new RequestOptions({headers: header});

    this.http.post(this.url+'/autores', autor, options)
              .map(res => {res.json()})
              .subscribe(data => console.log(data));
    console.log(autor);*/

   /* this.http.post(this.url+'/autores', autor, options)
              .map(res => {
                if(res.status < 200 || res.status >= 300){
                  throw new Error('Erro ao processar requisição: '+res.status);
                }else{
                  return res.json();

                }
              }).subscribe(
                (data => console.log(data)));*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraAutorPage');
  }

}
