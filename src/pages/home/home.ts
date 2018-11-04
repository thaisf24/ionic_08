import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdicionaClientePage } from '../adiciona-cliente/adiciona-cliente';
import { ExibeClientesPage } from '../exibe-clientes/exibe-clientes';
import { AdicionaFilmePage } from '../adiciona-filme/adiciona-filme';
import { ExibeFilmesPage } from '../exibe-filmes/exibe-filmes';
import { FilmePage } from '../filme/filme';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  cadastrarFilme() {
    this.navCtrl.push(AdicionaFilmePage);
  }

  exibirFilmes() {
    this.navCtrl.push(ExibeFilmesPage);
  }

  goToTabsFilme (){
    this.navCtrl.push(FilmePage);
  }

}
