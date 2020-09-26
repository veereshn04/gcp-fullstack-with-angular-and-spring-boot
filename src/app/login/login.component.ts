import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='javahangout'
  password=''
  errorMessage='Invalide Credentials'
  invalidLogin=false


  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username)
    // console.log(this.password)

    //if(this.username==='in28minutes' && this.password==='dummy'){
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
  }

}
