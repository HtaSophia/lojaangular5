import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable()
export class CarrinhoService {
  produtos: Produto[] = [];

  constructor() { }

  adicionar(produto: Produto) {
    this.produtos.push(produto);
  }

  getProdutos(): Produto[] {
    return this.produtos;
  }

}
