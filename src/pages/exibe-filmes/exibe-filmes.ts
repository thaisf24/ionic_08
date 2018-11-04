import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Filme } from '../../modelo/filme';
import { FilmeProvider } from '../../providers/filme/filme';
import { AtualizaFilmePage } from '../atualiza-filme/atualiza-filme';


/**
 *
 * Nome: Claudemir Cardoso RA:816155452
 */

@IonicPage()
@Component({
  selector: 'page-exibe-filmes',
  templateUrl: 'exibe-filmes.html',
})
export class ExibeFilmesPage {

  public filmes: Filme[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public filmeProvider: FilmeProvider,
   // public toastCtrl: ToastController
    ) {
      this.filme = this.navParams.data;
  }
  public filme: Filme;

  ionViewDidLoad() {
    this.filmeProvider.listar().
    then((filmes: Filme []) =>{
    this.filmes = filmes;
    });
    }

  apagaFilme(filme: Filme) {
    this.filmeProvider.apagar(filme);
    this.exibirToast("Filme apagado com sucesso");
    //para atualizar alista que está sendo exibida
    this.filmeProvider.listar().
      then((filmes: Filme[]) => {
        this.filmes = filmes;
      });
  }
  exibirToast(arg0: string): any {
    throw new Error("Method not implemented.");
  }

  atualizaFilme (filme: Filme){
    this.navCtrl.push(AtualizaFilmePage, filme);
    }

}
