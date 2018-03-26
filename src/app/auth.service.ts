import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/shareReplay';
import * as moment from 'moment';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(email: string, password: string ) {
    let url = 'http://localhost:9000/auth';
    let access_token = 'olEYFHW9FdaOXAUFdvJ5VkWZIlHTeU7f';

    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(`${email}:${password}`));
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(url, {access_token}, new RequestOptions({headers: headers}))
        .do(res => this.iniciaSessao)
        .shareReplay();
  }

  private iniciaSessao(authResult) {
    const expiraEm = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('token', authResult.idToken);
    localStorage.setItem('expira_em', JSON.stringify(expiraEm.valueOf()) );

    console.log('Fiz login', authResult);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expira_em');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
      const expiration = localStorage.getItem('expira_em');
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }
}