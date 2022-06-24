import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { TransactionTesteComponent } from './transaction-teste/transaction-teste.component';
import { TransactionComponent } from './transaction/transaction.component';
import { NavBarComponent } from './components/nav-bar-buttom/nav-bar.component';
import { NavBarTopComponent } from './components/nav-bar-top/nav-bar-top.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    LoginComponent,
    LandingComponent,
    TransactionComponent,
    NavBarComponent,
    TransactionTesteComponent,
    NavBarTopComponent,
    CardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
