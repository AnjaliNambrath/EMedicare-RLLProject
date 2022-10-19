import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  myprofile:any
  email:string=""
  name:string=""
  mobile:number=0
  password:string=""
  constructor(public up:AccountService,public router:Router) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("userDetails");
    if(obj!=null){
      this.email=obj;
    }
    this.viewmyprofile(this.email);
  }
  back(){
    // this.router.navigate(['/userpage'], {relativeTo: this.route});
     return this.router.navigate(['/userHome']);
   }

  updateProf(account:any){
    this.email=account.email;
    this.name=account.name;
    this.mobile=account.mobile;
    this.password=account.password;
  }

  updatePass(account:any){
    this.password=account.password;
  }

  viewmyprofile(email:string){
    this.up.viewProfile(this.email).subscribe({
      next:(result:any)=>this.myprofile=JSON.parse(result),
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
      
    })
    
  }

  saveUpdateprofile(){
    let account = {email:this.email,name:this.name,mobile:this.mobile,password:this.password}
    this.up.updateProfile(account).subscribe({
      next:(result:any)=>this.myprofile=result,
      error:(error:any)=>console.log(error),
      complete:()=>{
        this.viewmyprofile(this.email);
        alert("Your Profile Updated Successfully!!!");
      }
    })
  }

  saveUpdatepassword(){
    let account = {email:this.email,password:this.password}
    this.up.updatePassword(account).subscribe({
      next:(result:any)=>console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=>{alert("Your Password Updated Successfully!!!");   
      }
      
    })
  }

}
