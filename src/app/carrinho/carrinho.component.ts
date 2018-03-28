import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Produto } from '../produto';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produtos: Produto[] = [];
  total: number = 0;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.produtos = this.carrinhoService.getProdutos();
    this.total = 0;
    this.produtos.forEach(p => this.total += p.preco);
  }

  detalhe(produto: Produto) {
    this.router.navigate(['/produtos', produto.id]);
  }
}
