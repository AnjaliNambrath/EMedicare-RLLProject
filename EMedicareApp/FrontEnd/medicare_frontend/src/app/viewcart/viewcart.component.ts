import { Component, OnInit } from '@angular/core';
import { Addtocart } from '../addtocart';
import { AddtocartService } from '../addtocart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  email:string=""
  msg:string=""
  items:Array<Addtocart>=[]
  constructor(public as:AddtocartService,public router:Router) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("userDetails");
    if(obj!=null){
      this.email=obj;
    }
    this.viewCart(this.email);
  }

  viewCart(email:string){
    this.as.viewmyCart(this.email).subscribe({     
      next:(result:any)=>this.items=JSON.parse(result),
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
      
    })
    
  }
  back(){
    // this.router.navigate(['/userpage'], {relativeTo: this.route});
     return this.router.navigate(['/userHome']);
   }

  bill(email:string){
    this.as.totalbill(this.email).subscribe({     
      next:(result:any)=>sessionStorage.setItem("total",result),
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
      
    })
    
  }

  deleteItem(medid:number,email:string){
    //console.log(pid)
    this.as.delRequest(medid,email).subscribe({
      next:(result:any)=>this.msg=result,
      error:(error:any)=>console.log(error),
      complete:()=>{
          this.viewCart(email);   
      }
    })
  }

}
