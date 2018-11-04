import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { Cliente } from '../../modelo/cliente';
import { SQLiteObject } from '@ionic-native/sqlite';

/*
 
/**
 * Nome: Claudemir Cardoso RA:816155452
 *
*/
@Injectable()
export class ClienteProvider {

  constructor(private dbProvider: DatabaseProvider) {
  }
  public inserir(cliente: Cliente) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "INSERT INTO cliente (nome, fone, email) VALUES (?, ?, ?)";
        let parametros = [cliente.nome, cliente.fone, cliente.email];
        return db.executeSql(sql, parametros).
          catch((e) => {
            console.log(e);
          });
      }).catch((e) => {
        console.log(e);
      });
  }

  public listar() {
    //abre a base
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        //faz o select
        let sql = "SELECT * FROM cliente";
        return db.executeSql(sql, []).
          then((data: any) => {
            //se tiver alguma linha na tabela
            if (data.rows.length > 0) {
              let clientes: Cliente[] = [];
              //pega cada linha e coloca num vetor
              for (let i = 0; i < data.rows.length; i++) {
                clientes.push(data.rows.item(i));
              }
              return clientes;
            }
            else
              //devolve vetor vazio se a tabela estiver vazia
              return [];
          });
      }).catch((e) => {
        console.log(e);
      });
  }

  public apagar(cliente: Cliente) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "DELETE FROM cliente WHERE id = ?";
        //será colocado no lugar do ?
        let param = [cliente.id];
        return db.executeSql(sql, param);
      });
  }

  public atualizar(cliente: Cliente) {
    return this.dbProvider.openDatabase().
      then((db: SQLiteObject) => {
        let sql = "UPDATE cliente SET nome = ?, fone = ?, email = ? WHERE id = ?";
        let param = [cliente.nome, cliente.fone, cliente.email, cliente.id];
        return db.executeSql(sql, param);
      });
  }
  
}
