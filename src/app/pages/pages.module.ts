import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { NavBarComponent } from './nav-bar-buttom/nav-bar.component';
import { TransactionTesteComponent } from './transaction-teste/transaction-teste.component';
import { TransactionComponent } from './transaction/transaction.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    LoginComponent,
    LandingComponent,
    TransactionComponent,
    NavBarComponent,
    TransactionTesteComponent,
    NavBarTopComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
