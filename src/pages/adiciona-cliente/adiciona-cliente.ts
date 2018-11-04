import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Cliente } from '../../modelo/cliente';
import { ClienteProvider } from '../../providers/cliente/cliente';


/**
 * Nome: Claudemir Cardoso RA:816155452
 *
 */
@IonicPage()
@Component({
  selector: 'page-adiciona-cliente',
  templateUrl: 'adiciona-cliente.html',
})

export class AdicionaClientePage {

  public cliente: Cliente;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public clienteProvider: ClienteProvider,
    private toastCtrl: ToastController) {
    this.cliente = new Cliente();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionaClientePage');
  }

  cadastraCliente(){
    this.clienteProvider.inserir(this.cliente);
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
