import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  productRef= new FormGroup({
    medid:new FormControl(),
    medname:new FormControl(),
    price:new FormControl(),
    description:new FormControl(),
    seller:new FormControl(),
    category:new FormControl(),
    medimg:new FormControl(),
    
  });
products:Array<Medicine>=[];
  updateMsg: string = ""
  medid: number = 0;
  price: number = 0;
  medname: String = "";
  description: String = "";
  seller: String= "";
  category: String = "";
  medimg: String = "";
showAdd !: boolean;
 constructor(private router: Router, private med : MedicineService) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  clickAddMedicine()
  {
   this.showAdd= true;
  }
  loadProducts(): void {
    this.med.loadProductDetails().subscribe(res => this.products = res
    );
    console.log('pro', this.products)
  }
  

  storeProduct()
  {
    let product=this.productRef.value;
    this.med.storeMedicine(product).subscribe({
        next:(data:any)=>console.log(data),
        error:(error:any)=>console.log(error),
      })
      alert("Product added Successfully");
      this.productRef.reset();
    }
    deleteMedicine(medid:number){
      //console.log(pid)
      this.med.deleteMedicineById(medid).subscribe({
        next:(result:any)=>console.log(result),
        error:(error:any)=>console.log(error),
        complete:()=>{
            this.loadProducts();   
        }
      })
    }

  clickShowMedicine(){
    this.router.navigate(['/update']);
    
  }
  updateProduct(product: Medicine) {
    console.log(product);
    this.medid = product.medid;
    this.price = product.price;
    this.category = product.category;
    this.medname = product.medname;
    this.medimg = product.medimg;
    this.description=product.description;
    this.seller=product.seller;
  }
  updateProductDetails() {
    let product = { "medid": this.medid, "price": this.price, "medname": this.medname, "description": this.description, 
    "seller":this.seller,"category": this.category, "medimg": this.medimg }
    console.log(product);
    this.med.updateMedicine(product).subscribe(result => this.updateMsg = result, error => console.log(error),
      () => {
        this.loadProducts();
        alert("Product Updated Successfully");
      })
  }
}
 




  