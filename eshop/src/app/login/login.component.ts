import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  LoginClick(userdetails:any){
    if(userdetails.UserId=='admin@gmail.com' && userdetails.Password=='Abcd@1234') {
       this.router.navigate(['home']);
    } else {
       this.router.navigate(['loginerror']);
    }
 }
}
