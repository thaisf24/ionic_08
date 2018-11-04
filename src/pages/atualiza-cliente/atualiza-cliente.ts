import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { Cliente } from '../../modelo/cliente';

/**
 * Nome: Claudemir Cardoso RA:816155452
 *
 */

@IonicPage()
@Component({
  selector: 'page-atualiza-cliente',
  templateUrl: 'atualiza-cliente.html',
})
export class AtualizaClientePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public clienteProvider: ClienteProvider,
    public toastCtrl: ToastController) {
  }
  
  public cliente: Cliente;

  public atualizaCliente() {
    this.clienteProvider.atualizar(this.cliente).
      then(
        () => {
          this.exibirToast("Cliente atualizado com sucesso");
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