import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseURL:string ="http://localhost:9090/login";
  constructor(public http:HttpClient) { }

  signIn(account:any):Observable<string> {
    return this.http.post(this.baseURL+"/signIn",account,{responseType:"text"});
  }

  updatePassword(account: any): Observable<string> {
    return this.http.patch(this.baseURL+"/updatepswd", account, { responseType: 'text' })
  }

  updateProfile(account: any): Observable<string> {
    return this.http.patch(this.baseURL+"/updateProfile", account, { responseType: 'text' })
  }

  
  signUp(account:any):Observable<string> {
    return this.http.post(this.baseURL+"/signUp",account,{responseType:"text"});
  }
  viewProfile(email:string):Observable<string> {
    return this.http.get(this.baseURL+"/profile/"+email,{responseType:"text"});
  }
}
