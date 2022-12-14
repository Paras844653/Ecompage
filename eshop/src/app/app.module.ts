import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginerrorComponent } from './loginerror/loginerror.component';
import { FormsModule } from '@angular/forms';
import {ShopindexComponent} from './shopindex/shopindex.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoginerrorComponent,
    ShopindexComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ShopindexComponent]
})
export class AppModule { }
