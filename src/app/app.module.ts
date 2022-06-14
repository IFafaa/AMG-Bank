import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
// import { LandingComponent } from './pages/landing/landing.component';
// import { LoginComponent } from './pages/login/login.component';
// import { TransactionComponent } from './pages/transaction/transaction.component';


@NgModule({
  declarations: [
    AppComponent,
    // LandingComponent,
    // LoginComponent,
    // TransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
