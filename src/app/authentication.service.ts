import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
const API = 'https://conduit.productionready.io/api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }
  
  userSignup(req: any) {
    return this.http.post(API + '/users', req).pipe(mergeMap(res => {
      return of(res);
    }));
  }
  
  userLogin(req: any){
    return this.http.post(API + '/users/login', req).pipe(mergeMap(res => {
      return of(res);
    }));
  }
  // userLogin(data: any) : Observable<any>  {
  //   return this.httpobj.post('http://localhost:8089/api/v1/auth/login', data);
  // }
  setBearerToken(token: any) {
    sessionStorage.setItem('token', token);
  }
  getBearerToken(): any {
    return sessionStorage.getItem('token');
  }
}
