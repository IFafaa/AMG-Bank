import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { TransactionComponent } from './transaction/transaction.component';


@NgModule({
  declarations: [
    LoginComponent,
    LandingComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
