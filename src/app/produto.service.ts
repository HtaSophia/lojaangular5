import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/from';

import { Produto } from './produto';
import { PRODUTOS } from './mock/produtos';

@Injectable()
export class ProdutoService {
  constructor(private http: Http) { }

  getProdutos(): Observable<Produto[]> {
    return Observable.from([PRODUTOS]);
  }

  getProduto(id: number): Observable<Produto> {
    return Observable.from([PRODUTOS[id]]);
  }

  getFotos(nome: string): Observable<Produto[]> {
    var url = `/api/services/feeds/photos_public.gne?tags=${nome}&format=json&nojsoncallback=1`;

    return this.http.get(url)
      .map((response: Response) => {
        var dados: any = response.json();
        return dados.items.map((item) => {
          return {
            titulo: item.title,
            descricao: item.description,
            foto: item.media.m
          };
        });
      })
      .do(dados => console.log('Dados retornados: ' + JSON.stringify(dados)))
      .catch(this.trataErro);
  }

  private trataErro(erro: Response) {
    console.error(erro);
    return Observable.throw(erro.json().error || 'Erro no servidor');
  }
}
