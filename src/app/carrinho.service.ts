import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable()
export class CarrinhoService {
  produtos: Produto[] = [];

  constructor() {
    if (localStorage.getItem('carrinho')) {
      this.produtos = <Produto[]>JSON.parse(localStorage.getItem('carrinho'));
    }
  }

  adicionar(produto: Produto) {
    this.produtos.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(this.produtos));
  }

  getProdutos(): Produto[] {
    return this.produtos;
  }

}
