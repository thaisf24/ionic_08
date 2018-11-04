import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FilmeProvider } from '../../providers/filme/filme';
import { Filme } from '../../modelo/filme';

/**
 * Nome: Claudemir Cardoso RA:816155452
 *
 */

@IonicPage()
@Component({
  selector: 'page-atualiza-filme',
  templateUrl: 'atualiza-filme.html',
})
export class AtualizaFilmePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public filmeProvider: FilmeProvider,
    public toastCtrl: ToastController) {
  }
  
  public filme: Filme;

  public atualizaFilme() {
    this.filmeProvider.atualizar(this.filme).
      then(
        () => {
          this.exibirToast("Filme atualizado com sucesso");
          this.navCtrl.pop();
        }
      );
  }

  exibirToast(dados) {
    let t = this.toastCtrl.create({
      message: dados,
      duration: 3000,
      position: "top"
    });
    t.present();
  }

}
