import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  
/**
 * Nome: Claudemir Cardoso RA:816155452
 *
*/
@Injectable()
export class DatabaseProvider {

  constructor(private db : SQLite) {
  }
  openDatabase (){
  return this.db.create ({
  name:"filmes.db",
  location: "default"
  });
  }

  createDatabase (){
    return this.openDatabase ().
    then((db: SQLiteObject) =>{
    this.createTabelaFilmes(db);
    });
    }

    createTabelaFilmes (db: SQLiteObject){
    let sql: string = "CREATE TABLE IF NOT EXISTS filme (id INTEGER PRIMARY KEY AUTOINCREMENT, " +
    " nome VARCHAR (200), lancamento VARCHAR(200), popularidade VARCHAR(200))";
    db.executeSql (sql);//{poderia conter parâmetros, por isso o {}}
    }

}
