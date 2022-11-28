import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { LoginerrorComponent } from './loginerror/loginerror.component';

import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  
  {path: "loginerror", component: LoginerrorComponent},
  {path: "", component: LoginComponent},
  {path: "**", component: NotfoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
