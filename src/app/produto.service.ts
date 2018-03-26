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
    var url = `http://localhost:9000/produtos`;

    return this.http.get(url)
      .map((response: Response) => {
        var dados: any = response.json();
        return dados.map((item) => {
          return this.mapeiaProduto(item);
        });
      })
      .do(dados => console.log('Dados retornados: ' + JSON.stringify(dados)))
      .catch(this.trataErro);
  }

  getProduto(id: string): Observable<Produto> {
    var url = `http://localhost:9000/produtos/${id}`;

    return this.http.get(url)
      .map((response: Response) => {
        var item: any = response.json();        
        return this.mapeiaProduto(item);
      })
      .do(dados => console.log('Dados retornados: ' + JSON.stringify(dados)))
      .catch(this.trataErro);    
  }

  private trataErro(erro: Response) {
    console.error(erro);
    return Observable.throw(erro.json().error || 'Erro no servidor');
  }

  private mapeiaProduto(item: any): Produto {
    return {
      id: item.id,
      titulo: item.nome,
      descricao: item.descricao,
      foto: item.foto,
      preco: item.preco
    };
  }
}
