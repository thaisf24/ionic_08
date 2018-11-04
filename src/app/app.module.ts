import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CrudPageModule } from '../pages/crud/crud.module';
import { GeneroPageModule } from '../pages/genero/genero.module';
import { PopularidadePageModule } from '../pages/popularidade/popularidade.module';
import { LancamentoPageModule } from '../pages/lancamento/lancamento.module';
import { FilmePageModule } from '../pages/filme/filme.module';
import { DestinoPage } from '../pages/destino/destino';
import { DestinoPageModule } from '../pages/destino/destino.module';
import { Destino1PageModule } from '../pages/destino1/destino1.module';
import { HttpModule } from "@angular/http";
import { MovieProvider } from '../providers/movie/movie';
import {SQLite} from '@ionic-native/sqlite'
import { DatabaseProvider } from '../providers/database/database';
import { ClienteProvider } from '../providers/cliente/cliente';
import { AdicionaClientePage } from '../pages/adiciona-cliente/adiciona-cliente';
import { AdicionaClientePageModule } from '../pages/adiciona-cliente/adiciona-cliente.module';
import { ExibeClientesPage } from '../pages/exibe-clientes/exibe-clientes';
import { AtualizaClientePage } from '../pages/atualiza-cliente/atualiza-cliente';
import { AdicionaFilmePage } from '../pages/adiciona-filme/adiciona-filme';
import { FilmeProvider } from '../providers/filme/filme';
import { ExibeFilmesPage } from '../pages/exibe-filmes/exibe-filmes';
import { AtualizaFilmePage } from '../pages/atualiza-filme/atualiza-filme';

/**
 * Nome: Claudemir Cardoso RA:816155452
 */

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AdicionaClientePage,
    ExibeClientesPage,
    AtualizaClientePage,
    AdicionaFilmePage,
    ExibeFilmesPage,
    AtualizaFilmePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CrudPageModule,
    GeneroPageModule,
    PopularidadePageModule,
    LancamentoPageModule,
    FilmePageModule,
    DestinoPageModule,
    Destino1PageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AdicionaClientePage,
    ExibeClientesPage,
    AtualizaClientePage,
    AdicionaFilmePage,
    ExibeFilmesPage,
    AtualizaFilmePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    SQLite,
    DatabaseProvider,
    ClienteProvider,
    FilmeProvider
  ]
})
export class AppModule {}

/**
 * Nome: Claudemir Cardoso RA:816155452
 */