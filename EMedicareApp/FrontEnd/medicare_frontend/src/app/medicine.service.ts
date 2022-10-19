import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { medicine } from './medicine';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private apiServerUrl = "";

  constructor(private http: HttpClient) { }

  public getMedicines() : Observable<medicine>{
    return this.http.get<medicine>('${this.apiServerUrl}/medicine/all');
  }

  storeMedicine(product:any):Observable<Medicine>{
    return this.http.post<Medicine>("http://localhost:9090/medicine/storeMedicine", product)
  }
   

  updateMedicine(product: any): Observable<string> {
    return this.http.patch("http://localhost:9090/medicine/updateMedicine", product, { responseType: 'text' })
  }


  loadProductDetails(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>("http://localhost:9090/medicine/")
  }
  deleteMedicineById(medid:number):Observable<string> {
    return this.http.delete("http://localhost:9090/medicine"+"/"+medid,{responseType:"text"});
  }
}
