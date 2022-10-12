import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublicdataComponent } from './publicdata/publicdata.component';
import { HomeComponent } from './home/home.component';






const appRoutes:Routes=[
  {
    path:"",component:HomeComponent
  },
  {
    path:"view",component:PublicdataComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PublicdataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
