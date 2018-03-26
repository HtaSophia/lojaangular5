import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { AreaInternaComponent } from './area-interna/area-interna.component';
import { BarraDeNavegacaoComponent } from './barra-de-navegacao/barra-de-navegacao.component';
import { RodapeComponent } from './rodape/rodape.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

import { ProdutoService } from './produto.service';
import { CarrinhoService } from './carrinho.service';
import { AuthService } from './auth.service';

import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

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
  { path: 'login',
    component: LoginComponent
  },
  { path: 'interna',
    component: AreaInternaComponent,
    canActivate: [AuthGuard]
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
    CarrinhoComponent,
    AreaInternaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
    ProdutoService,
    CarrinhoService,
    AuthService,
    AuthGuard // Como uma Guard é Injectable, tem que estar aqui também
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
