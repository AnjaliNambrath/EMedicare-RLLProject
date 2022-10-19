import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashbaordComponent } from './userdashbaord/userdashbaord.component';
import { AddcartComponent } from './addcart/addcart.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    UserdashbaordComponent,
    AddcartComponent,
    ViewcartComponent,
    OrdersummaryComponent,
    PaymentComponent,
    UpdateprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
