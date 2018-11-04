import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Cliente } from '../../modelo/cliente';
import { ClienteProvider } from '../../providers/cliente/cliente';
import { AtualizaClientePage } from '../atualiza-cliente/atualiza-cliente';

/**
 * 
 * Nome: Claudemir Cardoso RA:816155452
 *
 */

@IonicPage()
@Component({
  selector: 'page-exibe-clientes',
  templateUrl: 'exibe-clientes.html',
})
export class ExibeClientesPage {

  public clientes: Cliente[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public clienteProvider: ClienteProvider,
    public toastCtrl: ToastController
    ) {
      this.cliente = this.navParams.data;
  }
  public cliente: Cliente;
  
  ionViewDidLoad() {
    this.clienteProvider.listar().then((clientes: Cliente[]) => {
        this.clientes = clientes;
      });
  }

  apagaCliente(cliente: Cliente) {
    this.clienteProvider.apagar(cliente);
    this.exibirToast("Cliente apagado com sucesso");
    //para atualizar alista que está sendo exibida
    this.clienteProvider.listar().
      then((clientes: Cliente[]) => {
        this.clientes = clientes;
      });
  }
  exibirToast(arg0: string): any {
    throw new Error("Method not implemented.");
  }

  atualizaCliente (cliente: Cliente){
    this.navCtrl.push(AtualizaClientePage, cliente);
    }

}