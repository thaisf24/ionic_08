import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * 
 * Nome: Claudemir Cardoso RA:816155452
 */

@IonicPage()
@Component({
  selector: 'page-popularidade',
  templateUrl: 'popularidade.html',
  providers: [
    MovieProvider
  ]
})
export class PopularidadePage {

  public popularidades = new Array<any>();

  constructor(public navCtrl: NavController, private movieProvider: MovieProvider) {
    
  }

  ionViewDidLoad() {
    this.movieProvider.getPopularMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.popularidades = objeto_retorno.results;
        console.log(objeto_retorno);
      }, error => {
        console.log(error);
      }
    )
  }
}
