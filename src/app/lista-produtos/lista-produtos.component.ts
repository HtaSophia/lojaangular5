import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'lista-de-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  produtos: Observable<Produto[]>;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private produtoService: ProdutoService, 
              private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.produtos = this.produtoService.getProdutos();
  }

  comprar(produto: Produto) {
    this.carrinhoService.adicionar(produto);
    this.router.navigate(['/carrinho']);
  }
}
