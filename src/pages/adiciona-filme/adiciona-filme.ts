import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FilmeProvider } from '../../providers/filme/filme';
import { Filme } from '../../modelo/filme';


/**
*
 * Nome: Claudemir Cardoso RA:816155452
 */

@IonicPage()
@Component({
  selector: 'page-adiciona-filme',
  templateUrl: 'adiciona-filme.html',
})
export class AdicionaFilmePage {

  public filme: Filme;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public filmeProvider: FilmeProvider,
    private toastCtrl: ToastController) {
    this.filme = new Filme();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaFilmePage');
  }

  cadastraFilme(){
    this.filmeProvider.inserir(this.filme);
    this.navCtrl.pop();
    }

    exibirToast (dados){
      let t = this.toastCtrl.create ({
      message: dados,
      duration: 3000,
      position: "top"
      });
      t.present();
      }
      
}
