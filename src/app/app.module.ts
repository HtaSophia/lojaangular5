import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';

import { ProdutoService } from './produto.service';
import { CarrinhoService } from './carrinho.service';
import { BarraDeNavegacaoComponent } from './barra-de-navegacao/barra-de-navegacao.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const rotas: Routes = [
  { path: 'produtos',
    component: ListaProdutosComponent
  },
  { path: 'produtos/:id',
    component: DetalheProdutoComponent 
  },
  { path: 'carrinho',
    component: CarrinhoComponent
  },
  { path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    DetalheProdutoComponent,
    BarraDeNavegacaoComponent,
    RodapeComponent,
    PaginaNaoEncontradaComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    ProdutoService,
    CarrinhoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
