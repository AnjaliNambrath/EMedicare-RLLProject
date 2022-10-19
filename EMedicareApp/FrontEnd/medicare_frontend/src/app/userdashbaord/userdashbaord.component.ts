import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Addtocart } from '../addtocart';
import { AddtocartService } from '../addtocart.service';

@Component({
  selector: 'app-userdashbaord',
  templateUrl: './userdashbaord.component.html',
  styleUrls: ['./userdashbaord.component.css']
})
export class UserdashbaordComponent implements OnInit {
  cart:Array<Addtocart>=[]
  email:string=""
  medid:number=0
  medname:string=""
  price:number=0
  user:string ="";
  medicines:any;
  toggleOn = true;
  cattoggleOn = true;
  cattoggleOn1 = true;
  medicine_name = '';
  searchtoggle = false;
  //category : Array<medicine>;
  //public medicine!: Medicine[];
  constructor( private http:HttpClient,public aa:AddtocartService,public up:AccountService){}

  ngOnInit(): void {
    let obj = sessionStorage.getItem("userDetails");
    if(obj!=null){
      this.user=obj;
  }

  let response = this.http.get("http://localhost:9090/medicine/viewmedall");
      response.subscribe((data)=>{
        this.medicines = data;
        console.log(this.medicines);
        });


  }
  searchMedicine() {
    this.searchtoggle=true;
  }

  addtocart(acart:any){
    let cart = {email:this.user,medid:acart.medid,medname:acart.medname,price:acart.price};
    this.aa.addcart(cart).subscribe({
      next:(result:any)=>{if(result=="Added to Cart"){
        alert("Added to Cart")
      }},
      error:(error:any)=>console.log(error),
      complete:()=>{"completed"   
      }
    })
  }
}
