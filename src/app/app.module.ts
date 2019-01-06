import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';


import {UserServService} from './user-serv.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { Navbar1Component } from './ecommerce/navbar1/navbar1.component';
import { Navbar2Component } from './ecommerce/navbar2/navbar2.component';
import { BodyComponent } from './ecommerce/body/body.component';
import { Body2Component } from './ecommerce/body2/body2.component';
import { Body3Component } from './ecommerce/body3/body3.component';
import { Body4Component } from './ecommerce/body4/body4.component';
import { Body5Component } from './ecommerce/body5/body5.component';
import { LoginComponent } from './ecommerce/login/login.component';
import { RegisterComponent } from './ecommerce/register/register.component';
import { HomeComponent } from './ecommerce/home/home.component';
import { NotfoundComponent } from './ecommerce/notfound/notfound.component';
import { BagsComponent } from './ecommerce/bags/bags.component';
import { DetailsComponent } from './ecommerce/details/details.component';
import { Register2Component } from './ecommerce/register2/register2.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bags', component: BagsComponent },
  { path: 'details', component: DetailsComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    Navbar1Component,
    Navbar2Component,
    BodyComponent,
    Body2Component,
    Body3Component,
    Body4Component,
    Body5Component,
    LoginComponent,
    RegisterComponent,
    
    HomeComponent,
    
    NotfoundComponent,
    
    BagsComponent,
    
    DetailsComponent,
    
    Register2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [ RouterModule ],
  providers: [UserServService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
