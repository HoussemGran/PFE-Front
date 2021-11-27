import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css' , ]
})
export class LoginFormComponent implements OnInit {

  loginForm : FormGroup;
 

  constructor(private router : Router , private authService : AuthenticationService) { }

  ngOnInit(): void {

    if(localStorage.getItem('login')){
      this.router.navigate(['/admin'])
    }

    this.loginForm = new FormGroup({
      login: new FormControl(null , Validators.required),
      password: new FormControl(null , Validators.required)    
    }
    )

  }

  auth:string = "";
  error:string = "";

  submit(){
    if(!this.loginForm.valid){
      return;
    }
    else{
      const login = this.loginForm.controls.login.value;
      const password = this.loginForm.controls.password.value

    this.authService.authUser(login,password).subscribe(response=>{
      console.log("response : "+response)
      this.auth = response;
      if(this.auth=="VALID USER Guest"){
        localStorage.setItem("login",login);
        localStorage.setItem('role','guest');
        this.router.navigate(['/guest'])
      }else if(this.auth == "VALID USER Admin"){
        localStorage.setItem("login",login);
        localStorage.setItem('role','admin');
        this.router.navigate(['/admin'])
      }
    },(error)=>{
      console.log("error caught");
      if(error.name == "HttpErrorResponse")
      this.error = "Could not connect to the server";
      throw error;
    } 
    )
    }
  }


}
