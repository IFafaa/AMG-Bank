import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TransactionComponent } from './transaction/transaction.component';



const routes: Routes = [
  {

    path: 'card',
    component: CardComponent
  },{
    path:'',
    component: RegistrationComponent

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'landing',
    component: LandingComponent
  },
  {
    path:'transaction',
    component: TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
