import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Genero } from '../../model/model_filme';


@IonicPage()
@Component({
  selector: 'page-destino1',
  templateUrl: 'destino1.html',
})
export class Destino1Page {

  genero: Genero;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.genero = this.navParams.get("generoSelecionado");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Destino1Page');
  }

}
