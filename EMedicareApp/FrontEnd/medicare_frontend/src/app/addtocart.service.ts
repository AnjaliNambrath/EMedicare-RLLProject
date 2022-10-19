import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
  baseUrl:string ="http://localhost:9090/cart"
  constructor(public http:HttpClient) { }

  addcart(addcart:any):Observable<string> {
    return this.http.post(this.baseUrl+"/addcart",addcart,{responseType:"text"});
  }

  viewmyCart(email:string):Observable<string> {
    return this.http.get(this.baseUrl+"/orderSummary/"+email,{responseType:"text"});
  }

  totalbill(email:string):Observable<string> {
    return this.http.get(this.baseUrl+"/totalbill/"+email,{responseType:"text"});
  }

  delRequest(medid:number,email:string):Observable<string> {
    return this.http.delete(this.baseUrl+"/deleteItem/"+medid+"/"+email,{responseType:"text"});
  }
  delCart(email:string):Observable<string> {
    return this.http.delete(this.baseUrl+"/deleteCart/"+email,{responseType:"text"});
  }
}
