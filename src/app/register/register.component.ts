import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddUserService } from '../Services/addUser/add-user.service';
import { UserService } from '../Services/user/user.service';
import { ConfirmedValidator } from './ConfirmValidator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm : FormGroup;
  nameRegx = /[a-zA-Z]{2,}$/;
  emailRegx = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  
  constructor(private formBuilder : FormBuilder , private router : Router ,
 private userService : UserService) { }

    

  ngOnInit(): void {


    this.loginForm = this.formBuilder.group({
      login: ['',Validators.required],
      password:['',[Validators.required , Validators.minLength(5)]],
      confirmPassword:['',[Validators.required]],
      firstName:['',[Validators.required , Validators.pattern(this.nameRegx)]],
      lastName:['',[Validators.required , Validators.pattern(this.nameRegx)]],
      email:['',[Validators.required , Validators.pattern(this.emailRegx)]]

    }, {validator : ConfirmedValidator('password','confirmPassword')}
    )
      
  }


  submit(){
    
    if(!this.loginForm.valid){
      return;
    }else{
      
      this.userService.createUser(this.loginForm.value).subscribe(response=>{
        if(response){ 
          console.log(this.loginForm.value.login);
          localStorage.setItem('register',this.loginForm.value.login)
          localStorage.setItem('login',this.loginForm.value.login)
          localStorage.setItem('role','guest')
    
          this.router.navigate(['/guest'])  
            
        }
        else console.log("failed to adding user");
      
      })
      
      
      
    }
  
  }
  
}
