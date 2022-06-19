import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { TransactionComponent } from './transaction/transaction.component';



const routes: Routes = [
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
