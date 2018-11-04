import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CrudPage } from '../crud/crud';
import { GeneroPage } from '../genero/genero';
import { PopularidadePage } from '../popularidade/popularidade';
import { LancamentoPage } from '../lancamento/lancamento';
import { FilmePage } from '../filme/filme';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = CrudPage;
  tab5Root = GeneroPage;
  tab6Root = PopularidadePage;
  tab7Root = LancamentoPage;
  tab8Root = FilmePage;

  constructor() {

  }
}
