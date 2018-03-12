import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {
  private produto: Produto;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private produtoService: ProdutoService,
              private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.produtoService.getProduto(+params.get('id'))
    ).subscribe(p => this.produto = p);
  }

  comprar(produto: Produto) {
    this.carrinhoService.adicionar(produto);
    this.router.navigate(['/carrinho']);
  }
  
}
