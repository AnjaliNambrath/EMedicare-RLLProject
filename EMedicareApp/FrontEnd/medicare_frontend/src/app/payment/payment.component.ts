import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddtocartService } from '../addtocart.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public as:AddtocartService,public router:Router) { }
  email:string=""
  msg:string=""
  ngOnInit(): void {
    let obj = sessionStorage.getItem("userDetails");
    if(obj!=null){
      this.email=obj;
    }
  }

  back(){
    // this.router.navigate(['/userpage'], {relativeTo: this.route});
     return this.router.navigate(['/userHome']);
   }
   deletecart(email:string){
    //console.log(pid)
    this.as.delCart(email).subscribe({
      next:(result:any)=>this.msg=result,
      error:(error:any)=>console.log(error),
      complete:()=>{
        this.router.navigate(["/userHome"]);
        alert(" Your Order Placed Successfully, You Will Receive Your Order In 2 to 3 Working Days, Happy shopping !!");   
      }
    })
  }
}

